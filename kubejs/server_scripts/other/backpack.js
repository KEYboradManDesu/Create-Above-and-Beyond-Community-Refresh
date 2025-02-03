ServerEvents.recipes(event => {
    // 初级背包
    event.remove({ output: 'sophisticatedbackpacks:backpack' })
    event.shaped('sophisticatedbackpacks:backpack', [
        'SSS',
        'BCB',
        'SSS'
    ], {
        C: F('#chests/wooden'),
        B: CR('zinc_ingot'),
        S: 'sophisticatedbackpacks:upgrade_base'
    })

    // 铁背包
    event.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:iron_backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
        "pattern": [
            "SSS",
            "IBI",
            "SSS"
        ],
        "key": {
            "I": {
                "item": "create:iron_sheet"
            },
            "B": {
                "item": "sophisticatedbackpacks:copper_backpack"
            },
            "S": {
                "item": "sophisticatedbackpacks:upgrade_base"
            }
        },
        "result": {
            "item": "sophisticatedbackpacks:iron_backpack"
        }
    })

    // 铜背包
    event.remove({ output: 'sophisticatedbackpacks:copper_backpack' })
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:copper_backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
        "pattern": [
            "SSS",
            "IBI",
            "SSS"
        ],
        "key": {
            "I": {
                "item": "create:copper_sheet"
            },
            "B": {
                "item": "sophisticatedbackpacks:backpack"
            },
            "S": {
                "item": "sophisticatedbackpacks:upgrade_base"
            }
        },
        "result": {
            "item": "sophisticatedbackpacks:copper_backpack"
        }
    })

    // 金背包
    event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:gold_backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
        "pattern": [
            "SSS",
            "IBI",
            "SSS"
        ],
        "key": {
            "I": {
                "item": "create:golden_sheet"
            },
            "B": {
                "item": "sophisticatedbackpacks:iron_backpack"
            },
            "S": {
                "item": "sophisticatedbackpacks:upgrade_base"
            }
        },
        "result": {
            "item": "sophisticatedbackpacks:gold_backpack"
        }
    })

    // 钻石背包
    event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:diamond_backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
        "pattern": [
            "SSS",
            "IBI",
            "SSS"
        ],
        "key": {
            "I": {
                "item": "minecraft:diamond"
            },
            "B": {
                "item": "sophisticatedbackpacks:gold_backpack"
            },
            "S": {
                "item": "sophisticatedbackpacks:upgrade_base"
            }
        },
        "result": {
            "item": "sophisticatedbackpacks:diamond_backpack"
        }
    })
})