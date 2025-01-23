// Load common functions
require('../common.js');

ServerEvents.recipes(event => {
	fireArms(event)
})

function fireArms(event) {
    event.remove({ mod: ('cgm') })
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            {
                "item": "createbigcannons:nethersteel_block"
            }
        ],
        "results": [
            {
                "item": "cgm:workbench",
                "count": 1
            }
        ]
    })

    // 枪械部件
    event.shapeless('kubejs:basic_gun_kit', [
        '3x createbigcannons:nethersteel_ingot',
        '2x kubejs:infernal_mechanism',
        'vintageimprovements:nethersteel_spring',
        'createdieselgenerators:kelp_handle',
        '#create_dd:smoked_logs',
    ])

    // 包装火药
    event.remove({ output: 'createbigcannons:packed_gunpowder' })
    event.recipes.create.compacting('createbigcannons:packed_gunpowder', [MC('gunpowder'), MC('gunpowder')])

    // 霰弹丸
    event.remove({ output: 'createbigcannons:shot_balls' })
    event.shapeless('createbigcannons:shot_balls', [
        [MC('iron_nugget'), TE('nickel_nugget'), CR('zinc_nugget'), TE('lead_nugget')],
        [MC('iron_nugget'), TE('nickel_nugget'), CR('zinc_nugget'), TE('lead_nugget')],
        [MC('iron_nugget'), TE('nickel_nugget'), CR('zinc_nugget'), TE('lead_nugget')],
    ])

    // 弹壳冲压板
    event.remove({ output: 'createbigcannons:autocannon_cartridge_sheet' })
    event.recipes.create.compacting("createbigcannons:autocannon_cartridge_sheet", [CR("brass_nugget"), CR("brass_nugget")])
    event.recipes.create.compacting("createbigcannons:autocannon_cartridge_sheet", [MC("gold_nugget"), MC("gold_nugget"), MC("gold_nugget")])
    event.recipes.create.compacting("createbigcannons:autocannon_cartridge_sheet", [F("#nuggets/copper"), F("#nuggets/copper"), F("#nuggets/copper")])

    // 小型空弹壳
    event.remove({ output: 'createbigcannons:packed_gunpowder' })
    event.custom({
        "type": "vintageimprovements:curving",
        "mode": 2,
        "ingredients": [
            {
                "item": "createbigcannons:autocannon_cartridge_sheet"
            }
        ],
        "results": [
            {
                "item": "kubejs:bullet_casing"
            }
        ]
    })

    // 霰弹壳
    event.recipes.create.deploying('kubejs:shell_empty', ['kubejs:bullet_casing', 'minecraft:dried_kelp'])
    event.shapeless('kubejs:shell_empty', ['kubejs:bullet_casing', 'minecraft:dried_kelp'])

    // 机枪弹壳
    event.remove({ output: 'createbigcannons:empty_machine_gun_round' })
    event.custom({
        "type": "vintageimprovements:curving",
        "mode": 2,
        "ingredients": [
            {
                "item": "kubejs:bullet_casing"
            }
        ],
        "results": [
            {
                "item": "createbigcannons:empty_machine_gun_round"
            }
        ]
    })

    // 机炮弹壳
    event.remove({ output: 'createbigcannons:empty_autocannon_cartridge' })
    event.custom({
        "type": "vintageimprovements:curving",
        "mode": 2,
        "ingredients": [
            {
                "item": "createbigcannons:empty_machine_gun_round"
            }
        ],
        "results": [
            {
                "item": "createbigcannons:empty_autocannon_cartridge"
            }
        ]
    })

    // 大型弹壳
    event.remove({ id: 'createbigcannons:sequenced_assembly/pressing_big_cartridge' })
    let cartridge = 'createbigcannons:big_cartridge_sheet'
    event.recipes.create.sequenced_assembly([
        'createbigcannons:big_cartridge',
    ], 'createbigcannons:big_cartridge_sheet', [
        event.custom({
            "type": "vintageimprovements:curving",
            "mode": 2,
            "ingredients": [
                {
                    "item": cartridge
                }
            ],
            "results": [
                {
                    "item": cartridge
                }
            ]
        })
    ]).transitionalItem(cartridge)
        .loops(5)
        .id('kubejs:big_cartridge')


    // 霰弹
    event.shaped('cgm:shell', [
        ' S ',
        ' C ',
        ' B '
    ], {
        C: 'createbigcannons:gunpowder_pinch',
        S: 'createbigcannons:shot_balls',
        B: KJ('shell_empty')
    })

    let ammo1 = 'kubejs:incomplete_shell'
    event.recipes.create.sequenced_assembly([
        'cgm:shell',
    ], KJ('shell_empty'), [
        event.recipes.create.deploying(ammo1, [ammo1, 'createbigcannons:gunpowder_pinch']),
        event.recipes.create.deploying(ammo1, [ammo1, 'createbigcannons:shot_balls']),
        event.custom({
            "type": "vintageimprovements:curving",
            "mode": 4,
            "ingredients": [
                {
                    "item": ammo1
                }
            ],
            "results": [
                {
                    "item": ammo1
                }
            ]
        })
    ]).transitionalItem(ammo1)
        .loops(1)
        .id('kubejs:shell')


    // 机枪弹药
    event.remove({ id: 'createbigcannons:sequenced_assembly/assembling_machine_gun_round' })
    let ammo2 = 'kubejs:incomplete_advanced_bullet'
    event.recipes.create.sequenced_assembly([
        'createbigcannons:machine_gun_round',
    ], 'createbigcannons:empty_machine_gun_round', [
        event.recipes.create.deploying(ammo2, [ammo2, 'createbigcannons:gunpowder_pinch']),
        event.recipes.create.deploying(ammo2, [ammo2, F('#nuggets/copper')]),
        event.custom({
            "type": "vintageimprovements:curving",
            "mode": 4,
            "ingredients": [
                {
                    "item": ammo2
                }
            ],
            "results": [
                {
                    "item": ammo2
                }
            ]
        })
    ]).transitionalItem(ammo2)
        .loops(1)
        .id('kubejs:advanced_bullet')


    // 初级弹药
    event.shaped('cgm:basic_bullet', [
        ' S ',
        ' C ',
        ' B '
    ], {
        C: 'createbigcannons:gunpowder_pinch',
        S: CR('zinc_nugget'),
        B: KJ('bullet_casing')
    })

    let ammo3 = 'kubejs:incomplete_basic_bullet'
    event.recipes.create.sequenced_assembly([
        'cgm:basic_bullet',
    ], 'kubejs:bullet_casing', [
        event.recipes.create.deploying(ammo3, [ammo3, 'createbigcannons:gunpowder_pinch']),
        event.recipes.create.deploying(ammo3, [ammo3, CR('zinc_nugget')]),
        event.custom({
            "type": "vintageimprovements:curving",
            "mode": 4,
            "ingredients": [
                {
                    "item": ammo3
                }
            ],
            "results": [
                {
                    "item": ammo3
                }
            ]
        })
    ]).transitionalItem(ammo3)
        .loops(1)
        .id('kubejs:basic_bullet')


    // 导弹
    let ammo4 = 'kubejs:unarmed_missile'
    event.recipes.create.sequenced_assembly([
        'cgm:missile',
    ], 'createbigcannons:empty_autocannon_cartridge', [
        event.recipes.create.deploying(ammo4, [ammo4, 'createbigcannons:packed_gunpowder']),
        event.recipes.create.deploying(ammo4, [ammo4, AE2('tiny_tnt')]),
        event.custom({
            "type": "vintageimprovements:curving",
            "mode": 4,
            "ingredients": [
                {
                    "item": ammo4
                }
            ],
            "results": [
                {
                    "item": ammo4
                }
            ]
        })
    ]).transitionalItem(ammo4)
        .loops(1)
        .id('kubejs:missile')


    // 手榴弹
    let g = 'minecraft:glass_bottle'
    event.recipes.create.sequenced_assembly([
        Item.of('cgm:grenade', 2),
    ], 'minecraft:glass_bottle', [
        event.recipes.create.deploying(g, [g, 'createbigcannons:packed_gunpowder']),
        event.recipes.create.deploying(g, [g, '#forge:nuggets/iron']),
    ]).transitionalItem(g)
        .loops(1)
        .id('kubejs:grenade')


    // 闪光弹
    let g1 = 'minecraft:glass_bottle'
    event.recipes.create.sequenced_assembly([
        Item.of('cgm:stun_grenade', 2),
    ], 'minecraft:glass_bottle', [
        event.recipes.create.deploying(g1, [g1, ['#forge:dusts/glowstone', 'thermal:lumium_dust']]),
        event.recipes.create.deploying(g1, [g1, '#forge:nuggets/iron']),
    ]).transitionalItem(g1)
        .loops(1)
        .id('kubejs:stun_grenade')

    let g2 = 'minecraft:glass_bottle'
    event.recipes.create.sequenced_assembly([
        Item.of('cgm:stun_grenade', 2),
    ], 'minecraft:glass_bottle', [
        event.recipes.create.filling(g2, [g2, Fluid.of(TE("glowstone"), 500)]),
        event.recipes.create.deploying(g2, [g2, '#forge:nuggets/iron']),
    ]).transitionalItem(g2)
        .loops(1)
        .id('kubejs:stun_grenade2')


    // 瞄具
    event.stonecutting('cgm:short_scope', MC("spyglass"))
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "minecraft:spyglass",
                "count": 1
            }
        ],
        "result": {
            "item": "cgm:short_scope",
            "count": 1
        }
    })
    event.stonecutting('cgm:medium_scope', MC("spyglass"))
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "minecraft:spyglass",
                "count": 1
            }
        ],
        "result": {
            "item": "cgm:medium_scope",
            "count": 1
        }
    })
    event.stonecutting('cgm:long_scope', MC("spyglass"))
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "minecraft:spyglass",
                "count": 1
            }
        ],
        "result": {
            "item": "cgm:long_scope",
            "count": 1
        }
    })

    // 枪托
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "createbigcannons:nethersteel_ingot",
                "count": 1
            },
            {
                "item": "create_dd:smoked_planks",
                "count": 2
            }
        ],
        "result": {
            "item": "cgm:weighted_stock",
            "count": 1
        }
    })
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "createbigcannons:nethersteel_ingot",
                "count": 2
            }
        ],
        "result": {
            "item": "cgm:tactical_stock",
            "count": 1
        }
    })
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "createbigcannons:nethersteel_ingot",
                "count": 1
            }
        ],
        "result": {
            "item": "cgm:light_stock",
            "count": 1
        }
    })

    // 握把
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "createbigcannons:nethersteel_ingot",
                "count": 2
            }
        ],
        "result": {
            "item": "cgm:light_grip",
            "count": 1
        }
    })
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "createbigcannons:nethersteel_ingot",
                "count": 1
            },
            {
                "item": "thermal:cured_rubber",
                "count": 1
            }
        ],
        "result": {
            "item": "cgm:specialised_grip",
            "count": 1
        }
    })

    // 消音器
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "vintageimprovements:nethersteel_rod",
                "count": 1
            },
            {
                "item": "minecraft:sponge",
                "count": 1
            }
        ],
        "result": {
            "item": "cgm:silencer",
            "count": 1
        }
    })

    // 手枪
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "kubejs:basic_gun_kit",
                "count": 1
            }
        ],
        "result": {
            "item": "cgm:pistol"
        }
    })

    // 冲锋枪
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "kubejs:basic_gun_kit",
                "count": 2
            }
        ],
        "result": {
            "item": "cgm:machine_pistol"
        }
    })

    // 霰弹枪
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "kubejs:basic_gun_kit",
                "count": 3
            }
        ],
        "result": {
            "item": "cgm:shotgun"
        }
    })

    // 突击步枪
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "kubejs:basic_gun_kit",
                "count": 6
            }
        ],
        "result": {
            "item": "cgm:assault_rifle"
        }
    })

    // 步枪
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "kubejs:basic_gun_kit",
                "count": 6
            }
        ],
        "result": {
            "item": "cgm:rifle"
        }
    })

    // 榴弹发射器
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "kubejs:basic_gun_kit",
                "count": 10
            }
        ],
        "result": {
            "item": "cgm:grenade_launcher"
        }
    })

    // 加特林
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "kubejs:basic_gun_kit",
                "count": 32
            }
        ],
        "result": {
            "item": "cgm:mini_gun"
        }
    })

    // 重型步枪
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "kubejs:basic_gun_kit",
                "count": 32
            }
        ],
        "result": {
            "item": "cgm:heavy_rifle"
        }
    })

    // 巴祖卡
    event.custom({
        "type": "cgm:workbench",
        "materials": [
            {
                "item": "kubejs:basic_gun_kit",
                "count": 32
            }
        ],
        "result": {
            "item": "cgm:bazooka"
        }
    })
}