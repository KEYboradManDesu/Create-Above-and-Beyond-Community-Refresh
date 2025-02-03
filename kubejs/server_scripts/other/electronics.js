ServerEvents.recipes(event => {
    electronTube(event)
    circuits(event)
})

function electronTube(event) {
    event.recipes.create.filling(CR("electron_tube"), [CR('polished_rose_quartz'), Fluid.of(TC('molten_iron'), 20)])

    let redstone = MC('redstone')
    event.shapeless('create:rose_quartz', [[MC('quartz'), AE2('certus_quartz_crystal'), AE2('charged_certus_quartz_crystal')], redstone, redstone, redstone, redstone])

    event.remove({ id: CR('compat/ae2/milling/sky_stone_block') })
    event.remove({ id: CR('compat/ae2/milling/nether_quartz') })
    event.remove({ id: CR('compat/ae2/milling/certus_quartz') })
    event.remove({ id: CR('crafting/materials/electron_tube') })
    event.remove({ id: CR('crafting/materials/rose_quartz') })

    event.recipes.create.mechanical_crafting(Item.of(AE2('certus_crystal_seed'), 2), ['A'], { A: F('#gems/certus_quartz') })
    event.recipes.create.mechanical_crafting(Item.of(AE2('fluix_crystal_seed'), 2), ['A'], { A: F('#gems/fluix') })
    event.recipes.create.mechanical_crafting(Item.of(KJ('nether_seed'), 2), ['A'], { A: F('#gems/quartz') })

    let grow = (from, via, to, id) => {
        event.recipes.create.sequenced_assembly([to], from, [
            event.recipes.create.filling(via, [via, Fluid.of(MC("water"), 500)]),
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

    event.recipes.create.mixing(Fluid.of(KJ("sky_stone"), 500), [AE2('sky_dust', 4), Fluid.of(MC('water'), 500)])
    event.recipes.create.mixing(CR('polished_rose_quartz'), [[AE2('certus_quartz_crystal'), KJ('purified_certus_quartz_crystal')], Fluid.of(TE("redstone"), 250)])

    // 不稳红石
    event.custom({
        "type": "vintageimprovements:centrifugation",
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
    event.recipes.create.mixing([AE2('certus_quartz_crystal'), Fluid.of(TE('redstone'), 100)], [AE2('charged_certus_quartz_crystal'), Fluid.of(KJ('sky_stone'), 100)])

    // 充能萤石
    event.custom({
        "type": "vintageimprovements:centrifugation",
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
    event.recipes.create.mixing([AE2('certus_quartz_crystal'), Fluid.of(TE('glowstone'), 50)], [AE2('charged_certus_quartz_crystal'), Fluid.of(MC('lava'), 125)])
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
        "type": "vintageimprovements:laser_cutting",
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
        event.recipes.create.sequenced_assembly([
            AE2(e + '_processor'),
        ], AE2('printed_silicon'), [
            event.recipes.create.deploying(t, [t, AE2('printed_' + e + "_processor")]),
            event.recipes.create.filling(t, [t, Fluid.of(TE("redstone"), 250)]),
            event.recipes.create.pressing(t, t),
            event.custom({
                "type": "vintageimprovements:laser_cutting",
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