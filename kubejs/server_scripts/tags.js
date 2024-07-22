onEvent('item.tags', event => {
// global.trades.forEach(element => {
// 		event.get('forge:trade_cards').add(`kubejs:trade_card_${element}`)
// 	});

// global.professions.forEach(element => {
// 		event.get('forge:profession_cards').add(`kubejs:profession_card_${element}`)
// 	});

event.get('kubejs:certus_quartz_crystal').add('ae2:certus_quartz_crystal')

event.get("farmersdelight:offhand_equipment").add("forbidden_arcanus:obsidian_skull_shield")

//event.get("forge:raw_chicken").add("exoticbirds:raw_birdmeat")
event.get("forge:tools/axes").add(TC("hand_axe"))
event.get("forge:vines").add(MC("vine")).add(BOP("willow_vine")).add(BOP("spanish_moss"))
event.get("forge:recycling")
	.add("expcaves:rusty_pickaxe")
	.add("expcaves:rusty_sword")
	.add("expcaves:iron_dagger")
	.add("expcaves:gourmet_spoon")
	.add("expcaves:gourmet_fork")
	.add("expcaves:chef_knife")
	.add("expcaves:butcher_knife")

event.get("forge:circuit_press")
	.add(AE2("name_press"))
	.add(AE2("silicon_press"))
	.add(AE2("logic_processor_press"))
	.add(AE2("engineering_processor_press"))
	.add(AE2("calculation_processor_press"))

event.get("forbidden_arcanus:indestructible_blacklisted")
	.add(/exchangers:.*/)
	.add(/reliquary:.*/)
	.add(/waterstrainer:.*/)
	.add(OC("#miners/ores"))
	.add(PR_C("draw_plate"))
	.add(PR_C("multimeter"))

event.get("minecraft:planks").add("forbidden_arcanus:mysterywood_planks").add("forbidden_arcanus:cherrywood_planks")
event.get("minecraft:logs_that_burn").add("#forbidden_arcanus:mysterywood_logs").add("#forbidden_arcanus:cherrywood_logs")

event.get('forge:saws').add('cb_microblock:stone_saw').add('cb_microblock:iron_saw').add('cb_microblock:diamond_saw').add(KJ('netherite_saw'))
event.get('forge:screwdrivers').add(PR_C('screwdriver'))
event.get('forge:chromatic_resonators').add(KJ('chromatic_resonator'))
event.get('forge:flash_drives').add(KJ('flash_drive'))
event.get('forge:ender_staffs').add(RQ('ender_staff'))
event.get('forge:cross_of_mercys').add(RQ('mercy_cross'))
event.get('forge:super_glues').add(CR('super_glue'))
event.get('forge:wrenches').add(CR('wrench'))
event.get('forge:tools/wrench').add(CR('wrench'))
event.get('forge:sewing_spool').add(KJ('sewing_spool'))

//为高贵的石磨献上手磨的美
event.get('forge:tools/knives').add('create:millstone')

event.get('thermal:crafting/dies').add('#forge:trade_cards')
event.get('thermal:crafting/dies').add('#forge:profession_cards')
event.get('thermal:crafting/casts').add(KJ("three_cast")).add(KJ("eight_cast")).add(KJ("plus_cast")).add(KJ("minus_cast")).add(KJ("multiply_cast")).add(KJ("divide_cast")).add(F("#circuit_press"))


})