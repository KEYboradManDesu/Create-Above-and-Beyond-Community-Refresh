ServerEvents.recipes(event => {
    event.remove({ id: TC('smeltery/alloys/molten_bronze') })
    event.remove({ id: TC('smeltery/alloys/molten_brass') })
    event.remove({ id: TC('smeltery/alloys/molten_invar') })
    event.remove({ id: TC('smeltery/alloys/molten_electrum') })
    event.remove({ id: TC('smeltery/alloys/molten_constantan') })
    event.remove({ id: TC('smeltery/alloys/molten_rose_gold') })
    event.remove({ id: TC('smeltery/alloys/molten_netherite') })
    event.remove({ id: TC('smeltery/alloys/molten_enderium') })
    // event.remove({ id: TC('smeltery/alloys/molten_lumium') })
    // event.remove({ id: TC('smeltery/alloys/molten_signalum') })
    event.remove({ id: TC('smeltery/alloys/molten_pig_iron') })

    event.remove({ id: ('create_dd:mixing/bronze_ingot') })
    event.remove({ id: 'createaddition:compat/tconstruct/rose_gold' })
    event.remove({ id: 'createaddition:mixing/electrum' })
    event.remove({ id: ('create_dd:compacting/steel_ingot') })
    event.remove({ id: ('createaddition:compat/tconstruct/pig_iron') })
    event.remove({ id: ('createaddition:compat/tconstruct/pig_iron_2') })

    event.remove({ id: TE('machines/smelter/smelter_alloy_bronze') })
    event.remove({ id: TE('machines/smelter/smelter_alloy_steel') })
    event.remove({ id: TE('compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot') })

    event.remove({ id: TE('invar_dust_3') })
    event.remove({ id: TE('bronze_dust_4') })
    event.remove({ id: TE('constantan_dust_2') })
    event.remove({ id: TE('electrum_dust_2') })

    event.remove({ id: 'minecraft:netherite_ingot' })


    // 青铜
    event.recipes.create.mixing(Fluid.of(TC('molten_bronze'), 10), [
        Fluid.of(TC('molten_copper'), 5),
        Fluid.of(TC('molten_tin'), 5)
    ]).processingTime(1)
    event.recipes.thermal.smelter('2x create_dd:bronze_ingot', [F("#ingots/copper"), F("#ingots/tin")])
    // 粉
    event.recipes.create.mixing(TE("bronze_dust", 2), [
        TE("copper_dust"),
        TE("tin_dust")
    ]).heated()


    // 黄铜
    event.recipes.create.mixing(Fluid.of(TC('molten_brass'), 10), [
        Fluid.of(TC('molten_copper'), 5),
        Fluid.of(TC('molten_zinc'), 5)
    ]).processingTime(1)
    event.recipes.thermal.smelter(CR('brass_ingot', 2), [F("#ingots/copper"), F("#ingots/zinc")])
    // 粉
    event.recipes.create.mixing(KJ("brass_dust", 2), [
        TE("copper_dust"),
        KJ("zinc_dust")
    ]).heated()


    // 琥珀金
    event.recipes.create.mixing(Fluid.of(TC('molten_electrum'), 10), [
        Fluid.of(TC('molten_gold'), 5),
        Fluid.of(TC('molten_silver'), 5)
    ]).processingTime(1)
    // 粉
    event.recipes.create.mixing(TE("electrum_dust", 2), [
        TE("gold_dust"),
        TE("silver_dust")
    ]).heated()


    // 康铜
    event.recipes.create.mixing(Fluid.of(TC('molten_constantan'), 10), [
        Fluid.of(TC('molten_copper'), 5),
        Fluid.of(TC('molten_nickel'), 5)
    ]).processingTime(1)
    // 粉
    event.recipes.create.mixing(TE("constantan_dust", 2), [
        TE("copper_dust"),
        TE("nickel_dust")
    ]).heated()


    // 玫瑰金
    event.recipes.create.mixing(Fluid.of(TC('molten_rose_gold'), 10), [
        Fluid.of(TC('molten_copper'), 5),
        Fluid.of(TC('molten_gold'), 5)
    ]).processingTime(1)
    // 粉
    event.recipes.create.mixing(TE("rose_gold_dust", 2), [
        TE("copper_dust"),
        TE("gold_dust")
    ]).heated()


    // 下界合金
    event.recipes.create.mixing(Fluid.of(TC('molten_netherite'), 1), [
        Fluid.of(TC('molten_debris'), 4),
        Fluid.of(TC('molten_gold'), 4)
    ]).processingTime(1)


    // 生铁
    event.recipes.create.mixing(Fluid.of(TC('molten_pig_iron'), 5), [
        Fluid.of('createbigcannons:molten_cast_iron', 1),
        Fluid.of(('create:honey'), 5)
    ]).heated().processingTime(1)
    event.recipes.create.mixing(Fluid.of(TC('molten_pig_iron'), 5), [
        Fluid.of('createbigcannons:molten_cast_iron', 1),
        Fluid.of(('tconstruct:blood'), 5)
    ]).heated().processingTime(1)
    event.recipes.create.mixing(Fluid.of(TC('molten_pig_iron'), 5), [
        Fluid.of('createbigcannons:molten_cast_iron', 1),
        Fluid.of(('biomesoplenty:blood'), 5)
    ]).heated().processingTime(1)


    // 钢
    event.recipes.create.mixing([Fluid.of(TC("molten_steel"), 270), TE('slag')], [
        Fluid.of(TC("molten_pig_iron"), 270),
        KJ('coke_chunk')
    ]).heated().processingTime(250)


    // 信素
    event.recipes.create.mixing([Fluid.of(TC("molten_signalum"), 360)], [
        Fluid.of(TC("molten_copper"), 270),
        Fluid.of(TE("redstone"), 400),
        TE('silver_coin', 9)
    ]).superheated().processingTime(300)


    // 流明
    event.recipes.create.mixing([Fluid.of(TC("molten_lumium"), 360)], [
        Fluid.of(TC("molten_tin"), 270),
        Fluid.of(TE("glowstone"), 500),
        TE('silver_coin', 9)
    ]).superheated().processingTime(300)

})