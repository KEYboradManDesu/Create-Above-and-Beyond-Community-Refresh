// Load common functions
require('../common.js');

ServerEvents.recipes(event => {
	andesiteMachine(event)
})

function andesiteMachine(event) {

    wood_types.forEach(wood => {
        event.recipes.create.cutting(['2x ' + wood + '_slab'], wood + '_planks').processingTime(50)
    })

    // 兼容匠魂木头
    event.recipes.create.cutting(['2x tconstruct:skyroot_planks_slab'], 'tconstruct:skyroot_planks').processingTime(50)
    event.recipes.create.cutting(['2x tconstruct:bloodshroom_planks_slab'], 'tconstruct:bloodshroom_planks').processingTime(50)
    event.recipes.create.cutting(['2x tconstruct:greenheart_planks_slab'], 'tconstruct:greenheart_planks').processingTime(50)
    // 兼容夸克木头
    event.recipes.create.cutting(['2x quark:blossom_planks_slab'], 'quark:blossom_planks').processingTime(50)
    event.recipes.create.cutting(['2x quark:azalea_planks_slab'], 'quark:azalea_planks').processingTime(50)

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
    event.recipes.create.sequenced_assembly([
        'kubejs:kinetic_mechanism',
    ], '#minecraft:wooden_slabs', [
        event.recipes.create.deploying(transitional, [transitional, CR('andesite_alloy')]),
        event.recipes.create.deploying(transitional, [transitional, CR('andesite_alloy')]),
        event.recipes.create.deploying(transitional, [transitional, F('#saws')])
    ]).transitionalItem(transitional)
        .loops(1)
        .id('kubejs:kinetic_mechanism')

    let transitional2 = 'kubejs:incomplete_kinetic_mechanism'
    event.recipes.create.sequenced_assembly([
        'kubejs:kinetic_mechanism',
    ], ['#minecraft:wooden_slabs', 'tconstruct:pattern'], [
        event.recipes.create.deploying(transitional2, [transitional2, KJ('andesite_alloy_gear')]),
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
            event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: 'kubejs:andesite_machine', B: other_ingredient })
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
    andesite_machine('create:deployer', 1, KJ('#hand'))
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
    event.recipes.create.mechanical_crafting('create_dd:bronze_saw', "AB", { A: 'create:mechanical_saw', B: 'create_dd:bronze_casing' })
    event.remove({ output: 'create_dd:bronze_drill' })
    event.smithing('create_dd:bronze_drill', 'create:mechanical_drill', 'create_dd:bronze_casing')
    event.recipes.create.mechanical_crafting('create_dd:bronze_drill', "AB", { A: 'create:mechanical_drill', B: 'create_dd:bronze_casing' })
}