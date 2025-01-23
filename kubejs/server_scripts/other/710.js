// Bug outpost spotted!

// Load common functions
require('../common.js');

ServerEvents.recipes(event => {
    terminids(event)
})

function terminids(event) {

    // 沥青沙
    event.recipes.create.crushing([Item.of(TE("bitumen")), Item.of(TE("bitumen"), 2).withChance(0.75), Item.of(TE("tar"), 1).withChance(0.75), Item.of(MC("sand")).withChance(0.25)], TE("oil_sand"))
    event.recipes.create.crushing([Item.of(TE("bitumen")), Item.of(TE("bitumen"), 2).withChance(0.75), Item.of(TE("tar"), 1).withChance(0.75), Item.of(MC("red_sand")).withChance(0.25)], TE("oil_red_sand"))
    event.custom({
        "type": "vintageimprovements:vibrating",
        "ingredients": [{
            "item": "thermal:oil_sand"
        }],
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
        "type": "vintageimprovements:vibrating",
        "ingredients": [{
            "item": "thermal:oil_red_sand"
        }],
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
    event.recipes.create.compacting(TE("bitumen"), [Fluid.of(TE('crude_oil'), 100)])
    event.recipes.create.compacting(TE("bitumen"), [Fluid.of('beyond_earth:oil', 100)])
    event.recipes.create.compacting(TE("bitumen"), [Fluid.of('createdieselgenerators:crude_oil', 100)])

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