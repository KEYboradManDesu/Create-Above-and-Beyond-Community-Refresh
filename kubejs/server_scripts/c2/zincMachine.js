ServerEvents.recipes(event => {

    event.remove({ id: TC('smeltery/casting/scorched/foundry_controller') })
    event.remove({ id: TC('smeltery/melting/soul/sand') })
    event.remove({ id: CRD('sequenced_assembly/infernal_mechanism') })
    event.remove({ id: CRD('crafting/ember_alloy') })

    //焦黑炉核心
    donutCraft(event, TC('foundry_controller'), TC('scorched_bricks'), KJ('infernal_mechanism'))

    event.recipes.create.mixing(Fluid.of(TC("liquid_soul"), 500), [MC('twisting_vines'), MC('weeping_vines')]).heated()

    // 余烬合金
    event.recipes.create.mixing(CRD('ember_alloy'), [CRD('smoked_planks'), CR('cinder_flour'), Fluid.of(TC("blazing_blood"), 50)]).heated()
    event.recipes.create.mixing(CRD('ember_alloy'), [CRD('smoked_planks'), Fluid.of(TC("liquid_soul"), 250), Fluid.of(TC("blazing_blood"), 50)]).heated()

    let t = KJ('incomplete_infernal_mechanism')
    event.recipes.create.sequenced_assembly([
        KJ('infernal_mechanism'),
    ], CR('precision_mechanism'), [
        event.recipes.create.filling(t, [t, Fluid.of(TC("liquid_soul"), 500)]),
        event.recipes.create.filling(t, [t, Fluid.of(MC("lava"), 1000)]),
        event.recipes.create.filling(t, [t, Fluid.of(MC("lava"), 1000)]),
        event.recipes.create.filling(t, [t, Fluid.of(MC("lava"), 1000)])
    ]).transitionalItem(t)
        .loops(1)
        .id('kubejs:infernal_mechanism')

    let t1 = KJ('incomplete_infernal_mechanism')
    event.recipes.create.sequenced_assembly([
        KJ('infernal_mechanism'),
    ], CR('precision_mechanism'), [
        event.recipes.create.deploying(t1, [t1, CRD('ember_alloy')]),
        event.recipes.create.deploying(t1, [t1, CRD('ember_alloy')]),
        event.recipes.create.deploying(t1, [t1, F('#saws')])
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
            event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: 'kubejs:zinc_machine', B: other_ingredient })
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
        "type": "vintageimprovements:turning",
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
        "type": "vintageimprovements:turning",
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
        "type": "vintageimprovements:turning",
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

})