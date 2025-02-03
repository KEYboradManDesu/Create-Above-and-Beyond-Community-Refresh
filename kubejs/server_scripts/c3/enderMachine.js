ServerEvents.recipes(event => {

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
            event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: 'kubejs:enderium_machine', B: other_ingredient })
        }
        else
            event.stonecutting(Item.of(id, amount), 'kubejs:enderium_machine')
    }

    ender_machine("enderstorage:ender_chest", 1, MC('chest'))
    ender_machine("enderstorage:ender_tank", 1, CR('fluid_tank'))
    ender_machine("createutilities:void_battery", 1, "createaddition:modular_accumulator")
    ender_machine("portality:controller", 1, MC('diamond'))
    ender_machine(TE("upgrade_augment_3"), 1, MC('redstone'))
    ender_machine(AE2("quantum_ring"), 1, AE2('energy_cell'))
    ender_machine(AE2("quantum_link"), 1, AE2('fluix_pearl'))
    ender_machine('kubejs:pipe_module_tier_3', 4)
    ender_machine('pipez:ultimate_upgrade', 4, CRD('integrated_circuit'))
    ender_machine('pipez:item_pipe', 16)
    ender_machine("toms_storage:ts.wireless_terminal", 1, "toms_storage:ts.inventory_connector")

    event.remove({ id: "createutilities:shaped/void_chest" })
    event.remove({ id: "createutilities:shaped/void_tank" })
    event.remove({ id: "createutilities:shaped/void_motor" })
    event.remove({ id: "createutilities:shaped/graviton_tube" })

    event.recipes.thermal.smelter("createutilities:graviton_tube", ["createutilities:polished_amethyst", [TE("enderium_ingot"), TE("enderium_plate")]]).energy(2000)
    event.recipes.thermal.smelter("createutilities:void_motor", [KJ("enderium_machine"), ["create_dd:accelerator_motor", "create_dd:kinetic_motor"], "createutilities:graviton_tube"]).energy(4000)

    event.stonecutting(Item.of('createutilities:void_chest'), 'enderstorage:ender_chest')
    event.stonecutting(Item.of('enderstorage:ender_chest'), 'createutilities:void_chest')
    event.stonecutting(Item.of('createutilities:void_tank'), 'enderstorage:ender_tank')
    event.stonecutting(Item.of('enderstorage:ender_tank'), 'createutilities:void_tank')

})