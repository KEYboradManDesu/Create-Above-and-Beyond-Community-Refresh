// This part should fix some compatibility issues.
// Maybe mod-shortcuts.js is not loaded yet when this script is executed. 
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let EG = (id, x) => MOD("endergetic", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let BOP = (id, x) => MOD("biomesoplenty", id, x)
let RQ = (id, x) => MOD("reliquary", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) => MOD("forge", id, x)
let AC = (id, x) => MOD("aquaculture", id, x)
let PP = (id, x) => MOD("prettypipes", id, x)
let OC = (id, x) => MOD("occultism", id, x)
let IM = (id, x) => MOD("immersiveengineering", id, x)
let CO = (id, x) => MOD("createoreexcavation", id, x)
let BO = (id, x) => MOD("botania", id, x)
let FA = (id, x) => MOD("forbidden_arcanus", id, x)
let ARS = (id, x) => MOD("ars_nouveau", id, x)
let BM = (id, x) => MOD("bloodmagic", id, x)
let PC = (id, x) => MOD("pneumaticcraft", id, x)
let MEK = (id, x) => MOD("mekanism", id, x)
let TF = (id, x) => MOD("twilightforest", id, x)
let PR_C = (id, x) => MOD("projectred_core", id, x)
let PR_T = (id, x) => MOD("projectred_transmission", id, x)
let PR_I = (id, x) => MOD("projectred_illumination", id, x)
let Q = (id, x) => MOD("quark", id, x)
let IW = (id, x) => MOD("immersive_weathering", id, x)
let CRD = (id, x) => MOD("create_dd", id, x)

console.info('Starting to load KubeJS tags...')


onEvent('item.tags', event => {

let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']

colours.forEach(element => {
		event.get(F('glazed_terracotta')).add(MC(`${element}_glazed_terracotta`))
	});


global.trades.forEach(element => {
		event.get('forge:trade_cards').add(`kubejs:trade_card_${element}`)
	});

global.professions.forEach(element => {
		event.get('forge:profession_cards').add(`kubejs:profession_card_${element}`)
	});

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

event.get('create:upright_on_belt')
	.add(AE2("red_paint_ball"))
	.add(AE2("yellow_paint_ball"))
	.add(AE2("green_paint_ball"))
	.add(AE2("blue_paint_ball"))
	.add(AE2("magenta_paint_ball"))
	.add(AE2("black_paint_ball"))

event.get('tconstruct:anvil_metal')
	.add(CR('zinc_block'))
	.add(CR('experience_block'))
	.add(CRD('mithril_block'))
	.add(CR('industrial_iron_block'))

event.get('randomium:blacklist')
	.add(/.*creative.*/)
	.add(/libvulpes.*/)
	.add(/itemfilters.*/)
	.add(/kubejs:failed_alchemy.*/)
	.add(/ftblibrary.*/)
	.add(/projectred-core.*/)
	.add(/waterstrainer.*/)
	.add(/ftbquests.*/)
	.add(/occultism.*/)
	.add(/tconstruct:molten_.*_bucket/)
	.add(/pipez.*/)
	.add(/forbidden_arcanus:edelwood.*/)
	.add(/curios.*/)
	.add(/metalbarrels.*/)
	.add("forbidden_arcanus:arcane_polished_darkstone")
	.add("#forge:dusts")
	.add("cb_microblock:microblock")
	.add("culinaryconstruct:sandwich")
	.add("culinaryconstruct:food_bowl")
	.add("patchouli:guide_book")
	.add("randomium:randomium")
	.add("portality:generator")
	.add("kubejs:ponder_laser_lamp_on")
	.add("kubejs:ponder_laser_lamp")
	.add("chiselsandbits:block_bit")
	.add("moreminecarts:chunk_loader")
	.add("moreminecarts:minecart_with_chunk_loader")
	.add("grapplemod:repeller")
	.add(CR("handheld_worldshaper"))
	.add("computercraft:computer_command")	

event.get('chisel:basalt').add('expcaves:lavastone').add('expcaves:polished_lavastone')
event.get('chisel:limestone').add('darkerdepths:limestone').add('darkerdepths:aridrock')

event.get('forge:dusts/brass').add(KJ('brass_dust'))
event.get('forge:dusts/zinc').add(KJ('zinc_dust'))
event.get('forge:dusts/cobalt').add(KJ('cobalt_dust'))

event.get('forge:gears/andesite_alloy').add(KJ('andesite_alloy_gear'))
event.get('forge:gears').add(KJ('andesite_alloy_gear'))

event.get('forge:circuit_press').add('ae2:calculation_processor_press')
event.get('forge:circuit_press').add('ae2:engineering_processor_press')
event.get('forge:circuit_press').add('ae2:logic_processor_press')
event.get('forge:circuit_press').add('ae2:silicon_press')

event.get('thermal:crafting/dies').add('kubejs:press_rod_die')

event.get('vintageimprovements:curving_heads')
	.add('#forge:circuit_press')
	.add('#thermal:crafting/dies')


event.get('forge:dusts/saltpeter')
	.add('thermal:niter_dust')
	.add('createbigcannons:nitropowder')

event.get('createbigcannons:nitropowder')
	.add('#forge:dusts/saltpeter')

event.get('forge:dusts/niter')
	.add('#forge:dusts/saltpeter')

event.get('forge:plates/bronze').add('create_dd:bronze_sheet')
event.get('forge:ingots/bronze').add('create_dd:bronze_ingot')

event.get('forge:gears/arcane_gold').add('kubejs:arcane_gold_gear')
event.get('forge:gears').add('kubejs:arcane_gold_gear')

event.get('forge:raw_materials/silver').add('darkerdepths:raw_silver')

event.get('kubejs:alien_stone')
.add('beyond_earth:moon_stone')
.add('beyond_earth:mars_stone')
.add('beyond_earth:mercury_stone')
.add('beyond_earth:venus_stone')
.add('beyond_earth:glacio_stone')

event.get('minecraft:music_discs')
.add('create_confectionery:the_bright_side')
.add('alexsmobs:music_disc_thime')
.add('alexsmobs:music_disc_daze')
.add('integrated_stronghold:music_disc_forlorn')
.add('integrated_stronghold:music_disc_sight')
.add('idas:music_disc_calidum')
.add('idas:music_disc_slither')

event.get('kubejs:hand')
.add('create:brass_hand')
.add('kubejs:gloden_hand')
.add('kubejs:bronze_hand')

})	

onEvent('fluid.tags', event => {

event.get('forge:crude_oil').add('beyond_earth:oil')

})