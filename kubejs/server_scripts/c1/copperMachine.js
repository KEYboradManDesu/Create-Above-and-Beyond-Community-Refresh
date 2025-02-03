ServerEvents.recipes(event => {

    let t = KJ('incomplete_sealed_mechanism')
    event.recipes.create.sequenced_assembly([
        KJ('sealed_mechanism'),
    ], KJ('kinetic_mechanism'), [
        event.recipes.create.deploying(t, [t, TE('cured_rubber')]),
        event.recipes.create.deploying(t, [t, TE('cured_rubber')]),
        // event.recipes.create.deploying(t, [t, F('#super_glues')])
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
        "type": "vintageimprovements:vacuumizing",
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
            event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: 'kubejs:copper_machine', B: other_ingredient })
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
        "type": "vintageimprovements:turning",
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

})