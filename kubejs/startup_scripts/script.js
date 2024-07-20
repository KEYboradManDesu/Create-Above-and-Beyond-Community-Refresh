// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

// 构件
event.create('kinetic_mechanism').texture("kubejs:item/mechanism/kinetic_mechanism").displayName('动力构件')
event.create('incomplete_kinetic_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_kinetic_mechanism").displayName('动力构件（未完成）')

event.create('incomplete_precision_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_precision_mechanism").displayName('精密构件（未完成）')

event.create('sealed_mechanism').texture("kubejs:item/mechanism/sealed_mechanism").displayName('密封构件')
event.create('incomplete_sealed_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_sealed_mechanism2").displayName('密封构件（未完成）')
//event.create('incomplete_sealed_mechanism2', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_sealed_mechanism").displayName('密封构件（未完成）')

event.create('sturdy_mechanism').texture("kubejs:item/mechanism/sturdy_mechanism").displayName('坚实构件').rarity(RARITY_UNCOMMON)
event.create('incomplete_sturdy_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_sturdy_mechanism").displayName('坚实构件（未完成）').rarity(RARITY_UNCOMMON)

event.create('infernal_mechanism').texture("kubejs:item/mechanism/infernal_mechanism").displayName('酷热构件').rarity(RARITY_UNCOMMON).burnTime(12000)
event.create('incomplete_infernal_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_infernal_mechanism").displayName('酷热构件（未完成）').rarity(RARITY_UNCOMMON)

event.create('abstruse_mechanism').texture("kubejs:item/mechanism/abstruse_mechanism").displayName('§3谐振构件')
event.create('incomplete_abstruse_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_abstruse_mechanism").displayName('§3谐振构件（未完成）').rarity(RARITY_UNCOMMON)

event.create('inductive_mechanism').texture("kubejs:item/mechanism/inductive_mechanism").displayName('感应构件').rarity(RARITY_UNCOMMON)
event.create('incomplete_inductive_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_inductive_mechanism").displayName('感应构件（未完成）').rarity(RARITY_UNCOMMON)

event.create('calculation_mechanism').texture("kubejs:item/mechanism/calculation_mechanism").displayName('计算构件').rarity(RARITY_UNCOMMON)
event.create('incomplete_calculation_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_calculation_mechanism").displayName('计算构件（未完成）').rarity(RARITY_UNCOMMON)

//event.create('gold_source_mechanism').texture("kubejs:item/mechanism/gold_source_mechanism").displayName('金源构件')
//event.create('incomplete_gold_source_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_gold_source_mechanism").displayName('金源构件（未完成）')

//event.create('metamorphic_mechanism').texture("kubejs:item/mechanism/metamorphic_mechanism").displayName('异构构件')
//event.create('incomplete_metamorphic_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_metamorphic_mechanism").displayName('异构构件（未完成）')

// 工具
event.create('netherite_saw').parentModel("kubejs:item/tool/netherite_saw").displayName('下界合金手锯').maxDamage(2653)
event.create('chromatic_resonator').texture("kubejs:item/tool/chromatic_resonator").displayName('异彩共鸣器').maxDamage(512).rarity(RARITY_UNCOMMON)
event.create('calculator').texture("kubejs:item/tool/calculator").displayName('计算器').maxDamage(256).rarity(RARITY_UNCOMMON)
event.create('boot_medium').texture("kubejs:item/tool/boot_medium").displayName('闪存盘').maxDamage(256).rarity(RARITY_UNCOMMON)
//event.create('thermal_grease').texture("kubejs:item/tool/thermal_grease").displayName('散热硅脂').maxDamage(192).rarity(RARITY_UNCOMMON)
//event.create('hop_slime').texture("kubejs:item/tool/hop_slime").displayName('高定向热解石莱姆').maxDamage(256).rarity(RARITY_UNCOMMON)
//event.create('metamorphic_lich_rod').texture("kubejs:item/tool/metamorphic_lich_rod").displayName('巫妖腐化法杖').maxDamage(256).rarity(RARITY_EPIC)


})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')

// 炼金镭射
event.create('ponder_laser_lamp').model('kubejs:block/ponder_laser_lamp').material("lantern").notSolid().renderType("translucent").displayName('镭射灯（可思索）')
event.create('ponder_laser_lamp_on').model('kubejs:block/ponder_laser_lamp_on').material("lantern").notSolid().renderType("translucent").displayName('镭射灯（可思索）')

// 机壳
event.create('enderium_casing').model('kubejs:block/enderium_casing').material('metal').hardness(4.0).displayName('末影机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
event.create('zinc_casing').material('metal').hardness(3.0).displayName('锌机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
event.create('invar_casing').material('metal').hardness(3.0).displayName('殷钢机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
event.create('fluix_casing').material('metal').hardness(3.0).displayName('福鲁伊克斯机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
event.create('matter_casing').material('stone').hardness(8.0).displayName('物质机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
event.create('creative_casing').material('stone').hardness(-1.0).displayName('§d创造机壳§r').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
//event.create('gold_source_casing').material('wood').hardness(2.0).displayName('金源机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
//event.create('mana_casing').material('stone').hardness(2.0).displayName('魔力机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
//event.create('mysterious_casing').material('stone').hardness(2.0).displayName('神秘机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")

// 机器
let machine = (name, layer, material , display) => {
let id = name.toLowerCase()
	event.create(id + '_machine')
		.model('kubejs:block/' + id + '_machine')
		.material(material)
		.hardness(3.0)
		.displayName(display)
		.notSolid()
		.renderType(layer)
		.tagBlock("create:wrench_pickup")
		.tagBlock("minecraft:mineable/pickaxe")
}

machine('Andesite', "translucent", "lantern", "安山机器")
//machine('Inductive', "translucent", "lantern", "物流机器")
machine('Copper', "cutout", "lantern", "铜机器")
machine('Brass', "translucent", "lantern", "黄铜机器")
machine('Obsidian', "translucent", "lantern", "坚实机器")
//machine('Electric', "translucent", "lantern", "电气机器")
machine('Zinc', "cutout", "lantern", "锌机器")
machine('Enderium', "cutout", "lantern", "谐振机器")
//machine('Gold_Source', "translucent", "lantern", "金源机器")
//machine('Metamorphic', "translucent", "lantern", "异构机器")

})