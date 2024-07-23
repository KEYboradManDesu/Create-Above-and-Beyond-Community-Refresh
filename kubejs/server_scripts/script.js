// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	beforeNuke(event)
	unwantedRecipes(event)
	tweaks(event)
	waterstrainer(event)
	project_red(event)
	casing(event)
	computercraft(event)
	tomsstorage(event)
	drawersop(event)
	pipes(event)
	leather(event)
	backpack(event)
	barrels(event)
	// alloys(event)

	algalAndesite(event)
	andesiteMachine(event)

})

let MysteriousItemConversionCategory = java('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
let ConversionRecipe = java('com.simibubi.create.compat.jei.ConversionRecipe')
let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
// let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold', 'tin'] 
let wood_types = [MC('oak'), MC('spruce'), MC('birch'), MC('jungle'), MC('acacia'), MC('dark_oak'), MC('crimson'), MC('warped'), BOP('fir'), BOP('redwood'), BOP('cherry'), BOP('mahogany'), BOP('jacaranda'), BOP('palm'), BOP('willow'), BOP('dead'), BOP('magic'), BOP('umbran'), BOP('hellbark'), AP('twisted'), 'phantasm:pream', 'phantasm:ebony', ]


function ifiniDeploying(output, input, tool) {
	return {
		"type": "create:deploying",
		"ingredients": [
			Ingredient.of(input).toJson(),
			Ingredient.of(tool).toJson()
		],
		"results": [
			Item.of(output).toResultJson()
		],
		"keepHeldItem": true
	}
}

let donutCraft = (event, output, center, ring) => {
	event.shaped(output, [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: center,
		S: ring
	})
}

let switchCutting = (event, output, input) => {
	event.stonecutting(output, input)
    event.stonecutting(input, output)
}

let switchCraft = (event, a, b) => {
	event.shaped(a, [
		'S'
	], {
		S: b
	})
	
	event.shaped(b, [
		'S'
	], {
		S: a
	})
}

function beforeNuke(event) {
	event.replaceInput({ id: "occultism:ritual/summon_foliot_crusher" }, F("#ores/silver"), CR("zinc_ore"))
}

function unwantedRecipes(event) {

event.remove({ output: '#forge:coins' })
event.remove({ output: AE2('grindstone') })
event.remove({ output: AE2('vibration_chamber') })
event.remove({ output: AE2('inscriber') })
event.remove({ output: AE2('quartz_glass') })
event.remove({ output: CR('chromatic_compound') })
event.remove({ input: '#forge:coins' })
event.remove({ type: AE2('grinder') })
event.remove({ type: TE('press') })
event.remove({ id: /thermal:earth_charge\/.*/ })
event.remove({ id: /thermal:machine\/smelter\/.*dust/ })
event.remove({ id: /tconstruct:smeltery\/.*\/ore/ })
event.remove({ id: "tconstruct:tables/tinkers_forge" })
event.remove({ id: "tconstruct:tables/scorched_forge" })
event.remove({ id: /tconstruct:smeltery\/.*\/tin.*/ })
event.remove({ id: /ae2:tools\/paintballs.*/ })
event.remove({ id: "grapplemod:repeller" })
event.remove({ id: "grapplemod:forcefieldupgradeitem" })
event.remove({ id: "grapplemod:rocketupgradeitem" })
event.remove({ id: "grapplemod:rocketdoublemotorhook" })
event.remove({ id: "grapplemod:magnethook" })
event.remove({ id: "grapplemod:rockethook" })
event.remove({ id: "randomium:duplicate" })
event.remove({ id: "forbidden_arcanus:eternal_stella" })
event.remove({ id: OC('miner/ores/redstone_ore') })
event.remove({ id: OC('miner/ores/silver_ore') })
event.remove({ id: MC('diorite') })
event.remove({ id: MC('andesite') })
event.remove({ id: MC('granite') })
event.remove({ id: CR('mixing/brass_ingot') })
event.remove({ id: 'thermal:compat/biomesoplenty/tree_extractor_bop_pink_cherry' })
event.remove({ id: 'thermal:compat/biomesoplenty/tree_extractor_bop_white_cherry' })
event.remove({ id: 'thermal:compat/biomesoplenty/tree_extractor_bop_fir' })
event.remove({ id: TC('smeltery/melting/metal/gold/enchanted_apple') })
event.remove({ id: CR('cutting/andesite_alloy') })
event.remove({ id: TE('storage/beetroot_block') })
event.remove({ id: TE('storage/potato_block') })
event.remove({ id: AE2('misc/grindstone_woodengear') })
event.remove({ id: AE2('tools/misctools_entropy_manipulator') })
event.remove({ id: TE('storage/carrot_block') })

event.remove({ id: TE('fire_charge/invar_ingot_3') })
event.remove({ id: TE('fire_charge/enderium_ingot_2') })
event.remove({ id: TE('fire_charge/constantan_ingot_2') })
event.remove({ id: TE('fire_charge/bronze_ingot_4') })
event.remove({ id: TE('fire_charge/electrum_ingot_2') })
event.remove({ id: TE('fire_charge/lumium_ingot_4') })
event.remove({ id: TE('fire_charge/signalum_ingot_4') })

// event.remove({ input: '#forge:ores/redstone' })
// event.remove({ input: '#create:crushed_ores' })
// event.remove({ input: '#forge:ores/tin' })
// event.remove({ input: '#forge:ores/silver' })
// event.remove({ output: '#forge:plates/tin' })
// event.remove({ output: '#forge:plates/silver' })
// event.remove({ output: '#forge:gears/tin' })
// event.remove({ output: '#forge:gears/silver' })

event.remove({ id: TE('machine/pulverizer/pulverizer_cinnabar') })
event.remove({ id: TE('machine/smelter/smelter_alloy_signalum') })
event.remove({ id: TE('machine/smelter/smelter_alloy_lumium') })
event.remove({ id: TE('machine/smelter/smelter_alloy_electrum') })
event.remove({ id: TE('machine/smelter/smelter_alloy_enderium') })
event.remove({ id: TE('machine/smelter/smelter_alloy_invar') })
event.remove({ id: TE('machine/smelter/smelter_alloy_constantan') })
event.remove({ id: TE('machine/smelter/smelter_alloy_bronze') })

event.remove({ id: TE('compat/create/smelter_create_alloy_brass') })
event.remove({ id: TE('compat/tconstruct/smelter_alloy_tconstruct_rose_gold_ingot') })
event.remove({ id: TE('machine/pulverizer/pulverizer_ender_pearl') })
event.remove({ id: TE('storage/electrum_block') })
event.remove({ id: TE('storage/electrum_nugget_from_ingot') })
event.remove({ id: TE('machine/pulverizer/pulverizer_electrum_ingot_to_dust') })
event.remove({ id: TE('parts/electrum_gear') })
event.remove({ id: AP('smelting/charcoal_block_from_logs_that_burn_smoking') })
event.remove({ id: 'portality:generator' })
event.remove({ mod: 'pipez' })
event.remove({ mod: 'structurescompass' })

// event.remove({ input: TE('signalum_dust'), output: TE('signalum_ingot') })
// event.remove({ output: TE('signalum_dust'), input: TE('signalum_ingot') })

event.remove({ output: TE('lightning_charge') })
event.remove({ output: TE('ice_charge') })
event.remove({ output: TE('earth_charge') })
event.remove({ input: TE('lightning_charge') })
event.remove({ input: TE('ice_charge') })
event.remove({ input: TE('earth_charge') })

// event.remove({ input: "forbidden_arcanus:edelwood_bucket" })
// event.remove({ output: "forbidden_arcanus:edelwood_bucket" })

// native_metals.forEach(e => {
// 	event.remove({ type: MC("smelting"), input: F("#dusts/" + e) })
// 	event.remove({ type: MC("blasting"), input: F("#dusts/" + e) })
// 	event.remove({ type: TC("melting"), input: F("#dusts/" + e) })
// })

}

function tweaks(event) {

// rei显示神秘转化
MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('ae2:singularity', 'ae2:quantum_entangled_singularity'))
MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('create:chromatic_compound', 'create:shadow_steel'))
MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('create:chromatic_compound', 'create:refined_radiance'))

// 特殊风帆
let sails = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	event.smithing(Item.of(id, amount), 'create:white_sail', other_ingredient)
	event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'create:white_sail', B: other_ingredient })
}
sails('create_dd:smoking_sail', 1, MC('campfire'))
sails('create_dd:splashing_sail', 1, MC('water_bucket'))
sails('create_dd:haunting_sail', 1, MC('soul_campfire'))
sails('create_dd:blasting_sail', 1, MC('lava_bucket'))
sails('create_dd:freezing_sail', 1, MC('powder_snow_bucket'))

event.blasting(TE('coal_coke'), MC('coal'))

// 热力刷石机
let bedrock_cobblegen = (adjacent, output) => {
	event.custom({
		"type": "thermal:rock_gen",
		"adjacent": adjacent,
		"below": "minecraft:bedrock",
		"result": { "item": output }
	})
}

bedrock_cobblegen(MC("packed_ice"), MC("andesite"))
bedrock_cobblegen(AP("polished_packed_ice"), MC("granite"))
bedrock_cobblegen(AP("chiseled_packed_ice"), MC("diorite"))
bedrock_cobblegen(AP("packed_ice_pillar"), MC("dripstone_block"))
bedrock_cobblegen('chipped:blue_ice_1', CR("limestone"))
bedrock_cobblegen(FA("dark_rune_block"), FA("darkstone"))

// 前期优化游戏体验
event.replaceInput({ id: CR("crafting/kinetics/brass_hand") }, F('#plates/brass'), [CR('golden_sheet')])//黄铜手部件改金制手部件
event.replaceInput({ id: CR("crafting/kinetics/item_vault") }, F('#plates/iron'), TE('lead_plate'))//保险库

// 储存标签Labels
donutCraft(event, '8x labels:label', "#forge:dyes/black", MC("paper"))

// 垂泪藤，缠冤藤互相转换
donutCraft(event, MC("weeping_vines"), "forbidden_arcanus:rune", MC("twisting_vines"))
donutCraft(event, MC("twisting_vines"), "forbidden_arcanus:rune", MC("weeping_vines"))

//下界合金锯
event.smithing(KJ("netherite_saw"), ('cb_microblock:diamond_saw'), MC("netherite_ingot"))

//潜水靴
event.shaped(CR("copper_diving_boots"), [
	'P P',
	'P P',
	'S S'
], {
	P: MC("copper_ingot"),
	S: TE("lead_ingot")
})
//铜背罐
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
event.shaped(KJ("circuit_scrap", 2),
[" A ", "ABA", " A "], { A: TE("invar_ingot"), B: F("#circuit_press") })
event.recipes.createMilling(KJ("circuit_scrap"), F("#circuit_press"))

event.replaceInput({ output: CR('adjustable_chain_gearshift') }, CR('electron_tube'), MC('redstone'))
event.replaceInput({ id: CR("crafting/kinetics/filter") }, MC('#wool'), [IM('hemp_fabric'), MC('#wool')])//过滤器
event.replaceInput({ id: CR("crafting/kinetics/attribute_filter") }, MC('#wool'), [IM('hemp_fabric'), MC('#wool')])//属性过滤器
event.replaceInput({ id: "immersive_weathering:nulch_block" }, 'immersive_weathering:ash_layer_block', 'supplementaries:ash')//沃土
event.replaceInput({ id: "immersive_weathering:mulch_block" }, 'immersive_weathering:ash_layer_block', 'supplementaries:ash')//地狱沃土
event.replaceOutput({ id: AC("tin_can_to_iron_nugget") }, MC('iron_nugget'), TE('tin_nugget'))
event.replaceOutput({ id: AC("tin_can_to_iron_nugget_from_blasting") }, MC('iron_nugget'), TE('tin_nugget'))
event.replaceInput({ id: CR("mechanical_crafting/wand_of_symmetry") }, MC('ender_pearl'), CR('refined_radiance'))//对称之杖
event.replaceInput({ id: MC("hopper") }, F('#ingots/iron'), TE('lead_plate'))//漏斗

event.remove({ id: TE("augments/item_filter_augment") })
event.shapeless(TE("item_filter_augment"), [CR("filter"), TE("lapis_gear")])

//绳子
event.shapeless('supplementaries:rope', ['#supplementaries:ropes'])

//削弱刷铁轨收益
event.remove({ id: TC('smeltery/melting/metal/iron/nugget_3') })
event.remove({ id: TC('smeltery/melting/metal/gold/powered_rail') })
event.remove({ id: TC('smeltery/melting/metal/iron/ingot_1') })
event.recipes.createCrushing(
	[Item.of(MC("stick")).withChance(0.35), 
	Item.of(MC("iron_nugget")).withChance(0.05)], 
	MC('rail')).processingTime(250)
event.recipes.createCrushing(
	[Item.of(MC("stick")).withChance(0.35), 
	Item.of(MC("iron_nugget")).withChance(0.05)], 
	 MC('detector_rail')).processingTime(250)
event.recipes.createCrushing(
	[Item.of(MC("stick")).withChance(0.35), 
	Item.of(MC("iron_nugget")).withChance(0.05)], 
	MC('activator_rail')).processingTime(250)		 
event.recipes.createCrushing(
	[Item.of(MC("stick")).withChance(0.35), 
	Item.of(MC("gold_nugget")).withChance(0.05)], 
	MC('powered_rail')).processingTime(250)

//event.smoking('minecraft:cooked_chicken', 'chickens:chicken_item').xp(0.25)

event.recipes.createCrushing([Item.of(AC('neptunium_ingot', 2)), Item.of(AC('neptunium_nugget', 5)).withChance(.5)], AC('neptunes_bounty')).processingTime(500)

event.replaceInput({ id: "architects_palette:withered_bone_block" }, AP('withered_bone'), TC('necrotic_bone'))
event.remove({ id: "architects_palette:withered_bone" })

// event.remove({ output: TC('obsidian_pane') })
// event.shaped(TC('obsidian_pane', 8), [
// 		'SSS',
// 		'SSS'
// 	], {
// 		S: MC('obsidian')
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
	S: AE2('#crystals/fluix')
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

event.recipes.createCrushing([Item.of(TE("bitumen")), Item.of(TE("bitumen"), 2).withChance(0.75), Item.of(TE("tar"), 1).withChance(0.75), Item.of(MC("sand")).withChance(0.25)], TE("oil_sand"))
event.recipes.createCrushing([Item.of(TE("bitumen")), Item.of(TE("bitumen"), 2).withChance(0.75), Item.of(TE("tar"), 1).withChance(0.75), Item.of(MC("red_sand")).withChance(0.25)], TE("oil_red_sand"))

}

function waterstrainer(event) {
event.remove({ id: 'waterstrainer:string_mesh' })
event.remove({ id: 'waterstrainer:iron_mesh' })
event.remove({ id: 'waterstrainer:obsidian_mesh' })
event.remove({ id: 'waterstrainer:strainer_survivalist' })
event.remove({ id: 'waterstrainer:strainer_survivalist_solid' })
event.remove({ id: 'waterstrainer:strainer_survivalist_reinforced' })
event.remove({ id: 'waterstrainer:strainer_fisherman' })
event.remove({ id: 'waterstrainer:strainer_fisherman_solid' })
event.remove({ id: 'waterstrainer:strainer_fisherman_reinforced' })

event.shaped('waterstrainer:strainer_survivalist', [
	'SSS',
	'MMM',
	'SSS'
], {
	M: FD('canvas'),
	S: 'minecraft:stick'
})

event.shaped('waterstrainer:strainer_fisherman', [
	'SSS',
	'MMM',
	'SSS'
], {
	M: FD('canvas'),
	S: MC('bamboo')
})

event.shaped('waterstrainer:strainer_fisherman_reinforced', [
	'SSS',
	'MAM',
	'SSS'
], {
	A: AC('neptunium_ingot'),
	M: FD('canvas'),
	S: MC('bamboo')
})
}

function project_red(event) {
	let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']

	event.remove({ output: PR_C('red_ingot') })
	event.remove({ output: PR_C('red_iron_comp') })
	event.remove({ input: PR_C('plate') })
	event.remove({ mod: 'projectred_illumination' })
	event.remove({ id: PR_T('red_alloy_wire') })

	//红石合金锭
	event.recipes.createCompacting([PR_C('red_ingot')], [MC('copper_ingot'), Fluid.of(TE("redstone"), 250)])
	event.recipes.createCompacting([PR_C('red_ingot')], [MC('copper_ingot'), MC("redstone"), MC("redstone"), MC("redstone"), MC("redstone")])
	event.recipes.thermal.smelter(PR_C('red_ingot'), [MC("copper_ingot"), MC("redstone")])

    //红石合金导线
	event.recipes.createCompacting([PR_T('red_alloy_wire', 4)], ['createaddition:copper_wire', Fluid.of(TE("redstone"), 250)])
	event.recipes.createCompacting([PR_T('red_alloy_wire', 4)], ['createaddition:copper_wire', MC("redstone"), MC("redstone"), MC("redstone"), MC("redstone")])
	event.recipes.thermal.smelter(PR_T('red_alloy_wire', 4), ['createaddition:copper_wire', MC("redstone")])
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": "projectred_core:red_ingot"
		},
		"result": {
			"item": "projectred_transmission:red_alloy_wire",
			"count": 4
		}
	})

	// event.recipes.immersiveengineeringMetalPress(
	// 	"4x projectred_transmission:red_alloy_wire",
	// 	"projectred_core:red_ingot",
	// 	"immersiveengineering:mold_wire"
	// )
	// event.shapeless("4x projectred_transmission:red_alloy_wire", [
	// 	"projectred_core:red_ingot",
	// 	Item.of("immersiveengineering:wirecutter").ignoreNBT(),
	// ]);

	event.shapeless(PR_C('platformed_plate'), [PR_C('plate'), PR_T('red_alloy_wire'), CR("andesite_alloy")])

	let convert = (c, id) => {
		event.shapeless(PR_I(c + "_inverted" + id), [PR_I(c + id)])
		event.shapeless(PR_I(c + id), [PR_I(c + "_inverted" + id)])
	}

	colours.forEach(c => {
		event.shaped(PR_I(c + '_illumar_lamp', 1), [
			'G',
			'C',
			'S'
		], {
			G: F('#glass/colorless'),
			C: PR_C(c + '_illumar'),
			S: MC('redstone')
		})

		event.stonecutting(PR_I(c + '_fixture_light', 4), PR_I(c + '_illumar_lamp'))
		event.stonecutting(PR_I(c + '_fallout_light', 4), PR_I(c + '_illumar_lamp'))
		event.stonecutting(PR_I(c + '_lantern', 4), PR_I(c + '_illumar_lamp'))
		event.stonecutting(PR_I(c + '_cage_light', 4), PR_I(c + '_illumar_lamp'))
		convert(c, '_illumar_lamp')
		convert(c, '_fallout_light')
		convert(c, '_lantern')
		convert(c, '_cage_light')
		convert(c, '_fixture_light')
	})

	let circuit = (id, override) => {
		if (override)
			event.remove({ output: id })
		event.stonecutting(Item.of(id, 1), PR_C('platformed_plate'))
	}

	let p_circuit = (id) => circuit("projectred_integration:" + id + "_gate", true)

	circuit(MC("repeater"), false)
	circuit(MC("comparator"), false)
	circuit(CR("pulse_repeater"), true)
	circuit(CR("powered_latch"), true)
	circuit(CR("powered_toggle_latch"), true)
	circuit('createaddition:redstone_relay', true)
	circuit('quark:redstone_randomizer', true)

	p_circuit("or")
	p_circuit("nor")
	p_circuit("not")
	p_circuit("and")
	p_circuit("nand")
	p_circuit("xor")
	p_circuit("xnor")
	p_circuit("buffer")
	p_circuit("multiplexer")
	p_circuit("pulse")
	p_circuit("repeater")
	p_circuit("randomizer")
	p_circuit("sr_latch")
	p_circuit("toggle_latch")
	p_circuit("transparent_latch")
	p_circuit("light_sensor")
	p_circuit("rain_sensor")
	p_circuit("timer")
	p_circuit("sequencer")
	p_circuit("counter")
	p_circuit("state_cell")
	p_circuit("synchronizer")
	p_circuit("bus_transceiver")
	p_circuit("null_cell")
	p_circuit("invert_cell")
	p_circuit("buffer_cell")
	p_circuit("comparator")
	p_circuit("and_cell")
	p_circuit("bus_randomizer")
	p_circuit("bus_converter")
	p_circuit("bus_input_panel")
	p_circuit("stacking_latch")
	p_circuit("segment_display")
	p_circuit("dec_randomizer")
	
}

function casing(event) {
let tweak_casing = (output, input1, input2) => {
    event.remove({ output: output })
    event.recipes.create.itemApplication(output, [input2, input1])
}
tweak_casing(CR('andesite_casing'), 'create:andesite_alloy', '#forge:stripped_wood')
tweak_casing(CR('andesite_casing'), 'create:andesite_alloy', '#forge:stripped_logs')
tweak_casing(CR('copper_casing'), 'minecraft:copper_ingot', '#forge:treated_wood')
tweak_casing(CR('brass_casing'), 'create:brass_ingot', '#forge:treated_wood')
tweak_casing('create_dd:overburden_casing', 'create_dd:lapis_sheet', 'create:andesite_casing')
tweak_casing('kubejs:matter_casing', '#materialis:plastic_material', 'create_dd:steel_casing')
tweak_casing('kubejs:zinc_casing', 'create:zinc_ingot', '#forge:stone')
tweak_casing('kubejs:invar_casing', 'thermal:invar_ingot', 'minecraft:basalt')
tweak_casing('kubejs:enderium_casing', 'minecraft:ender_pearl', '#forge:obsidian')
tweak_casing('kubejs:fluix_casing', 'thermal:lead_ingot', 'minecraft:blackstone')
tweak_casing('create_dd:refined_radiance_casing', 'create:refined_radiance', '#create_dd:glow_base')
tweak_casing('create_dd:shadow_steel_casing', 'create:shadow_steel', '#forge:obsidian')
}

function computercraft(event) {

event.remove({ id: "computercraft:turtle_advanced" })
event.remove({ id: "computercraft:turtle_advanced_upgrade" })
event.remove({ id: "computercraft:turtle_normal" })

//海龟
event.smithing("computercraft:turtle_normal", "computercraft:computer_normal", TE("invar_gear"))
event.smithing("computercraft:turtle_advanced", "computercraft:computer_advanced", TE("invar_gear"))
event.recipes.createMechanicalCrafting("computercraft:turtle_normal", "AB", { A: "computercraft:computer_normal", B: TE("invar_gear") })
event.recipes.createMechanicalCrafting("computercraft:turtle_advanced", "AB", { A: "computercraft:computer_advanced", B: TE("invar_gear") })
event.shaped("computercraft:turtle_advanced", [
	'SSS',
	'SMS',
	'S S'
], {
	M: "computercraft:turtle_normal",
	S: TE('netherite_plate')
})


event.remove({ id: "computercraft:computer_normal" })
event.remove({ id: "computercraft:computer_advanced" })
event.remove({ id: "computercraft:computer_advanced_upgrade" })
event.remove({ id: "computercraft:pocket_computer_normal" })
event.remove({ id: "computercraft:pocket_computer_advanced" })
event.remove({ id: "computercraft:pocket_computer_advanced_upgrade" })

//电脑
event.shaped("computercraft:computer_normal", [
	'SSS',
	'SMS',
	'S S'
], {
	M: KJ('zinc_machine'),
	S: 'create_dd:lapis_sheet'
})
event.shaped("computercraft:computer_advanced", [
	'SSS',
	'SMS',
	'S S'
], {
	M: "computercraft:computer_normal",
	S: TE('netherite_plate')
})
event.shaped("computercraft:computer_advanced", [
	'SSS',
	'SMS',
	'S S'
], {
	M: KJ('zinc_machine'),
	S: TE('netherite_plate')
})
//掌上电脑
event.shaped("computercraft:pocket_computer_normal", [
	'SSS',
	'SMS',
	'SAS'
], {
	M: KJ('zinc_machine'),
	S: 'create_dd:lapis_sheet',
	A: MC('golden_apple'),
})
event.shaped("computercraft:pocket_computer_advanced", [
	'SSS',
	'SMS',
	'S S'
], {
	M: "computercraft:pocket_computer_normal",
	S: TE('netherite_plate')
})
event.shaped("computercraft:pocket_computer_advanced", [
	'SSS',
	'SMS',
	'SAS'
], {
	M: KJ('zinc_machine'),
	S: TE('netherite_plate'),
	A: MC('golden_apple'),
})




}

function tomsstorage(event) {
event.remove({ output: 'toms_storage:ts.wireless_terminal' })
event.remove({ output: 'toms_storage:ts.adv_wireless_terminal' })
	
event.replaceInput({ id: "toms_storage:inventory_connector" }, MC("#planks"), CR("brass_ingot"))
event.replaceInput({ id: "toms_storage:trim" }, MC("#planks"), CR("brass_ingot"))
event.replaceInput({ id: "toms_storage:inventory_proxy" }, MC("#planks"), CR("brass_ingot"))
event.replaceInput({ id: "toms_storage:inventory_cable_connector" }, MC("#planks"), CR("brass_ingot"))
event.replaceInput({ id: "toms_storage:inventory_hopper_basic" }, MC("#planks"), CR("brass_ingot"))
event.replaceInput({ id: "toms_storage:level_emitter" }, MC("#planks"), CR("brass_ingot"))
}

function drawersop(event) {
	let drawer_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'warped', 'crimson']
	let drawer_sizes = ['1', '2', '4']
	event.replaceInput({ id: SD('compacting_drawers_3') }, MC('iron_ingot'), CR('zinc_ingot'))
	event.remove({ output: SD("upgrade_template") })

	drawer_types.forEach(e => {

		let trim = SD(`${e}_trim`)
		let plank = MC(`${e}_planks`)
		event.remove({ id: trim })
		event.shaped(Item.of(trim, 4), [
			'SSS',
			'PMP',
			'SSS'
		], {
			P: CR('zinc_ingot'),
			M: '#forge:chests/wooden',
			S: plank
		})

		event.stonecutting(SD("upgrade_template"), trim)

		drawer_sizes.forEach(size => {
			let full = SD(`${e}_full_drawers_${size}`)
			let half = SD(`${e}_half_drawers_${size}`)
			event.remove({ id: full })
			event.remove({ id: half })
			event.stonecutting(full, trim)
			event.stonecutting(Item.of(half, 2), trim)
		})
	})

}

function pipes(event) {

	event.remove({ output: PP('pipe') })
	event.remove({ output: PP('blank_module') })
	event.remove({ output: 'pipez:item_pipe' })
	event.remove({ output: 'pipez:fluid_pipe' })
	event.remove({ output: 'pipez:gas_pipe' })
	event.remove({ output: 'pipez:energy_pipe' })
	event.remove({ output: 'pipez:universal_pipe' })
	
		event.shaped(PP("pipe", 8), [
			'PMP'
		], {
			P: CR('brass_sheet'),
			M: CR('brass_ingot')
		})
	
		event.shaped("8x pipez:energy_pipe", [
			'PMP'
		], {
			P: TE('invar_ingot'),
			M: MC('redstone')
		})
	
		// event.shaped("8x pipez:gas_pipe", [
		// 	'PMP'
		// ], {
		// 	P: 'create_dd:steel_ingot',
		// 	M: 'mekanism:ingot_osmium'
		// })
	
		let module = (type, result) => {
			event.remove({ output: PP(result) })
			event.stonecutting(PP(result), 'kubejs:pipe_module_' + type)
		}
	
		module('utility', 'filter_increase_modifier')
		module('utility', 'tag_filter_modifier')
		module('utility', 'mod_filter_modifier')
		module('utility', 'nbt_filter_modifier')
		module('utility', 'damage_filter_modifier')
		module('utility', 'round_robin_sorting_modifier')
		module('utility', 'random_sorting_modifier')
		module('utility', 'redstone_module')
		module('utility', 'stack_size_module')
		module('utility', 'low_high_priority_module')
		module('utility', 'medium_high_priority_module')
		module('utility', 'high_high_priority_module')
		module('utility', 'low_low_priority_module')
		module('utility', 'medium_low_priority_module')
		module('utility', 'high_low_priority_module')
	
		let tiers = ['low', 'medium', 'high']
		for (var i = 0; i < tiers.length; i++) {
			let tier = 'tier_' + (i + 1)
			let prefix = tiers[i] + "_"
			module(tier, prefix + 'extraction_module')
			module(tier, prefix + 'retrieval_module')
			module(tier, prefix + 'speed_module')
			module(tier, prefix + 'filter_module')
			module(tier, prefix + 'crafting_module')
		}
	
}

function leather(event) {
//鞣制皮革
donutCraft(event, '8x minecraft:leather', 'thermal:niter_dust', MC("rotten_flesh"))

//腐肉制取
event.recipes.createHaunting([Item.of("minecraft:rotten_flesh")], '#forge:foods/meat/raw')

//缝纫线轴
donutCraft(event, KJ('sewing_spool'), 'createaddition:spool', MC("string"))

//空白背包升级
event.remove({ id: 'sophisticatedbackpacks:upgrade_base' })
let transitional = 'kubejs:incomplete_upgrade_base'
	event.recipes.createSequencedAssembly([
		Item.of('sophisticatedbackpacks:upgrade_base'),
	], '#forge:leather', [
		event.recipes.createDeploying(transitional, [transitional, F('#leather')]),
		event.recipes.createDeploying(transitional, [transitional, F('#sewing_spool')])
	]).transitionalItem(transitional)
		.loops(3)
		.id('kubejs:backpack_upgrade_base')
}

function backpack(event) {
//初级背包
event.remove({ output: 'sophisticatedbackpacks:backpack' })
event.shaped('sophisticatedbackpacks:backpack', [
	'SSS',
	'BCB',
	'SSS'

], {
	C: F('#chests/wooden'),
	B: CR('golden_sheet'),
	S: 'sophisticatedbackpacks:upgrade_base'
})
//铁背包
event.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
event.custom({
	"type": "sophisticatedbackpacks:backpack_upgrade",
	"conditions": [
	  {
		"itemRegistryName": "sophisticatedbackpacks:iron_backpack",
		"type": "sophisticatedcore:item_enabled"
	  }
	],
	"pattern": [
	  "SSS",
	  "IBI",
	  "SSS"
	],
	"key": {
	  "I": {
		"tag": "forge:ingots/iron"
	  },
	  "B": {
		"item": "sophisticatedbackpacks:backpack"
	  },
	  "S": {
		"item": "sophisticatedbackpacks:upgrade_base"
	  }
	},
	"result": {
	  "item": "sophisticatedbackpacks:iron_backpack"
	}
})
//金背包
event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
event.custom({
	"type": "sophisticatedbackpacks:backpack_upgrade",
	"conditions": [
	  {
		"itemRegistryName": "sophisticatedbackpacks:gold_backpack",
		"type": "sophisticatedcore:item_enabled"
	  }
	],
	"pattern": [
	  "SSS",
	  "IBI",
	  "SSS"
	],
	"key": {
	  "I": {
		"item": "create:golden_sheet"
	  },
	  "B": {
		"item": "sophisticatedbackpacks:iron_backpack"
	  },
	  "S": {
		"item": "sophisticatedbackpacks:upgrade_base"
	  }
	},
	"result": {
	  "item": "sophisticatedbackpacks:gold_backpack"
	}
})
//钻石背包
event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
event.custom({
	"type": "sophisticatedbackpacks:backpack_upgrade",
	"conditions": [
	  {
		"itemRegistryName": "sophisticatedbackpacks:diamond_backpack",
		"type": "sophisticatedcore:item_enabled"
	  }
	],
	"pattern": [
	  "SSS",
	  "IBI",
	  "SSS"
	],
	"key": {
	  "I": {
		"item": "thermal:diamond_gear"
	  },
	  "B": {
		"item": "sophisticatedbackpacks:gold_backpack"
	  },
	  "S": {
		"item": "sophisticatedbackpacks:upgrade_base"
	  }
	},
	"result": {
	  "item": "sophisticatedbackpacks:diamond_backpack"
	}
})
}

function barrels(event) {
event.remove({ mod: "metalbarrels" })

let smithAndMechCraft = (r, i1, i2) => {
	event.smithing(r, i1, i2)
	event.recipes.createMechanicalCrafting(r, "AB", { A: i1, B: i2 })
}

event.remove({ id: TE("dynamo_gourmand") })
smithAndMechCraft(TE("dynamo_gourmand"), TE("dynamo_stirling"), [MC("golden_carrot")])
smithAndMechCraft(TE("dynamo_gourmand"), TE("dynamo_stirling"), [MC("golden_apple")])
event.remove({ id: TE("dynamo_lapidary") })
smithAndMechCraft(TE("dynamo_lapidary"), TE("dynamo_numismatic"), [TE("lapis_gear")])
event.remove({ id: TE("dynamo_disenchantment") })
smithAndMechCraft(TE("dynamo_disenchantment"), TE("dynamo_compression"), ["forbidden_arcanus:rune"])

smithAndMechCraft("metalbarrels:copper_barrel", MC("barrel"), F("#ingots/strong_bronze"))
smithAndMechCraft("metalbarrels:iron_barrel", MC("barrel"), "moreminecarts:silica_steel")
smithAndMechCraft("metalbarrels:silver_barrel", MC("barrel"), "forbidden_arcanus:rune")
smithAndMechCraft("metalbarrels:gold_barrel", MC("barrel"), TC("cobalt_ingot"))
// tips待更新

event.shapeless("metalbarrels:wood_to_copper", ["metalbarrels:copper_barrel"])
event.shapeless("metalbarrels:wood_to_iron", ["metalbarrels:iron_barrel"])
event.shapeless("metalbarrels:wood_to_silver", ["metalbarrels:silver_barrel"])
event.shapeless("metalbarrels:wood_to_gold", ["metalbarrels:gold_barrel"])
}

// function alloys(event) {
// tips
// }


function algalAndesite(event) {
event.remove({ id: TC('compat/create/andesite_alloy_iron') })
event.remove({ id: CR('crafting/materials/andesite_alloy') })
event.remove({ id: CR('crafting/materials/andesite_alloy_from_zinc') })
event.remove({ id: CR('mixing/andesite_alloy') })
event.remove({ id: CR('mixing/andesite_alloy_from_zinc') })
event.remove({ id: TE('compat/create/smelter_create_alloy_andesite_alloy') })
event.remove({ id: TE('compat/create/smelter_create_alloy_andesite_alloy') })
event.remove({ id: TC('compat/create/andesite_alloy_zinc') })
event.remove({ id: TC('compat/create/andesite_alloy_iron') })
event.remove({ id: 'create_dd:industrial_iron/andesite_alloy' })
event.remove({ id: 'create_dd:industrial_iron/andesite_alloy_mixing' })

event.remove({ output: AP('algal_brick') })
event.smelting(AP('algal_brick'), AP('algal_blend')).xp(0).cookingTime(120)
event.remove({ id: AP('algal_blend') })

event.shaped(Item.of(AP('algal_blend'), 4), [
	'SS',
	'AA'
], {
	A: 'minecraft:clay_ball',
	S: ['minecraft:kelp', 'minecraft:seagrass']
})
event.shaped(Item.of(AP('algal_blend'), 4), [
	'AA',
	'SS'
], {
	A: 'minecraft:clay_ball',
	S: ['minecraft:kelp', 'minecraft:seagrass']
})
event.shaped(Item.of(MC('andesite'), 2), [
	'SS',
	'AA'
], {
	A: ['minecraft:andesite', MC('andesite')],
	S: AP('algal_brick')
})
event.shaped(Item.of(CR('andesite_alloy'), 2), [
	'AA',
	'SS'
], {
	A: ['minecraft:andesite', MC('andesite')],
	S: AP('algal_brick')
})

// 双倍
event.shaped(Item.of(AP('algal_blend'), 8), [
	'SS',
	'AA'
], {
	A: 'minecraft:clay_ball',
	S: 'upgrade_aquatic:polar_kelp'
})
event.shaped(Item.of(AP('algal_blend'), 8), [
	'AA',
	'SS'
], {
	A: 'minecraft:clay_ball',
	S: 'upgrade_aquatic:polar_kelp'
})

event.recipes.createMixing(Item.of(AP('algal_blend'), 2), ['minecraft:clay_ball', ['minecraft:kelp', 'minecraft:seagrass']])
event.recipes.createMixing(Item.of(CR('andesite_alloy'), 2), [AP('algal_brick'), ['minecraft:andesite', MC('andesite')]])
event.recipes.createMixing(Item.of(AP('algal_blend'), 8), ['minecraft:clay_ball', 'upgrade_aquatic:polar_kelp'])

//tips可以给后期时增加新配方

}

function andesiteMachine(event) {

event.replaceInput({ id: CR("crafting/kinetics/brass_hand") }, '#forge:plates/brass', CR('golden_sheet'))

wood_types.forEach(wood => {
	event.recipes.createCutting(['2x ' + wood + '_slab'], wood + '_planks').processingTime(50)
})
// tips这个待翻新

// 前期配方
let transitional = 'kubejs:incomplete_kinetic_mechanism'
event.recipes.createSequencedAssembly([
	'kubejs:kinetic_mechanism',
], '#minecraft:wooden_slabs', [
	event.recipes.createDeploying(transitional, [transitional, CR('andesite_alloy')]),
	event.recipes.createDeploying(transitional, [transitional, CR('andesite_alloy')]),
	event.recipes.createDeploying(transitional, [transitional, F('#saws')])
]).transitionalItem(transitional)
	.loops(1)
	.id('kubejs:kinetic_mechanism')

// 中期配方
let transitional2 = 'kubejs:incomplete_kinetic_mechanism'
event.recipes.createSequencedAssembly([
	'kubejs:kinetic_mechanism',
], ['#minecraft:wooden_slabs', 'tconstruct:pattern'], [
	event.recipes.createDeploying(transitional2, [transitional2, KJ('andesite_alloy_gear')]),
]).transitionalItem(transitional2)
	.loops(1)
	.id('kubejs:kinetic_mechanism2')

// 无序合成
event.shapeless(KJ('kinetic_mechanism'), [
	F('#saws'), 
	CR('cogwheel'), 
	CR('andesite_alloy'), 
	'#minecraft:logs'
]).id("kubejs:kinetic_mechanism_manual_only")
// .damageIngredient(Item.of(KJ('stone_saw')))
// .damageIngredient(Item.of(KJ('iron_saw')))
// .damageIngredient(Item.of(KJ('diamond_saw')))
.damageIngredient(Item.of(KJ('netherite_saw')))
.damageIngredient(Item.of('#forge:saws'))
.damageIngredient(Item.of('create_dd:deforester_saw'))

// Andesite
event.shaped(KJ('andesite_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: CR('andesite_casing'),
	S: KJ('kinetic_mechanism')
})

let andesite_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:andesite_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:andesite_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:andesite_machine')
}

event.remove({ output: TE('drill_head') })
event.shaped(TE('drill_head'), [
	'NN ',
	'NLP',
	' PL'
], {
	N: MC('iron_nugget'),
	P: CR('iron_sheet'),
	L: TE('lead_ingot')
})

event.remove({ output: TE('saw_blade') })
event.shaped(TE('saw_blade'), [
	'NPN',
	'PLP',
	'NPN'
], {
	N: MC('iron_nugget'),
	P: CR('iron_sheet'),
	L: TE('lead_ingot')
})

andesite_machine('create:portable_storage_interface', 2)
andesite_machine('create:encased_fan', 1, CR('propeller'))
andesite_machine('create:mechanical_press', 1, MC('iron_block'))
andesite_machine('waterstrainer:strainer_base', 1, MC('iron_bars'))
andesite_machine('create:mechanical_mixer', 1, CR('whisk'))
andesite_machine('create:mechanical_drill', 1, TE('drill_head'))
andesite_machine('create:mechanical_saw', 1, TE('saw_blade'))
andesite_machine('create:deployer', 1, CR('brass_hand'))
andesite_machine('create:mechanical_harvester', 2)
andesite_machine('create:mechanical_plough', 2)
andesite_machine('thermal:device_tree_extractor', 1, MC('bucket'))
andesite_machine(AE2('sky_compass'), 1, AE2('charged_certus_quartz_crystal'))
andesite_machine(AE2('charger'), 1, AE2('fluix_crystal'))
andesite_machine('thermal:dynamo_stirling', 1, TE('rf_coil'))
andesite_machine('create:andesite_funnel', 4)
andesite_machine('create:andesite_tunnel', 4)
andesite_machine('kubejs:pipe_module_utility', 4)
andesite_machine('create:mechanical_roller', 1, CR('crushing_wheel'))
andesite_machine('create:contraption_controls', 1, MC('#buttons'))
andesite_machine('create:rope_pulley', 1, SP('#ropes'))
andesite_machine('createaddition:rolling_mill', 1, ('create:shaft'))
andesite_machine('vintageimprovements:spring_coiling_machine', 1, ('vintageimprovements:spring_coiling_machine_wheel'))
andesite_machine('vintageimprovements:vibrating_table', 1, ('vintageimprovements:iron_spring'))
andesite_machine('vintageimprovements:belt_grinder', 1, ('vintageimprovements:grinder_belt'))
andesite_machine('vintageimprovements:centrifuge', 1)
andesite_machine('create_dd:kinetic_motor', 1, ('createaddition:copper_spool'))

event.remove({ output: 'create_dd:bronze_saw' })	
event.smithing('create_dd:bronze_saw', 'create:mechanical_saw', 'create_dd:bronze_casing')
event.recipes.createMechanicalCrafting('create_dd:bronze_saw', "AB", { A: 'create:mechanical_saw', B: 'create_dd:bronze_casing' })
event.remove({ output: 'create_dd:bronze_drill' })	
event.smithing('create_dd:bronze_drill', 'create:mechanical_drill', 'create_dd:bronze_casing')
event.recipes.createMechanicalCrafting('create_dd:bronze_drill', "AB", { A: 'create:mechanical_drill', B: 'create_dd:bronze_casing' })

}


let float_and_lights = (event, item) => { // 光辉石漂浮效果
    if (event.entity.type == 'minecraft:item' && event.entity.item == item) {
        event.entity.noGravity = true
        event.server.runCommandSilent(`particle minecraft:end_rod ${event.entity.x} ${event.entity.y} ${event.entity.z} 0 0 0 0.01 1 force`)
    }
}

onEvent('entity.spawned', event => {
    float_and_lights(event, KJ("radiant_coil"))
	float_and_lights(event, KJ("radiant_wire"))
	float_and_lights(event, KJ("radiant_rod"))
	float_and_lights(event, KJ("shadow_rod"))
})