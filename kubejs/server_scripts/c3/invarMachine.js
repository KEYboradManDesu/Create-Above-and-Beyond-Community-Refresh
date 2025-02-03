ServerEvents.recipes(event => {
    let chop = (type, output) => {
        event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [{ "item": TC(type + "_slime_fern") }],
            "tool": { "tag": "forge:tools/knives" },
            "result": [Item.of(KJ(type + "_slimy_fern_leaf"), 2).toResultJson()]
        })
        event.custom({
            "type": "occultism:spirit_fire",
            "ingredient": { "item": KJ(type + "_slimy_fern_leaf") },
            "result": { "item": TC(type + "_slime_fern") }
        })
        event.custom(ifiniDeploying(KJ(type + "_slimy_fern_leaf", 2), TC(type + "_slime_fern"), "#forge:tools/knives"))
        event.recipes.create.milling([KJ(type + "_slimy_fern_paste")], KJ(type + "_slimy_fern_leaf"))
        event.campfireCooking(output, KJ(type + "_slimy_fern_paste")).cookingTime(300)
    }

    let fern1 = KJ("ender_slimy_fern_leaf")
    let fern2 = KJ("sky_slimy_fern_leaf")
    let fern3 = KJ("earth_slimy_fern_leaf")
    event.shapeless(fern1, ["forbidden_arcanus:rune", fern2, fern2, fern2, fern2, fern3, fern3, fern3, fern3])
    event.shapeless(fern2, ["forbidden_arcanus:rune", fern3, fern3, fern3, fern3, fern1, fern1, fern1, fern1])
    event.shapeless(fern3, ["forbidden_arcanus:rune", fern2, fern2, fern2, fern2, fern1, fern1, fern1, fern1])

    chop("earth", MC('gunpowder'))
    chop("sky", MC('bone_meal'))
    chop("ender", AE2('ender_dust'))

    event.campfireCooking(MC("torch"), MC("stick")).cookingTime(20)

    event.shapeless(KJ('nickel_compound'), [TE('nickel_ingot'), TE("iron_dust"), TE("iron_dust"), TE("iron_dust"), TE("iron_dust")])
    event.blasting(KJ('invar_compound'), KJ('nickel_compound'))
    let s = KJ('invar_compound')
    event.recipes.create.sequenced_assembly([
        TE('invar_ingot'),
    ], KJ('invar_compound'), [
        event.recipes.create.pressing(s, s)
    ]).transitionalItem(s)
        .loops(16)
        .id('kubejs:invar')
    event.custom({
        "type": "vintageimprovements:hammering",
        "hammerBlows": 2,
        "ingredients": [
            {
                "item": "kubejs:invar_compound"
            }
        ],
        "results": [
            {
                "item": "thermal:invar_ingot"
            }
        ]
    })

    event.remove({ id: CR("mechanical_crafting/crushing_wheel") })
    event.recipes.create.mechanical_crafting(Item.of(CR('crushing_wheel'), 2), [
        ' AAA ',
        'AABAA',
        'ABBBA',
        'AABAA',
        ' AAA '
    ], {
        A: F('#cobblestone'),
        B: MC('stick')
    })

    event.recipes.create.crushing([Item.of(AE2("singularity")).withChance(1)], CR('crushing_wheel')).processingTime(250)
    event.recipes.create.crushing([Item.of(AE2("singularity")).withChance(1)], '#design_decor:crushing_wheels').processingTime(250)

    let dyes = [MC('orange_dye'), MC('magenta_dye'), MC('light_blue_dye'), MC('yellow_dye'), MC('lime_dye'), MC('pink_dye'), MC('cyan_dye'), MC('purple_dye'), MC('blue_dye'), MC('brown_dye'), MC('green_dye'), MC('red_dye')]
    event.recipes.create.compacting('1x ' + KJ("dye_entangled_singularity"), [dyes, Item.of(AE2('quantum_entangled_singularity'), 1)])
    event.recipes.create.conversion([AE2('quantum_entangled_singularity')], AE2("singularity"))
    event.recipes.create.crushing([
        Item.of(AE2("red_paint_ball"), 1).withChance(.90),
        Item.of(AE2("yellow_paint_ball"), 1).withChance(.80),
        Item.of(AE2("green_paint_ball"), 1).withChance(.70),
        Item.of(AE2("blue_paint_ball"), 1).withChance(.60),
        Item.of(AE2("magenta_paint_ball"), 1).withChance(.50)],
        KJ('dye_entangled_singularity')).processingTime(50)

    let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
    for (let index = 0; index < colors.length; index++) {
        var element = colors[index];
        if (index == colors.length - 1)
            continue;
        event.recipes.create.emptying([AE2(colors[index + 1] + '_paint_ball'), Fluid.of(KJ('waste'), 250)], AE2(element + '_paint_ball'))
    }

    event.recipes.create.mechanical_crafting(CRD('chromatic_compound'), [
        'AA',
        'AA'
    ], {
        A: AE2('magenta_paint_ball')
    })

    //

    let t = KJ('incomplete_inductive_mechanism')
    event.recipes.create.sequenced_assembly([
        KJ('inductive_mechanism'),
    ], CR('precision_mechanism'), [
        event.recipes.create.deploying(t, [t, KJ('radiant_coil')]),
        event.recipes.create.deploying(t, [t, KJ('radiant_coil')]),
        event.recipes.create.deploying(t, [t, F('#chromatic_resonators')])
    ]).transitionalItem(t)
        .loops(1)
        .id('kubejs:inductive_mechanism')

    event.remove({ output: TE('machine_frame') })
    event.shaped(TE('machine_frame'), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: KJ('invar_casing'),
        S: KJ('inductive_mechanism')
    })

    event.shaped(KJ('chromatic_resonator'), [
        ' R ',
        'R S',
        'LS '
    ], {
        R: '#forge:gems/ruby',
        L: TE('lead_ingot'),
        S: '#forge:gems/sapphire'
    })

    let invar_machine = (id, amount, other_ingredient) => {
        event.remove({ output: id })
        if (other_ingredient) {
            event.smithing(Item.of(id, amount), TE('machine_frame'), other_ingredient)
            event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: TE('machine_frame'), B: other_ingredient })
        }
        else
            event.stonecutting(Item.of(id, amount), TE('machine_frame'))
    }

    invar_machine(TE('dynamo_compression'), 1, TE('rf_coil'))
    invar_machine('kubejs:pipe_module_tier_2', 4)
    invar_machine('pipez:advanced_upgrade', 4, CRD('integrated_circuit'))
    invar_machine('pipez:energy_pipe', 16)

    // invar_machine(TE('machine_crucible'), 1, MC('nether_bricks'))
    // invar_machine(TE('machine_furnace'), 1, MC('bricks'))
    // invar_machine(TE('machine_chiller'), 1, MC('packed_ice'))
    // invar_machine(TE('machine_pyrolyzer'), 1, MC('blaze_rod'))
    // invar_machine(TE('machine_bottler'), 1, MC('bucket'))
    // invar_machine(TE('machine_centrifuge'), 1, MC('compass'))
    // invar_machine(TE('machine_refinery'), 1, '#forge:glass')
    // invar_machine(TE('machine_pulverizer'), 1, MC('flint'))
    // invar_machine(TE('machine_smelter'), 1, MC('blast_furnace'))
    // invar_machine(TE('machine_sawmill'), 1, TE('saw_blade'))
    // invar_machine(TE('machine_brewer'), 1, MC('brewing_stand'))
    // invar_machine(TE('machine_insolator'), 1, MC('dirt'))

    event.replaceInput({ type: "minecraft:crafting_shaped", id: /ae2:.*/ }, F("#ingots/iron"), TE("lead_plate"))
})