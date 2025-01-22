// Priority: 999

// This file is used to store common functions and variables that are used in multiple scripts.
// This way you can define them once and use them in multiple places.

// Remember this file is enabled only if you have it required in the start of your script file!
// e.g. `require('./common.js')`

// MOD Shortcuts
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

// KubeJS log Settings
settings.logAddedRecipes = false
settings.logRemovedRecipes =false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

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

let float_and_lights = (event, item) => { // 光辉石漂浮效果
	if (event.entity.type == 'minecraft:item' && event.entity.item == item) {
		event.entity.noGravity = true
		event.server.runCommandSilent(`particle minecraft:end_rod ${event.entity.x} ${event.entity.y} ${event.entity.z} 0 0 0 0.01 1 force`)
	}
}