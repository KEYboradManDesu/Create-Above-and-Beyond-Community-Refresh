// This js is meant to place all the clutter code that doesn't fit anywhere else
// They are usually small tweaks or additions that don't need their own file

ServerEvents.recipes(event => {
	// Change recipes here
	beforeNuke(event)
	waterstrainer(event)
	casing(event)
	computercraft(event)
	tomsstorage(event)
	drawersop(event)
	pipes(event)
	leather(event)
	barrels(event)
	chestFix(event)
	afterMoon(event)

	algalAndesite(event)

	rubberMatters(event)

	redstoneTransmute(event)

	radiant_coil(event)

	trading(event)
})

function beforeNuke(event) {
	event.replaceInput({ id: "occultism:ritual/summon_foliot_crusher" }, F("#ores/silver"), CR("zinc_ore"))
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
    tweak_casing('kubejs:creative_casing', 'architects_palette:unobtanium', '#kubejs:alien_stone')
}

function computercraft(event) {

    event.remove({ id: "computercraft:turtle_advanced" })
    event.remove({ id: "computercraft:turtle_advanced_upgrade" })
    event.remove({ id: "computercraft:turtle_normal" })

    //海龟
    event.smithing("computercraft:turtle_normal", "computercraft:computer_normal", TE("invar_gear"))
    event.smithing("computercraft:turtle_advanced", "computercraft:computer_advanced", TE("invar_gear"))
    event.recipes.create.mechanical_crafting("computercraft:turtle_normal", "AB", { A: "computercraft:computer_normal", B: TE("invar_gear") })
    event.recipes.create.mechanical_crafting("computercraft:turtle_advanced", "AB", { A: "computercraft:computer_advanced", B: TE("invar_gear") })
    event.shaped("computercraft:turtle_advanced", [
        'SSS',
        'SMS',
        'S S'
    ], {
        M: "computercraft:turtle_normal",
        S: 'thermal:netherite_nugget'
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
        S: 'thermal:netherite_nugget'
    })
    event.shaped("computercraft:computer_advanced", [
        'SSS',
        'SMS',
        'S S'
    ], {
        M: KJ('zinc_machine'),
        S: 'thermal:netherite_nugget'
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
        S: 'thermal:netherite_nugget'
    })
    event.shaped("computercraft:pocket_computer_advanced", [
        'SSS',
        'SMS',
        'SAS'
    ], {
        M: KJ('zinc_machine'),
        S: 'thermal:netherite_nugget',
        A: MC('golden_apple'),
    })


}

function tomsstorage(event) {
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

    // event.shaped("8x pipez:universal_pipe", [
    // 	'ACD',
    // 	'EBE',
    // ], {
    // 	A: ['pipez:energy_pipe', TE('energy_duct')],
    // 	B: KJ('creative_casing'),
    // 	C: ['prettypipes:pipe', 'pipez:item_pipe'],
    // 	D: [CR('fluid_pipe'), TE('fluid_duct'), TE('fluid_duct_windowed')],
    // 	E: CRD('integrated_circuit')
    // })

    event.shaped(TE("fluid_duct_windowed", 1), ['P'], { P: TE('fluid_duct') })
    event.shaped(TE("fluid_duct", 1), ['P'], { P: TE('fluid_duct_windowed') })

    event.stonecutting(Item.of('thermal:energy_duct', 8), 'thermal:energy_cell_frame')
    event.stonecutting(Item.of('thermal:fluid_duct', 8), 'thermal:fluid_cell_frame')

    // 量化物品管道
    event.recipes.thermal.smelter("2x pipez:item_pipe", [KJ("abstruse_mechanism"), "2x prettypipes:pipe"]).energy(1250)

    // 创造管道
    event.shapeless("pipez:universal_pipe", [["pipez:item_pipe", "prettypipes:pipe", "pipez:energy_pipe", "create:fluid_pipe"], KJ("creative_casing")])
    event.recipes.create.itemApplication('pipez:universal_pipe', ['pipez:item_pipe', 'kubejs:creative_casing'])
    event.recipes.create.itemApplication('pipez:universal_pipe', ['pipez:energy_pipe', 'kubejs:creative_casing'])
    // event.recipes.create.itemApplication('pipez:universal_pipe', ['create:fluid_pipe', 'kubejs:creative_casing']) // 灾难性的替换x1
    // event.recipes.create.itemApplication('pipez:universal_pipe', ['prettypipes:pipe', 'kubejs:creative_casing']) // 灾难性的替换x2
    // event.recipes.create.itemApplication('pipez:universal_pipe', ['pipez:gas_pipe', 'kubejs:creative_casing']) // 用不上

    // event.recipes.create.itemApplication('pipez:universal_pipe', ['thermal:fluid_duct', 'kubejs:creative_casing']) // 这三比创造管道都强
    // event.recipes.create.itemApplication('pipez:universal_pipe', ['thermal:fluid_duct_windowed', 'kubejs:creative_casing'])
    // event.recipes.create.itemApplication('pipez:universal_pipe', ['thermal:energy_duct', 'kubejs:creative_casing'])

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
    donutCraft(event, '8x minecraft:leather', 'occultism:tallow', MC("rotten_flesh"))

    //腐肉制取
    event.recipes.createHaunting([Item.of("minecraft:rotten_flesh")], '#forge:foods/meat/raw')

    //缝纫线轴
    donutCraft(event, KJ('sewing_spool'), 'createaddition:spool', MC("string"))

    //空白背包升级
    event.remove({ id: 'sophisticatedbackpacks:upgrade_base' })
    let transitional = 'kubejs:incomplete_upgrade_base'
    event.recipes.create.sequenced_assembly([
        Item.of('sophisticatedbackpacks:upgrade_base'),
    ], '#forge:leather', [
        event.recipes.create.deploying(transitional, [transitional, F('#leather')]),
        event.recipes.create.deploying(transitional, [transitional, F('#sewing_spool')])
    ]).transitionalItem(transitional)
        .loops(3)
        .id('kubejs:backpack_upgrade_base')
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
    event.recipes.create.filling("upgrade_aquatic:polar_kelp", [MC('kelp'), Fluid.of(CRD('shimmer'), 250)])

    // 滴水石块
    event.recipes.create.compacting([MC('dripstone_block')], [CR('limestone'), Fluid.of(MC("water"), 500)])
    event.recipes.create.splashing([Item.of(MC("dripstone_block"))], CRD('weathered_limestone'))

    event.remove({ output: AP('algal_brick') })
    event.smelting(AP('algal_brick'), Item.of(AP('algal_blend'))).xp(0).cookingTime(120)
    event.remove({ id: AP('algal_blend') })

    // 海藻混合物
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

    // 安山合金
    event.shaped(Item.of(CR('andesite_alloy'), 2), [
        'SS',
        'AA'
    ], {
        A: MC('andesite'),
        S: AP('algal_brick')
    })
    event.shaped(Item.of(CR('andesite_alloy'), 2), [
        'AA',
        'SS'
    ], {
        A: MC('andesite'),
        S: AP('algal_brick')
    })

    // 合成栏海藻混合物双倍
    event.shaped(Item.of('kubejs:polar_algal_blend', 8), [
        'SS',
        'AA'
    ], {
        A: 'minecraft:clay_ball',
        S: 'upgrade_aquatic:polar_kelp'
    })
    event.shaped(Item.of('kubejs:polar_algal_blend', 8), [
        'AA',
        'SS'
    ], {
        A: 'minecraft:clay_ball',
        S: 'upgrade_aquatic:polar_kelp'
    })

    // 合成栏安山合金双倍
    event.shaped(Item.of('kubejs:aethersite_alloy', 4), [
        'SS',
        'AA'
    ], {
        A: CRD('aethersite'),
        S: AP('algal_brick')
    })
    event.shaped(Item.of('kubejs:aethersite_alloy', 4), [
        'AA',
        'SS'
    ], {
        A: CRD('aethersite'),
        S: AP('algal_brick')
    })

    event.recipes.create.mixing(Item.of(AP('algal_blend'), 2), ['minecraft:clay_ball', ['minecraft:kelp', 'minecraft:seagrass']])
    event.recipes.create.mixing(Item.of(CR('andesite_alloy'), 2), [AP('algal_brick'), MC('andesite')])
    // 动力搅拌双倍
    event.recipes.create.mixing(Item.of('kubejs:polar_algal_blend', 4), ['minecraft:clay_ball', 'upgrade_aquatic:polar_kelp'])
    event.recipes.create.mixing(Item.of('kubejs:polar_algal_blend', 4), [AP('algal_brick'), CRD('aethersite')])

    event.recipes.thermal.press("kubejs:andesite_alloy_gear", [
        "create:andesite_alloy",
        "thermal:press_gear_die",
    ])

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
    })
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
        })
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

    event.recipes.create.mixing('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), F("#vines", 4)])
    event.recipes.create.mixing('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), '4x #minecraft:flowers'])
    event.recipes.create.mixing('1x ' + TE("rubber"), [Fluid.of(TE('resin'), 250)])
    event.recipes.create.compacting('1x ' + CRD("crystallized_sap"), [Fluid.of(TE('resin'), 500)])

    event.recipes.create.emptying(Fluid.of(TE("resin"), 500), CRD("crystallized_sap"))

    // 硫化橡胶
    event.custom({
        "type": "vintageimprovements:pressurizing",
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
    })
}

function redstoneTransmute(event) {
    event.replaceInput(
        "create:electron_tube",
        Ingredient.of([Item.of("immersiveengineering:electron_tube"), "create:electron_tube"])
    )
    event.replaceInput({ id: TE('redstone_servo') }, MC('iron_ingot'), TE('lead_ingot'))

    //红石浇筑
    // event.recipes.create.filling(BO("redstone_root"), [[BO("living_root"), 'twilightforest:liveroot'], Fluid.of(TE('redstone'), 100)])
    event.recipes.create.filling(TE("redprint"), [MC('paper'), Fluid.of(TE('redstone'), 200)])
    event.recipes.create.filling(TE("redstone_servo"), [TE('lead_plate'), Fluid.of(TE('redstone'), 200)])

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

function radiant_coil(event) {
    event.remove({ id: CRD("mixing/chromatic_compound") })

    // event.recipes.create.mechanical_crafting(KJ('radiant_coil'), ['A'], { A: 'vintageimprovements:small_refined_radiance_spring' })
    event.recipes.create.mechanical_crafting(KJ('radiant_coil', 8), ['  B', ' A ', 'B  '], { A: ['vintageimprovements:refined_radiance_spring', 'create_dd:refined_radiance_sheet'], B: 'create_dd:shadow_steel' })
    event.recipes.create.mechanical_crafting(KJ('radiant_coil'), ['A'], { A: 'vintageimprovements:refined_radiance_spring' })
    event.recipes.create.mechanical_crafting(KJ('radiant_coil'), ['A'], { A: 'create_dd:refined_radiance_sheet' })

    event.shaped(CRD('chromatic_compound'), ['S'], { S: CR('chromatic_compound') })
    event.shaped(CR('chromatic_compound'), ['S'], { S: CRD('chromatic_compound') })
    event.shaped(CRD('refined_radiance'), ['S'], { S: CR('refined_radiance') })
    event.shaped(CR('refined_radiance'), ['S'], { S: CRD('refined_radiance') })
    event.shaped(CRD('shadow_steel'), ['S'], { S: CR('shadow_steel') })
    event.shaped(CR('shadow_steel'), ['S'], { S: CRD('shadow_steel') })
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
    })

    global.professions.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade(KJ('profession_card_' + element), transaction.in, transaction.out)
            })
    })
}