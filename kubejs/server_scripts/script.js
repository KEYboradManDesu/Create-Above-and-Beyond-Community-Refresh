// priority: 0

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

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Starting to load KubeJS recipes...')

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
	firearm(event)
	alloys(event)
	chestFix(event)

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

	enderMachine(event)

	circuits(event)
	fluixMachine(event)

	madMaths(event)

	alchemy(event)

	trading(event)

	oil(event)
	rocketScience(event)

	unify(event)
})

let MysteriousItemConversionCategory = java('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
let ConversionRecipe = java('com.simibubi.create.compat.jei.ConversionRecipe')
let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let wood_types = [
    MC('oak'), MC('spruce'), MC('birch'), MC('jungle'), MC('acacia'), MC('dark_oak'), MC('crimson'), MC('warped'), 
    BOP('fir'), BOP('redwood'), BOP('cherry'), BOP('mahogany'), BOP('jacaranda'), BOP('palm'), BOP('willow'), BOP('dead'), BOP('magic'), BOP('umbran'), BOP('hellbark'), 
    AP('twisted'), 
	CRD('smoked'), CRD('spirit'), CRD('rose'), CRD('rubber'), 
	FA('edelwood'), FA('cherrywood'), FA('mysterywood'),
	'darkerdepths:petrified',
    'phantasm:pream', 'phantasm:ebony', 
]
// let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold', 'tin'] 

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
event.remove({ id: TE('storage/apple_block') })
event.remove({ output: Q('potato_crate') })
event.remove({ output: Q('carrot_crate') })
event.remove({ output: Q('beetroot_crate') })
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

event.remove({ output: 'projectred_core:electrotine_generator' })
event.remove({ output: 'projectred_core:sand_coal_comp' })
event.remove({ output: 'projectred_core:boule' })
event.remove({ output: 'projectred_core:silicon' })
event.remove({ output: 'projectred_core:copper_coil' })
event.remove({ output: 'projectred_core:iron_coil' })
event.remove({ output: 'projectred_core:gold_coil' })
event.remove({ output: 'projectred_core:electrotine_iron_comp' })
event.remove({ output: 'projectred_core:infused_silicon' })
event.remove({ output: 'projectred_core:energized_silicon' })
event.remove({ output: 'projectred_core:electrotine_silicon' })

event.remove({ input: 'projectred_core:electrotine_generator' })
event.remove({ input: 'projectred_core:sand_coal_comp' })
event.remove({ input: 'projectred_core:boule' })
event.remove({ input: 'projectred_core:silicon' })
event.remove({ input: 'projectred_core:copper_coil' })
event.remove({ input: 'projectred_core:iron_coil' })
event.remove({ input: 'projectred_core:gold_coil' })
event.remove({ input: 'projectred_core:infused_silicon' })
event.remove({ input: 'projectred_core:energized_silicon' })
event.remove({ input: 'projectred_core:electrotine_silicon' })

// No more FREE INDUSTRIAL IRON BLOCKS FOR EVERYONE. :(
event.remove({ output: CR('industrial_iron_block'), type: 'minecraft:stonecutting'}) 


}

function tweaks(event) {

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

// 玫瑰石英
event.custom({
	"type":"vintageimprovements:polishing",
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
event.shaped(MC("heart_of_the_sea"), [
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
	"result": { "item": 'minecraft:redstone_block'}
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
	event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'create:white_sail', B: other_ingredient })
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

bedrock_cobblegen(MC("packed_ice"), MC("andesite"))
bedrock_cobblegen(AP("polished_packed_ice"), MC("granite"))
bedrock_cobblegen(AP("chiseled_packed_ice"), MC("diorite"))
bedrock_cobblegen(AP("packed_ice_pillar"), MC("dripstone_block"))
bedrock_cobblegen('minecraft:honey_block', CR("limestone"))
bedrock_cobblegen(FA("dark_rune_block"), FA("darkstone"))

// 前期优化游戏体验
event.replaceInput({ id: CR("crafting/kinetics/brass_hand") }, F('#plates/brass'), [CR('golden_sheet')])// 黄铜手部件改金制手部件
event.replaceInput({ id: CR("crafting/kinetics/item_vault") }, F('#plates/iron'), TE('lead_plate'))// 保险库

// 储存标签Labels
donutCraft(event, '8x labels:label', "#forge:dyes/black", MC("paper"))

// 垂泪藤，缠冤藤互相转换
donutCraft(event, MC("weeping_vines"), "forbidden_arcanus:rune", MC("twisting_vines"))
donutCraft(event, MC("twisting_vines"), "forbidden_arcanus:rune", MC("weeping_vines"))

// 下界合金锯
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

event.shaped(KJ("press_rod_die"), [
	' S ',
	'SMS',
	' S '
], {
	M: 'createaddition:gold_rod',
	S: TE("invar_plate")
})

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

event.recipes.createMixing([Fluid.of('create_confectionery:ruby_chocolate', 250)], [
	Item.of('minecraft:sugar'), 
	Fluid.of('create_central_kitchen:dragon_breath', 250),
	Item.of('minecraft:cocoa_beans'), 
	Fluid.of('minecraft:milk', 250)
]).heated()

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

event.custom({
	"type": "tconstruct:melting",
	"ingredient": {
		"item": MC('redstone')
	},
	"result": {
		"fluid": TE('redstone'),
		"amount": 100
	},
	"temperature": 300,
	"time": 10
});

event.custom({
	"type": "tconstruct:melting",
	"ingredient": {
		"item": MC('redstone_block')
	},
	"result": {
		"fluid": TE('redstone'),
		"amount": 900
	},
	"temperature": 500,
	"time": 90
});	

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
// let plank = MC(`${e}_planks`)
let chest = Q(`${e}_chest`)
let trapped_chest = Q(`${e}_trapped_chest`)

event.remove({ id: trim })
event.shaped(Item.of(trim, 4), [
	'SSS',
	'PMP',
	'SSS'
], {
	P: CR('zinc_ingot'),
	M: [chest, trapped_chest],
	S: '#minecraft:planks'
})

event.shaped(Item.of('storagedrawers:oak_trim', 4), [
	'SSS',
	'PMP',
	'SSS'
], {
	P: CR('zinc_ingot'),
	M: 'minecraft:chest',
	S: '#minecraft:planks'
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
event.remove({ output: 'thermal:fluid_duct_windowed' })
event.remove({ output: 'thermal:fluid_duct' })
event.remove({ output: 'thermal:energy_duct' })
	
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

event.shaped("16x pipez:universal_pipe", [
	' E ',
	'ABC',
	' D '
], {
	A: ['pipez:energy_pipe', TE('energy_duct')],
	B: KJ('creative_casing'),
	C: ['prettypipes:pipe', 'pipez:item_pipe'],
	D: [CR('fluid_pipe'), TE('fluid_duct'), TE('fluid_duct_windowed')],
	E: CRD('integrated_circuit')
})

event.shaped(TE("fluid_duct_windowed", 1), ['P'], {P: TE('fluid_duct')})
event.shaped(TE("fluid_duct", 1), ['P'], {P: TE('fluid_duct_windowed')})

event.stonecutting(Item.of('thermal:energy_duct', 8), 'thermal:energy_cell_frame')
event.stonecutting(Item.of('thermal:fluid_duct', 8), 'thermal:fluid_cell_frame')



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
	B: CR('zinc_ingot'),
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
		"item": "create:iron_sheet"
	  },
	  "B": {
		"item": "sophisticatedbackpacks:copper_backpack"
	  },
	  "S": {
		"item": "sophisticatedbackpacks:upgrade_base"
	  }
	},
	"result": {
	  "item": "sophisticatedbackpacks:iron_backpack"
	}
})
//铜背包
event.remove({ output: 'sophisticatedbackpacks:copper_backpack' })
event.custom({
	"type": "sophisticatedbackpacks:backpack_upgrade",
	"conditions": [
	  {
		"itemRegistryName": "sophisticatedbackpacks:copper_backpack",
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
		"item": "create:copper_sheet"
	  },
	  "B": {
		"item": "sophisticatedbackpacks:backpack"
	  },
	  "S": {
		"item": "sophisticatedbackpacks:upgrade_base"
	  }
	},
	"result": {
	  "item": "sophisticatedbackpacks:copper_backpack"
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
		"item": "minecraft:diamond"
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

smithAndMechCraft("metalbarrels:copper_barrel", MC("barrel"), F("#ingots/constantan"))
smithAndMechCraft("metalbarrels:iron_barrel", MC("barrel"), "moreminecarts:silica_steel")
smithAndMechCraft("metalbarrels:silver_barrel", MC("barrel"), "forbidden_arcanus:rune")
smithAndMechCraft("metalbarrels:gold_barrel", MC("barrel"), TC("cobalt_ingot"))
smithAndMechCraft("metalbarrels:diamond_barrel", MC("barrel"), F("#ingots/refined_radiance"))
smithAndMechCraft("metalbarrels:obsidian_barrel", MC("barrel"), F("#ingots/shadow_steel"))

event.shapeless("metalbarrels:wood_to_copper", ["metalbarrels:copper_barrel"])
event.shapeless("metalbarrels:wood_to_iron", ["metalbarrels:iron_barrel"])
event.shapeless("metalbarrels:wood_to_silver", ["metalbarrels:silver_barrel"])
event.shapeless("metalbarrels:wood_to_gold", ["metalbarrels:gold_barrel"])
event.shapeless("metalbarrels:wood_to_diamond", ["metalbarrels:diamond_barrel"])
event.shapeless("metalbarrels:wood_to_obsidian", ["metalbarrels:obsidian_barrel"])
}

function firearm(event) {
event.remove({ mod: ('cgm') })
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "createbigcannons:nethersteel_block"
		}
	],
	"results": [
		{
			"item": "cgm:workbench",
			"count": 1
		}
	]
})

// 枪械部件
event.shapeless('kubejs:basic_gun_kit', [
	'3x createbigcannons:nethersteel_ingot',
	'2x kubejs:infernal_mechanism',
	'vintageimprovements:nethersteel_spring',
	'createdieselgenerators:kelp_handle',
	'#create_dd:smoked_logs',
])

// 包装火药
event.remove({ output: 'createbigcannons:packed_gunpowder' })
event.recipes.createCompacting('createbigcannons:packed_gunpowder', [MC('gunpowder'), MC('gunpowder')])

// 霰弹丸
event.remove({ output: 'createbigcannons:shot_balls' })
event.shapeless('createbigcannons:shot_balls', [
	[MC('iron_nugget'), TE('nickel_nugget'), CR('zinc_nugget'), TE('lead_nugget')],
	[MC('iron_nugget'), TE('nickel_nugget'), CR('zinc_nugget'), TE('lead_nugget')], 
	[MC('iron_nugget'), TE('nickel_nugget'), CR('zinc_nugget'), TE('lead_nugget')],
])

// 弹壳冲压板
event.remove({ output: 'createbigcannons:autocannon_cartridge_sheet' })
event.recipes.createCompacting("createbigcannons:autocannon_cartridge_sheet", [CR("brass_nugget"), CR("brass_nugget")])
event.recipes.createCompacting("createbigcannons:autocannon_cartridge_sheet", [MC("gold_nugget"), MC("gold_nugget"), MC("gold_nugget")])
event.recipes.createCompacting("createbigcannons:autocannon_cartridge_sheet", [F("#nuggets/copper"), F("#nuggets/copper"), F("#nuggets/copper")])

// 小型空弹壳
event.remove({ output: 'createbigcannons:packed_gunpowder' })
event.custom({
	"type": "vintageimprovements:curving",
	"mode": 2,
	"ingredients": [
		{
		  "item": "createbigcannons:autocannon_cartridge_sheet"
		}
	],
	"results": [
		{
		  "item": "kubejs:bullet_casing"
		}
	]
})

// 霰弹壳
event.recipes.createDeploying('kubejs:shell_empty', ['kubejs:bullet_casing', 'minecraft:dried_kelp'])
event.shapeless('kubejs:shell_empty', ['kubejs:bullet_casing', 'minecraft:dried_kelp'])

// 机枪弹壳
event.remove({ output: 'createbigcannons:empty_machine_gun_round' })
event.custom({
	"type": "vintageimprovements:curving",
	"mode": 2,
	"ingredients": [
		{
		  "item": "kubejs:bullet_casing"
		}
	],
	"results": [
		{
		  "item": "createbigcannons:empty_machine_gun_round"
		}
	]
})

// 机炮弹壳
event.remove({ output: 'createbigcannons:empty_autocannon_cartridge' })
event.custom({
	"type": "vintageimprovements:curving",
	"mode": 2,
	"ingredients": [
		{
		  "item": "createbigcannons:empty_machine_gun_round"
		}
	],
	"results": [
		{
		  "item": "createbigcannons:empty_autocannon_cartridge"
		}
	]
})

// 大型弹壳
event.remove({ id: 'createbigcannons:sequenced_assembly/pressing_big_cartridge' })
let cartridge = 'createbigcannons:big_cartridge_sheet'
event.recipes.createSequencedAssembly([
	'createbigcannons:big_cartridge',
], 'createbigcannons:big_cartridge_sheet', [
	event.custom({
		"type": "vintageimprovements:curving",
		"mode": 2,
		"ingredients": [
			{
			  "item": cartridge
			}
		],
		"results": [
			{
			  "item": cartridge
			}
		]
	})
]).transitionalItem(cartridge)
	.loops(5)
	.id('kubejs:big_cartridge')



//


// 霰弹
event.shaped('cgm:shell', [
	' S ',
	' C ',
	' B '
], {
	C: 'createbigcannons:gunpowder_pinch',
	S: 'createbigcannons:shot_balls',
	B: KJ('shell_empty')
})

let ammo1 = 'kubejs:incomplete_shell'
	event.recipes.createSequencedAssembly([
		'cgm:shell',
	], KJ('shell_empty'), [
		event.recipes.createDeploying(ammo1, [ammo1, 'createbigcannons:gunpowder_pinch']),
		event.recipes.createDeploying(ammo1, [ammo1, 'createbigcannons:shot_balls']),
		event.custom({
			"type": "vintageimprovements:curving",
			"mode": 4,
			"ingredients": [
				{
				  "item": ammo1
				}
			],
			"results": [
				{
				  "item": ammo1
				}
			]
		})
	]).transitionalItem(ammo1)
		.loops(1)
		.id('kubejs:shell')


// 机枪弹药
event.remove({ id: 'createbigcannons:sequenced_assembly/assembling_machine_gun_round' })
let ammo2 = 'kubejs:incomplete_advanced_bullet'
	event.recipes.createSequencedAssembly([
		'createbigcannons:machine_gun_round',
	], 'createbigcannons:empty_machine_gun_round', [
		event.recipes.createDeploying(ammo2, [ammo2, 'createbigcannons:gunpowder_pinch']),
		event.recipes.createDeploying(ammo2, [ammo2, F('#nuggets/copper')]),
		event.custom({
			"type": "vintageimprovements:curving",
			"mode": 4,
			"ingredients": [
				{
				  "item": ammo2
				}
			],
			"results": [
				{
				  "item": ammo2
				}
			]
		})
	]).transitionalItem(ammo2)
		.loops(1)
		.id('kubejs:advanced_bullet')


// 初级弹药
event.shaped('cgm:basic_bullet', [
	' S ',
	' C ',
	' B '
], {
	C: 'createbigcannons:gunpowder_pinch',
	S: CR('zinc_nugget'),
	B: KJ('bullet_casing')
})

let ammo3 = 'kubejs:incomplete_basic_bullet'
	event.recipes.createSequencedAssembly([
		'cgm:basic_bullet',
	], 'kubejs:bullet_casing', [
		event.recipes.createDeploying(ammo3, [ammo3, 'createbigcannons:gunpowder_pinch']),
		event.recipes.createDeploying(ammo3, [ammo3, CR('zinc_nugget')]),
		event.custom({
			"type": "vintageimprovements:curving",
			"mode": 4,
			"ingredients": [
				{
				  "item": ammo3
				}
			],
			"results": [
				{
				  "item": ammo3
				}
			]
		})
	]).transitionalItem(ammo3)
		.loops(1)
		.id('kubejs:basic_bullet')


// 导弹
let ammo4 = 'kubejs:unarmed_missile'
	event.recipes.createSequencedAssembly([
		'cgm:missile',
	], 'createbigcannons:empty_autocannon_cartridge', [
		event.recipes.createDeploying(ammo3, [ammo4, 'createbigcannons:packed_gunpowder']),
		event.recipes.createDeploying(ammo4, [ammo4, AE2('tiny_tnt')]),
		event.custom({
			"type": "vintageimprovements:curving",
			"mode": 4,
			"ingredients": [
				{
				  "item": ammo4
				}
			],
			"results": [
				{
				  "item": ammo4
				}
			]
		})
	]).transitionalItem(ammo4)
		.loops(1)
		.id('kubejs:missile')


// 手榴弹
let g = 'minecraft:glass_bottle'
	event.recipes.createSequencedAssembly([
		Item.of('cgm:grenade', 2),
	], 'minecraft:glass_bottle', [
		event.recipes.createDeploying(g, [g, 'createbigcannons:packed_gunpowder']),
		event.recipes.createDeploying(g, [g, '#forge:nuggets/iron']),
	]).transitionalItem(g)
		.loops(1)
		.id('kubejs:grenade')


// 闪光弹
let g1 = 'minecraft:glass_bottle'
	event.recipes.createSequencedAssembly([
		Item.of('cgm:stun_grenade', 2),
	], 'minecraft:glass_bottle', [
		event.recipes.createDeploying(g1, [g1, ['#forge:dusts/glowstone', 'thermal:lumium_dust']]),
		event.recipes.createDeploying(g1, [g1, '#forge:nuggets/iron']),
	]).transitionalItem(g1)
		.loops(1)
		.id('kubejs:stun_grenade')

let g2 = 'minecraft:glass_bottle'
	event.recipes.createSequencedAssembly([
		Item.of('cgm:stun_grenade', 2),
	], 'minecraft:glass_bottle', [
		event.recipes.createFilling(g2, [g2, Fluid.of(TE("glowstone"), 500)]),
		event.recipes.createDeploying(g2, [g2, '#forge:nuggets/iron']),
	]).transitionalItem(g2)
		.loops(1)
		.id('kubejs:stun_grenade2')

//


//瞄具
event.stonecutting('cgm:short_scope', MC("spyglass"))
event.custom({//近程
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "minecraft:spyglass",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:short_scope",
    "count": 1
  }
})
event.stonecutting('cgm:medium_scope', MC("spyglass"))
event.custom({//中程
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "minecraft:spyglass",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:medium_scope",
    "count": 1
  }
})
event.stonecutting('cgm:long_scope', MC("spyglass"))
event.custom({//远程
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "minecraft:spyglass",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:long_scope",
    "count": 1
  }
})

//枪托
event.custom({//重型
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "createbigcannons:nethersteel_ingot",
      "count": 1
    },
    {
      "item": "create_dd:smoked_planks",
      "count": 2
    }
  ],
  "result": {
    "item": "cgm:weighted_stock",
    "count": 1
  }
})
event.custom({//战术
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "createbigcannons:nethersteel_ingot",
      "count": 2
    }
  ],
  "result": {
    "item": "cgm:tactical_stock",
    "count": 1
  }
})
event.custom({//轻型
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "createbigcannons:nethersteel_ingot",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:light_stock",
    "count": 1
  }
})

//握把
event.custom({//轻型
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "createbigcannons:nethersteel_ingot",
      "count": 2
    }
  ],
  "result": {
    "item": "cgm:light_grip",
    "count": 1
  }
})
event.custom({//特种
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "createbigcannons:nethersteel_ingot",
      "count": 1
    },
	{
      "item": "thermal:cured_rubber",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:specialised_grip",
    "count": 1
  }
})

//消音器
event.custom({
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "vintageimprovements:nethersteel_rod",
      "count": 1
    },
	{
      "item": "minecraft:sponge",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:silencer",
    "count": 1
  }
})


//


// 手枪
event.custom({
	"type": "cgm:workbench",
	"materials": [
	  {
		"item": "kubejs:basic_gun_kit",
		"count": 1
	  }
	],
	"result": {
	  "item": "cgm:pistol"
	}
})

// 冲锋枪
event.custom({
	"type": "cgm:workbench",
	"materials": [
	  {
		"item": "kubejs:basic_gun_kit",
		"count": 2
	  }
	],
	"result": {
	  "item": "cgm:machine_pistol"
	}
})

// 霰弹枪
event.custom({
	"type": "cgm:workbench",
	"materials": [
	  {
		"item": "kubejs:basic_gun_kit",
		"count": 3
	  }
	],
	"result": {
	  "item": "cgm:shotgun"
	}
})

// 突击步枪
event.custom({
	"type": "cgm:workbench",
	"materials": [
	  {
		"item": "kubejs:basic_gun_kit",
		"count": 6
	  }
	],
	"result": {
	  "item": "cgm:assault_rifle"
	}
})

// 步枪
event.custom({
	"type": "cgm:workbench",
	"materials": [
	  {
		"item": "kubejs:basic_gun_kit",
		"count": 6
	  }
	],
	"result": {
	  "item": "cgm:rifle"
	}
})

// 榴弹发射器
event.custom({
	"type": "cgm:workbench",
	"materials": [
	  {
		"item": "kubejs:basic_gun_kit",
		"count": 10
	  }
	],
	"result": {
	  "item": "cgm:grenade_launcher"
	}
})

// 加特林
event.custom({
	"type": "cgm:workbench",
	"materials": [
	  {
		"item": "kubejs:basic_gun_kit",
		"count": 32
	  }
	],
	"result": {
	  "item": "cgm:mini_gun"
	}
})

// 重型步枪
event.custom({
	"type": "cgm:workbench",
	"materials": [
	  {
		"item": "kubejs:basic_gun_kit",
		"count": 32
	  }
	],
	"result": {
	  "item": "cgm:heavy_rifle"
	}
})

// 巴祖卡
event.custom({
	"type": "cgm:workbench",
	"materials": [
	  {
		"item": "kubejs:basic_gun_kit",
		"count": 32
	  }
	],
	"result": {
	  "item": "cgm:bazooka"
	}
})

}

function alloys(event) {

event.remove({ id: TC('smeltery/alloys/molten_bronze') })
event.remove({ id: TC('smeltery/alloys/molten_brass') })
event.remove({ id: TC('smeltery/alloys/molten_invar') })
event.remove({ id: TC('smeltery/alloys/molten_electrum') })
event.remove({ id: TC('smeltery/alloys/molten_constantan') })
event.remove({ id: TC('smeltery/alloys/molten_rose_gold') })
event.remove({ id: TC('smeltery/alloys/molten_netherite') })
event.remove({ id: TC('smeltery/alloys/molten_enderium') })
// event.remove({ id: TC('smeltery/alloys/molten_lumium') })
// event.remove({ id: TC('smeltery/alloys/molten_signalum') })
event.remove({ id: TC('smeltery/alloys/molten_pig_iron') })

event.remove({ id: ('create_dd:mixing/bronze_ingot' )})
event.remove({ id: 'createaddition:compat/tconstruct/rose_gold' })
event.remove({ id: 'createaddition:mixing/electrum' })
event.remove({ id: ('create_dd:compacting/steel_ingot' )})
event.remove({ id: ('createaddition:compat/tconstruct/pig_iron') })
event.remove({ id: ('createaddition:compat/tconstruct/pig_iron_2') })

event.remove({ id: TE('machines/smelter/smelter_alloy_bronze') })
event.remove({ id: TE('machines/smelter/smelter_alloy_steel') })
event.remove({ id: TE('compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot') })

event.remove({ id: TE('invar_dust_3') })
event.remove({ id: TE('bronze_dust_4') })
event.remove({ id: TE('constantan_dust_2') })
event.remove({ id: TE('electrum_dust_2') })

event.remove({ id: 'minecraft:netherite_ingot' })


// 青铜
event.recipes.createMixing(Fluid.of(TC('molten_bronze'), 10), [
	Fluid.of(TC('molten_copper'), 5), 
	Fluid.of(TC('molten_tin'), 5)
]).processingTime(1)
event.recipes.thermal.smelter('2x create_dd:bronze_ingot', [F("#ingots/copper"), F("#ingots/tin")])
// 粉
event.recipes.createMixing(TE("bronze_dust", 2), [
	TE("copper_dust"), 
	TE("tin_dust")
]).heated()


// 黄铜
event.recipes.createMixing(Fluid.of(TC('molten_brass'), 10), [
	Fluid.of(TC('molten_copper'), 5), 
	Fluid.of(TC('molten_zinc'), 5)
]).processingTime(1)
event.recipes.thermal.smelter(CR('brass_ingot', 2), [F("#ingots/copper"), F("#ingots/zinc")])
// 粉
event.recipes.createMixing(KJ("brass_dust", 2), [
	TE("copper_dust"), 
	KJ("zinc_dust")
]).heated()


// 琥珀金
event.recipes.createMixing(Fluid.of(TC('molten_electrum'), 10), [
	Fluid.of(TC('molten_gold'), 5), 
	Fluid.of(TC('molten_silver'), 5)
]).processingTime(1)
// 粉
event.recipes.createMixing(TE("electrum_dust", 2), [
	TE("gold_dust"), 
	TE("silver_dust")
]).heated()


// 康铜
event.recipes.createMixing(Fluid.of(TC('molten_constantan'), 10), [
	Fluid.of(TC('molten_copper'), 5), 
	Fluid.of(TC('molten_nickel'), 5)
]).processingTime(1)
// 粉
event.recipes.createMixing(TE("constantan_dust", 2), [
	TE("copper_dust"), 
	TE("nickel_dust")
]).heated()


// 玫瑰金
event.recipes.createMixing(Fluid.of(TC('molten_rose_gold'), 10), [
	Fluid.of(TC('molten_copper'), 5), 
	Fluid.of(TC('molten_gold'), 5)
]).processingTime(1)
// 粉
event.recipes.createMixing(TE("rose_gold_dust", 2), [
	TE("copper_dust"), 
	TE("gold_dust")
]).heated()


// 下界合金
event.recipes.createMixing(Fluid.of(TC('molten_netherite'), 1), [
	Fluid.of(TC('molten_debris'), 4), 
	Fluid.of(TC('molten_gold'), 4)
]).processingTime(1)


// 生铁
event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 5), [
	Fluid.of('createbigcannons:molten_cast_iron', 1), 
	Fluid.of(('create:honey'), 5)
]).heated().processingTime(1)
event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 5), [
	Fluid.of('createbigcannons:molten_cast_iron', 1), 
	Fluid.of(('tconstruct:blood'), 5)
]).heated().processingTime(1)
event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 5), [
	Fluid.of('createbigcannons:molten_cast_iron', 1), 
	Fluid.of(('biomesoplenty:blood'), 5)
]).heated().processingTime(1)


// 钢
event.recipes.createMixing([Fluid.of(TC("molten_steel"), 270), TE('slag')], [
	Fluid.of(TC("molten_pig_iron"), 270), 
	KJ('coke_chunk')
]).heated().processingTime(250)


// 信素
event.recipes.createMixing([Fluid.of(TC("molten_signalum"), 360)], [
	Fluid.of(TC("molten_copper"), 270), 
	Fluid.of(TE("redstone"), 400), 
	TE('silver_coin', 9)
]).superheated().processingTime(300)


// 流明
event.recipes.createMixing([Fluid.of(TC("molten_lumium"), 360)], [
	Fluid.of(TC("molten_tin"), 270), 
	Fluid.of(TE("glowstone"), 500), 
	TE('silver_coin', 9)
]).superheated().processingTime(300)

}

function chestFix(event) {
event.remove({ output: "#quark:revertable_chests" })
event.shaped(MC("chest"), [
	'PPP',
	'P P',
	'PPP'
], {
	P: MC("#planks")
})

let woodCanMakeChest = [MC('oak'), MC('spruce'), MC('birch'), MC('jungle'), MC('acacia'), MC('dark_oak'), MC('crimson'), MC('warped'), MC('warped'), 'quark:azalea', 'quark:blossom']
let woodChest = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'warped', 'azalea', 'blossom']
for (let i = 0; i <= (woodCanMakeChest.length - 1); i++) {
	event.recipes.create.itemApplication("quark:" + woodChest[i] + "_chest", [MC("chest"), (woodCanMakeChest[i] + "_planks")])
}

}

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

// 极光海带
event.replaceInput({ id: CRD("mechanical_crafting/shimmer_bucket") }, CRD('sap_bucket'), TE('resin_bucket'))
event.recipes.createFilling("upgrade_aquatic:polar_kelp", [MC('kelp'), Fluid.of(CRD('shimmer'), 250)])

// 滴水石块
event.recipes.createCompacting([MC('dripstone_block')], [CR('limestone'), Fluid.of(MC("water"), 500)])
event.recipes.createSplashing([Item.of(MC("dripstone_block"))], CRD('weathered_limestone'))

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
event.shaped(Item.of(CR('andesite_alloy'), 2), [
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

event.recipes.thermalPress("kubejs:andesite_alloy_gear", [
	"create:andesite_alloy",
	"thermal:press_gear_die",
]);

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
		  "item": "kubejs:andesite_alloy_gear",
		  "count": 1
		}
	]
});

}

function andesiteMachine(event) {

event.replaceInput({ id: CR("crafting/kinetics/brass_hand") }, '#forge:plates/brass', CR('golden_sheet'))

wood_types.forEach(wood => {
	event.recipes.createCutting(['2x ' + wood + '_slab'], wood + '_planks').processingTime(50)
})

// 兼容匠魂木头
event.recipes.createCutting(['2x tconstruct:skyroot_planks_slab'], 'tconstruct:skyroot_planks').processingTime(50)
event.recipes.createCutting(['2x tconstruct:bloodshroom_planks_slab'], 'tconstruct:bloodshroom_planks').processingTime(50)
event.recipes.createCutting(['2x tconstruct:greenheart_planks_slab'], 'tconstruct:greenheart_planks').processingTime(50)
// 兼容夸克木头
event.recipes.createCutting(['2x quark:blossom_planks_slab'], 'quark:blossom_planks').processingTime(50)
event.recipes.createCutting(['2x quark:azalea_planks_slab'], 'quark:azalea_planks').processingTime(50)

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
andesite_machine(AE2('charger'), 1, MC('copper_ingot'))
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
event.remove({ output: 'create_dd:raw_rubber' })
event.remove({ output: 'create_dd:rubber' })

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

event.blasting(Item.of('thermal:cured_rubber', 6), 'rubber_duck:rubber_duck_item').cookingTime(100)

event.recipes.createMixing('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), F("#vines", 4)])
event.recipes.createMixing('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), '4x #minecraft:flowers'])
event.recipes.createMixing('1x ' + TE("rubber"), [Fluid.of(TE('resin'), 250)])
event.recipes.createCompacting('1x ' + CRD("crystallized_sap"), [Fluid.of(TE('resin'), 500)])

event.recipes.createEmptying(Fluid.of(TE("resin"), 500), CRD("crystallized_sap"))

// 硫化橡胶
event.custom({
	"type":"vintageimprovements:pressurizing",
	"secondaryFluidInput": 0,
	"secondaryFluidOutput": 0,
	"heatRequirement": "heated",
	"ingredients": [ 
		{
			"tag": "forge:dusts/sulfur"
		},
		{
			"fluid": "thermal:resin",
			"amount": 500
		}
	],
	"results": [
		{
			"item": "thermal:cured_rubber",
			"count": 4
		},
		{
			"fluid": "vintageimprovements:sulfur_dioxide",
			"amount": 250
		}
	],
	"processingTime": 200
});

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
copper_machine('pipez:basic_upgrade', 4, CRD('integrated_circuit'))

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
event.shapeless('create:rose_quartz', [[MC('quartz'), AE2('certus_quartz_crystal'), AE2('charged_certus_quartz_crystal')], redstone, redstone, redstone, redstone])

event.remove({ id: CR('compat/ae2/milling/sky_stone_block') })
event.remove({ id: CR('compat/ae2/milling/nether_quartz') })
event.remove({ id: CR('compat/ae2/milling/certus_quartz') })
event.remove({ id: CR('crafting/materials/electron_tube') })
event.remove({ id: CR('crafting/materials/rose_quartz') })

event.recipes.createMechanicalCrafting(Item.of(AE2('certus_crystal_seed'), 2), ['A'], { A: F('#gems/certus_quartz') })
event.recipes.createMechanicalCrafting(Item.of(AE2('fluix_crystal_seed'), 2), ['A'], { A: F('#gems/fluix') })
event.recipes.createMechanicalCrafting(Item.of(KJ('nether_seed'), 2), ['A'], { A: F('#gems/quartz') })

let grow = (from, via, to, id) => {
	event.recipes.createSequencedAssembly([to], from, [
		event.recipes.createFilling(via, [via, Fluid.of(MC("water"), 500)]),
	]).transitionalItem(via)
		.loops(4)
		.id('kubejs:grow_' + id)
}

grow(AE2("certus_crystal_seed"), KJ('growing_certus_seed'), KJ('tiny_certus_crystal'), "tiny_certus_crystal")
grow(AE2("fluix_crystal_seed"), KJ('growing_fluix_seed'), KJ('tiny_fluix_crystal'), "tiny_fluix_crystal")
grow(KJ("nether_seed"), KJ('growing_nether_seed'), KJ('tiny_nether_crystal'), "tiny_nether_crystal")
// grow(KJ("arcane_crystal_seed"), KJ('growing_arcane_seed'), KJ('tiny_arcane_crystal'), "tiny_arcane_crystal")

grow(KJ("tiny_certus_crystal"), KJ('growing_tiny_certus_crystal'), KJ('small_certus_crystal'), "small_certus_crystal")
grow(KJ("tiny_fluix_crystal"), KJ('growing_tiny_fluix_crystal'), KJ('small_fluix_crystal'), "small_fluix_crystal")
grow(KJ("tiny_nether_crystal"), KJ('growing_tiny_nether_crystal'), KJ('small_nether_crystal'), "small_nether_crystal")
// grow(KJ("tiny_arcane_crystal"), KJ('growing_tiny_arcane_crystal'), KJ('small_arcane_crystal'), "small_arcane_crystal")

grow(KJ("small_certus_crystal"), KJ('growing_small_certus_crystal'), AE2('certus_quartz_crystal'), "certus_quartz_crystal")
grow(KJ("small_fluix_crystal"), KJ('growing_small_fluix_crystal'), AE2('fluix_crystal'), "fluix_crystal")
grow(KJ("small_nether_crystal"), KJ('growing_small_nether_crystal'), Item.of('minecraft:quartz', '{CustomModelData:1}'), "quartz_crystal")
// grow(KJ("small_arcane_crystal"), KJ('growing_small_arcane_crystal'), KJ('purified_arcane_crystal'), "arcane_crystal")

event.recipes.createMixing(Fluid.of(KJ("sky_stone"), 500), [AE2('sky_dust', 4), Fluid.of(MC('water'), 500)])
event.recipes.createMixing(CR('polished_rose_quartz'), [[AE2('certus_quartz_crystal'), KJ('purified_certus_quartz_crystal')], Fluid.of(TE("redstone"), 250)])

// 不稳红石
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

// 充能萤石
event.custom({
	"type":"vintageimprovements:centrifugation",
	"ingredients": [ 
		{
			"item": "ae2:charged_certus_quartz_crystal"
		},
		{
			"fluid": "minecraft:lava",
			"amount": 500
		}
	],
	"results": [
		{
			"item": "ae2:certus_quartz_crystal"
		},
		{
		    "fluid": "thermal:glowstone",
			"amount": 250
		}
	],
	"processingTime": 200
})
event.recipes.createMixing([AE2('certus_quartz_crystal'), Fluid.of(TE('glowstone'), 50)], [AE2('charged_certus_quartz_crystal'), Fluid.of(MC('lava'), 125)])

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

event.remove({ output: AE2("sky_dust") })
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
brass_machine('create_dd:accelerator_motor', 1, 'createaddition:electrum_spool')
brass_machine('prettypipes:pipe', 8)

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
// event.remove({ id: TC('smeltery/scorched/scorched_brick_kiln') })
// event.remove({ id: TC('smeltery/scorched/scorched_brick') })
// event.remove({ id: TC('smeltery/melting/scorched/grout') })
// event.recipes.createMilling([Item.of(TE('basalz_powder'), 1)], TE("basalz_rod")).processingTime(300)
event.remove({ id: TC('smeltery/casting/scorched/foundry_controller') })
event.remove({ id: TC('smeltery/melting/soul/sand') })
event.remove({ id: CRD('sequenced_assembly/infernal_mechanism') })
event.remove({ id: CRD('crafting/ember_alloy') })

//焦黑炉核心
donutCraft(event, TC('foundry_controller'), TC('scorched_bricks'), KJ('infernal_mechanism'))

event.recipes.createMixing(Fluid.of(TC("liquid_soul"), 500), [MC('twisting_vines'), MC('weeping_vines')]).heated()

// 余烬合金
event.recipes.createMixing(CRD('ember_alloy'), [CRD('smoked_planks'), CR('cinder_flour'), Fluid.of(TC("blazing_blood"), 50)]).heated()
event.recipes.createMixing(CRD('ember_alloy'), [CRD('smoked_planks'), Fluid.of(TC("liquid_soul"), 250), Fluid.of(TC("blazing_blood"), 50)]).heated()

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

let t1 = KJ('incomplete_infernal_mechanism')
event.recipes.createSequencedAssembly([
	KJ('infernal_mechanism'),
], CR('precision_mechanism'), [
	event.recipes.createDeploying(t1, [t1, CRD('ember_alloy')]),
	event.recipes.createDeploying(t1, [t1, CRD('ember_alloy')]),
	event.recipes.createDeploying(t1, [t1, F('#saws')])
]).transitionalItem(t1)
	.loops(1)
	.id('kubejs:infernal_mechanism1')

event.shaped(KJ('zinc_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: [KJ('zinc_casing'), CRD('zinc_casing')],
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
zinc_machine('create_dd:industrial_fan', 1, 'beyond_earth:engine_fan')
zinc_machine('createdieselgenerators:distillation_controller', 1)
zinc_machine('pipez:improved_upgrade', 4, CRD('integrated_circuit'))

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
event.remove({ id: CRD("mixing/chromatic_compound") })

// event.recipes.createMechanicalCrafting(KJ('radiant_coil'), ['A'], { A: 'vintageimprovements:small_refined_radiance_spring' })
event.recipes.createMechanicalCrafting(KJ('radiant_coil', 8), ['  B', ' A ', 'B  '], { A: ['vintageimprovements:refined_radiance_spring', 'create_dd:refined_radiance_sheet'], B: 'create_dd:shadow_steel' })
event.recipes.createMechanicalCrafting(KJ('radiant_coil'), ['A'], { A: 'vintageimprovements:refined_radiance_spring' })
event.recipes.createMechanicalCrafting(KJ('radiant_coil'), ['A'], { A: 'create_dd:refined_radiance_sheet' })
	
event.shaped(CRD('chromatic_compound'), ['S'], {S: CR('chromatic_compound')})
event.shaped(CR('chromatic_compound'), ['S'], {S: CRD('chromatic_compound')})
event.shaped(CRD('refined_radiance'), ['S'], {S: CR('refined_radiance')})
event.shaped(CR('refined_radiance'), ['S'], {S: CRD('refined_radiance')})
event.shaped(CRD('shadow_steel'), ['S'], {S: CR('shadow_steel')})
event.shaped(CR('shadow_steel'), ['S'], {S: CRD('shadow_steel')})

}

function invarMachine(event) {

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
event.custom({
	"type": "vintageimprovements:hammering",
	"hammerBlows": 2,
	"ingredients": [
		{
		  "item": "kubejs:invar_compound"
		}
	],
	"results": [
		{
		  "item": "thermal:invar_ingot"
		}
	]
})

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
event.recipes.createEmptying([AE2(colors[index + 1] + '_paint_ball'), Fluid.of(KJ('waste'), 250)], AE2(element + '_paint_ball'))
}

event.recipes.createMechanicalCrafting(CRD('chromatic_compound'), [
	'AA',
	'AA'
], {
	A: AE2('magenta_paint_ball')
})

//

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
	R: '#forge:gems/ruby',
	L: TE('lead_ingot'),
	S: '#forge:gems/sapphire'
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
invar_machine('pipez:advanced_upgrade', 4, CRD('integrated_circuit'))
invar_machine('pipez:energy_pipe', 16)

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

event.replaceInput({ type: "minecraft:crafting_shaped", id: /ae2:.*/ }, F("#ingots/iron"), TE("lead_plate"))
}

function enderMachine(event) {

// event.remove({ id: TE("machine/crucible/crucible_ender_pearl") })
// event.recipes.createMixing(Fluid.of(TE("ender"), 360), [Fluid.of('tconstruct:molten_silver', 90), Fluid.of('tconstruct:ender_slime', 1000)]).heated()

event.custom({
	"type": "tconstruct:melting",
	"ingredient": { "tag": "forge:coins/silver" },
	"result": {
		"fluid": "tconstruct:molten_silver",
		"amount": 10
	},
	"temperature": 790,
	"time": 40
})

event.custom({ // worth it!
	"type": "tconstruct:melting",
	"ingredient": { "tag": "forge:coins/gold" },
	"result": {
		"fluid": "tconstruct:molten_gold",
		"amount": 10
	},
	"temperature": 790,
	"time": 40
})

// event.custom({
// 	"type": "tconstruct:casting_table",
// 	"cast": { "tag": "tconstruct:casts/multi_use/ingot" },
// 	"fluid": {
// 		"name": "thermal:ender",
// 		"amount": 90
// 	},
// 	"result": { "item": TE("enderium_ingot") },
// 	"cooling_time": 50
// })

// event.custom({
// 	"type": "tconstruct:casting_table",
// 	"cast": { "tag": "tconstruct:casts/single_use/ingot" },
// 	"cast_consumed": true,
// 	"fluid": {
// 		"name": "thermal:ender",
// 		"amount": 90
// 	},
// 	"result": { "item": TE("enderium_ingot") },
// 	"cooling_time": 50
// })

// event.custom({
// 	"type": "tconstruct:casting_table",
// 	"cast": { "tag": "tconstruct:casts/multi_use/gear" },
// 	"fluid": {
// 		"name": TE("ender"),
// 		"amount": 360
// 	},
// 	"result": { "item": TE("enderium_gear") },
// 	"cooling_time": 90
// })

// event.custom({
// 	"type": "tconstruct:casting_table",
// 	"cast": { "tag": "tconstruct:casts/single_use/gear" },
// 	"cast_consumed": true,
// 	"fluid": {
// 		"name": TE("ender"),
// 		"amount": 360
// 	},
// 	"result": { "item": TE("enderium_gear") },
// 	"cooling_time": 90
// })

event.recipes.thermal.insolator(['phantasm:hanging_pream_berry'], 'phantasm:hanging_pream_leaves').water(1000)
event.recipes.thermal.insolator(['phantasm:pream_berry'], 'phantasm:hanging_pream_berry').water(1000)
event.recipes.thermal.insolator(['tconstruct:ender_slime_ball', '3x phantasm:hanging_pream_leaves'], 'phantasm:pream_berry').water(1000)

// let t = KJ('incomplete_abstruse_mechanism')
// event.recipes.createSequencedAssembly([
// 	KJ('abstruse_mechanism'),
// ], KJ('inductive_mechanism'), [
//	event.recipes.createDeploying(t, [t, TE('enderium_gear')]),
// 	event.recipes.createDeploying(t, [t, TE('enderium_gear')]),
// 	event.recipes.createDeploying(t, [t, F('#ender_staffs')])
// ]).transitionalItem(t)
// 	.loops(1)
// 	.id('kubejs:abstruse_mechanism')

event.remove({ id: TE("machines/smelter/smelter_alloy_enderium") })

event.recipes.thermal.smelter(TE("enderium_ingot"), [TE("silver_ingot"), "phantasm:hanging_pream_berry", MC("ender_pearl")]).energy(10000)
event.recipes.thermal.smelter(TE("enderium_ingot"), [TE("silver_ingot"), "phantasm:hanging_pream_berry", AE2("ender_dust", 4)]).energy(10000)
event.recipes.thermal.smelter(KJ("abstruse_mechanism"), [KJ("inductive_mechanism"), TE("enderium_ingot")]).energy(2000)

event.remove({ id: TE("enderium_dust_2") })
event.shapeless(TE('enderium_dust'), [
	TE('silver_dust'), 
	AE2('ender_dust'),
	AE2('ender_dust'),
	AE2('ender_dust'),
	AE2('ender_dust'),
	'phantasm:hanging_pream_berry'
]).id("kubejs:enderium_dust")


event.shaped(KJ('enderium_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
		C: KJ('enderium_casing'),
		S: KJ('abstruse_mechanism')
})

let ender_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:enderium_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:enderium_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:enderium_machine')
}

ender_machine("enderstorage:ender_chest", 1, MC('chest'))
ender_machine("enderstorage:ender_tank", 1, CR('fluid_tank'))
ender_machine("portality:controller", 1, MC('diamond'))
ender_machine(TE("upgrade_augment_3"), 1, MC('redstone'))
ender_machine(AE2("quantum_ring"), 1, AE2('energy_cell'))
ender_machine(AE2("quantum_link"), 1, AE2('fluix_pearl'))
ender_machine('kubejs:pipe_module_tier_3', 4)
ender_machine('pipez:ultimate_upgrade', 4, CRD('integrated_circuit'))
ender_machine('pipez:item_pipe', 8)

}

function circuits(event) {
event.remove({ type: AE2('inscriber') })

event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "item": AE2("calculation_processor_press") },
	"cast_consumed": false,
	"fluid": { "tag": "tconstruct:molten_copper", "amount": 90 },
	"result": { "item": AE2("printed_calculation_processor") },
	"cooling_time": 150
})

event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "item": AE2("logic_processor_press") },
	"cast_consumed": false,
	"fluid": { "tag": "tconstruct:molten_gold", "amount": 90 },
	"result": { "item": AE2("printed_logic_processor") },
	"cooling_time": 150
})

event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "item": AE2("engineering_processor_press") },
	"cast_consumed": false,
	"fluid": { "tag": "tconstruct:molten_diamond", "amount": 100 },
	"result": { "item": AE2("printed_engineering_processor") },
	"cooling_time": 150
})

event.recipes.thermal.crucible(Fluid.of(TC("molten_diamond"), 100), MC("diamond")).energy(10000)

event.recipes.thermal.chiller(AE2("printed_calculation_processor"), [Fluid.of("tconstruct:molten_copper", 90), AE2("calculation_processor_press")]).energy(5000)
event.recipes.thermal.chiller(AE2("printed_logic_processor"), [Fluid.of("tconstruct:molten_gold", 90), AE2("logic_processor_press")]).energy(5000)
event.recipes.thermal.chiller(AE2("printed_engineering_processor"), [Fluid.of("tconstruct:molten_diamond", 100), AE2("engineering_processor_press")]).energy(5000)

// event.custom(ifiniDeploying(AE2("printed_silicon"), AE2("silicon"), AE2("silicon_press")))
event.custom({
	"type": "vintageimprovements:curving",
	"itemAsHead": "ae2:silicon_press",
	"ingredients": [
		{
		  "item": "ae2:silicon"
		}
	],
	"results": [
		{
		  "item": "ae2:printed_silicon"
		}
	]
})
event.custom({
	"type":"vintageimprovements:laser_cutting",
	"ingredients": [
		{
		  "item": "ae2:silicon"
		}
	],
	"results": [
		{
		  "item": "ae2:printed_silicon"
		},
		{
			"item": "ae2:printed_silicon",
			"chance": 0.1
		}
	],
	"energy": 2000,
	"maxChargeRate": 50
})


let types = ["calculation", "logic", "engineering"]
types.forEach(e => {
	let t = KJ('incomplete_' + e + '_processor')
	event.recipes.createSequencedAssembly([
		AE2(e + '_processor'),
	], AE2('printed_silicon'), [
		event.recipes.createDeploying(t, [t, AE2('printed_' + e + "_processor")]),
		event.recipes.createFilling(t, [t, Fluid.of(TE("redstone"), 250)]),
		event.recipes.createPressing(t, t),
		event.custom({
			"type":"vintageimprovements:laser_cutting",
			"ingredients": [
				{
				  "item": t
				}
			],
			"results": [
				{
					  "item": t
				}
			],
			"energy": 2000,
			"maxChargeRate": 50
		})
	]).transitionalItem(t)
		.loops(1)
		.id('kubejs:' + e + "_processor")
})

event.recipes.thermal.smelter(AE2('quartz_glass'), AE2("certus_quartz_dust"))

}

function fluixMachine(event) {

event.shaped(KJ('flash_drive'), [
	'SCA'
], {
	A: TC('cobalt_ingot'),
	C: AE2('logic_processor'),
	S: MC('iron_ingot')
})

let t = KJ('incomplete_calculation_mechanism')
event.recipes.createSequencedAssembly([
	KJ('calculation_mechanism'),
], KJ('inductive_mechanism'), [
	event.recipes.createDeploying(t, [t, AE2('printed_silicon')]),
	event.recipes.createDeploying(t, [t, AE2('printed_silicon')]),
	event.recipes.createDeploying(t, [t, F('#flash_drives')])
]).transitionalItem(t)
	.loops(1)
	.id('kubejs:calculation_mechanism')

event.remove({ output: AE2('controller') })
event.shaped(AE2('controller'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: [KJ('fluix_casing'),KJ('matter_casing')],
	S: KJ('calculation_mechanism')
})

let fluix_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), AE2('controller'), other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: AE2('controller'), B: other_ingredient })
	}
	else
			event.stonecutting(Item.of(id, amount), AE2('controller'))
}

fluix_machine(AE2('condenser'), 1, AE2("fluix_pearl"))
fluix_machine(AE2('drive'), 1, AE2("engineering_processor"))
fluix_machine(AE2('formation_core'), 4, AE2("logic_processor"))
fluix_machine(AE2('annihilation_core'), 4, AE2("calculation_processor"))
fluix_machine(AE2('chest'), 1, MC('chest'))

event.replaceInput({ id: AE2("network/cells/storage_components_cell_1k_part") }, MC("redstone"), KJ('calculation_mechanism'))
event.replaceInput({ id: AE2("network/cells/storage_components_cell_1k_part") }, AE2("logic_processor"), F('#dusts/redstone'))
event.replaceInput({ id: AE2("network/cells/fluid_storage_components_cell_1k_part") }, MC("green_dye"), KJ('calculation_mechanism'))
event.replaceInput({ id: AE2("network/cells/fluid_storage_components_cell_1k_part") }, AE2("logic_processor"), F('#dyes/green'))
event.replaceInput({ id: AE2("network/cells/spatial_components") }, MC("glowstone_dust"), KJ('calculation_mechanism'))
event.replaceInput({ id: AE2("network/cells/spatial_components") }, AE2("engineering_processor"), F('#dusts/glowstone'))
event.replaceInput({ id: AE2("network/crafting/patterns_blank") }, MC("glowstone_dust"), KJ('calculation_mechanism'))
event.recipes.thermal.smelter(AE2("fluix_crystal", 2), [F("#gems/certus_quartz"), AE2("charged_certus_quartz_crystal"), MC("redstone")]).energy(4000)

}

function madMaths(event) {
event.remove({ output: TE('chiller_ball_cast') })
event.remove({ output: TE('chiller_rod_cast') })
event.remove({ output: TE('chiller_ingot_cast') })
event.remove({ output: PC('programming_puzzle') })

event.stonecutting(TE('chiller_ball_cast'), F('#plates/bronze'))
event.stonecutting(TE('chiller_rod_cast'), F('#plates/bronze'))
event.stonecutting(TE('chiller_ingot_cast'), F('#plates/bronze'))

// event.recipes.createCrushing([Item.of(PC('programming_puzzle', 1))], KJ('calculation_mechanism')).processingTime(30)

let types = ["three", "eight", "plus", "minus", "multiply", "divide"]
	types.forEach(e => {
		event.stonecutting(KJ(e + '_cast'), F('#plates/bronze'))
		event.custom({
			"type": "tconstruct:casting_table",
			"cast": {
				"item": KJ(e + '_cast')
			},
			"fluid": {
				"name": "kubejs:raw_logic",
				"amount": 1
			},
			"result": Item.of(KJ(e)).toResultJson(),
			"cooling_time": 10
		})
		event.custom({
			"type": "thermal:chiller",
			"ingredients": [
				Fluid.of(KJ('raw_logic'), 1).toJson(),
				Item.of(KJ(e + '_cast')).toJson()
			],
			"result": [
				Item.of(KJ(e)).toResultJson()
			],
			"energy": 100,
		})
	})

	let meltOrCrucible = (id, out, outAmount) => {
		event.recipes.thermal.crucible(Fluid.of(out, outAmount), [id]).energy(20)
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": { "item": id },
			"result": {
				"fluid": out,
				"amount": outAmount
			},
			"temperature": 200,
			"time": 20
		})
	}

let alloyAmount = 10
let outAmount = 50
event.custom({
	"type": "tconstruct:alloy",
	"inputs": [
		{ "name": "kubejs:number_0", "amount": alloyAmount },
		{ "name": "kubejs:number_1", "amount": alloyAmount },
		{ "name": "kubejs:number_2", "amount": alloyAmount },
		{ "name": "kubejs:number_3", "amount": alloyAmount },
		{ "name": "kubejs:number_4", "amount": alloyAmount },
		{ "name": "kubejs:number_5", "amount": alloyAmount },
		{ "name": "kubejs:number_6", "amount": alloyAmount },
		{ "name": "kubejs:number_7", "amount": alloyAmount },
		{ "name": "kubejs:number_8", "amount": alloyAmount },
		{ "name": "kubejs:number_9", "amount": alloyAmount }
	],
	"result": {
		"fluid": "kubejs:matrix",
		"amount": outAmount
	},
	"temperature": 200
})

meltOrCrucible(KJ("calculation_mechanism"), KJ("raw_logic"), 30)
// meltOrCrucible(PC("programming_puzzle"), KJ("programming"), 50)
meltOrCrucible(KJ("zero"), KJ("number_0"), 1)
meltOrCrucible(KJ("one"), KJ("number_1"), 1)
meltOrCrucible(KJ("two"), KJ("number_2"), 1)
meltOrCrucible(KJ("three"), KJ("number_3"), 1)
meltOrCrucible(KJ("four"), KJ("number_4"), 1)
meltOrCrucible(KJ("five"), KJ("number_5"), 1)
meltOrCrucible(KJ("six"), KJ("number_6"), 1)
meltOrCrucible(KJ("seven"), KJ("number_7"), 1)
meltOrCrucible(KJ("eight"), KJ("number_8"), 1)
meltOrCrucible(KJ("nine"), KJ("number_9"), 1)

event.custom({
	"type": "tconstruct:casting_basin",
	"cast_consumed": true,
	"fluid": {
		"name": "kubejs:matrix",
		"amount": 1000
	},
	"result": Item.of(KJ("computation_matrix")).toResultJson(),
	"cooling_time": 20
})

// event.custom({
// 	"type": "tconstruct:casting_basin",
// 	"fluid": {
// 		"name": "kubejs:programming",
// 		"amount": 400
// 	},
// 	"result": Item.of(KJ("programming_matrix")).toResultJson(),
// 	"cooling_time": 20
// })

let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let ops = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => b == 0 ? 'error' : a / b]
let opNames = ['plus', 'minus', 'multiply', 'divide']

for (var a = 0; a < 10; a++) {
	for (var b = 0; b < 10; b++) {
		for (var op = 0; op < ops.length; op++) {

			let result = ops[op](a, b)
			var output;

			if (result == 'error')
				output = KJ('missingno')
			else if (result < 0)
					continue
			else if (result > 9)
				continue
			else if (result % 1 != 0)
				continue
			else
				output = KJ(nums[result])

			event.custom({
				"type": "create:mechanical_crafting",
				"pattern": [
					"AOB"
				],
				"key": {
					"A": {
						"item": KJ(nums[a])
					},
					"O": {
						"item": KJ(opNames[op])
					},
					"B": {
						"item": KJ(nums[b])
					}
				},
				"result": {
					"item": output
				},
				"acceptMirrored": false
			})

		}
	}
}
}

function alchemy(event) {

event.recipes.thermal.pyrolyzer([MC("charcoal", 2), Fluid.of(TE('creosote'), 50)], MC("#logs")).energy(1000)
event.recipes.thermal.pyrolyzer([TE("coal_coke"), Fluid.of(TE('creosote'), 50)], MC("charcoal")).energy(2000)
let t = KJ('incomplete_coke_chunk')
event.recipes.createSequencedAssembly([
	KJ('coke_chunk'),
], TE('coal_coke'), [
	event.recipes.createFilling(t, [t, Fluid.of(MC("water"), 250)]),
	event.recipes.createCutting(t, t).processingTime(100)
]).transitionalItem(t)
	.loops(2)
	.id('kubejs:coke_cutting')

event.recipes.createSplashing([
	Item.of(KJ("sand_ball")).withChance(0.125)
], 'minecraft:sandstone')
event.recipes.thermal.bottler(KJ("sand_ball"), [Fluid.of(MC("water"), 50), F("#sand/colorless")]).energy(1000)
// event.recipes.thermal.chiller(KJ("creosote_pellet"), [Fluid.of(TE("creosote"), 50)]).energy(1000)
// event.recipes.thermal.crucible(Fluid.of(KJ("liquid_smoke"), 250), KJ("creosote_pellet")).energy(3000)
// event.remove({ id: TE("blitz_powder") })
// event.recipes.createPressing(TE("lightning_charge"), TE("blitz_powder"))
event.remove({ output: TE("basalz_powder") })
event.remove({ output: TE("blizz_powder") })

event.custom({
	"type": "thermal:pulverizer",
	"ingredient": { "item": "thermal:basalz_rod" },
	"energy": 800,
	"result": [
		{ "item": "thermal:basalz_powder", "chance": 2.5 },
		{ "item": "thermal:slag", "chance": 0.125 }
	]
})

event.custom({
	"type": "thermal:pulverizer",
	"ingredient": { "item": "thermal:blizz_rod" },
	"energy": 800,
	"result": [
		{ "item": "thermal:blizz_powder", "chance": 2.5 },
		{ "item": "thermal:niter", "chance": 0.125 }
	]
})

event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_glass", 1000), F("#sand")).energy(6000)
event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_glass", 1000), F("#glass/colorless")).energy(3000)
event.recipes.thermal.pulverizer([CR("powdered_obsidian")], F("#obsidian")).energy(7000)

let blizz = TE("blizz_powder")
let basalz = TE("basalz_powder")
let blitz = TE("blitz_powder")
event.recipes.createEmptying([KJ("rough_sand"), Fluid.of(KJ("fine_sand"), 500)], KJ("sand_ball"))
event.recipes.createCrushing([Item.of(blizz, 1), Item.of(blizz, 1).withChance(.5)], TE("blizz_rod"))
event.recipes.createCrushing([Item.of(basalz, 1), Item.of(basalz, 1).withChance(.5)], TE("basalz_rod"))
event.recipes.createCrushing([Item.of(blitz, 1), Item.of(blitz, 1).withChance(.5)], TE("blitz_rod"))
event.recipes.createCompacting(TE("ice_charge"), [blizz, blizz, blizz, blizz, blizz, blizz, blizz, blizz])
event.recipes.createCompacting(TE("earth_charge"), [basalz, basalz, basalz, basalz, basalz, basalz, basalz, basalz])
event.recipes.createCompacting(TE("lightning_charge"), [blitz, blitz, blitz, blitz, blitz, blitz, blitz, blitz])

event.recipes.createCompacting(KJ("silicon_compound"), [Fluid.of(KJ("fine_sand"), 500), KJ("purified_sand"), KJ("coke_chunk")])
// event.recipes.createCompacting(KJ("smoke_mote"), [Fluid.of(KJ("liquid_smoke"), 500)])

// event.remove({ output: "desolation:activatedcharcoal" })
// event.recipes.thermal.smelter(
// 	["desolation:activatedcharcoal"],
// 	[KJ("coke_chunk"), TE("lightning_charge")])
// .energy(5000)

event.recipes.thermal.smelter(
	[KJ("purified_sand")],
	[KJ("rough_sand"), TE("earth_charge")])
.energy(5000)

event.recipes.thermal.smelter(
	[AE2("silicon")],
	[KJ("silicon_compound"), TE("ice_charge")])
.energy(5000)

event.recipes.thermal.numismatic_fuel(TE('silver_coin')).energy(100000)
event.recipes.thermal.numismatic_fuel(TE('gold_coin')).energy(6400000)

event.remove({ id: TE("machine/pyrolyzer/pyrolyzer_logs") })
event.remove({ id: CR("crushing/obsidian") })
// event.remove({ type: TE("sawmill") })
// event.remove({ type: TE("centrifuge") })
event.remove({ output: AE2("silicon") })

let alchemy_mix = (output, catalyst, r1, r2, amount) => {
	event.recipes.createMixing([Item.of(KJ("substrate_" + output, amount ? amount : 1)), KJ("substrate_" + catalyst)], [KJ("substrate_" + catalyst), KJ("substrate_" + r1, 2), KJ("substrate_" + r2)]).heated()
}

let alchemy_smelt = (output, catalyst, r1, r2, amount) => {
	event.recipes.thermal.smelter([Item.of(KJ("substrate_" + output, amount ? amount : 1)), KJ("substrate_" + catalyst)], [KJ("substrate_" + r1, 2), KJ("substrate_" + catalyst), KJ("substrate_" + r2)]).energy(4000)
}

alchemy_mix("red", "herbal", "diorite", "andesite")
alchemy_mix("orange", "herbal", "granite", "diorite")
alchemy_mix("yellow", "herbal", "cobblestone", "granite")
alchemy_mix("green", "herbal", "basalt", "cobblestone")
alchemy_mix("blue", "herbal", "gabbro", "basalt")
alchemy_mix("magenta", "herbal", "andesite", "gabbro")

alchemy_smelt("nether", "volatile", "red", "gabbro")
alchemy_smelt("blaze", "volatile", "orange", "andesite")
alchemy_smelt("gunpowder", "volatile", "yellow", "diorite")
alchemy_smelt("slime", "volatile", "green", "granite")
alchemy_smelt("prismarine", "volatile", "blue", "cobblestone")
alchemy_smelt("obsidian", "volatile", "magenta", "basalt")

alchemy_mix("arcane", "crystal", "nether", "magenta")
alchemy_mix("niter", "crystal", "blaze", "red")
alchemy_mix("quartz", "crystal", "gunpowder", "orange")
alchemy_mix("sulfur", "crystal", "slime", "yellow")
alchemy_mix("apatite", "crystal", "prismarine", "green")
alchemy_mix("certus", "crystal", "obsidian", "blue")

alchemy_smelt("lead", "metal", "arcane", "obsidian")
alchemy_smelt("copper", "metal", "niter", "nether")
alchemy_smelt("gold", "metal", "quartz", "blaze")
alchemy_smelt("nickel", "metal", "sulfur", "gunpowder")
alchemy_smelt("zinc", "metal", "apatite", "slime")
alchemy_smelt("iron", "metal", "certus", "prismarine")

alchemy_mix("emerald", "gem", "lead", "certus")
alchemy_mix("sapphire", "gem", "copper", "arcane")
alchemy_mix("diamond", "gem", "gold", "niter")
alchemy_mix("lapis", "gem", "nickel", "quartz")
alchemy_mix("ruby", "gem", "zinc", "sulfur")
alchemy_mix("cinnabar", "gem", "iron", "apatite")

alchemy_smelt("andesite", "igneous", "emerald", "iron", 20)
alchemy_smelt("diorite", "igneous", "sapphire", "lead", 20)
alchemy_smelt("granite", "igneous", "diamond", "copper", 20)
alchemy_smelt("cobblestone", "igneous", "lapis", "gold", 20)
alchemy_smelt("basalt", "igneous", "ruby", "nickel", 20)
alchemy_smelt("gabbro", "igneous", "cinnabar", "zinc", 20)

let mundane = (id, outputs) => {
	let jsonOut = []
	if (outputs[0] > 0)
		jsonOut.push({
			"item": "darkerdepths:ash",
			"count": outputs[0]
		})
	if (outputs[1] > 0)
		jsonOut.push({
			"item": MC("redstone"),
			"count": outputs[1]
		})
	if (outputs[2] > 0)
		jsonOut.push({
			"item": MC("glowstone_dust"),
			"count": outputs[2]
		})
	event.custom({
		"type": "thermal:centrifuge",
		"ingredient": {
			"item": KJ(`failed_alchemy_${id}`)
		},
		"result": jsonOut
	})
}

let i = 0;

mundane(i++, [4, 0, 0])
mundane(i++, [3, 1, 0])
mundane(i++, [3, 0, 1])
mundane(i++, [2, 2, 0])
mundane(i++, [2, 0, 2])

mundane(i++, [2, 1, 1])
mundane(i++, [1, 3, 0])
mundane(i++, [1, 0, 3])
mundane(i++, [1, 2, 1])
mundane(i++, [1, 1, 2])

mundane(i++, [0, 4, 0])
mundane(i++, [0, 0, 4])
mundane(i++, [0, 3, 1])
mundane(i++, [0, 1, 3])
mundane(i++, [0, 2, 2])

// let recompact = (id, id2) => {
// 	event.recipes.createCompacting(id2, [id])
// }

// recompact(CR("powdered_obsidian"), MC("obsidian"))
// recompact(TE("diamond_dust"), MC("diamond"))
// recompact(TE("emerald_dust"), MC("emerald"))
// recompact(TE("lapis_dust"), MC("lapis_lazuli"))
// recompact(TE("sulfur_dust"), TE("sulfur"))
// recompact(TE("apatite_dust"), TE("apatite"))
// recompact(TE("niter_dust"), TE("niter"))
// recompact(TE("sapphire_dust"), TE("sapphire"))
// recompact(TE("ruby_dust"), TE("ruby"))
// recompact("forbidden_arcanus:arcane_crystal_dust", "forbidden_arcanus:arcane_crystal")

global.substrates.forEach(a => {
	a.forEach(e => {
		if (!e.ingredient)
			return
		event.custom({
			"type": "thermal:bottler",
			"ingredients": [Ingredient.of(e.ingredient).toJson(), { "fluid": "tconstruct:molten_glass", "amount": 100 }],
			"result": [{ "item": e.id }]
		})
		event.custom({
			"type": "thermal:sawmill",
			"ingredient": { "item": e.id },
			"result": [{ "item": e.outputItem ? e.outputItem : typeof e.ingredient == "string" ? e.ingredient : e.ingredient[0], "chance": 0.75 }],
			"energy": 2000
		})
	})
})

event.custom({
	"type": "thermal:sawmill",
	"ingredient": { "item": "kubejs:substrate_silicon" },
	"result": [{ "item": AE2("silicon"), "count": 1 }],
	"energy": 2000
})

event.custom({
	"type": "thermal:sawmill",
	"ingredient": { "item": "kubejs:substrate_silver" },
	"result": [{ "item": TE("silver_dust"), "count": 1 }],
	"energy": 2000
})

event.custom({
	"type": "thermal:bottler",
	"ingredients": [
		{ "item": TE("signalum_nugget") },
		{ "fluid": "tconstruct:molten_glass", "amount": 100 }
	],
	"result": [{ "item": "kubejs:accellerator_redstone" }]
})

event.custom({
	"type": "thermal:bottler",
	"ingredients": [
		{ "item": TE("silver_dust") },
		{ "fluid": "tconstruct:molten_glass", "amount": 100 }
	],
	"result": [{ "item": "kubejs:substrate_silver" }]
})

event.custom({
	"type": "thermal:bottler",
	"ingredients": [
		{ "item": TE("lumium_nugget") },
		{ "fluid": "tconstruct:molten_glass", "amount": 100 }
	],
	"result": [{ "item": "kubejs:accellerator_glowstone" }]
})
}

function oil(event) {

// 沥青沙
event.recipes.createCrushing([Item.of(TE("bitumen")), Item.of(TE("bitumen"), 2).withChance(0.75), Item.of(TE("tar"), 1).withChance(0.75), Item.of(MC("sand")).withChance(0.25)], TE("oil_sand"))
event.recipes.createCrushing([Item.of(TE("bitumen")), Item.of(TE("bitumen"), 2).withChance(0.75), Item.of(TE("tar"), 1).withChance(0.75), Item.of(MC("red_sand")).withChance(0.25)], TE("oil_red_sand"))
event.custom({
	"type":"vintageimprovements:vibrating",
	"ingredients": [ {
      "item": "thermal:oil_sand"
    }
  ],
	"results": [
	{
		"item": "thermal:bitumen",
		"count": 4
	},
	{
		"item": "minecraft:sand"
	}
	],
  "processingTime": 300
})
event.custom({
	"type":"vintageimprovements:vibrating",
	"ingredients": [ {
      "item": "thermal:oil_red_sand"
    }
  ],
	"results": [
	{
		"item": "thermal:bitumen",
		"count": 4
	},
	{
		"item": "minecraft:red_sand"
	}
	],
  "processingTime": 300
})
// 沥青
event.recipes.createCompacting(TE("bitumen"), [Fluid.of(TE('crude_oil'), 100)])
event.recipes.createCompacting(TE("bitumen"), [Fluid.of('beyond_earth:oil', 100)])
event.recipes.createCompacting(TE("bitumen"), [Fluid.of('createdieselgenerators:crude_oil', 100)])

// 石油
event.remove({ id: "createdieselgenerators:distillation/crude_oil" })
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluidTag": "forge:crude_oil",
      "amount": 100
    }
  ],
  "heatRequirement": "heated",
  "processingTime": 100,
  "results": [
    {
      "fluid": "thermal:light_oil",
      "amount": 60
    },
    {
      "fluid": "thermal:heavy_oil",
      "amount": 40
    }
  ]
})

// 汽油
event.remove({ id: "thermal:machines/refinery/refinery_light_oil" })
// 机动蒸馏
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluid": "thermal:light_oil",
      "amount": 100
    }
  ],
  "heatRequirement": "heated",
  "processingTime": 100,
  "results": [
    {
      "fluid": "createdieselgenerators:gasoline",
      "amount": 100
    }
  ]
})
// 热力蒸馏
event.custom({
	"type": "thermal:refinery",
	"ingredient": {
		"fluid": "thermal:light_oil",
		"amount": 100
	},
	"result": [
		{
			"fluid": "createdieselgenerators:gasoline",
			"amount": 100
		},
		{
			"item": "thermal:sulfur_dust",
			"chance": 0.20
		}
	],
	"energy": 6000
})

// 柴油
event.remove({ id: "thermal:machines/refinery/refinery_heavy_oil" })
// 机动蒸馏
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluid": "thermal:heavy_oil",
      "amount": 100
    }
  ],
  "heatRequirement": "heated",
  "processingTime": 100,
  "results": [
    {
      "fluid": "createdieselgenerators:diesel",
      "amount": 100
    }
  ]
})
// 热力蒸馏
event.custom({
	"type": "thermal:refinery",
	"ingredient": {
		"fluid": "thermal:heavy_oil",
		"amount": 100
	},
	"result": [
		{
			"fluid": "createdieselgenerators:diesel",
			"amount": 100
		},
		{
			"item": "thermal:tar",
			"chance": 0.20
		}
	],
	"energy": 6000
})


// 航空燃油
event.remove({ id: "beyond_earth:fuel_refining/fuel_from_oil" })
// 机动蒸馏
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluid": "createdieselgenerators:gasoline",
      "amount": 10
    }
  ],
  "heatRequirement": "superheated",
  "processingTime": 30,
  "results": [
    {
      "fluid": "beyond_earth:fuel",
      "amount": 10
    }
  ]
})
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluid": "createdieselgenerators:diesel",
      "amount": 10
    }
  ],
  "heatRequirement": "superheated",
  "processingTime": 30,
  "results": [
    {
      "fluid": "beyond_earth:fuel",
      "amount": 10
    }
  ]
})
// 热力蒸馏
event.custom({
	"type": "thermal:refinery",
	"ingredient": {
		"fluid": "createdieselgenerators:gasoline",
		"amount": 100
	},
	"result": [
		{
			"fluid": "beyond_earth:fuel",
			"amount": 100
		  }
	],
	"energy": 8000
})
event.custom({
	"type": "thermal:refinery",
	"ingredient": {
		"fluid": "createdieselgenerators:diesel",
		"amount": 100
	},
	"result": [
		{
			"fluid": "beyond_earth:fuel",
			"amount": 100
		  }
	],
	"energy": 8000
})

//event.recipes.thermal.compression_fuel(Fluid.of("advancedrocketry:hydrogen")).energy(100000)
//event.recipes.thermal.compression_fuel(Fluid.of("advancedrocketry:oxygen")).energy(10000)

}

function rocketScience(event) {
event.remove({ output: 'beyond_earth:solar_panel' })
event.remove({ output: 'beyond_earth:coal_generator' })
event.remove({ output: 'beyond_earth:compressor' })
event.remove({ output: 'beyond_earth:fuel_refinery' })
event.remove({ output: 'beyond_earth:oxygen_gear' })
event.remove({ output: 'beyond_earth:water_pump' })
event.remove({ output: 'beyond_earth:nasa_workbench' })
event.remove({ output: 'beyond_earth:rocket_nose_cone' })
event.remove({ output: 'beyond_earth:rocket_fin' })
event.remove({ output: 'beyond_earth:iron_stick' })
event.remove({ output: 'beyond_earth:oxygen_tank' }) 
event.remove({ type: 'beyond_earth:compressor' })

let gear = TE("diamond_gear")
let plastic = KJ("matter_plastics")
let casing = KJ("matter_casing")
let controller = AE2("controller")
let matrix = KJ("computation_matrix")

// 物质塑料
event.recipes.createCompacting(KJ("matter_plastics"), [
	AE2("matter_ball"), 
	AE2("matter_ball"), 
	AE2("matter_ball"), 
	AE2("matter_ball"),
	AE2("matter_ball"), 
	AE2("matter_ball"), 
	AE2("matter_ball"), 
	AE2("matter_ball"), 
	AE2("matter_ball")
]).superheated()

// 引擎框架
event.remove({ id: 'beyond_earth:engine_frame' })
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "create_dd:steel_block"
		}
	],
	"results": [
		{
			"item": "beyond_earth:engine_frame",
			"count": 1
		}
	]
})

// 引擎风扇
event.remove({ id: 'beyond_earth:engine_fan' })
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "create_dd:steel_block"
		}
	],
	"results": [
		{
			"item": "beyond_earth:engine_fan",
			"count": 1
		}
	]
})

// 车轮
event.remove({ id: 'beyond_earth:wheel' })
event.shaped("2x beyond_earth:wheel", [
	' S ',
	'SPS',
	' S '
], { 
	S: TE("cured_rubber"), 
	P: CRD("steel_ingot") 
})

// 压缩板
let compressor = (id, amount, ingredient) => {
	event.remove({ output: id })
	event.custom({
		"type": "vintageimprovements:hammering",
		"hammerBlows": 4,
		"ingredients": [
			{
			  "item": ingredient
			}
		],
		"results": [
			{
			  "item": id,
			  "count": amount
			}
		]
	})
}

compressor('beyond_earth:compressed_desh', 1, 'beyond_earth:desh_ingot')
compressor('beyond_earth:compressed_ostrum', 1, 'beyond_earth:ostrum_ingot')
compressor('beyond_earth:compressed_calorite', 1, 'beyond_earth:calorite_ingot')


// 钢引擎
event.remove({ id: 'beyond_earth:iron_engine' })
event.recipes.createMechanicalCrafting("beyond_earth:steel_engine", [
	'ABC',
], {
	A: 'kubejs:matter_plastics',
	B: 'beyond_earth:engine_fan',
	C: 'beyond_earth:engine_frame',
})

// 钢储罐
event.remove({ id: 'beyond_earth:iron_tank' })
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "kubejs:matter_casing"
		}
	],
	"results": [
		{
			"item": "beyond_earth:steel_tank",
			"count": 1
		}
	]
})


// 戴斯引擎
event.remove({ id: 'beyond_earth:gold_engine' })
event.recipes.createMechanicalCrafting("beyond_earth:desh_engine", [
	'ABC',
], {
	A: 'beyond_earth:desh_ingot',
	B: 'beyond_earth:engine_fan',
	C: 'beyond_earth:engine_frame',
})

// 戴斯储罐
event.remove({ id: 'beyond_earth:gold_tank' })
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "beyond_earth:desh_block"
		}
	],
	"results": [
		{
			"item": "beyond_earth:desh_tank",
			"count": 1
		}
	]
})


// 紫金引擎
event.remove({ id: 'beyond_earth:diamond_engine' })
event.recipes.createMechanicalCrafting("beyond_earth:ostrum_engine", [
	'ABC',
], {
	A: 'beyond_earth:ostrum_ingot',
	B: 'beyond_earth:engine_fan',
	C: 'beyond_earth:engine_frame',
})

// 紫金储罐
event.remove({ id: 'beyond_earth:diamond_tank' })
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "beyond_earth:ostrum_block"
		}
	],
	"results": [
		{
			"item": "beyond_earth:ostrum_tank",
			"count": 1
		}
	]
})


// 耐热金属引擎
event.remove({ id: 'beyond_earth:calorite_engine' })
event.recipes.createMechanicalCrafting("beyond_earth:calorite_engine", [
	'ABC',
], {
	A: 'beyond_earth:calorite_ingot',
	B: 'beyond_earth:engine_fan',
	C: 'beyond_earth:engine_frame',
})

// 耐热金属储罐
event.remove({ id: 'beyond_earth:calorite_tank' })
event.custom({
	"type":"vintageimprovements:turning",
	"ingredients": [
		{
			"item": "beyond_earth:calorite_block"
		}
	],
	"results": [
		{
			"item": "beyond_earth:calorite_tank",
			"count": 1
		}
	]
})


//


event.remove({ id: "beyond_earth:oxygen_loader" })
event.recipes.createMechanicalCrafting("beyond_earth:oxygen_loader", [
	'AAA',
	'GSG',
	'AMA'
], {
	A: plastic,
	M: controller,
	G: gear,
	S: MC("bucket")
})

event.remove({ id: "beyond_earth:oxygen_bubble_distributor" })
event.recipes.createMechanicalCrafting("beyond_earth:oxygen_bubble_distributor", [
	'AAA',
	'GSG',
	'AMA'
], {
	A: plastic,
	M: controller,
	G: gear,
	S: CR("propeller")
})

let pattern = [
	' A ',
	'GSG',
	' A '
];

event.remove({ id: "beyond_earth:space_suit" })
event.recipes.createMechanicalCrafting("beyond_earth:space_suit", pattern,
	{
		A: plastic,
		G: CR("golden_sheet"),
		S: CR("netherite_backtank")
	})

event.remove({ id: "beyond_earth:oxygen_mask" })	
event.recipes.createMechanicalCrafting("beyond_earth:oxygen_mask", pattern,
	{
		A: plastic,
		G: CR("golden_sheet"),
		S: CR("netherite_diving_helmet")
	})

event.remove({ id: "beyond_earth:space_leggings" })	
event.recipes.createMechanicalCrafting("beyond_earth:space_pants", pattern,
	{
		A: plastic,
		G: CR("golden_sheet"),
		S: MC("iron_leggings")
	})

event.remove({ id: "beyond_earth:space_boots" })		
event.recipes.createMechanicalCrafting("beyond_earth:space_boots", pattern,
	{
		A: plastic,
		G: CR("golden_sheet"),
		S: MC("iron_boots")
	})

event.remove({ id: "beyond_earth:rocket_launch_pad" })	
let smithAndMechCraft = (r, i1, i2) => {
	event.smithing(r, i1, i2)
	event.recipes.createMechanicalCrafting(r, "AB", { A: i1, B: i2 })
}

smithAndMechCraft("9x beyond_earth:rocket_launch_pad", 'create_dd:steel_block', plastic)

//

// 漫游车
event.remove({ id: "beyond_earth:rover", })
event.recipes.createMechanicalCrafting("beyond_earth:rover", [
	'C    ',
	'BDDEF',
	'ABBBA',
], {
	A: 'beyond_earth:wheel',
	B: plastic,
	C: 'kubejs:calculation_mechanism',
	D: '#interiors:floor_chairs',
	E: 'beyond_earth:steel_tank',
	F: '#forge:chests'
})

// 一级火箭
event.remove({ id: "beyond_earth:nasa_workbenching/tier1", })
event.recipes.createMechanicalCrafting("beyond_earth:rocket_t1", [
	'  G  ',
	' AYA ',
	' YEY ',
	' SES ',
	' YEY ',
	'GYYYG',
	'ABMBA',
	'A D A'
], {
	A: plastic,
	M: controller,
	G: gear,
	S: matrix,
	B: 'beyond_earth:steel_tank',
	D: 'beyond_earth:steel_engine',
	E: '#thermal:glass/hardened',
	Y: casing
})

// 二级火箭
event.remove({ id: "beyond_earth:nasa_workbenching/tier2", })
event.recipes.createMechanicalCrafting("beyond_earth:rocket_t2", [
	'  G  ',
	' AYA ',
	' YEY ',
	' SES ',
	' YEY ',
	'GYYYG',
	'ABMBA',
	'A D A'
], {
	A: plastic,
	M: controller,
	G: 'beyond_earth:desh_plate',
	S: matrix,
	B: 'beyond_earth:desh_tank',
	D: 'beyond_earth:desh_engine',
	E: '#thermal:glass/hardened',
	Y: casing
})

// 三级火箭
event.remove({ id: "beyond_earth:nasa_workbenching/tier3", })
event.recipes.createMechanicalCrafting("beyond_earth:rocket_t3", [
	'  G  ',
	' AYA ',
	' YEY ',
	' SES ',
	' YEY ',
	'GYYYG',
	'ABMBA',
	'A D A'
], {
	A: plastic,
	M: controller,
	G: 'beyond_earth:compressed_ostrum',
	S: matrix,
	B: 'beyond_earth:ostrum_tank',
	D: 'beyond_earth:ostrum_engine',
	E: '#thermal:glass/hardened',
	Y: casing
})

// 四级火箭
event.remove({ id: "beyond_earth:nasa_workbenching/tier4", })
event.recipes.createMechanicalCrafting("beyond_earth:rocket_t4", [
	'  G  ',
	' AYA ',
	' YYY ',
	' YEY ',
	' SES ',
	' YEY ',
	'GYYYG',
	'ABMBA',
	'A D A'
], {
	A: plastic,
	M: controller,
	G: 'beyond_earth:compressed_calorite',
	S: matrix,
	B: 'beyond_earth:calorite_tank',
	D: 'beyond_earth:calorite_engine',
	E: '#thermal:glass/hardened',
	Y: casing
})


}

function trading(event) {
let trade = (card_id, ingredient, output) => {
	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of(ingredient).toJson(),
			Ingredient.of(card_id).toJson(),
		],
		result: [
			Item.of(output).toResultJson()
		],
		energy: 1000
	})
}

global.trades.forEach(element => {
	if (global.transactions[element])
		global.transactions[element].forEach(transaction => {
			trade(KJ('trade_card_' + element), transaction.in, transaction.out)
		})
});

global.professions.forEach(element => {
	if (global.transactions[element])
		global.transactions[element].forEach(transaction => {
			trade(KJ('profession_card_' + element), transaction.in, transaction.out)
		})
});
}

function unify(event) {

event.remove({ input: "darkerdepths:aridrock_gold_ore" });
event.remove({ input: "darkerdepths:aridrock_iron_ore" });
event.remove({ input: "darkerdepths:limestone_gold_ore" });
event.remove({ input: "darkerdepths:limestone_iron_ore" });

event.remove({ input: "beyond_earth:hammer" });
event.remove({ output: "beyond_earth:hammer" });

event.remove({ output: "create_dd:integrated_mechanism" });
event.remove({ output: "create_dd:infernal_mechanisms" });
event.remove({ output: "create_dd:inductive_mechanism" });
event.remove({ output: "create_dd:calculation_mechanism" });
event.remove({ output: "create_dd:crafting_inductive_mechanism1" });
event.remove({ output: "create_dd:crafting_inductive_mechanism2" });

event.remove({ id: "createbigcannons:melting/melt_bronze_block" });
event.remove({ id: "createbigcannons:melting/melt_bronze_ingot" });
event.remove({ id: "createbigcannons:melting/melt_bronze_nugget" });
event.remove({ id: "createbigcannons:melting/melt_steel_block" });
event.remove({ id: "createbigcannons:melting/melt_steel_ingot" });
event.remove({ id: "createbigcannons:melting/melt_steel_nugget" });

event.remove({ id: "beyond_earth:desh_plate" });
event.remove({ id: "beyond_earth:iron_plate" });

const blackList = {
    not: [
      { id: "tconstruct:smeltery/casts/gold_casts/ingots" },
      { id: "tconstruct:smeltery/casts/gold_casts/nuggets" },
      { id: "tconstruct:smeltery/casts/gold_casts/rods" },
      { id: "tconstruct:smeltery/casts/gold_casts/plates" },
      { id: "tconstruct:smeltery/casts/gold_casts/gears" },
      { id: "tconstruct:smeltery/casts/gold_casts/wires" },
	  { id: "minecraft:quartz_pillar" },
      { id: "minecraft:cut_copper_from_copper_block_stonecutting" },
      { id: "minecraft:cut_copper_stairs_from_cut_copper_stonecutting" },
      { id: "minecraft:cut_copper_slab_from_cut_copper_stonecutting" },
      { id: "minecraft:cut_copper" },
      { id: "minecraft:cut_copper_stairs" },
      { id: "minecraft:cut_copper_slab" },
      { id: "minecraft:copper_ingot" },
      { id: "minecraft:cut_copper_stairs_from_copper_block_stonecutting" },
      { id: "minecraft:cut_copper_slab_from_copper_block_stonecutting" },
      { id: "minecraft:waxed_copper_block_from_honeycomb" },
      { id: "minecraft:waxed_cut_copper_from_honeycomb" },
    ]
};

let removeIO = (item) => {
	event.remove({ input: item });
	event.remove({ output: item });
};

let replaceIO = (tag, item) => {
  event.replaceInput(blackList, tag, item);
  event.replaceOutput(blackList, tag, item);
};

let stone = Item.of(MC("cobblestone"), 1).withChance(.5);
let limestone = Item.of("darkerdepths:limestone", 1).withChance(.5);
let aridrock = Item.of("darkerdepths:aridrock", 1).withChance(.5);
let otherstone = Item.of(OC("otherstone"), 1).withChance(.5);

event.recipes.createCrushing([Item.of("forbidden_arcanus:stellarite_piece", 1), Item.of("forbidden_arcanus:stellarite_piece", 1).withChance(.25), stone], "forbidden_arcanus:stella_arcanum");
event.recipes.createCrushing([Item.of("forbidden_arcanus:xpetrified_orb", 2), Item.of("forbidden_arcanus:xpetrified_orb", 1).withChance(.25), stone], "forbidden_arcanus:xpetrified_ore");
event.recipes.createCrushing([Item.of("buddycards:luminis_crystal", 2), Item.of("buddycards:luminis_crystal", 1).withChance(.25), stone], "buddycards:luminis_ore");
event.recipes.createCrushing([Item.of("forbidden_arcanus:arcane_crystal", 2), Item.of("forbidden_arcanus:arcane_crystal_dust", 1).withChance(.25), stone], "forbidden_arcanus:arcane_crystal_ore");
event.recipes.createCrushing([Item.of(OC("iesnium_dust"), 2), Item.of(OC("iesnium_dust"), 1).withChance(.25), otherstone], OC("iesnium_ore"));
event.recipes.createCrushing([Item.of(TE("sapphire"), 2), Item.of(TE("sapphire"), 1).withChance(.25), stone], TE("sapphire_ore"));
event.recipes.createCrushing([Item.of(TE("ruby"), 2), Item.of(TE("ruby"), 1).withChance(.25), stone], TE("ruby_ore"));
event.recipes.createCrushing([Item.of(MC("diamond"), 2), Item.of(MC("diamond"), 1).withChance(.25), limestone], "darkerdepths:limestone_diamond_ore");
event.recipes.createCrushing([Item.of(MC("diamond"), 2), Item.of(MC("diamond"), 1).withChance(.25), aridrock], "darkerdepths:aridrock_diamond_ore");
event.recipes.createCrushing([Item.of(MC("coal"), 2), Item.of(MC("coal"), 2).withChance(.5), limestone], "darkerdepths:limestone_coal_ore");
event.recipes.createCrushing([Item.of(MC("coal"), 2), Item.of(MC("coal"), 2).withChance(.5), aridrock], "darkerdepths:aridrock_coal_ore");
event.recipes.createCrushing([Item.of(MC("lapis_lazuli"), 12), Item.of(MC("lapis_lazuli"), 8).withChance(.25), limestone], "darkerdepths:limestone_lapis_ore");
event.recipes.createCrushing([Item.of(MC("lapis_lazuli"), 12), Item.of(MC("lapis_lazuli"), 8).withChance(.25), aridrock], "darkerdepths:aridrock_lapis_ore");
event.recipes.createCrushing([Item.of(CR('crushed_raw_iron'), 1), limestone], "darkerdepths:limestone_iron_ore");
event.recipes.createCrushing([Item.of(CR('crushed_raw_iron'), 1), aridrock], "darkerdepths:aridrock_iron_ore");
event.recipes.createCrushing([Item.of(CR('crushed_raw_gold'), 1), limestone], "darkerdepths:limestone_gold_ore");
event.recipes.createCrushing([Item.of(CR('crushed_raw_gold'), 1), aridrock], "darkerdepths:aridrock_gold_ore");
event.recipes.createCrushing([Item.of(TE('sulfur'), 1).withChance(.15)], "biomesoplenty:brimstone");

// 蓝宝石 和 红宝石 块合成
event.shaped("thermal:ruby_block", [
	'PPP',
	'PPP',
	'PPP'
], {
	P: "thermal:ruby"
})
event.shaped("9x thermal:ruby", ['P'], {P: "thermal:ruby_block"})

event.shaped("thermal:sapphire_block", [
	'PPP',
	'PPP',
	'PPP'
], {
	P: "thermal:sapphire"
})
event.shaped("9x thermal:sapphire", ['P'], {P: "thermal:sapphire_block"})


// 蜂蜜
event.remove({ id: "tconstruct:smeltery/entity_melting/bee" });
event.remove({ id: "tconstruct:smeltery/melting/slime/honey_block" });
event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "minecraft:honey_block"
  },
  "result": {
    "fluid": "create:honey",
    "amount": 1000
  },
  "temperature": 1,
  "time": 94
});
event.custom({
  "type": "tconstruct:entity_melting",
  "entity": {
    "type": "minecraft:bee"
  },
  "result": {
    "fluid": "create:honey",
    "amount": 25
  },
  "damage": 2
});

// 下界残骸熔融
event.custom({
  "type": "tconstruct:ore_melting",
  "rate": "metal",
  "ingredient": {
    "tag": "forge:ores/netherite_scrap"
  },
  "result": {
    "fluid": "tconstruct:molten_debris",
    "amount": 90
  },
  "temperature": 1175,
  "time": 143,
  "byproducts": [
    {
      "fluid": "tconstruct:molten_diamond",
      "amount": 100,
      "rate": "gem"
    },
    {
      "fluid": "tconstruct:molten_gold",
      "amount": 270,
      "rate": "metal"
    }
  ]
})

// 粉碎末地石
event.recipes.createMilling([Item.of('2x occultism:crushed_end_stone')], 'minecraft:end_stone').processingTime(100);

// 硬化硝
event.remove({ id: "createbigcannons:milling/alloy_nethersteel_cast_iron" });
event.recipes.createMilling([Item.of('2x thermal:niter_dust')], 'createbigcannons:hardened_nitro').processingTime(100);

// 硫粉
replaceIO("#forge:dusts/sulfur", "thermal:sulfur_dust");
event.recipes.createMilling(["thermal:sulfur_dust"], "#forge:gems/sulfur").processingTime(200);

// 硝粉
replaceIO("#forge:dusts/saltpeter", "thermal:niter_dust");
event.recipes.createMilling(["thermal:niter_dust"], "#forge:gems/niter").processingTime(200);

// 磷灰石粉
replaceIO("#forge:dusts/apatite", "thermal:apatite_dust");
event.recipes.createMilling(["thermal:apatite_dust"], "#forge:gems/apatite").processingTime(200);

// 石英粉
replaceIO("#forge:dusts/quartz", "thermal:quartz_dust");
event.recipes.createMilling(["thermal:quartz_dust"], "#forge:gems/quartz").processingTime(200);

// 福禄伊克斯石英粉
replaceIO("#forge:dusts/fluix", "ae2:fluix_dust");
event.recipes.createMilling(["ae2:fluix_dust"], "#forge:gems/fluix").processingTime(200);

// 赛特斯石英粉
replaceIO("#forge:dusts/certus_quartz", "ae2:certus_quartz_dust");
event.recipes.createMilling(["ae2:certus_quartz_dust"], "#forge:gems/certus_quartz").processingTime(200);

// 黑曜石粉
replaceIO("#forge:dusts/obsidian", "create:powdered_obsidian");
event.recipes.createCrushing(CR("powdered_obsidian"), MC("obsidian"));

// 朱砂粉（红石粉）
event.recipes.createMilling(['4x ' + MC('redstone')], TE('cinnabar')).processingTime(700);
event.recipes.createCrushing(['6x ' + MC('redstone')], TE('cinnabar')).processingTime(500);
event.recipes.thermal.pulverizer(['8x ' + MC('redstone')], TE('cinnabar')).energy(10000);
event.custom({
  "type": "occultism:crushing",
  "ingredient": {
    "tag": "forge:ores/cinnabar"
  },
  "result": {
    "tag": "forge:dusts/redstone",
    "count": 8
  },
  "crushing_time": 400,
  "ignore_crushing_multiplier": false
})


// 萤石粉
event.recipes.createMilling(['3x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').processingTime(700);
event.recipes.createCrushing(['6x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').processingTime(500);
event.recipes.thermal.pulverizer(['9x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').energy(10000);

replaceIO("create_dd:integrated_mechanism", "create:precision_mechanism");
replaceIO("create_dd:infernal_mechanism", "kubejs:infernal_mechanism");
replaceIO("create_dd:inductive_mechanism", "kubejs:kinetic_mechanism");
replaceIO("create_dd:calculation_mechanism", "kubejs:calculation_mechanism");

//

event.replaceInput({ id: "create:milling/lapis_lazuli" }, MC("lapis_lazuli"), TE("lapis_dust"))

event.replaceInput(MC("quartz"), AE2("#all_nether_quartz"));
event.replaceInput(F("#gems/quartz"), AE2("#all_nether_quartz"));

replaceIO("#forge:silicon", "ae2:silicon");
replaceIO("#forge:dusts/ender_pearl", "ae2:ender_dust");
replaceIO("#forge:sawdust", "thermal:sawdust");
replaceIO("#forge:slag", "thermal:slag");
replaceIO("#forge:storage_blocks/charcoal", "mekanism:block_charcoal");
replaceIO("#forge:coal_coke", "thermal:coal_coke");
replaceIO("#forge:fuels/bio", "createaddition:biomass");
replaceIO("thermal:tea", "farmersrespite:green_tea_leaves");
replaceIO('create_dd:chromatic_compound', 'create:chromatic_compound');
replaceIO('create_dd:refined_radiance', 'create:refined_radiance');
replaceIO('create_dd:shadow_steel', 'create:shadow_steel');

event.remove({ output: "thermal:cinnabar_dust" });

function unifyAllTheMetal(
    name,
    ore,
    deepslateOre,
    rawOre,
    rawOreBlock,
    block,
    ingot,
    nugget,
    gem,
    dust,
    fluid,
    gear,
    plate,
    rod,
    crushed,
    wire,
	spring,
    byproduct,
    fluid_byproduct) {
    let obj = {
      name: name,
      ore: ore,
      deepslateOre: deepslateOre,
      rawOre: rawOre,
      rawOreBlock: rawOreBlock,
      block: block,
      ingot: ingot,
      nugget: nugget,
      gem: gem,
      dust: dust,
      fluid: fluid,
      gear: gear,
      plate: plate,
      rod: rod,
      crushed: crushed,
      wire: wire,
	  spring: spring,
      byproduct: byproduct,
      fluid_byproduct: fluid_byproduct,
    };

    if (rawOre) {
      replaceIO(`#forge:raw_materials/${name}`, rawOre);
    }
    if (rawOreBlock) {
      replaceIO(`#forge:storage_blocks/raw_${name}`, rawOreBlock);
    }
    if (block) {
      replaceIO(`#forge:storage_blocks/${name}`, block);
    }
    if (ingot) {
      replaceIO(`#forge:ingots/${name}`, ingot);
    }
    if (nugget) {
      replaceIO(`#forge:nuggets/${name}`, nugget);
    }
    if (gem) {
      replaceIO(`#forge:gems/${name}`, gem);
    }
    if (dust) {
      replaceIO(`#forge:dusts/${name}`, dust);
    }
    if (gear) {
      replaceIO(`#forge:gears/${name}`, gear);
    }
    if (plate) {
      replaceIO(`#forge:plates/${name}`, plate);
    }
    if (rod) {
      replaceIO(`#forge:rods/${name}`, rod);
    }
	if (spring) {
      replaceIO(`#forge:springs/${name}`, spring);
    };
    if (wire) {
      replaceIO(`#forge:wires/${name}`, wire);
    }
    
    processing(obj, event);
};

unifyAllTheMetal(
    "andesite_alloy",
    "",
    "",
    "",
    "",
    "create:andesite_alloy_block",
    "create:andesite_alloy",
    "",
    "",
    "",
    "",
    // "kubejs:andesite_alloy_gear",
	"",
    "create_dd:andesite_sheet",
    "vintageimprovements:andesite_rod",
    "",
    "vintageimprovements:andesite_wire",
    "vintageimprovements:andesite_spring",
    "",
    ""
);

unifyAllTheMetal(
    "amethyst_bronze",
    "",
    "",
    "",
    "",
    "tconstruct:amethyst_bronze_block",
    "tconstruct:amethyst_bronze_ingot",
    "tconstruct:amethyst_bronze_nugget",
    "",
    "",
    "tconstruct:molten_amethyst_bronze",
    "",
    "vintageimprovements:amethyst_bronze_sheet",
    "vintageimprovements:amethyst_bronze_rod",
    "",
    "vintageimprovements:amethyst_bronze_wire",
    "vintageimprovements:amethyst_bronze_spring",
    "",
    ""
);

unifyAllTheMetal(
    "brass",
    "",
    "",
    "",
    "",
    "create:brass_block",
    "create:brass_ingot",
    "create:brass_nugget",
    "",
    "kubejs:brass_dust",
    "tconstruct:molten_brass",
    "",
    "create:brass_sheet",
    "createaddition:brass_rod",
    "",
    "vintageimprovements:brass_wire",
    "vintageimprovements:brass_spring",
    "",
    ""
);

unifyAllTheMetal(
    "bronze",
    "",
    "",
    "",
    "",
    "create_dd:bronze_block",
    "create_dd:bronze_ingot",
    "create_dd:bronze_nugget",
    "",
    "thermal:bronze_dust",
    "tconstruct:molten_bronze",
    "thermal:bronze_gear",
    "create_dd:bronze_sheet",
    "vintageimprovements:bronze_rod",
    "",
    "vintageimprovements:bronze_wire",
    "vintageimprovements:bronze_spring",
    "",
    ""
);

unifyAllTheMetal(
    "constantan",
    "",
    "",
    "",
    "",
    "thermal:constantan_block",
    "thermal:constantan_ingot",
    "thermal:constantan_nugget",
    "",
    "thermal:constantan_dust",
    "tconstruct:molten_constantan",
    "thermal:constantan_gear",
    "thermal:constantan_plate",
    "vintageimprovements:constantan_rod",
    "",
    "vintageimprovements:constantan_wire",
    "vintageimprovements:constantan_spring",
    "",
    ""
);

unifyAllTheMetal(
    "copper",
    "minecraft:copper_ore",
    "minecraft:deepslate_copper_ore",
    "minecraft:raw_copper",
    "minecraft:raw_copper_block",
    "minecraft:copper_block",
    "minecraft:copper_ingot",
    "create:copper_nugget",
    "",
    "thermal:copper_dust",
    "tconstruct:molten_copper",
    "thermal:copper_gear",
    "create:copper_sheet",
    "createaddition:copper_rod",
    "create:crushed_raw_copper",
    "createaddition:copper_wire",
	"vintageimprovements:copper_spring",
    "minecraft:gold_nugget",
    "tconstruct:molten_gold"
);

unifyAllTheMetal(
    "diamond",
    "minecraft:diamond_ore",
    "minecraft:deepslate_diamond_ore",
    "",
    "",
    "minecraft:diamond_block",
    "",
    "",
    "minecraft:diamond",
    "thermal:diamond_dust",
    "tconstruct:molten_diamond",
    "thermal:diamond_gear",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
);

unifyAllTheMetal(
    "ruby",
    "thermal:ruby_ore",
    "thermal:deepslate_ruby_ore",
    "",
    "",
    "thermal:ruby_block",
    "",
    "",
    "thermal:ruby",
    "thermal:ruby_dust",
    "",
    "thermal:ruby_gear",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
);

unifyAllTheMetal(
    "sapphire",
    "thermal:sapphire_ore",
    "thermal:deepslate_sapphire_ore",
    "",
    "",
    "thermal:sapphire_block",
    "",
    "",
    "thermal:sapphire",
    "thermal:sapphire_dust",
    "",
    "thermal:sapphire_gear",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
);

unifyAllTheMetal(
    "electrum",
    "",
    "",
    "",
    "",
    "thermal:electrum_block",
    "thermal:electrum_ingot",
    "thermal:electrum_nugget",
    "",
    "thermal:electrum_dust",
    "tconstruct:molten_electrum",
    "thermal:electrum_gear",
    "thermal:electrum_plate",
    "createaddition:electrum_rod",
    "",
    "",
    "createaddition:electrum_wire",
    "vintageimprovements:electrum_spring",
    "",
	""
);

unifyAllTheMetal(
    "emerald",
    "minecraft:emerald_ore",
    "minecraft:deepslate_emerald_ore",
    "",
    "",
    "minecraft:emerald_block",
    "",
    "",
    "minecraft:emerald",
    "thermal:emerald_dust",
    "tconstruct:molten_emerald",
    "thermal:emerald_gear",
    "",
    "",
    "",
    "",
    "",
	"",
    ""
);

unifyAllTheMetal(
    "enderium",
    "",
    "",
    "",
    "",
    "thermal:enderium_block",
    "thermal:enderium_ingot",
    "thermal:enderium_nugget",
    "",
    "thermal:enderium_dust",
    "tconstruct:molten_enderium",
    "thermal:enderium_gear",
    "thermal:enderium_plate",
    "vintageimprovements:enderium_rod",
    "",
    "vintageimprovements:enderium_wire",
    "vintageimprovements:enderium_spring",
    "",
    ""
);

unifyAllTheMetal(
    "signalum",
    "",
    "",
    "",
    "",
    "thermal:signalum_block",
    "thermal:signalum_ingot",
    "thermal:signalum_nugget",
    "",
    "thermal:signalum_dust",
    "tconstruct:molten_signalum",
    "thermal:signalum_gear",
    "thermal:signalum_plate",
    "vintageimprovements:signalum_rod",
    "",
    "vintageimprovements:signalum_wire",
    "vintageimprovements:signalum_spring",
    "",
    ""
);

unifyAllTheMetal(
    "gold",
    "minecraft:gold_ore",
    "minecraft:deepslate_gold_ore",
    "minecraft:raw_gold",
    "minecraft:raw_gold_block",
    "minecraft:gold_block",
    "minecraft:gold_ingot",
    "minecraft:gold_nugget",
    "",
    "thermal:gold_dust",
    "tconstruct:molten_gold",
    "thermal:gold_gear",
    "create:golden_sheet",
    "createaddition:gold_rod",
    "create:crushed_raw_gold",
    "createaddition:gold_wire",
	"vintageimprovements:golden_spring",
    "create:zinc_nugget",
    "tconstruct:molten_zinc"
);

unifyAllTheMetal(
    "invar",
    "",
    "",
    "",
    "",
    "thermal:invar_block",
    "thermal:invar_ingot",
    "thermal:invar_nugget",
    "",
    "thermal:invar_dust",
    "tconstruct:molten_invar",
    "thermal:invar_gear",
    "thermal:invar_plate",
    "vintageimprovements:invar_rod",
    "",
    "vintageimprovements:invar_wire",
    "vintageimprovements:invar_spring",
    "",
    ""
);

unifyAllTheMetal(
    "iron",
    "minecraft:iron_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:raw_iron",
    "minecraft:raw_iron_block",
    "minecraft:iron_block",
    "minecraft:iron_ingot",
    "minecraft:iron_nugget",
    "",
    "thermal:iron_dust",
    "tconstruct:molten_iron",
    "thermal:iron_gear",
    "create:iron_sheet",
    "createaddition:iron_rod",
    "create:crushed_raw_iron",
    "createaddition:iron_wire",
	"vintageimprovements:iron_spring",
    "thermal:nickel_nugget",
    "tconstruct:molten_nickel"
);

unifyAllTheMetal(
    "lapis",
    "",
    "",
    "",
    "",
    "minecraft:lapis_block",
    "",
    "",
    "minecraft:lapis_lazuli",
    "thermal:lapis_dust",
    "",
    "thermal:lapis_gear",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
);

unifyAllTheMetal(
    "lead",
    "thermal:lead_ore",
    "thermal:deepslate_lead_ore",
    "thermal:raw_lead",
    "thermal:raw_lead_block",
    "thermal:lead_block",
    "thermal:lead_ingot",
    "thermal:lead_nugget",
    "",
    "thermal:lead_dust",
    "tconstruct:molten_lead",
    "thermal:lead_gear",
    "thermal:lead_plate",
    "vintageimprovements:lead_rod",
    "create:crushed_raw_lead",
    "vintageimprovements:lead_spring",
	"vintageimprovements:lead_spring",
    "minecraft:iron_nugget",
    "tconstruct:molten_iron"
);

unifyAllTheMetal(
    "lumium",
    "",
    "",
    "",
    "",
    "thermal:lumium_block",
    "thermal:lumium_ingot",
    "thermal:lumium_nugget",
    "",
    "thermal:lumium_dust",
    "tconstruct:molten_lumium",
    "thermal:lumium_gear",
    "thermal:lumium_plate",
    "vintageimprovements:lumium_rod",
    "",
    "vintageimprovements:lumium_wire",
    "vintageimprovements:lumium_spring",
    "",
    ""
);

unifyAllTheMetal(
    "manyullyn",
    "",
    "",
    "",
    "",
    "tconstruct:manyullyn_block",
    "tconstruct:manyullyn_ingot",
    "tconstruct:manyullyn_nugget",
    "",
    "",
    "tconstruct:molten_manyullyn",
    "",
    "vintageimprovements:manyullyn_sheet",
    "vintageimprovements:manyullyn_rod",
    "",
    "vintageimprovements:manyullyn_wire",
    "vintageimprovements:manyullyn_spring",
    "",
    ""
);

unifyAllTheMetal(
    "netherite",
    "",
    "",
    "",
    "",
    "minecraft:netherite_block",
    "minecraft:netherite_ingot",
    "thermal:netherite_nugget",
    "",
    "thermal:netherite_dust",
    "tconstruct:molten_netherite",
    "thermal:netherite_gear",
    "vintageimprovements:netherite_sheet",
    "vintageimprovements:netherite_rod",
    "",
    "vintageimprovements:netherite_wire",
    "vintageimprovements:netherite_spring",
    "occultism:iesnium_nugget",
    "materialis:molten_iesnium"
);

unifyAllTheMetal(
    "nickel",
    "thermal:nickel_ore",
    "thermal:deepslate_lead_ore",
    "thermal:raw_nickel",
    "thermal:raw_nickel_block",
    "thermal:nickel_block",
    "thermal:nickel_ingot",
    "thermal:nickel_nugget",
    "",
    "thermal:nickel_dust",
    "tconstruct:molten_nickel",
    "thermal:nickel_gear",
    "thermal:nickel_plate",
    "vintageimprovements:nickel_rod",
    "create:crushed_raw_nickel",
    "vintageimprovements:nickel_wire",
	"vintageimprovements:nickel_spring",
    "create:copper_nugget",
    "tconstruct:molten_copper"
);

unifyAllTheMetal(
    "pig_iron",
    "",
    "",
    "",
    "",
    "tconstruct:pig_iron_block",
    "tconstruct:pig_iron_ingot",
    "tconstruct:pig_iron_nugget",
    "",
    "",
    "tconstruct:molten_pig_iron",
    "",
    "vintageimprovements:pig_iron_sheet",
    "vintageimprovements:pig_iron_rod",
    "",
    "vintageimprovements:pig_iron_wire",
    "vintageimprovements:pig_iron_spring",
    "",
    ""
);

unifyAllTheMetal(
    "quartz",
    "",
    "",
    "",
    "",
    "minecraft:quartz_block",
    "",
    "",
    "minecraft:quartz",
    "thermal:quartz_dust",
    "tconstruct:molten_quartz",
    "thermal:quartz_gear",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
);

unifyAllTheMetal(
    "rose_gold",
    "",
    "",
    "",
    "",
    "tconstruct:rose_gold_block",
    "tconstruct:rose_gold_ingot",
    "tconstruct:rose_gold_nugget",
    "",
    "thermal:rose_gold_dust",
    "tconstruct:molten_rose_gold",
    "thermal:rose_gold_gear",
    "vintageimprovements:rose_gold_sheet",
    "vintageimprovements:rose_gold_rod",
    "",
    "vintageimprovements:rose_gold_wire",
    "vintageimprovements:rose_gold_spring",
    "",
    ""
);

unifyAllTheMetal(
    "silver",
    "thermal:silver_ore",
    "thermal:deepslate_silver_ore",
    "thermal:raw_silver",
    "thermal:raw_silver_block",
    "thermal:silver_block",
    "thermal:silver_ingot",
    "thermal:silver_nugget",
    "",
    "thermal:silver_dust",
    "tconstruct:molten_silver",
    "thermal:silver_gear",
    "thermal:silver_plate",
    "vintageimprovements:silver_rod",
    "create:crushed_raw_silver",
    "vintageimprovements:silver_wire",
    "vintageimprovements:silver_spring",
    "",
    ""
);

unifyAllTheMetal(
    "steel",
    "",
    "",
    "",
    "",
    "create_dd:steel_block",
    "create_dd:steel_ingot",
    "create_dd:steel_nugget",
    "",
    "thermal:steel_dust",
    "tconstruct:molten_steel",
    "thermal:steel_gear",
    "create_dd:steel_sheet",
    "vintageimprovements:steel_rod",
    "",
    "vintageimprovements:steel_wire",
    "vintageimprovements:steel_wire",
    "",
    ""
);

unifyAllTheMetal(
    "tin",
    "thermal:tin_ore",
    "thermal:deepslate_tin_ore",
    "thermal:raw_tin",
    "thermal:raw_tin_block",
    "create_dd:tin_block",
    "create_dd:tin_ingot",
    "create_dd:tin_nugget",
    "",
    "thermal:tin_dust",
    "tconstruct:molten_tin",
    "thermal:tin_gear",
    "create_dd:tin_sheet",
    "vintageimprovements:tin_rod",
    "create:crushed_raw_tin",
    "vintageimprovements:tin_wire",
	"vintageimprovements:tin_spring",
    "create:copper_nugget",
    "tconstruct:molten_copper"
);

unifyAllTheMetal(
    "zinc",
    "create:zinc_ore",
    "create:deepslate_zinc_ore",
    "create:raw_zinc",
    "create:raw_zinc_block",
    "create:zinc_block",
    "create:zinc_ingot",
    "create:zinc_nugget",
    "",
    "kubejs:zinc_dust",
    "tconstruct:molten_zinc",
    "",
    "create_dd:zinc_sheet",
    "vintageimprovements:zinc_rod",
    "create:crushed_raw_zinc",
    "vintageimprovements:zinc_wire",
	"vintageimprovements:zinc_spring",
    "thermal:lead_nugget",
    "tconstruct:molten_lead"
);

unifyAllTheMetal(
    "cobalt",
    "tconstruct:cobalt_ore",
    "",
    "tconstruct:raw_cobalt",
    "tconstruct:raw_cobalt_block",
    "tconstruct:cobalt_block",
    "tconstruct:cobalt_ingot",
    "tconstruct:cobalt_nugget",
    "",
    "kubejs:cobalt_dust",
    "tconstruct:molten_cobalt",
    "",
    "vintageimprovements:cobalt_sheet",
    "vintageimprovements:cobalt_rod",
    "kubejs:crushed_raw_cobalt",
    "vintageimprovements:cobalt_wire",
    "vintageimprovements:cobalt_spring",
    "create:powdered_obsidian",
    "tconstruct:molten_obsidian"
);

unifyAllTheMetal(
    "neptunium",
    "",
    "",
    "",
    "",
    "aquaculture:neptunium_block",
    "aquaculture:neptunium_ingot",
    "aquaculture:neptunium_nugget",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
);

unifyAllTheMetal(
    "cast_iron",
    "",
    "",
    "",
    "",
    "createbigcannons:cast_iron_block",
    "createbigcannons:cast_iron_ingot",
    "createbigcannons:cast_iron_nugget",
    "",
    "",
    "createbigcannons:molten_cast_iron",
    "",
    "vintageimprovements:cast_iron_sheet",
    "vintageimprovements:cast_iron_rod",
    "",
    "vintageimprovements:cast_iron_wire",
    "vintageimprovements:cast_iron_spring",
    "",
    ""
);

unifyAllTheMetal(
    "industrial_iron",
    "",
    "",
    "",
    "",
    "create:industrial_iron_block",
    "create_dd:industrial_iron_ingot",
    "create_dd:industrial_iron_nugget",
    "",
    "",
    "",
    "",
    "create_dd:industrial_iron_sheet",
    "",
    "",
    "",
    "",
    "",
    ""
);

unifyAllTheMetal(
    "arcane_gold",
    "",
    "",
    "",
    "",
    "forbidden_arcanus:arcane_gold_block",
    "forbidden_arcanus:arcane_gold_ingot",
    "forbidden_arcanus:arcane_gold_nugget",
    "",
    "",
    "",
    "kubejs:arcane_gold_gear",
    "kubejs:arcane_golden_sheet",
    "",
    "",
    "",
    "",
    "",
    ""
);

unifyAllTheMetal(
    "arcane_crystal",
    "forbidden_arcanus:arcane_crystal_ore",
    "forbidden_arcanus:deepslate_arcane_crystal_ore",
    "",
    "",
    "forbidden_arcanus:arcane_crystal_block",
    "",
    "",
    "forbidden_arcanus:arcane_crystal",
    "forbidden_arcanus:arcane_crystal_dust",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
);

unifyAllTheMetal(
    "refined_radiance",
    "",
    "",
    "",
    "",
    "create_dd:refined_radiance_block",
    "create:refined_radiance",
    "",
    "",
    "",
    "",
    "",
    "create_dd:refined_radiance_sheet",
    "vintageimprovements:refined_radiance_rod",
    "",
    "vintageimprovements:refined_radiance_wire",
	"vintageimprovements:refined_radiance_spring",
    "",
    ""
);

unifyAllTheMetal(
    "shadow_steel",
    "",
    "",
    "",
    "",
    "create_dd:shadow_steel_block",
    "create:shadow_steel",
    "",
    "",
    "",
    "",
    "",
    "create_dd:shadow_steel_sheet",
    "vintageimprovements:shadow_steel_rod",
    "",
    "vintageimprovements:shadow_steel_wire",
    "vintageimprovements:shadow_steel_spring",
    "",
    ""
);

unifyAllTheMetal(
    "desh",
    "",
    "",
    "beyond_earth:raw_desh",
    "beyond_earth:raw_desh_block",
    "beyond_earth:desh_block",
    "beyond_earth:desh_ingot",
    "beyond_earth:desh_nugget",
    "",
    "kubejs:desh_dust",
    "beyond_earth:molten_desh",
    "",
    "beyond_earth:desh_plate",
    "vintageimprovements:desh_rod",
    "kubejs:crushed_desh_ore",
    "vintageimprovements:desh_wire",
    "vintageimprovements:desh_spring",
    "",
    ""
);

unifyAllTheMetal(
    "ostrum",
    "",
    "",
    "beyond_earth:raw_ostrum",
    "beyond_earth:raw_ostrum_block",
    "beyond_earth:ostrum_block",
    "beyond_earth:ostrum_ingot",
    "beyond_earth:ostrum_nugget",
    "",
    "kubejs:ostrum_dust",
    "beyond_earth:molten_ostrum",
    "",
    "",
    "vintageimprovements:ostrum_rod",
    "kubejs:crushed_ostrum_ore",
    "vintageimprovements:ostrum_wire",
    "vintageimprovements:ostrum_spring",
    "",
    ""
);

unifyAllTheMetal(
    "calorite",
    "",
    "",
    "beyond_earth:raw_calorite",
    "beyond_earth:raw_calorite_block",
    "beyond_earth:calorite_block",
    "beyond_earth:calorite_ingot",
    "beyond_earth:calorite_nugget",
    "",
    "kubejs:calorite_dust",
    "beyond_earth:molten_calorite",
    "",
    "",
    "vintageimprovements:calorite_rod",
    "kubejs:crushed_calorite_ore",
    "vintageimprovements:calorite_wire",
    "vintageimprovements:calorite_spring",
    "",
    ""
);

unifyAllTheMetal(
    "", //名称
    "", //矿石
    "", //深层矿石
    "", //粗矿
    "", //粗矿块
    "", //块
    "", //锭
    "", //粒
    "", //宝石
    "", //粉
    "", //熔融流体
    "", //齿轮
    "", //板材
    "", //棍
    "", //粉碎矿
    "", //线
	"", //弹簧
    "", //副产物
    ""  //熔融流体副产物
);

}

const processing = (obj, event) => {
  CreatePlate(obj.name, obj.plate, obj.ingot, event);
  tinkersPlate(obj.name, obj.plate, obj.fluid, obj.gem, event);

  CARod(obj.name, obj.rod, obj.ingot, event);
  thermalsRod(obj.name, obj.rod, event);
  tinkersRod(obj.name, obj.rod, obj.fluid, event);

  CAWire(obj.name, obj.wire, obj.plate, event);
  tinkersWire(obj.name, obj.wire, obj.fluid, event);

  CreateGear(obj.name, obj.gear, obj.ingot, obj.gem, event);
  thermalsGear(obj.name, obj.ingot, obj.gem, obj.gear, event);
  minecraftGear(obj.name, obj.ingot, obj.gem, obj.gear, event);
  tinkersGear(obj.name, obj.gear, obj.fluid, obj.gem, event);

  FiuldDust(obj.name, obj.dust, obj.gem, obj.ingot, obj.fluid, obj.fluid_byproduct, event);
  FiuldIngot(obj.ingot, obj.fluid, event);
  FiuldNugget(obj.nugget, obj.fluid, event);
  FiuldBlock(obj.block, obj.gem, obj.ingot, obj.fluid, event);
  FiuldGem(obj.gem, obj.fluid, event);
  FiuldGear(obj.name, obj.ingot, obj.gem, obj.gear, obj.fluid, event);

  Crusheds(obj.name, obj.crushed, obj.gem, obj.ore, obj.deepslateOre, obj.rawOre, obj.rawOreBlock, event);

  Dusts(obj.name, obj.crushed, obj.gem, obj.ingot, obj.dust, event);

  Blocks(obj.name, obj.block, obj.fluid, obj.gem, event);

  crafting_from_Nuggets(obj.name, obj.ingot, obj.nugget, event);
  tinkersIngot(obj.name, obj.ingot, obj.fluid, obj.gem, event);
  Plate_to_Ingot(obj.name, obj.plate, obj.ingot, event);

  crafting_from_Ingots(obj.name, obj.ingot, obj.nugget, event);
  nuggets(obj.name, obj.nugget, obj.crushed, obj.dust, obj.byproduct, event);
};

// 板材

const CreatePlate = (name, plate, ingot, event) => {
  if (plate === "") return;

  if (ingot) {
    event.remove({
      type: "create:pressing",
      output: `#forge:plates/${name}`,
    });

    event.recipes.createPressing(plate, [`#forge:ingots/${name}`]);
  }
};
const tinkersPlate = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:plates/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, gem ? 100 : 90)
    .singleUseCast("plate")
    .coolingTime(60)
    .id(`unify:tconstruct/plate/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, gem ? 100 : 90)
    .multiUseCast("plate")
    .coolingTime(60)
    .id(`unify:tconstruct/plate/multi_${name}`);
};

// 杆

const CARod = (name, rod, ingot, event) => {
  if (rod === "") return;

  if (ingot) {
    event.remove({
      type: "createaddition:rolling",
      output: `#forge:rods/${name}`,
    });

    event.recipes.createaddition.rolling({
      input: Ingredient.of(`#forge:ingots/${name}`).toJson(),
      result: Item.of(`2x ${rod}`).toResultJson(),
    });

	event.custom({
	"type": "vintageimprovements:curving",
	"itemAsHead": "kubejs:press_rod_die",
	"ingredients": [
		{
		  "tag": `forge:ingots/${name}`
		}
	],
	"results": [
		{
		  "item": `${rod}`,
		  "count": 2
		}
	]
　　});

	
  }
};
const thermalsRod = (name, rod, event) => {
  if (rod === "") return;

  event.recipes.thermalPress(`2x ${rod}`, [
    `#forge:ingots/${name}`,
    "kubejs:press_rod_die",
  ]);
};
const tinkersRod = (name, item, fluid, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:rods/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, 45)
    .singleUseCast("rod")
    .coolingTime(60)
    .id(`unify:tconstruct/rod/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, 45)
    .multiUseCast("rod")
    .coolingTime(60)
    .id(`unify:tconstruct/rod/multi_${name}`);
};

// 线

const CAWire = (name, wire, plate, event) => {
  if (wire === "") return;

  if (plate) {
    event.remove({
      type: "createaddition:rolling",
      output: `#forge:wires/${name}`,
    });

    event.recipes.createaddition.rolling({
      input: Ingredient.of(`#forge:plates/${name}`).toJson(),
      result: Item.of(`2x ${wire}`).toResultJson(),
    });
  }
};
const tinkersWire = (name, item, fluid, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:wires/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, 45)
    .singleUseCast("wire")
    .coolingTime(60)
    .id(`unify:tconstruct/wire/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, 45)
    .multiUseCast("wire")
    .coolingTime(60)
    .id(`unify:tconstruct/wire/multi_${name}`);
};

// 齿轮

const CreateGear = (name, gear, ingot, gem, event) => {
  if (gear === "") return;

  if (ingot !== "") {

	event.custom({
	"type": "vintageimprovements:curving",
	"itemAsHead": "thermal:press_gear_die",
	"ingredients": [
		{
		  "tag": `forge:ingots/${name}`
		}
	],
	"results": [
		{
		  "item": `${gear}`,
		  "count": 1
		}
	]
　　});
  }

  if (gem !== "") {

	event.custom({
	"type": "vintageimprovements:curving",
	"itemAsHead": "thermal:press_gear_die",
	"ingredients": [
		{
		  "tag": `forge:gems/${name}`
		}
	],
	"results": [
		{
		  "item": `${gear}`,
		  "count": 1
		}
	]
　　});
}
};
const thermalsGear = (name, ingot, gem, gear, event) => {
  if (gear === "") return;

  event.remove({
    type: "thermal:press",
    output: `#forge:gears/${name}`,
  });

  if (ingot !== "") {
    event.recipes.thermalPress(gear, [
      `#forge:ingots/${name}`,
      "thermal:press_gear_die",
    ]);
  }

  if (gem !== "") {
    event.recipes.thermalPress(gear, [
      `#forge:gems/${name}`,
      "thermal:press_gear_die",
    ]);
  }
};
const tinkersGear = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:gears/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, gem ? 100 : 90)
    .singleUseCast("gear")
    .coolingTime(60)
    .id(`unify:tconstruct/gear/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, gem ? 100 : 90)
    .multiUseCast("gear")
    .coolingTime(60)
    .id(`unify:tconstruct/gear/multi_${name}`);
};
const minecraftGear = (name, ingot, gem, gear, event) => {
  if (gear === "") return;

  event.remove({
    type: "minecraft:crafting_shaped",
    output: `#forge:gears/${name}`,
  });

  if (ingot !== "") {
    event
      .shaped("4x " + gear, [" N ", "NIN", " N "], {
        N: `#forge:ingots/${name}`,
        I: [`minecraft:iron_nugget`, `create:zinc_nugget`, `thermal:nickel_nugget`, `thermal:tin_nugget`],
      })
      .id(`unify:minecraft/gear/${name}`);
  }

  if (gem !== "") {
    event
      .shaped("4x " + gear, [" N ", "NIN", " N "], {
        N: `#forge:gems/${name}`,
        I: [`minecraft:iron_nugget`, `create:zinc_nugget`, `thermal:nickel_nugget`, `thermal:tin_nugget`],
      })
      .id(`unify:minecraft/gear/${name}`);
  }
};

// 流体

const FiuldDust = (name, dust, gem, ingot, fluid, fluid_byproduct, event) => {
  if (dust === "" || fluid === "") return;
  
  if (fluid_byproduct == "") {
  event.remove({
      type: "tconstruct:melting",
      input: `#forge:dusts/${name}`,
    });
    
  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": dust
    },
    "result": {
      "fluid": fluid,
      "amount": gem ? 100 : 90
    },
    "temperature": 500,
    "time": 30
  });

  event.recipes.createMixing([Fluid.of(fluid, gem ? 300 : 270)], [Item.of(dust, 3), AE2('matter_ball')]).superheated()
  }

  if (fluid_byproduct !== "") {
  event.remove({
      type: "tconstruct:melting",
      input: `#forge:dusts/${name}`,
    });
    
    event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": dust
			},
			"result": {
				"fluid": fluid,
				"amount": gem ? 100 : 90
			},
			"temperature": 500,
			"time": 30,
			"byproducts": [
				{
					"fluid": fluid_byproduct,
					"amount": 30
				}
			]
		});

    event.recipes.createMixing([Fluid.of(fluid, gem ? 300 : 270), Fluid.of(fluid_byproduct, 30)], [Item.of(dust, 3), AE2('matter_ball')]).superheated()
  }

  if (ingot !== "") {
  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": dust
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 90
      }
    ],
    "processingTime": 180,
    "heatRequirement": "heated"
  });
  }

  if (gem !== "") {
  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": dust
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 100
      }
    ],
    "processingTime": 180,
    "heatRequirement": "heated"
  });
  }

};
const FiuldIngot = (ingot, fluid, event) => {
  if (ingot === "" || fluid === "") return;

  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": ingot
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 90
      }
    ],
    "processingTime": 180,
    "heatRequirement": "heated"
  });

};
const FiuldNugget = (nugget, fluid, event) => {
  if (nugget === "" || fluid === "") return;

  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": nugget
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 10
      }
    ],
    "processingTime": 20,
    "heatRequirement": "heated"
  });

};
const FiuldBlock = (block, gem, ingot, fluid, event) => {
  if (block === "" || fluid === "") return;

  if (gem !== "") {
  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": block
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 900
      }
    ],
    "processingTime": 1620,
    "heatRequirement": "heated"
  });  
  }
  
  if (ingot !== "") {
  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": block
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 810
      }
    ],
    "processingTime": 1620,
    "heatRequirement": "heated"
  });
  }
  
};
const FiuldGem = (gem, fluid, event) => {
  if (gem === "" || fluid === "") return;

  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": gem
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 100
      }
    ],
    "processingTime": 180,
    "heatRequirement": "heated"
  });

};
const FiuldGear = (name, ingot, gem, gear, fluid, event) => {
  if (gear === "" || fluid === "") return;

  if (gem !== "") {
	event.remove({
		type: "tconstruct:melting",
		input: `#forge:gears/${name}`,
	});

	event.custom({
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "item": gear,
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "item": gear
		},
		"result": {
		  "fluid": fluid,
		  "amount": 100
		},
		"temperature": 700,
		"time": 57
	  });

	  event.custom({
		"type": "createbigcannons:melting",
		"ingredients": [
		  {
			"item": gear
		  }
		],
		"results": [
		  {
			"fluid": fluid,
			"amount": 100
		  }
		],
		"processingTime": 180,
		"heatRequirement": "heated"
	  });

  }

  if (ingot !== "") {
	event.remove({
		type: "tconstruct:melting",
		input: gear,
	});

	event.custom({
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "item": gear,
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "item": gear
		},
		"result": {
		  "fluid": fluid,
		  "amount": 90
		},
		"temperature": 700,
		"time": 57
	  });

	  event.custom({
		"type": "createbigcannons:melting",
		"ingredients": [
		  {
			"item": gear
		  }
		],
		"results": [
		  {
			"fluid": fluid,
			"amount": 90
		  }
		],
		"processingTime": 180,
		"heatRequirement": "heated"
	  });
  }

};

// 碎矿

const Crusheds = (name, crushed, gem, ore, deepslateOre, rawOre, rawOreBlock, event) => {
  if (crushed === "") return;

  if (ore) {
    event.remove({ id: `create:crushing/${name}_ore` });

    if (crushed !== "") {
      event.remove({ input: "#forge:ores/" + name, type: TE("pulverizer") })

      event.recipes.thermal.pulverizer([crushed], ore).energy(3000)

      event.recipes.createCrushing(
        [
          `1x ${crushed}`,
          Item.of(crushed).withChance(0.75),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobblestone`).withChance(0.125),
        ],
        ore
      );
    }

    if (gem !== "") {
      event.recipes.createCrushing(
        [
          `1x ${gem}`,
          Item.of(gem).withChance(0.75),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobblestone`).withChance(0.125),
        ],
        ore
      );
    }
  }

  if (deepslateOre) {
    event.remove({ id: `create:crushing/deepslate_${name}_ore` });

    if (crushed !== "") {
      event.remove({ input: "#forge:ores/" + name, type: TE("pulverizer") })

      event.recipes.thermal.pulverizer([`2x ${crushed}`], deepslateOre).energy(3000)
      event.recipes.createCrushing(
        [
          `2x ${crushed}`,
          Item.of(crushed).withChance(0.25),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobbled_deepslate`).withChance(0.125),
        ],
        deepslateOre
      );
    }

    if (gem !== "") {
      event.recipes.createCrushing(
        [
          `2x ${gem}`,
          Item.of(gem).withChance(0.25),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobbled_deepslate`).withChance(0.125),
        ],
        deepslateOre
      );
    }
  }

  if (rawOre) {
    event.remove({ id: `create:crushing/raw_${name}` });
    event.remove({ id: `create:crushing/raw_${name}_ore` });

    event.recipes.createMilling(
      `${crushed}`,
      `#forge:raw_materials/${name}`
    );

    event.recipes.createCrushing(
      [crushed, Item.of(`create:experience_nugget`).withChance(0.75)],
      `#forge:raw_materials/${name}`
    );
  }

  if (rawOreBlock) {
    event.remove({ id: `create:crushing/raw_${name}_block` });

    event.recipes.createCrushing(
      [
        `9x ${crushed}`,
        Item.of(`create:experience_nugget`, 9).withChance(0.75),
      ],
      `#forge:storage_blocks/raw_${name}`
    );
  }
};

// 粉

const Dusts = (name, crushed, gem, ingot, dust, event) => {
  if (dust === "") return;

  event.remove({
    type: "create:crushing",
    output: `#forge:dusts/${name}`,
  });
  event.remove({
    type: "create:milling",
    output: `#forge:dusts/${name}`,
  });

  event.remove({
    type: "thermal:pulverizer",
    output: `#forge:dusts/${name}`,
  });

  if (crushed !== "") {
  
    event.recipes.createMilling( [
      `2x ${dust}`], 
      crushed)

		event.recipes.createCrushing( [
      `2x ${dust}`,
      Item.of(dust, 2).withChance(0.5)], 
      crushed)

    event.recipes.thermal.pulverizer([Item.of(dust, 4)], crushed).energy(15000)
  }

  if (ingot !== "") {
    event.recipes.createMilling([Item.of(dust).withChance(0.5)], `#forge:ingots/${name}`);
  }

  if (gem !== "") {
    event.recipes.createMilling([dust], gem);
  }

};

// 块
const Blocks = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:storage_blocks/${name}`,
    type: "tconstruct:casting_basin",
  });

  event.recipes
    .tconstructCastingBasin(Item.of(item), fluid, gem ? 900 : 810)
	.noCast()
    .coolingTime(200)
    .id(`unify:tconstruct/storage_block/${name}`);
};

// 锭

const crafting_from_Nuggets = (name, ingot, nugget, event) => {
  if (ingot === "" || nugget === "") return;

  event.remove({
    type: "minecraft:crafting_shapeless",
    input: `#forge:nuggets/${name}`,
    output: `#forge:ingots/${name}`,
  });

  event.remove({
    type: "minecraft:crafting_shaped",
    input: `#forge:nuggets/${name}`,
    output: `#forge:ingots/${name}`,
  });

  event
    .shaped(ingot, ["NNN", "NNN", "NNN"], { N: `#forge:nuggets/${name}` })
    .id(`unify:minecraft/ingots/${name}`);
};
const tinkersIngot = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:ingots/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, gem ? 100 : 90)
    .singleUseCast("ingot")
    .coolingTime(90)
    .id(`unify:tconstruct/ingot/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, gem ? 100 : 90)
    .multiUseCast("ingot")
    .coolingTime(90)
    .id(`unify:tconstruct/ingot/multi_${name}`);
};
const Plate_to_Ingot = (name, plate, ingot, event) => {
  if (ingot === "") return;
  
  if (plate) {
    event.remove({
      type: "minecraft:blasting",
      output: `#forge:ingots/${name}`,
    });

    event.blasting(ingot, [`#forge:plates/${name}`])
  }
};

// 粒

const crafting_from_Ingots = (name, ingot, nugget, event) => {
	if (ingot === "" || nugget === "") return;
  
	event.remove({
	  type: "minecraft:crafting_shapeless",
	  output: `#forge:nuggets/${name}`,
	  input: `#forge:ingots/${name}`,
	});
  
	event.remove({
	  type: "minecraft:crafting_shaped",
	  output: `#forge:nuggets/${name}`,
	  input: `#forge:ingots/${name}`,
	});
  
	event
	  .shapeless(`9x ${nugget}`, `#forge:ingots/${name}`)
	  .id(`unify:minecraft/nuggets/${name}`);
  };
const nuggets = (name, nugget, crushed, dust, byproduct, event) => {
  if (nugget === "") return;

  if (crushed !== "") {
    event.remove({
      type: "minecraft:smelting",
      input: `create:crushed_raw_${name}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `create:crushed_raw_${name}`,
    });
    event.remove({
      type: "create:splashing",
      input: `create:crushed_raw_${name}`,
    });

    event.smelting(Item.of(nugget, 3), crushed)

    if (byproduct !== "") {
      event.custom({
        "type": "thermal:smelter",
        "ingredient": {
          "item": crushed
        },
        "result": [
          {
            "item": nugget,
            "chance": 9.0
          },
          {
            "item": byproduct,
            "chance": (byproduct.endsWith('nugget') ? 1.8 : 0.2)
          },
          {
            "item": "thermal:rich_slag",
            "chance": 0.2
          }
        ],
        "experience": 0.2,
        "energy": 20000
      })
    }
  }

  if (dust !== "") {
    event.remove({
      type: "minecraft:smelting",
      input: `#forge:dusts/${name}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `#forge:dusts/${name}`,
    });

    event.recipes.createSplashing([Item.of(nugget, 2)], dust)

    event.smelting(Item.of(nugget, 1), dust).cookingTime(40)
    event.blasting(Item.of(nugget, 2), dust).cookingTime(40)
  }
};


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