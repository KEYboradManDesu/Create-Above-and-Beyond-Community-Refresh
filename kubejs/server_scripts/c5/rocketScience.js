// Load common functions
require('../common.js');

ServerEvents.recipes(event => {
	rocketScience(event)
})

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
    event.recipes.create.compacting(KJ("matter_plastics"), [
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
        "type": "vintageimprovements:turning",
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
        "type": "vintageimprovements:turning",
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
    event.recipes.create.mechanical_crafting("beyond_earth:steel_engine", [
        'ABC',
    ], {
        A: 'kubejs:matter_plastics',
        B: 'beyond_earth:engine_fan',
        C: 'beyond_earth:engine_frame',
    })

    // 钢储罐
    event.remove({ id: 'beyond_earth:iron_tank' })
    event.custom({
        "type": "vintageimprovements:turning",
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
    event.recipes.create.mechanical_crafting("beyond_earth:desh_engine", [
        'ABC',
    ], {
        A: 'beyond_earth:desh_ingot',
        B: 'beyond_earth:engine_fan',
        C: 'beyond_earth:engine_frame',
    })

    // 戴斯储罐
    event.remove({ id: 'beyond_earth:gold_tank' })
    event.custom({
        "type": "vintageimprovements:turning",
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
    event.recipes.create.mechanical_crafting("beyond_earth:ostrum_engine", [
        'ABC',
    ], {
        A: 'beyond_earth:ostrum_ingot',
        B: 'beyond_earth:engine_fan',
        C: 'beyond_earth:engine_frame',
    })

    // 紫金储罐
    event.remove({ id: 'beyond_earth:diamond_tank' })
    event.custom({
        "type": "vintageimprovements:turning",
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
    event.recipes.create.mechanical_crafting("beyond_earth:calorite_engine", [
        'ABC',
    ], {
        A: 'beyond_earth:calorite_ingot',
        B: 'beyond_earth:engine_fan',
        C: 'beyond_earth:engine_frame',
    })

    // 耐热金属储罐
    event.remove({ id: 'beyond_earth:calorite_tank' })
    event.custom({
        "type": "vintageimprovements:turning",
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
    event.recipes.create.mechanical_crafting("beyond_earth:oxygen_loader", [
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
    event.recipes.create.mechanical_crafting("beyond_earth:oxygen_bubble_distributor", [
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
    event.recipes.create.mechanical_crafting("beyond_earth:space_suit", pattern,
        {
            A: plastic,
            G: CR("golden_sheet"),
            S: CR("netherite_backtank")
        })

    event.remove({ id: "beyond_earth:oxygen_mask" })
    event.recipes.create.mechanical_crafting("beyond_earth:oxygen_mask", pattern,
        {
            A: plastic,
            G: CR("golden_sheet"),
            S: CR("netherite_diving_helmet")
        })

    event.remove({ id: "beyond_earth:space_leggings" })
    event.recipes.create.mechanical_crafting("beyond_earth:space_pants", pattern,
        {
            A: plastic,
            G: CR("golden_sheet"),
            S: MC("iron_leggings")
        })

    event.remove({ id: "beyond_earth:space_boots" })
    event.recipes.create.mechanical_crafting("beyond_earth:space_boots", pattern,
        {
            A: plastic,
            G: CR("golden_sheet"),
            S: MC("iron_boots")
        })

    event.remove({ id: "beyond_earth:rocket_launch_pad" })
    let smithAndMechCraft = (r, i1, i2) => {
        event.smithing(r, i1, i2)
        event.recipes.create.mechanical_crafting(r, "AB", { A: i1, B: i2 })
    }

    smithAndMechCraft("9x beyond_earth:rocket_launch_pad", 'create_dd:steel_block', plastic)

    // 漫游车
    event.remove({ id: "beyond_earth:rover", })
    event.recipes.create.mechanical_crafting("beyond_earth:rover", [
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
    event.recipes.create.mechanical_crafting("beyond_earth:rocket_t1", [
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
    event.recipes.create.mechanical_crafting("beyond_earth:rocket_t2", [
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
    event.recipes.create.mechanical_crafting("beyond_earth:rocket_t3", [
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
    event.recipes.create.mechanical_crafting("beyond_earth:rocket_t4", [
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