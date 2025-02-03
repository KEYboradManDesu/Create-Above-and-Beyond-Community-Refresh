ServerEvents.recipes(event => {

    event.remove({ output: AE2("sky_dust") })
    event.recipes.create.milling([AE2('sky_dust'), AE2('sky_stone_block')], AE2('sky_stone_block')).processingTime(1000)

    event.remove({ id: CR("sequenced_assembly/precision_mechanism") })
    let t = CR('incomplete_precision_mechanism')
    event.recipes.create.sequenced_assembly([
        CR('precision_mechanism'),
    ], KJ('kinetic_mechanism'), [
        event.recipes.create.deploying(t, [t, CR('electron_tube')]),
        event.recipes.create.deploying(t, [t, CR('electron_tube')]),
        event.recipes.create.deploying(t, [t, F('#screwdrivers')])
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
            event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: 'kubejs:brass_machine', B: other_ingredient })
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
    event.recipes.create.mechanical_crafting('createdieselgenerators:large_diesel_engine', "AB", { A: 'createdieselgenerators:diesel_engine', B: 'create_dd:reinforcement_plating' })
    event.remove({ output: 'createdieselgenerators:huge_diesel_engine' })
    event.smithing('createdieselgenerators:huge_diesel_engine', 'createdieselgenerators:large_diesel_engine', 'create_dd:reinforcement_plating')
    event.recipes.create.mechanical_crafting('createdieselgenerators:huge_diesel_engine', "AB", { A: 'createdieselgenerators:large_diesel_engine', B: 'create_dd:reinforcement_plating' })

})