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

	rubberMatters(event)
	copperMachine(event)

	electronTube(event)
	redstoneTransmute(event)
	brassMachine(event)

	zincMachine(event)

	obsidianMachine(event)

	radiant_coil(event)
	invarMachine(event)
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
tweak_casing(CR('copper_casing'), 'minecraft:copper_ingot', '#forge:stripped_wood')
tweak_casing(CR('copper_casing'), 'minecraft:copper_ingot', '#forge:stripped_logs')
tweak_casing(CR('brass_casing'), 'create:brass_ingot', '#forge:stripped_wood')
tweak_casing(CR('brass_casing'), 'create:brass_ingot', '#forge:stripped_logs')
tweak_casing('create_dd:overburden_casing', 'create_dd:lapis_sheet', 'create:andesite_casing')
tweak_casing('kubejs:matter_casing', 'kubejs:matter_plastics', 'create_dd:steel_casing')
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

// 安山合金齿轮
event.custom({
	"type": "vintageimprovements:curving",
	"itemAsHead": "thermal:press_gear_die",
	"ingredients": [
		{
		  "item": "create:andesite_alloy"
		}
	],
	"results": [
		{
		  "item": "kubejs:andesite_alloy_gear"
		}
	]
})
// 无序合成
event.shapeless(KJ('andesite_alloy_gear'), [
	F('#saws'), 
	CR('andesite_alloy'), 
	CR('andesite_alloy')
]).id("kubejs:andesite_alloy_gear_manual_only")
.damageIngredient(Item.of(KJ('netherite_saw')))
.damageIngredient(Item.of('#forge:saws'))
.damageIngredient(Item.of('create_dd:deforester_saw'))

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


function rubberMatters(event) {
event.remove({ id: 'thermal:rubber_3' })
event.remove({ id: 'thermal:rubber_from_dandelion' })
event.remove({ id: 'thermal:rubber_from_vine' })
event.remove({ id: /create_dd:emptying\/sap_from_.*/ })
event.remove({ id: 'create_dd:mixing/rubber' })
event.remove({ id: 'create_dd:compacting/crystallized_sap' })
event.remove({ input: 'create_dd:raw_rubber' })
event.remove({ input: 'create_dd:rubber' })


let overrideTreeOutput = (id, trunk, leaf, fluid, count) => {
	event.remove({ id: id })
	event.custom({
		"type": "thermal:tree_extractor",
		"trunk": trunk,
		"leaves": leaf,
		"result": {
			"fluid": fluid,
			"amount": count
	}
});
}

overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_jungle'), MC('jungle_log'), MC('jungle_leaves'), "thermal:resin", 25)
overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_spruce'), MC('spruce_log'), MC('spruce_leaves'), "thermal:resin", 25)
overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_dark_oak'), MC('dark_oak_log'), MC('dark_oak_leaves'), "thermal:resin", 25)
overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_acacia'), MC('acacia_log'), MC('acacia_leaves'), "thermal:resin", 35)
overrideTreeOutput(TE('compat/biomesoplenty/tree_extractor_bop_maple'), MC('oak_log'), 'biomesoplenty:maple_leaves', "thermal:syrup", 25)
overrideTreeOutput("", 'create_dd:rubber_log', 'create_dd:rubber_leaves', "thermal:resin", 50)


event.remove({ id: CR('crafting/kinetics/belt_connector') })
event.shaped(CR('belt_connector', 3), [
	'SSS',
	'SSS'
], {
	S: TE('cured_rubber')
})

event.recipes.createMixing('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), F("#vines", 4)])
event.recipes.createMixing('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), '4x #minecraft:flowers'])
event.recipes.createMixing('1x ' + TE("rubber"), [Fluid.of(TE('resin'), 250)])
event.recipes.createCompacting('1x ' + CRD("crystallized_sap"), [Fluid.of(TE('resin'), 500)])

event.recipes.createEmptying(Fluid.of(TE("resin"), 500), CRD("crystallized_sap"))
}

function copperMachine(event) {

let t = KJ('incomplete_sealed_mechanism')
event.recipes.createSequencedAssembly([
	KJ('sealed_mechanism'),
], KJ('kinetic_mechanism'), [
	event.recipes.createDeploying(t, [t, TE('cured_rubber')]),
	event.recipes.createDeploying(t, [t, TE('cured_rubber')]),
	// event.recipes.createDeploying(t, [t, F('#super_glues')])
]).transitionalItem(t)
	.loops(1)
	.id('kubejs:sealed_mechanism')

event.shaped(KJ('sealed_mechanism'), [
	'SCS'
], {
	C: KJ('kinetic_mechanism'),
	S: TE('cured_rubber')
})

event.custom({
	"type":"vintageimprovements:vacuumizing",
	"ingredients": [ 
		{
			"item": "kubejs:kinetic_mechanism"
		},
		{
			"item": "thermal:cured_rubber"
		},
		{
			"item": "thermal:cured_rubber"
		}
	],
	"results": [
		{
			"item": "kubejs:sealed_mechanism",
			"count": 1
		}
	],
	"processingTime": 200
})


event.shaped(KJ('copper_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: CR('copper_casing'),
	S: KJ('sealed_mechanism')
})

//治炼炉核心
event.remove({ id: TC("smeltery/casting/seared/smeltery_controller") })
event.remove({ id: TC("smeltery/melting/copper/smeltery_controller") })
donutCraft(event, TC('smeltery_controller'), TC('seared_bricks'), KJ('sealed_mechanism'))

let copper_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:copper_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:copper_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:copper_machine')
}

copper_machine('create:copper_backtank', 1, MC("copper_block"))
copper_machine('create:portable_fluid_interface', 2)
copper_machine('create:spout', 1, MC('hopper'))
copper_machine('thermal:upgrade_augment_1', 1, MC('redstone'))
copper_machine('create:hose_pulley', 1)
copper_machine('create:item_drain', 1, MC("iron_bars"))
copper_machine('thermal:dynamo_magmatic', 1, TE('rf_coil'))
copper_machine('thermal:device_water_gen', 1, MC('bucket'))
copper_machine('create:smart_fluid_pipe', 2)
copper_machine('vintageimprovements:vacuum_chamber', 1, CR('mechanical_pump'))
copper_machine('create_enchantment_industry:disenchanter', 1, CR('#sandpaper'))
copper_machine('create_enchantment_industry:printer', 1, F('#plates/iron'))
copper_machine('create:steam_engine', 1, 'createdieselgenerators:engine_piston')
copper_machine('create:steam_whistle', 1, F('#plates/gold'))
copper_machine('cookingforblockheads:sink', 1, MC('heart_of_the_sea'))
copper_machine('create_dd:hydraulic_press', 1, 'create_dd:reinforcement_plating')

event.remove({ output: 'createdieselgenerators:pumpjack_hole' })
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "kubejs:copper_machine"
		}
	],
	"results": [
		{
			"item": "createdieselgenerators:pumpjack_hole",
			"count": 1
		}
	]
})

}

function electronTube(event) {

event.recipes.createFilling(CR("electron_tube"), [CR('polished_rose_quartz'), Fluid.of(TC('molten_iron'), 20)])

let redstone = MC('redstone')
event.shapeless('create:rose_quartz', [[MC('quartz'), KJ('purified_nether_quartz_crystal') , AE2('certus_quartz_crystal'), AE2('charged_certus_quartz_crystal')], redstone, redstone, redstone, redstone])

event.remove({ id: CR('compat/ae2/milling/sky_stone_block') })
event.remove({ id: CR('compat/ae2/milling/nether_quartz') })
event.remove({ id: CR('compat/ae2/milling/certus_quartz') })
event.remove({ id: CR('crafting/materials/electron_tube') })
event.remove({ id: CR('crafting/materials/rose_quartz') })

event.recipes.createMechanicalCrafting(Item.of(AE2('certus_crystal_seed'), 2), ['A'], { A: F('#gems/certus_quartz') })
event.recipes.createMechanicalCrafting(Item.of(AE2('fluix_crystal_seed'), 2), ['A'], { A: F('#gems/fluix') })
event.recipes.createMechanicalCrafting(Item.of(KJ('nether_seed'), 2), ['A'], { A: F('#gems/quartz') })

let grow = (from, via, to) => {
	event.recipes.createSequencedAssembly([to], from, [
		event.recipes.createFilling(via, [via, Fluid.of(MC("water"), 500)]),
	]).transitionalItem(via)
		.loops(4)
		.id('kubejs:grow_' + to.split(':')[1])
}

grow(AE2("certus_crystal_seed"), KJ('growing_certus_seed'), KJ('tiny_certus_crystal'))
grow(AE2("fluix_crystal_seed"), KJ('growing_fluix_seed'), KJ('tiny_fluix_crystal'))
grow(KJ("nether_seed"), KJ('growing_nether_seed'), KJ('tiny_nether_crystal'))
// grow(KJ("arcane_crystal_seed"), KJ('growing_arcane_seed'), KJ('tiny_arcane_crystal'))

grow(KJ("tiny_certus_crystal"), KJ('growing_tiny_certus_crystal'), KJ('small_certus_crystal'))
grow(KJ("tiny_fluix_crystal"), KJ('growing_tiny_fluix_crystal'), KJ('small_fluix_crystal'))
grow(KJ("tiny_nether_crystal"), KJ('growing_tiny_nether_crystal'), KJ('small_nether_crystal'))
// grow(KJ("tiny_arcane_crystal"), KJ('growing_tiny_arcane_crystal'), KJ('small_arcane_crystal'))

grow(KJ("small_certus_crystal"), KJ('growing_small_certus_crystal'), KJ('purified_certus_quartz_crystal'))
grow(KJ("small_fluix_crystal"), KJ('growing_small_fluix_crystal'), AE2('fluix_crystal'))
grow(KJ("small_nether_crystal"), KJ('growing_small_nether_crystal'), KJ('purified_nether_quartz_crystal'))
// grow(KJ("small_arcane_crystal"), KJ('growing_small_arcane_crystal'), KJ('purified_arcane_crystal'))

event.recipes.createMixing(Fluid.of(KJ("sky_stone"), 500), [AE2('sky_dust', 4), Fluid.of(MC('water'), 500)])
event.recipes.createMixing(CR('polished_rose_quartz'), [[AE2('certus_quartz_crystal'), KJ('purified_certus_quartz_crystal')], Fluid.of(TE("redstone"), 250)])
event.custom({
	"type":"vintageimprovements:centrifugation",
	"ingredients": [ 
		{
			"item": "ae2:charged_certus_quartz_crystal"
		},
		{
			"fluid": "kubejs:sky_stone",
			"amount": 250
		}
	],
	"results": [
		{
			"item": "ae2:certus_quartz_crystal"
		},
		{
		    "fluid": "thermal:redstone",
			"amount": 250
		}
	],
	"processingTime": 200
})
event.recipes.createMixing([AE2('certus_quartz_crystal'), Fluid.of(TE('redstone'), 100)], [AE2('charged_certus_quartz_crystal'), Fluid.of(KJ('sky_stone'), 100)])
// event.recipes.createMixing([AE2('certus_quartz_crystal'), Fluid.of(TE('glowstone'), 500)], [AE2('charged_certus_quartz_crystal'), MC('glowstone_dust'), Fluid.of(KJ('sky_stone'), 500)])
}

function redstoneTransmute(event) {
event.replaceInput(
	"create:electron_tube",
	Ingredient.of([Item.of("immersiveengineering:electron_tube"), "create:electron_tube"])
);
event.replaceInput({ id: TE('redstone_servo') }, MC('iron_ingot'), TE('lead_ingot'))

//红石浇筑
// event.recipes.createFilling(BO("redstone_root"), [[BO("living_root"), 'twilightforest:liveroot'], Fluid.of(TE('redstone'), 100)])
event.recipes.createFilling(TE("redprint"), [MC('paper'), Fluid.of(TE('redstone'), 200)])
event.recipes.createFilling(TE("redstone_servo"), [TE('lead_plate'), Fluid.of(TE('redstone'), 200)])

let redstoneTransmute = (input, output, type, amount) => {
	event.custom({
		"type": "tconstruct:" + type,
		"cast": { "item": input },
		"cast_consumed": true,
		"fluid": {
			"name": "thermal:redstone",
			"amount": amount
		},
		"result": output,
		"cooling_time": 30
	})
}
redstoneTransmute(MC("cobblestone"), MC("netherrack"), "casting_basin", 50)
redstoneTransmute(MC("sand"), MC("red_sand"), "casting_basin", 50)
// redstoneTransmute('twilightforest:liveroot', BO("redstone_root"), "casting_table", 100)
// redstoneTransmute(BO("living_root"), BO("redstone_root"), "casting_table", 100)
redstoneTransmute(TE('lead_plate'), TE("redstone_servo"), "casting_table", 200)
redstoneTransmute(MC('paper'), TE("redprint"), "casting_table", 200)
}

function brassMachine(event) {

event.recipes.createMilling([AE2('sky_dust'), AE2('sky_stone_block')], AE2('sky_stone_block')).processingTime(1000)

event.remove({ id: CR("sequenced_assembly/precision_mechanism") })
let t = CR('incomplete_precision_mechanism')
event.recipes.createSequencedAssembly([
	CR('precision_mechanism'),
], KJ('kinetic_mechanism'), [
	event.recipes.createDeploying(t, [t, CR('electron_tube')]),
	event.recipes.createDeploying(t, [t, CR('electron_tube')]),
	event.recipes.createDeploying(t, [t, F('#screwdrivers')])
]).transitionalItem(t)
	.loops(1)
	.id('kubejs:precision_mechanism')

event.shaped(KJ('brass_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: CR('brass_casing'),
	S: CR('precision_mechanism')
})

let brass_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:brass_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:brass_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:brass_machine')
}

brass_machine('create:mechanical_crafter', 3, MC('crafting_table'))
brass_machine('create:sequenced_gearshift', 2)
brass_machine('create:rotation_speed_controller', 1)
brass_machine('create:mechanical_arm', 1)
brass_machine('create:stockpile_switch', 2)
brass_machine('create:content_observer', 2)
brass_machine('thermal:machine_press', 1, MC('dropper'))
brass_machine('torchmaster:feral_flare_lantern', 1, MC('glowstone_dust'))
brass_machine('thermal:dynamo_numismatic', 1, TE('rf_coil'))
brass_machine(PP('item_terminal'), 1, TE('diamond_gear'))
brass_machine(PP('pressurizer'), 1, CR('propeller'))
brass_machine('create:brass_funnel', 4)
brass_machine('create:brass_tunnel', 4)
brass_machine('kubejs:pipe_module_tier_1', 4)
brass_machine('create:elevator_pulley', 1, SP('#ropes'))
brass_machine('createdieselgenerators:diesel_engine', 1, 'createdieselgenerators:engine_piston')
brass_machine('createaddition:portable_energy_interface', 2, 'createaddition:copper_spool')
brass_machine('vintageimprovements:laser', 1, 'vintageimprovements:laser_item')

event.stonecutting(Item.of('create:brass_funnel'), 'create:brass_tunnel')
event.stonecutting(Item.of('create:brass_tunnel'), 'create:brass_funnel')

event.remove({ output: 'createdieselgenerators:large_diesel_engine' })	
event.smithing('createdieselgenerators:large_diesel_engine', 'createdieselgenerators:diesel_engine', 'create_dd:reinforcement_plating')
event.recipes.createMechanicalCrafting('createdieselgenerators:large_diesel_engine', "AB", { A: 'createdieselgenerators:diesel_engine', B: 'create_dd:reinforcement_plating' })
event.remove({ output: 'createdieselgenerators:huge_diesel_engine' })	
event.smithing('createdieselgenerators:huge_diesel_engine', 'createdieselgenerators:large_diesel_engine', 'create_dd:reinforcement_plating')
event.recipes.createMechanicalCrafting('createdieselgenerators:huge_diesel_engine', "AB", { A: 'createdieselgenerators:large_diesel_engine', B: 'create_dd:reinforcement_plating' })

}

function zincMachine(event) {

// event.custom({
// 	"type": "tconstruct:casting_basin",
// 	"cast": {
// 		"item": "minecraft:basalt"
// 	},
// 	"cast_consumed": true,
// 	"fluid": {
// 		"name": "minecraft:lava",
// 		"amount": 1000
// 	},
// 	"result": Item.of(TE("basalz_rod"), 2),
// 	"cooling_time": 15
// })

// event.remove({ id: TE('basalz_powder') })
// event.remove({ id: TC('smeltery/casting/scorched/stone_from_magma') })
event.remove({ id: TC('smeltery/casting/scorched/foundry_controller') })
// event.remove({ id: TC('smeltery/scorched/scorched_brick_kiln') })
// event.remove({ id: TC('smeltery/scorched/scorched_brick') })
// event.remove({ id: TC('smeltery/melting/scorched/grout') })
event.remove({ id: TC('smeltery/melting/soul/sand') })
// event.recipes.createMilling([Item.of(TE('basalz_powder'), 1)], TE("basalz_rod")).processingTime(300)

//焦黑炉核心
donutCraft(event, TC('foundry_controller'), TC('scorched_bricks'), KJ('infernal_mechanism'))

event.recipes.createMixing(Fluid.of(TC("liquid_soul"), 500), [MC('twisting_vines'), MC('weeping_vines')]).heated()


//

let t = KJ('incomplete_infernal_mechanism')
event.recipes.createSequencedAssembly([
	KJ('infernal_mechanism'),
], CR('precision_mechanism'), [
	event.recipes.createFilling(t, [t, Fluid.of(TC("liquid_soul"), 500)]),
	event.recipes.createFilling(t, [t, Fluid.of(MC("lava"), 1000)]),
	event.recipes.createFilling(t, [t, Fluid.of(MC("lava"), 1000)]),
	event.recipes.createFilling(t, [t, Fluid.of(MC("lava"), 1000)])
]).transitionalItem(t)
	.loops(1)
	.id('kubejs:infernal_mechanism')

event.shaped(KJ('zinc_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: KJ('zinc_casing'),
	S: KJ('infernal_mechanism')
})

let zinc_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:zinc_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:zinc_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:zinc_machine')
}

zinc_machine(TE('device_rock_gen'), 1, MC('piston'))
zinc_machine(TE('device_collector'), 1, MC('ender_pearl'))
zinc_machine(TE('device_nullifier'), 1, MC('lava_bucket'))
zinc_machine(TE('device_potion_diffuser'), 1, MC('glass_bottle'))
zinc_machine('storagedrawers:controller', 1, MC('diamond'))
zinc_machine('storagedrawers:controller_slave', 1, MC('gold_ingot'))
zinc_machine('torchmaster:megatorch', 1, MC('torch'))
zinc_machine('thermal:upgrade_augment_2', 1, MC('redstone'))
zinc_machine('createdieselgenerators:distillation_controller', 1)

event.remove({ output: 'createdieselgenerators:pumpjack_crank' })
event.remove({ output: 'createdieselgenerators:pumpjack_head' })
event.remove({ output: 'createdieselgenerators:pumpjack_bearing' })
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "kubejs:zinc_machine"
		}
	],
	"results": [
		{
			"item": "createdieselgenerators:pumpjack_crank",
			"count": 1
		}
	]
})
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "kubejs:zinc_machine"
		}
	],
	"results": [
		{
			"item": "createdieselgenerators:pumpjack_head",
			"count": 1
		}
	]
})
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "kubejs:zinc_machine"
		}
	],
	"results": [
		{
			"item": "createdieselgenerators:pumpjack_bearing",
			"count": 1
		}
	]
})

}

function obsidianMachine(event) {

// 坚固板
event.remove({ id: 'create:sequenced_assembly/sturdy_sheet' })

let ss = 'create:unprocessed_obsidian_sheet'
event.recipes.createSequencedAssembly([
	Item.of(CR('sturdy_sheet')).withChance(0.5),
	Item.of('create:unprocessed_obsidian_sheet', '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"kubejs:sturdy_sheet"}}').withChance(0.5),
], CR('powdered_obsidian'), [
	event.recipes.createFilling(ss, [ss, Fluid.of(MC("lava"), 500)]),
	event.recipes.createPressing(ss, ss),
	event.recipes.createPressing(ss, ss)
]).transitionalItem(ss)
	.loops(1)
	.id("kubejs:sturdy_sheet")

event.custom({
	"type":"vintageimprovements:vacuumizing",
	"ingredients": [ 
		{
			"item": "create:powdered_obsidian"
		},
		{
		    "fluid": "minecraft:lava",
			"amount": 500
		}
	],
	"results": [
		{
			"item": "create:sturdy_sheet",
			"count": 1
		}
	],
	"processingTime": 400
})

//

let sm = KJ('incomplete_sturdy_mechanism')
event.recipes.createSequencedAssembly([
	KJ('sturdy_mechanism'),
], CR('precision_mechanism'), [
	event.recipes.createDeploying(sm, [sm, CR('sturdy_sheet')]),
	event.recipes.createDeploying(sm, [sm, CR('sturdy_sheet')])
]).transitionalItem(sm)
	.loops(1)
	.id('kubejs:sturdy_mechanism')

event.shaped(KJ("obsidian_machine"), [
	"SSS",
	"SCS",
	"SSS"
], {
	C: [CR("railway_casing")],
	S: KJ("sturdy_mechanism")
})

let obsidian_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), "kubejs:obsidian_machine", other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: "kubejs:obsidian_machine", B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), "kubejs:obsidian_machine")
	}
obsidian_machine(CR("track_station"), 1, MC("compass"))
obsidian_machine(CR("track_signal"), 1, CR("electron_tube"))
obsidian_machine(CR("track_observer"), 1, MC("observer"))
obsidian_machine(CR("controls"), 1, MC("lever"))
obsidian_machine("toms_storage:ts.storage_terminal", 1, CR("item_vault"))
}

function radiant_coil(event) {

let chop = (type, output) => {
event.custom({
	"type": "farmersdelight:cutting",
	"ingredients": [{ "item": TC(type + "_slime_fern") }],
	"tool": { "tag": "forge:tools/knives" },
	"result": [Item.of(KJ(type + "_slimy_fern_leaf"), 2).toResultJson()]
})
event.custom({
	"type": "occultism:spirit_fire",
	"ingredient": { "item": KJ(type + "_slimy_fern_leaf") },
	"result": { "item": TC(type + "_slime_fern") }
})
event.custom(ifiniDeploying(KJ(type + "_slimy_fern_leaf", 2), TC(type + "_slime_fern"), "#forge:tools/knives"))
event.recipes.createMilling([KJ(type + "_slimy_fern_paste")], KJ(type + "_slimy_fern_leaf"))
event.campfireCooking(output, KJ(type + "_slimy_fern_paste")).cookingTime(300)
}

let fern1 = KJ("ender_slimy_fern_leaf")
let fern2 = KJ("sky_slimy_fern_leaf")
let fern3 = KJ("earth_slimy_fern_leaf")
event.shapeless(fern1, ["forbidden_arcanus:rune", fern2, fern2, fern2, fern2, fern3, fern3, fern3, fern3])
event.shapeless(fern2, ["forbidden_arcanus:rune", fern3, fern3, fern3, fern3, fern1, fern1, fern1, fern1])
event.shapeless(fern3, ["forbidden_arcanus:rune", fern2, fern2, fern2, fern2, fern1, fern1, fern1, fern1])

chop("earth", MC('gunpowder'))
chop("sky", MC('bone_meal'))
chop("ender", AE2('ender_dust'))

event.campfireCooking(MC("torch"), MC("stick")).cookingTime(20)

event.shapeless(KJ('nickel_compound'), [TE('nickel_ingot'), TE("iron_dust"), TE("iron_dust"), TE("iron_dust"), TE("iron_dust")])
event.blasting(KJ('invar_compound'), KJ('nickel_compound'))
let s = KJ('invar_compound')
event.recipes.createSequencedAssembly([
	TE('invar_ingot'),
], KJ('invar_compound'), [
	event.recipes.createPressing(s, s)
]).transitionalItem(s)
	.loops(16)
	.id('kubejs:invar')

event.remove({ id: CR("mechanical_crafting/crushing_wheel") })
event.recipes.createMechanicalCrafting(Item.of(CR('crushing_wheel'), 2), [
	' AAA ',
	'AABAA',
	'ABBBA',
	'AABAA',
	' AAA '
], {
	A: F('#cobblestone'),
	B: MC('stick')
})

event.recipes.createCrushing([Item.of(AE2("singularity")).withChance(1)], CR('crushing_wheel')).processingTime(250)

let dyes = [MC('orange_dye'), MC('magenta_dye'), MC('light_blue_dye'), MC('yellow_dye'), MC('lime_dye'), MC('pink_dye'), MC('cyan_dye'), MC('purple_dye'), MC('blue_dye'), MC('brown_dye'), MC('green_dye'), MC('red_dye')]
event.recipes.createCompacting('1x ' + KJ("dye_entangled_singularity"), [dyes, Item.of(AE2('quantum_entangled_singularity'), 1)])
event.recipes.createConversion([AE2('quantum_entangled_singularity')], AE2("singularity"))
event.recipes.createCrushing([
	Item.of(AE2("red_paint_ball"), 1).withChance(.90),
	Item.of(AE2("yellow_paint_ball"), 1).withChance(.80),
	Item.of(AE2("green_paint_ball"), 1).withChance(.70),
	Item.of(AE2("blue_paint_ball"), 1).withChance(.60),
	Item.of(AE2("magenta_paint_ball"), 1).withChance(.50)],
	KJ('dye_entangled_singularity')).processingTime(50)

let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
for (let index = 0; index < colors.length; index++) {
	var element = colors[index];
if (index == colors.length - 1)
	continue;
event.recipes.createEmptying([AE2(colors[index + 1] + '_paint_ball'), Fluid.of(TC('molten_ender'), 250)], AE2(element + '_paint_ball'))
}

event.recipes.createMechanicalCrafting(CR('chromatic_compound'), [
	'AA',
	'AA'
], {
	A: AE2('magenta_paint_ball')
})

event.recipes.createPressing(KJ("radiant_sheet"), CR("refined_radiance"))
event.recipes.createMechanicalCrafting(KJ('radiant_coil'), ['A'], { A: KJ('radiant_sheet') })
}

function invarMachine(event) {

let t = KJ('incomplete_inductive_mechanism')
event.recipes.createSequencedAssembly([
	KJ('inductive_mechanism'),
], CR('precision_mechanism'), [
	event.recipes.createDeploying(t, [t, KJ('radiant_coil')]),
	event.recipes.createDeploying(t, [t, KJ('radiant_coil')]),
	event.recipes.createDeploying(t, [t, F('#chromatic_resonators')])
]).transitionalItem(t)
	.loops(1)
	.id('kubejs:inductive_mechanism')

event.remove({ output: TE('machine_frame') })
event.shaped(TE('machine_frame'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: KJ('invar_casing'),
	S: KJ('inductive_mechanism')
})

event.shaped(KJ('chromatic_resonator'), [
	' R ',
	'R S',
	'LS '
], {
	R: TE('ruby'),
	L: TE('lead_ingot'),
	S: TE('sapphire')
})

let invar_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
if (other_ingredient) {
	event.smithing(Item.of(id, amount), TE('machine_frame'), other_ingredient)
	event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: TE('machine_frame'), B: other_ingredient })
}
else
	event.stonecutting(Item.of(id, amount), TE('machine_frame'))
}

invar_machine(TE('dynamo_compression'), 1, TE('rf_coil'))
invar_machine('kubejs:pipe_module_tier_2', 4)

event.replaceInput({ type: "minecraft:crafting_shaped", id: /ae2:.*/ }, F("#ingots/iron"), TE("lead_plate"))

// invar_machine(TE('machine_crucible'), 1, MC('nether_bricks'))
// invar_machine(TE('machine_furnace'), 1, MC('bricks'))
// invar_machine(TE('machine_chiller'), 1, MC('packed_ice'))
// invar_machine(TE('machine_pyrolyzer'), 1, MC('blaze_rod'))
// invar_machine(TE('machine_bottler'), 1, MC('bucket'))
// invar_machine(TE('machine_centrifuge'), 1, MC('compass'))
// invar_machine(TE('machine_refinery'), 1, '#forge:glass')
// invar_machine(TE('machine_pulverizer'), 1, MC('flint'))
// invar_machine(TE('machine_smelter'), 1, MC('blast_furnace'))
// invar_machine(TE('machine_sawmill'), 1, TE('saw_blade'))
// invar_machine(TE('machine_brewer'), 1, MC('brewing_stand'))
// invar_machine(TE('machine_insolator'), 1, MC('dirt'))

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
	float_and_lights(event, KJ("radiant_sheet"))
	float_and_lights(event, KJ("small_radiant_spring"))
	float_and_lights(event, KJ("radiant_spring"))
	float_and_lights(event, KJ("shadow_rod"))
})