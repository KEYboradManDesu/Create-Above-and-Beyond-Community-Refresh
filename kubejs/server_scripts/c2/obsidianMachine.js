// Load common functions
require('../common.js');

ServerEvents.recipes(event => {
	obsidianMachine(event)
})

function obsidianMachine(event) {

    // 坚固板
    event.remove({ id: 'create:sequenced_assembly/sturdy_sheet' })

    let ss = 'create:unprocessed_obsidian_sheet'
    event.recipes.create.sequenced_assembly([
        Item.of(CR('sturdy_sheet')).withChance(0.5),
        Item.of('create:unprocessed_obsidian_sheet', '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"kubejs:sturdy_sheet"}}').withChance(0.5),
    ], CR('powdered_obsidian'), [
        event.recipes.create.filling(ss, [ss, Fluid.of(MC("lava"), 500)]),
        event.recipes.create.pressing(ss, ss),
        event.recipes.create.pressing(ss, ss)
    ]).transitionalItem(ss)
        .loops(1)
        .id("kubejs:sturdy_sheet")

    event.custom({
        "type": "vintageimprovements:vacuumizing",
        "ingredients": [
            {
                "item": "create:powdered_obsidian"
            },
            {
                "fluid": "minecraft:lava",
                "amount": 500
            }
        ],
        "results": [
            {
                "item": "create:sturdy_sheet",
                "count": 1
            }
        ],
        "processingTime": 400
    })

    //

    let sm = KJ('incomplete_sturdy_mechanism')
    event.recipes.create.sequenced_assembly([
        KJ('sturdy_mechanism'),
    ], CR('precision_mechanism'), [
        event.recipes.create.deploying(sm, [sm, CR('sturdy_sheet')]),
        event.recipes.create.deploying(sm, [sm, CR('sturdy_sheet')])
    ]).transitionalItem(sm)
        .loops(1)
        .id('kubejs:sturdy_mechanism')

    event.shaped(KJ("obsidian_machine"), [
        "SSS",
        "SCS",
        "SSS"
    ], {
        C: [CR("railway_casing")],
        S: KJ("sturdy_mechanism")
    })

    let obsidian_machine = (id, amount, other_ingredient) => {
        event.remove({ output: id })
        if (other_ingredient) {
            event.smithing(Item.of(id, amount), "kubejs:obsidian_machine", other_ingredient)
            event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: "kubejs:obsidian_machine", B: other_ingredient })
        }
        else
            event.stonecutting(Item.of(id, amount), "kubejs:obsidian_machine")
    }
    obsidian_machine(CR("track_station"), 1, MC("compass"))
    obsidian_machine(CR("track_signal"), 1, CR("electron_tube"))
    obsidian_machine(CR("track_observer"), 1, MC("observer"))
    obsidian_machine(CR("controls"), 1, MC("lever"))
    obsidian_machine("toms_storage:ts.storage_terminal", 1, CR("item_vault"))
}