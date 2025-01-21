
onEvent('item.tooltip', tooltip => {

tooltip.add("cookingforblockheads:sink", [`§a小时候家里的水槽忘了关，现在村里成亚特兰蒂斯了`]);

tooltip.add("minecraft:redstone_ore", [`§6原版红石矿石已被朱砂矿石替代`]);
tooltip.add("minecraft:deepslate_redstone_ore", [`§6原版红石矿石已被朱砂矿石替代`]);

tooltip.add("create_dd:rubber_sapling", [`§6该品种树苗提供双倍树脂产量`]);

//tooltip.add("#quark:revertable_chests", [`§6注意右键合成该箱子会导致原箱子物品掉落`]);

tooltip.add("create_dd:infaice", [`§3⑨`]);

tooltip.add("create_dd:chromatic_compound", [`§6更稳定的化合物（能合成烈焰黄铜和过载合金）`]);

let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} 格`])
    let main_assembly = (id, stage) => tooltip.add(id, [`§7主目标: ${stage == "4" ? "§6最终章" : "§6章节 " + stage}`, '§8思考一下如何自动化制作此物品'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7附加目标: §6章节 ${stage}`])
	let not_consumed = (id) => tooltip.add(id, [`§7在§7装配线§7中不消耗，仅消耗耐久`])
	let warning = (id) => tooltip.add(id, [`§3该物品的性质可能会破坏机械动力基本基调，请酌情使用。`])
	
	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('gold', 9 * 9)
	holds('obsidian', 12 * 9)
	holds('diamond', 12 * 9)
	holds('crystal', 12 * 9)
	holds('netherite', 15 * 9)
//

//第一章
main_assembly('kubejs:kinetic_mechanism', "1")
bonus_assembly('kubejs:sealed_mechanism', "1A")
//第二章
main_assembly('create:precision_mechanism', "2")
bonus_assembly('kubejs:infernal_mechanism', "2A") 
bonus_assembly('kubejs:sturdy_mechanism', "2A") 
//第三章
main_assembly('kubejs:inductive_mechanism', "3")
bonus_assembly('kubejs:abstruse_mechanism', "3A")
//第四章
main_assembly('kubejs:calculation_mechanism', "4")

not_consumed('cb_microblock:stone_saw')
not_consumed('cb_microblock:iron_saw')
not_consumed('cb_microblock:diamond_saw')
not_consumed('kubejs:netherite_saw')
not_consumed('kubejs:screwdriver')
not_consumed('kubejs:chromatic_resonator')
not_consumed('kubejs:flash_drive')
// not_consumed('createindustry:prospector_tool')
// not_consumed('kubejs:metamorphic_lich_rod')
// not_consumed('kubejs:hop_slime')
// not_consumed('kubejs:thermal_grease')

warning('thermal:energy_duct')
warning('thermal:fluid_duct')
warning('thermal:fluid_duct_windowed')
warning('createutilities:void_motor')
warning('pipez:item_pipe')
warning('pipez:universal_pipe')
warning('toms_storage:ts.wireless_terminal')
warning('toms_storage:ts.adv_wireless_terminal')

})

onEvent('jei.information', event => {

let catalyst = (name, me) =>
	[
		`通过§5炼金镭射§0找到四种§9${me ? name : name + " §0反应物"}§9正确的配方§0。`," ",
		"§8§4红石粉§r代表正确的物品在错误的位置§0",
		"§8§6荧石粉§r代表正确的物品在正确的位置§0",
		"§8§7灰烬§r代表错误的物品§0", " ",
		`§81.§0 将混沌炼金机的4个格子用 §9${me ? name : name + " §0反应物"}§0占满`,
		`§82.§0 对着物品激活§5炼金镭射机§0，然后你就会发现§9${me ? me : name + " §9催化剂"}§0，或是一些指向正确配方的§9提示§0`, " ",
		"§8注：§0正确的配方可能含有物品§9重复§0",
		"§8注：§0正确的配方§9因世界而异§0",
		"§8可选项：§0 在炼金机的第5格放§9红石促成剂§0或§9荧石促成剂§0获取§9额外提示§0",
	]

event.add('kubejs:substrate_igneous', catalyst("火成"))
event.add('kubejs:substrate_herbal', catalyst("草本"))
event.add('kubejs:substrate_volatile', catalyst("不稳定"))
event.add('kubejs:substrate_crystal', catalyst("晶化"))
event.add('kubejs:substrate_metal', catalyst("金属"))
event.add('kubejs:substrate_gem', catalyst("宝石"))

event.add('kubejs:substrate_chaos', catalyst("催化剂", "混沌催化剂").concat([
	" ", "§8用法：§0", "使用§5炼金镭射§0混合§9混沌催化剂§0和任意数量的同种§9反应物§0时，会将该反应物§9嬗变§0成其它的反应物。每个世界都有§9不同的§0嬗变配方。"
]))

})