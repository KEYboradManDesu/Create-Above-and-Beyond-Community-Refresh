// Load common functions
require('../common.js');

ServerEvents.recipes(event => {
	recipeTweaks(event)
})

function recipeTweaks(event) {

    // rei显示神秘转化
    MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('ae2:singularity', 'ae2:quantum_entangled_singularity'))
    MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('create:chromatic_compound', 'create:shadow_steel'))
    MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('create:chromatic_compound', 'create:refined_radiance'))

    // 暂时应对车床合成错乱的应对
    event.stonecutting(Item.of('vintageimprovements:convex_curving_head', '{Damage:0}'), Item.of('vintageimprovements:concave_curving_head', '{Damage:0}'))
    event.stonecutting(Item.of('vintageimprovements:concave_curving_head', '{Damage:0}'), Item.of('vintageimprovements:convex_curving_head', '{Damage:0}'))

    event.stonecutting('beyond_earth:engine_frame', 'beyond_earth:engine_fan')
    event.stonecutting('beyond_earth:engine_fan', 'beyond_earth:engine_frame')

    event.stonecutting('createdieselgenerators:pumpjack_bearing', 'createdieselgenerators:pumpjack_head')
    event.stonecutting('createdieselgenerators:pumpjack_bearing', 'createdieselgenerators:pumpjack_crank')
    event.stonecutting('createdieselgenerators:pumpjack_head', 'createdieselgenerators:pumpjack_bearing')
    event.stonecutting('createdieselgenerators:pumpjack_head', 'createdieselgenerators:pumpjack_crank')
    event.stonecutting('createdieselgenerators:pumpjack_crank', 'createdieselgenerators:pumpjack_bearing')
    event.stonecutting('createdieselgenerators:pumpjack_crank', 'createdieselgenerators:pumpjack_head')

    event.blasting(Item.of('ae2:sky_stone_block'), 'beyond_earth:sky_stone').cookingTime(100)

    // 碎可可
    event.custom({
        "type": "vintageimprovements:vibrating",
        "ingredients": [{
            "item": "minecraft:cocoa_beans"
        }],
        "results": [
            {
                "item": "create_confectionery:crushed_cocoa"
            }
        ],
        "processingTime": 300
    })

    // 熔融荧石
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": MC('glowstone_dust')
        },
        "result": {
            "fluid": TE('glowstone'),
            "amount": 250
        },
        "temperature": 300,
        "time": 10
    })
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": MC('glowstone')
        },
        "result": {
            "fluid": TE('glowstone'),
            "amount": 1000
        },
        "temperature": 500,
        "time": 90
    })

    // 玫瑰石英
    event.custom({
        "type": "vintageimprovements:polishing",
        "speedLimits": 1,
        "ingredients": [
            {
                "item": "biomesoplenty:rose_quartz_shard"
            }
        ],
        "results": [
            {
                "item": "create:polished_rose_quartz",
                "count": 1,
                "chance": 0.2
            }
        ],
        "processingTime": 20
    })

    // 海洋之心
    event.shaped(Item.of(MC("heart_of_the_sea")), [
        'SSS',
        'SMS',
        'SSS'
    ], {
        M: AC("neptunium_ingot"),
        S: TE("sapphire")
    })

    // 红宝石灵火转化
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": { "item": 'thermal:ruby' },
        "result": { "item": 'minecraft:redstone_block' }
    })
    // 蓝宝石灵火转化
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": { "item": 'thermal:sapphire' },
        "result": { "item": 'minecraft:diamond' }
    })

    // 原版红石转化
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": { "item": 'thermal:cinnabar_ore' },
        "result": { "item": 'minecraft:redstone_ore' }
    })
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": { "item": 'thermal:deepslate_cinnabar_ore' },
        "result": { "item": 'minecraft:deepslate_redstone_ore' }
    })

    // 特殊风帆
    let sails = (id, amount, other_ingredient) => {
        event.remove({ output: id })
        event.smithing(Item.of(id, amount), 'create:white_sail', other_ingredient)
        event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: 'create:white_sail', B: other_ingredient })
    }

    sails('create_dd:smoking_sail', 1, MC('campfire'))
    sails('create_dd:splashing_sail', 1, MC('water_bucket'))
    sails('create_dd:haunting_sail', 1, MC('soul_campfire'))
    sails('create_dd:blasting_sail', 1, MC('lava_bucket'))
    sails('create_dd:freezing_sail', 1, MC('powder_snow_bucket'))

    event.blasting(TE('coal_coke'), MC('coal'))

    // 厨刀配方冲突解决
    event.replaceInput({ id: "rechiseled:chisel" }, MC("iron_ingot"), CR("iron_sheet"))
    let knife = (id, material) => {
        event.remove({ output: id })
        event.shaped(id, [
            ' S',
            'P '
        ], {
            P: MC("stick"),
            S: material
        })
    }
    knife(FD('flint_knife'), MC('flint'))
    knife(FD('iron_knife'), MC('iron_ingot'))
    knife(FD('golden_knife'), MC('gold_ingot'))
    knife(FD('diamond_knife'), MC('diamond'))
    // knife(FD('netherite_knife'), MC('netherite_ingot'))

    // 热力刷石机
    let bedrock_cobblegen = (adjacent, output) => {
        event.custom({
            "type": "thermal:rock_gen",
            "adjacent": adjacent,
            "below": "minecraft:bedrock",
            "result": { "item": output }
        })
    }

    let custom_cobblegen = (adjacent, output) => {
        event.custom({
            "type": "thermal:rock_gen",
            "adjacent": adjacent,
            "result": { "item": output }
        })
    }

    custom_cobblegen("create_dd:strawberry_milkshake", "create_dd:crimsite_cobble") //草莓奶昔和岩浆生成绯红岩圆石
    custom_cobblegen("create_dd:caramel_milkshake", "create_dd:veridium_cobble") //焦糖奶昔和岩浆生成辉绿岩圆石
    custom_cobblegen("create_dd:cream", "create_dd:asurine_cobble") //奶油和岩浆生成皓蓝圆石
    custom_cobblegen("create_dd:glowberry_milkshake", "create_dd:ochrum_cobble") //发光浆果奶昔和岩浆生成赭金砂圆石
    custom_cobblegen("create_dd:vanilla_milkshake", "create_dd:potassic_cobble") //香草奶昔和岩浆生成钾质岩圆石

    bedrock_cobblegen(MC("packed_ice"), MC("andesite"))
    bedrock_cobblegen(AP("polished_packed_ice"), MC("granite"))
    bedrock_cobblegen(AP("chiseled_packed_ice"), MC("diorite"))
    bedrock_cobblegen(AP("packed_ice_pillar"), MC("dripstone_block"))
    bedrock_cobblegen('minecraft:honey_block', CR("limestone"))
    bedrock_cobblegen(FA("dark_rune_block"), FA("darkstone"))

    // 前期优化游戏体验
    event.replaceInput({ id: CR("crafting/kinetics/item_vault") }, F('#plates/iron'), TE('lead_plate')) // 保险库
    // 手部零件
    event.replaceInput({ id: CR("crafting/kinetics/brass_hand") }, '#forge:plates/brass', CR('golden_sheet'))
    event.remove({ id: CRD("crafting/brass_hand") })
    event.remove({ id: CR("crafting/kinetics/brass_hand") })
    event.shaped(Item.of('kubejs:gloden_hand', 1), [
        ' S ',
        'PPP',
        ' P '
    ], {
        P: CR("golden_sheet"),
        S: CR("andesite_alloy")
    })
    event.shaped(Item.of('kubejs:bronze_hand', 2), [
        ' S ',
        'PPP',
        ' P '
    ], {
        P: CRD("bronze_sheet"),
        S: CR("andesite_alloy")
    })
    event.shaped(Item.of('create:brass_hand', 2), [
        ' S ',
        'PPP',
        ' P '
    ], {
        P: CR("brass_sheet"),
        S: CR("andesite_alloy")
    })

    // 储存标签Labels
    donutCraft(event, '8x labels:label', "#forge:dyes/black", MC("paper"))

    // 垂泪藤，缠冤藤互相转换
    donutCraft(event, MC("weeping_vines"), "forbidden_arcanus:rune", MC("twisting_vines"))
    donutCraft(event, MC("twisting_vines"), "forbidden_arcanus:rune", MC("weeping_vines"))

    // 下界合金锯
    event.smithing(KJ("netherite_saw"), ('cb_microblock:diamond_saw'), MC("netherite_ingot"))

    // 潜水靴
    event.shaped(CR("copper_diving_boots"), [
        'P P',
        'P P',
        'S S'
    ], {
        P: MC("copper_ingot"),
        S: TE("lead_ingot")
    })

    // 铜背罐
    event.shaped(CR("copper_backtank"), [
        'PAP',
        'PBP',
        'PSP'
    ], {
        P: F("#leather"),
        A: CR("andesite_alloy"),
        B: MC("copper_block"),
        S: CR("cogwheel")
    })

    event.remove({ output: TE("side_config_augment") })
    event.shaped(TE("side_config_augment"), [
        ' S ',
        'PMP',
        ' S '
    ], {
        P: TE("invar_ingot"),
        M: TE("redstone_servo"),
        S: TE("gold_gear")
    })

    event.stonecutting(AE2("silicon_press"), KJ("circuit_scrap"))
    event.stonecutting(AE2("engineering_processor_press"), KJ("circuit_scrap"))
    event.stonecutting(AE2("calculation_processor_press"), KJ("circuit_scrap"))
    event.stonecutting(AE2("logic_processor_press"), KJ("circuit_scrap"))
    event.shaped(KJ("circuit_scrap", 2), [
        " A ", "ABA", " A "
    ], { A: TE("invar_ingot"), B: F("#circuit_press") })
    event.recipes.create.milling(KJ("circuit_scrap"), F("#circuit_press"))

    event.replaceInput({ output: CR('adjustable_chain_gearshift') }, CR('electron_tube'), MC('redstone'))
    event.replaceInput({ id: CR("crafting/kinetics/filter") }, MC('#wool'), [IM('hemp_fabric'), MC('#wool')]) // 过滤器
    event.replaceInput({ id: CR("crafting/kinetics/attribute_filter") }, MC('#wool'), [IM('hemp_fabric'), MC('#wool')]) // 属性过滤器
    event.replaceInput({ id: "immersive_weathering:nulch_block" }, 'immersive_weathering:ash_layer_block', 'supplementaries:ash') // 沃土
    event.replaceInput({ id: "immersive_weathering:mulch_block" }, 'immersive_weathering:ash_layer_block', 'supplementaries:ash') // 地狱沃土
    event.replaceOutput({ id: AC("tin_can_to_iron_nugget") }, MC('iron_nugget'), TE('tin_nugget'))
    event.replaceOutput({ id: AC("tin_can_to_iron_nugget_from_blasting") }, MC('iron_nugget'), TE('tin_nugget'))
    event.replaceInput({ id: CR("mechanical_crafting/wand_of_symmetry") }, MC('ender_pearl'), CR('refined_radiance')) // 对称之杖
    event.replaceInput({ id: MC("hopper") }, F('#ingots/iron'), TE('lead_plate')) // 漏斗

    event.remove({ id: TE("augments/item_filter_augment") })
    event.shapeless(TE("item_filter_augment"), [CR("filter"), TE("lapis_gear")])

    event.shaped(KJ("press_rod_die"), [
        ' S ',
        'SMS',
        ' S '
    ], {
        M: 'createaddition:gold_rod',
        S: TE("invar_plate")
    })

    // 绳子
    event.shapeless('supplementaries:rope', ['#supplementaries:ropes'])

    // 削弱刷铁轨收益
    event.remove({ id: TC('smeltery/melting/metal/iron/nugget_3') })
    event.remove({ id: TC('smeltery/melting/metal/gold/powered_rail') })
    event.remove({ id: TC('smeltery/melting/metal/iron/ingot_1') })
    event.recipes.create.crushing(
        [Item.of(MC("stick")).withChance(0.35),
        Item.of(MC("iron_nugget")).withChance(0.05)],
        MC('rail')).processingTime(250)
    event.recipes.create.crushing(
        [Item.of(MC("stick")).withChance(0.35),
        Item.of(MC("iron_nugget")).withChance(0.05)],
        MC('detector_rail')).processingTime(250)
    event.recipes.create.crushing(
        [Item.of(MC("stick")).withChance(0.35),
        Item.of(MC("iron_nugget")).withChance(0.05)],
        MC('activator_rail')).processingTime(250)
    event.recipes.create.crushing(
        [Item.of(MC("stick")).withChance(0.35),
        Item.of(MC("gold_nugget")).withChance(0.05)],
        MC('powered_rail')).processingTime(250)

    // event.smoking('minecraft:cooked_chicken', 'chickens:chicken_item').xp(0.25)

    event.recipes.create.crushing([Item.of(AC('neptunium_ingot', 2)), Item.of(AC('neptunium_nugget', 5)).withChance(.5)], AC('neptunes_bounty')).processingTime(500)

    event.replaceInput({ id: "architects_palette:withered_bone_block" }, AP('withered_bone'), TC('necrotic_bone'))
    event.remove({ id: "architects_palette:withered_bone" })

    event.recipes.create.mixing([Fluid.of('create_confectionery:ruby_chocolate', 250)], [
        Item.of('minecraft:sugar'),
        Fluid.of('create_central_kitchen:dragon_breath', 250),
        Item.of('minecraft:cocoa_beans'),
        Fluid.of('minecraft:milk', 250)
    ]).heated()

    // event.remove({ output: TC('obsidian_pane') })
    // event.shaped(TC('obsidian_pane', 8), [
    //     'SSS',
    //     'SSS'
    // ], {
    //     S: MC('obsidian')
    // })

    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": "forge:rods/blaze"
        },
        "result": {
            "fluid": "tconstruct:blazing_blood",
            "amount": 100
        },
        "temperature": 790,
        "time": 40
    })

    event.shaped("forbidden_arcanus:eternal_stella", [
        'PEP',
        'SDS',
        'PEP'
    ], {
        P: "forbidden_arcanus:xpetrified_orb",
        E: "minecraft:emerald",
        S: "forbidden_arcanus:stellarite_piece",
        D: "rubber_duck:rubber_duck_item"
    })

    event.shaped(AE2('entropy_manipulator'), [
        'S  ',
        ' M ',
        '  M'
    ], {
        M: TE("lead_plate"),
        S: F('#gems/fluix')
    })

    event.remove({ output: TC('obsidian_pane') })
    event.shaped(TC('obsidian_pane', 8), [
        'SSS',
        'SSS'
    ], {
        S: MC('obsidian')
    })

    event.replaceInput({ id: "architects_palette:wither_lamp" }, AP('withered_bone'), TC('necrotic_bone'))
    event.replaceInput({ id: "architects_palette:withered_bone_block" }, AP('withered_bone'), TC('necrotic_bone'))
    event.remove({ id: "architects_palette:withered_bone" })

    event.shaped("3x forbidden_arcanus:edelwood_stick", [
        'S',
        'A',
        'S'
    ], {
        S: 'forbidden_arcanus:edelwood_planks',
        A: MC('stick')
    })

    event.custom({
        "type": "tconstruct:melting",
        "ingredient": { "tag": "forge:circuit_press" },
        "result": {
            "fluid": "tconstruct:molten_invar",
            "amount": 180
        },
        "temperature": 500,
        "time": 90
    })

    event.custom({
        "type": "tconstruct:melting",
        "ingredient": { "tag": "forge:recycling" },
        "result": {
            "fluid": "tconstruct:molten_iron",
            "amount": 20
        },
        "temperature": 500,
        "time": 40
    })

    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": "forge:rods/blaze"
        },
        "result": {
            "fluid": "tconstruct:blazing_blood",
            "amount": 100
        },
        "temperature": 790,
        "time": 40
    })
}