// Load common functions
require('../common.js');

ServerEvents.recipes(event => {
    madMath(event)
})

function madMath(event) {
    event.remove({ output: TE('chiller_ball_cast') })
    event.remove({ output: TE('chiller_rod_cast') })
    event.remove({ output: TE('chiller_ingot_cast') })
    event.remove({ output: PC('programming_puzzle') })

    event.stonecutting(TE('chiller_ball_cast'), F('#plates/bronze'))
    event.stonecutting(TE('chiller_rod_cast'), F('#plates/bronze'))
    event.stonecutting(TE('chiller_ingot_cast'), F('#plates/bronze'))

    // event.recipes.createCrushing([Item.of(PC('programming_puzzle', 1))], KJ('calculation_mechanism')).processingTime(30)

    let types = ["three", "eight", "plus", "minus", "multiply", "divide"]
    types.forEach(e => {
        event.stonecutting(KJ(e + '_cast'), F('#plates/bronze'))
        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
                "item": KJ(e + '_cast')
            },
            "fluid": {
                "name": "kubejs:raw_logic",
                "amount": 1
            },
            "result": Item.of(KJ(e)).toResultJson(),
            "cooling_time": 10
        })
        event.custom({
            "type": "thermal:chiller",
            "ingredients": [
                Fluid.of(KJ('raw_logic'), 1).toJson(),
                Item.of(KJ(e + '_cast')).toJson()
            ],
            "result": [
                Item.of(KJ(e)).toResultJson()
            ],
            "energy": 100,
        })
    })

    let meltOrCrucible = (id, out, outAmount) => {
        event.recipes.thermal.crucible(Fluid.of(out, outAmount), [id]).energy(20)
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": { "item": id },
            "result": {
                "fluid": out,
                "amount": outAmount
            },
            "temperature": 200,
            "time": 20
        })
    }

    let alloyAmount = 10
    let outAmount = 50
    event.custom({
        "type": "tconstruct:alloy",
        "inputs": [
            { "name": "kubejs:number_0", "amount": alloyAmount },
            { "name": "kubejs:number_1", "amount": alloyAmount },
            { "name": "kubejs:number_2", "amount": alloyAmount },
            { "name": "kubejs:number_3", "amount": alloyAmount },
            { "name": "kubejs:number_4", "amount": alloyAmount },
            { "name": "kubejs:number_5", "amount": alloyAmount },
            { "name": "kubejs:number_6", "amount": alloyAmount },
            { "name": "kubejs:number_7", "amount": alloyAmount },
            { "name": "kubejs:number_8", "amount": alloyAmount },
            { "name": "kubejs:number_9", "amount": alloyAmount }
        ],
        "result": {
            "fluid": "kubejs:matrix",
            "amount": outAmount
        },
        "temperature": 200
    })

    meltOrCrucible(KJ("calculation_mechanism"), KJ("raw_logic"), 30)
    // meltOrCrucible(PC("programming_puzzle"), KJ("programming"), 50)
    meltOrCrucible(KJ("zero"), KJ("number_0"), 1)
    meltOrCrucible(KJ("one"), KJ("number_1"), 1)
    meltOrCrucible(KJ("two"), KJ("number_2"), 1)
    meltOrCrucible(KJ("three"), KJ("number_3"), 1)
    meltOrCrucible(KJ("four"), KJ("number_4"), 1)
    meltOrCrucible(KJ("five"), KJ("number_5"), 1)
    meltOrCrucible(KJ("six"), KJ("number_6"), 1)
    meltOrCrucible(KJ("seven"), KJ("number_7"), 1)
    meltOrCrucible(KJ("eight"), KJ("number_8"), 1)
    meltOrCrucible(KJ("nine"), KJ("number_9"), 1)

    event.custom({
        "type": "tconstruct:casting_basin",
        "cast_consumed": true,
        "fluid": {
            "name": "kubejs:matrix",
            "amount": 1000
        },
        "result": Item.of(KJ("computation_matrix")).toResultJson(),
        "cooling_time": 20
    })

    // event.custom({
    // 	"type": "tconstruct:casting_basin",
    // 	"fluid": {
    // 		"name": "kubejs:programming",
    // 		"amount": 400
    // 	},
    // 	"result": Item.of(KJ("programming_matrix")).toResultJson(),
    // 	"cooling_time": 20
    // })

    let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let ops = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => b == 0 ? 'error' : a / b]
    let opNames = ['plus', 'minus', 'multiply', 'divide']

    for (var a = 0; a < 10; a++) {
        for (var b = 0; b < 10; b++) {
            for (var op = 0; op < ops.length; op++) {

                let result = ops[op](a, b)
                var output;

                if (result == 'error')
                    output = KJ('missingno')
                else if (result < 0)
                    continue
                else if (result > 9)
                    continue
                else if (result % 1 != 0)
                    continue
                else
                    output = KJ(nums[result])

                event.custom({
                    "type": "create:mechanical_crafting",
                    "pattern": [
                        "AOB"
                    ],
                    "key": {
                        "A": {
                            "item": KJ(nums[a])
                        },
                        "O": {
                            "item": KJ(opNames[op])
                        },
                        "B": {
                            "item": KJ(nums[b])
                        }
                    },
                    "result": {
                        "item": output
                    },
                    "acceptMirrored": false
                })

            }
        }
    }
}