
onEvent('item.tooltip', tooltip => {

tooltip.add("cookingforblockheads:sink", [`§a小时候家里的水槽忘了关，现在村里成亚特兰蒂斯了`]);

let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} 格`])
    let main_assembly = (id, stage) => tooltip.add(id, [`§7主目标: ${stage == "4" ? "§6最终章" : "§6章节 " + stage}`, '§8思考一下如何自动化制作此物品'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7附加目标: §6章节 ${stage}`])
	let not_consumed = (id) => tooltip.add(id, [`§7在§7装配线§7中不消耗，仅消耗耐久`])
	
	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('obsidian', 12 * 9)
	holds('diamond', 12 * 9)
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
not_consumed('kubejs:boot_medium')
not_consumed('createindustry:prospector_tool')
not_consumed('kubejs:metamorphic_lich_rod')
not_consumed('kubejs:hop_slime')
not_consumed('kubejs:thermal_grease')

})