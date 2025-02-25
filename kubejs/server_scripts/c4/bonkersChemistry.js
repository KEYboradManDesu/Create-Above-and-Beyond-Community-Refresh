
global.cachedSeed = undefined
global.cachedAlchemyData = {}

const SILICON = "kubejs:substrate_silicon";
const SILVER = "kubejs:substrate_silver";

function colourMap(c) {
    switch (c) {
        case "white": return [255, 255, 255]
        case "orange": return [255, 150, 0]
        case "magenta": return [255, 39, 255]
        case "light_blue": return [170, 202, 255]

        case "yellow": return [255, 255, 0]
        case "lime": return [160, 255, 0]
        case "pink": return [255, 109, 183]
        case "gray": return [127, 127, 127]

        case "light_gray": return [223, 223, 223]
        case "cyan": return [0, 205, 205]
        case "purple": return [140, 0, 255]
        case "blue": return [29, 29, 255]

        case "brown": return [119, 59, 0]
        case "green": return [12, 203, 0]
        case "red": return [244, 22, 9]
        default: return [47, 47, 47]
    }
}

function shuffle(array, random) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = random.nextInt(i + 1);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

function attackNearby(level, x, y, z) {
    let entities = level.getEntitiesWithin(AABB.of(x - 3, y - 3, z - 3, x + 3, y + 3, z + 3))

    for (let e of entities)
        if (e.isLiving())
            e.attack(1);
}

// 镭射加工 0=invalid, 1=valid, 2=processFail
function laserRecipe(level, hopperCart, nbt) {
    let validTool = undefined
    let toProcess = undefined
    let processAmount = 0
    let staff = 'ae2:charged_staff'
    let magnet = 'thermal:flux_magnet'
    let entropy = 'ae2:entropy_manipulator'

    for (let e of nbt.Items) {
        if (e.id.startsWith(magnet) || e.id.startsWith(staff) || e.id.startsWith(entropy)) {
            if (validTool) return 0;
            validTool = e
            continue;
        }
        if (toProcess && toProcess != e.id) return 0;
        toProcess = e.id
        processAmount += e.Count
    }

    if (validTool == null || toProcess == null) return 0;
    // console.log(`validTool=${validTool} toProcess=${toProcess}`);

    let resultItem = undefined
    let particle = "effect"

    if (validTool.id.startsWith(magnet)) {
        if (!toProcess.equals("minecraft:basalt")) return 0;
        let ce = validTool.tag.getInt("Energy") - 80 * processAmount
        if (ce < 0) return 2;
        validTool.tag.Energy = ce
        resultItem = "thermal:basalz_rod"
        particle = "flame"
    } else {
        let cp = validTool.tag.getDouble("internalCurrentPower");
        if (Number.isNaN(cp) || cp < 1) return 2;
        if (validTool.id.startsWith(staff)) {
            if (!toProcess.equals("kubejs:smoke_mote")) return 0
            cp -= 40 * processAmount;
            resultItem = "thermal:blitz_rod"
            particle = "firework"
        } else if (validTool.id.startsWith(entropy)) {
            if (!toProcess.equals("minecraft:snowball")) return 0
            cp -= 80 * processAmount;
            resultItem = "thermal:blizz_rod"
            particle = "spit"
        }
        if (cp < 0) return 2;
        validTool.tag.internalCurrentPower = cp;
    }

    if (!resultItem) return 0

    level.server.runCommandSilent(`/particle minecraft:flash ${hopperCart.x} ${hopperCart.y + .5} ${hopperCart.z} 0 0 0 .01 1`)
    level.server.runCommandSilent(`/particle ae2:matter_cannon_fx ${hopperCart.x} ${hopperCart.y + .5} ${hopperCart.z}`)
    level.server.runCommandSilent(`/particle minecraft:${particle} ${hopperCart.x} ${hopperCart.y + .5} ${hopperCart.z} .65 .65 .65 0 10`)
    level.server.runCommandSilent(`/playsound minecraft:block.enchantment_table.use block @a ${hopperCart.x} ${hopperCart.y} ${hopperCart.z} 0.95 1.5`)
    attackNearby(level, hopperCart.x, hopperCart.y, hopperCart.z)

    let resultCount = Math.ceil(processAmount / 2.0)
    let ls_result = [];
    for (let i = 0; i < 5; i++) {
        if (i == validTool.Slot) {
            ls_result.push(validTool);
            continue;
        }
        if (resultCount <= 0) continue;

        let tmpSlot = {
            Count: Math.min(64, resultCount),
            id: resultItem,
            Slot: i,
        };
        ls_result.push(tmpSlot);

        resultCount = resultCount - 64;
    }

    // console.log("result items NBT = " + JSON.stringify(ls_result));
    try {
        // here nbt = hopperCart.getNbt()
        nbt.merge({ Items: ls_result })
        hopperCart.setNbt(nbt);
        // console.log(hopperCart.getNbt())
    } catch (err) {
        console.warn(err);
        // console.log("merge NBT fail!")
        return 2;
    }
    return 1;
}

// 混沌炼金 0=invalid, 1=valid, 2=processFail
function transmutation(level, hopperCart, nbt) {
    let catalyst = undefined
    let toTransmute = undefined
    let transmuteAmount = 0

    for (let e of nbt.Items) {
        // console.log("substrate = " + e.id);
        if (!e.id.startsWith('kubejs:substrate_')) return 0;

        let mapping = global.substrate_mapping[e.id.replace('kubejs:substrate_', "")]
        // console.log("mapping = " + JSON.stringify(mapping));

        if (!e.id.equals(SILICON) && !e.id.equals(SILVER) && (!mapping || mapping.category == 6)) {
            if (catalyst || mapping) {
                // console.log("can only 1 catalyst!");
                return 0;
            }
            // console.log(e.id + " is catalyst");
            catalyst = e
            continue;
        }

        if (toTransmute && toTransmute != e.id) {
            // console.log("can only 1 transmute!");
            return 0;
        }
        // console.log(e.id + " is transmute");
        toTransmute = e.id
        transmuteAmount += e.Count
    }
    // console.log("transmute amount = " + transmuteAmount);
    // console.log(`catalyst=${catalyst} && toTransmute=${toTransmute}`);

    if (catalyst == null || toTransmute == null) return 0;

    let categoryMapping = global.substrate_mapping[toTransmute.replace('kubejs:substrate_', "")]
    let id1;
    if (toTransmute == SILICON)
        categoryMapping = { category: 5, index: 6 }
    if (toTransmute == SILVER)
        categoryMapping = { category: 5, index: 7 }
    let data = global.cachedAlchemyData["chaos_mapping"]
    let i1 = data[categoryMapping.category * 6 + categoryMapping.index]
    if (i1 > 35) id1 = i1 == 36 ? SILICON : SILVER;
    else id1 = global.substrates[Math.floor(i1 / 6)][i1 % 6].id;

    level.server.runCommandSilent(`/particle minecraft:flash ${hopperCart.x} ${hopperCart.y + .5} ${hopperCart.z} 0 0 0 .01 1`)
    level.server.runCommandSilent(`/particle ae2:matter_cannon_fx ${hopperCart.x} ${hopperCart.y + .5} ${hopperCart.z}`)
    level.server.runCommandSilent(`/particle minecraft:effect ${hopperCart.x} ${hopperCart.y + .5} ${hopperCart.z} .75 .75 .75 .75 10`)
    level.server.runCommandSilent(`/playsound minecraft:block.enchantment_table.use block @a ${hopperCart.x} ${hopperCart.y} ${hopperCart.z} 0.95 1.5`)
    attackNearby(level, hopperCart.x, hopperCart.y, hopperCart.z)

    let transmuteResult = [{
        Count: catalyst.Count,
        id: catalyst.id,
        Slot: 0,
    }];
    let ri = 1;
    while (transmuteAmount > 0 && ri < 5) {
        transmuteResult.push({
            Count: Math.min(64, transmuteAmount),
            Slot: ri++,
            id: id1,
        });
        transmuteAmount -= 64;
    }

    // console.log('Transmutation Complete ' + JSON.stringify(transmuteResult));
    try {
        nbt.merge({ Items: transmuteResult });
        hopperCart.setNbt(nbt);
    } catch (err) {
        console.warn(err);
        // console.log("merge NBT fail!")
        return 2;
    }
    return 1;
}

function process(level, hopperCart) {
    const JRandom = Java.loadClass("java.util.Random");
    const seed = level.getSeed();

    if (global.cachedSeed != seed) {
        global.cachedSeed = seed;
        let random = new JRandom(seed);

        // 表达式：获取一个[0..=5]的随机数
        let next = () => random.nextInt(6);

        // console.log("按照 CAB 炼金物品注册顺序和分组顺序随机抽取物品")
        for (let c = 0; c < 7; c++) {
            global.cachedAlchemyData[c] = {
                code: [next(), next(), next(), next()],
                result: c == 6 ? "kubejs:substrate_chaos" : global.substrates[6][c].id,
                // 为保持原 CAB 种子配方而遗留的冗余代码，考虑删除
                // mappings: shuffle(Array(0, 1, 2, 3, 4, 5), random)
            }
        }

        let swap;
        // console.log("初始化元素池")
        let tmp = []
        for (let i = 0; i < 38; i++) tmp.push(i);
        // console.log("洗牌：随机打乱下标")
        shuffle(tmp, random);
        // must not map silver-silicon
        if (tmp[0] > 36 && tmp[1] > 36) {
            swap = tmp[2];
            tmp[2] = tmp[1];
            tmp[1] = swap;
        } else {
            for (let i = 2; i < 38; i += 2) {
                if (tmp[i] > 36 && tmp[i + 1] > 36) {
                    swap = tmp[i - 1];
                    tmp[i - 1] = tmp[i];
                    tmp[i] = swap;
                    break;
                }
            }
        }
        // console.log("映射洗牌后的元素下标")
        let map = [];
        for (let i = 0; i < 38; i += 2) {
            map[tmp[i]] = tmp[i + 1]
            map[tmp[i + 1]] = tmp[i]
        }
        global.cachedAlchemyData["chaos_mapping"] = map;
    }// remapping by seed
    // console.log('world seed = ' + seed);

    let nbt = hopperCart.getNbt()
    // console.log("hopper NBT = " + nbt);

    // 镭射加工  0=invalid, 1=valid, 2=processFail
    if (laserRecipe(level, hopperCart, nbt) > 0) return;

    // 混沌炼金
    if (transmutation(level, hopperCart, nbt) > 0) return;

    // 合成催化剂
    let catCode = -1;
    let guessedSet = []
    let reagents = []
    let guessedString = ""
    let count = 0;
    let redstoneAccellerator = false
    let glowstoneAccellerator = false
    let valid = true

    if (nbt.Items.length < 4) {
        // console.log("need 4 items");
        return;
    }

    for (let e of nbt.Items) {
        if (e.Count > 1) {
            valid = false
            continue;
        }
        if (e.id.startsWith("kubejs:accellerator_redstone")) {
            redstoneAccellerator = true
            continue;
        }
        if (e.id.startsWith("kubejs:accellerator_glowstone")) {
            glowstoneAccellerator = true
            continue;
        }
        if (!e.id.startsWith('kubejs:substrate_')) {
            // console.log("plz select substrates!");
            return;
        }
        let mapping = global.substrate_mapping[e.id.replace('kubejs:substrate_', "")]
        if (!mapping) {
            // console.log(e.id + " is no mapping!");
            return;
        }
        if (catCode != -1 && catCode != mapping.category) {
            // console.log(`plz select of same category! ${e.id} is ${mapping.category}`);
            return;
        }
        catCode = mapping.category
        guessedSet.push(mapping.index)
        reagents.push(e.id)
        count++
        guessedString = guessedString + "§6" + mapping.name + "§7" + (count < 4 ? ", " : "")
    }
    // console.log("guess: " + guessedString);

    if (!valid) {
        // console.log("invalid recipes!");
        return
    }
    if (count != 4) {
        // console.log("lack items!");
        return
    }
    if (!global.cachedAlchemyData[catCode]) {
        // console.log(`[${catCode}] is invalid category!`);
        return
    }

    let data = global.cachedAlchemyData[catCode]
    let unmatchedCorrectSet = data.code.slice()
    let unmatchedGuessedSet = guessedSet.slice()
    // console.log("unmatchedCorrectSet = " + unmatchedCorrectSet);
    // console.log("unmatchedGuessedSet = " + unmatchedGuessedSet);

    let result = [0, 0, 0]
    let resultEval = [0, 0, 0, 0]
    let trueFalse = [true, false]
    let retain = -1

    trueFalse.forEach(exact => {
        for (let digit = 0; digit < 4; digit++) {
            let guessed = unmatchedGuessedSet[digit]
            for (let digit2 = 0; digit2 < unmatchedCorrectSet.length; digit2++) {
                let correct = unmatchedCorrectSet[digit2]
                if (correct != guessed)
                    continue
                if (exact && digit != digit2)
                    continue

                resultEval[digit] = exact ? 2 : 1
                result[exact ? 2 : 1] = result[exact ? 2 : 1] + 1
                unmatchedGuessedSet[digit] = -2
                unmatchedCorrectSet[digit2] = -1
                break
            }
        }
    })

    if (glowstoneAccellerator || redstoneAccellerator) {
        let random = new JRandom()
        let shuffled = shuffle(Array(0, 1, 2, 3), random)
        for (let i = 0; i < 4; i++) {
            let j = shuffled[i]
            if (glowstoneAccellerator && resultEval[j] == 2) {
                retain = j
                break
            }
            if (redstoneAccellerator && resultEval[j] == 1) {
                retain = j
                break
            }
        }
    }

    result[0] = 4 - result[2] - result[1]

    // console.log("Correct: " + data.code)
    // console.log("Guessed: " + guessedSet)
    // console.log("Result: " + result)
    // console.log("Retained: " + retain)

    let errorId = -1

    if (result[0] == 4)
        errorId = 0
    if (result[0] == 3) {
        if (result[1] == 1)
            errorId = 1
        if (result[1] == 0)
            errorId = 2
    }
    if (result[0] == 2) {
        if (result[1] == 2)
            errorId = 3
        if (result[1] == 0)
            errorId = 4
        if (result[1] == 1)
            errorId = 5
    }
    if (result[0] == 1) {
        if (result[1] == 3)
            errorId = 6
        if (result[1] == 0)
            errorId = 7
        if (result[1] == 2)
            errorId = 8
        if (result[1] == 1)
            errorId = 9
    }
    if (result[0] == 0) {
        if (result[1] == 4)
            errorId = 10
        if (result[1] == 3)
            errorId = 12
        if (result[1] == 1)
            errorId = 13
        if (result[1] == 2)
            errorId = 14
    }
    // console.log("error id = " + errorId);

    let success = errorId == -1
    let resultItem = success ? data.result : `kubejs:failed_alchemy_${errorId}`
    level.server.runCommandSilent(`/particle minecraft:flash ${hopperCart.x} ${hopperCart.y + .5} ${hopperCart.z} 0 0 0 .01 1`)
    level.server.runCommandSilent(`/particle ae2:matter_cannon_fx ${hopperCart.x} ${hopperCart.y + .5} ${hopperCart.z}`)
    level.server.runCommandSilent(`/particle minecraft:dust 0 1 1 1 ${hopperCart.x} ${hopperCart.y + .5} ${hopperCart.z} .75 .75 .75 .75 ${success ? "80" : "6"}`)
    level.server.runCommandSilent(`/playsound minecraft:block.enchantment_table.use block @a ${hopperCart.x} ${hopperCart.y} ${hopperCart.z} 0.95 ${success ? "2" : "1.25"}`)
    attackNearby(level, hopperCart.x, hopperCart.y, hopperCart.z)
    if (success)
        level.server.runCommandSilent(`/playsound minecraft:block.beacon.activate block @a ${hopperCart.x} ${hopperCart.y} ${hopperCart.z} 0.95 1.5`)

    let ls_result = [];
    let tmpSlot = {
        Count: success ? 4 : 1,
        id: resultItem,
        Slot: 0,
    };
    if (errorId != -1) tmpSlot.tag = { display: { lore: [{ text: guessedString, italic: false }] } }
    ls_result.push(tmpSlot)

    if (retain != -1) {
        ls_result.push({
            id: reagents[retain],
            Count: 1,
            Slot: 1,
        })
    }
    // console.log("result items NBT = " + JSON.stringify(ls_result));
    try {
        // here nbt = hopperCart.getNbt()
        nbt.merge({ Items: ls_result })
        hopperCart.setNbt(nbt);
        // console.log(hopperCart.getNbt())
    } catch (err) {
        console.warn(err);
        // console.log("merge NBT fail!")
    }
}

BlockEvents.leftClicked(event => {
    let block = event.getBlock()
    // let tags = block.getTags()
    // console.log('click block id = ' + block.id);

    if (!block.id.startsWith("thermal:machine_frame"))
        return

    let level = event.getLevel()
    let clickedFace = event.getFacing()
    let item = event.getItem()
    // let player = event.getPlayer()
    // console.log('player name = ' + player.name);


    if (!item.empty)
        return

    let sound = false

    for (let face of Direction.ALL.values()) {
        if (clickedFace == face)
            return
        let laser = block.offset(face)
        if (!laser.id.startsWith("cb_multipart:multipart"))
            return
        let te = laser.getEntity()
        if (!te)
            return

        let invert

        if (laser.entityData.parts[0].id.endsWith("inverted_cage_light")) invert = true
        else if (laser.entityData.parts[0].id.endsWith("cage_light")) invert = false
        else return

        let pow = laser.entityData.parts[0].pow
        if (pow && invert || !pow && !invert) return

        let side = laser.entityData.parts[0].side
        if (FACES[face] != side) return

        let x = laser.x
        let y = laser.y
        let z = laser.z

        let inflateBox = AABB.CUBE.move(x, y, z).inflate(4 * face.x, 4 * face.y, 4 * face.z)
        // console.log("inflate box: " + inflateBox.toString());
        let entities = level.getEntitiesWithin(inflateBox);

        // console.log('count entitys = ' + (entities ? entities.length : 0));
        for (let e of entities) {
            if (e.type.startsWith("minecraft:item")) continue;
            if (e.type.startsWith("minecraft:hopper_minecart"))
                process(level, e);
            e.attack(1);
        }

        sound = true
        //let rgb = colourMap("white")
        let rgb = colourMap(color)
        for (let i = 0; i < 22; i++) {
            let offset = (i / 20.0) * 4
            //   level.server.runCommandSilent(`/particle dust 256 256 256 1 ${x + .5 + face.x * offset} ${y + .5 + face.y * offset} ${z + .5 + face.z * offset} 0 0 0 .001 1`)
            level.server.runCommandSilent(`/particle dust ${rgb[0] / 256} ${rgb[1] / 256} ${rgb[2] / 256} 1 ${x + .5 + face.x * offset} ${y + .5 + face.y * offset} ${z + .5 + face.z * offset} 0 0 0 .001 1`)
        }
        level.server.runCommandSilent(`/particle minecraft:end_rod ${x + .5 + face.x * 2} ${y + .5 + face.y * 2} ${z + .5 + face.z * 2} ${face.x * 2} ${face.y * 2} ${face.z * 2} .1 10`)
        break;
    }

    if (sound)
        level.server.runCommandSilent(`/playsound minecraft:entity.firework_rocket.blast block @a ${block.x} ${block.y} ${block.z} 0.55 0.5`)
})
