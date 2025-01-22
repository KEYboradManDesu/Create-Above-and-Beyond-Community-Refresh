// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Registering CABR Modpack items...')

StartupEvents.registry('item', event => {

	// 烦人数学
	event.create('three_cast').texture("kubejs:item/three_cast").displayName('整数铸模 (3)').unstackable()
	event.create('eight_cast').texture("kubejs:item/eight_cast").displayName('整数铸模 (8)').unstackable()
	event.create('plus_cast').texture("kubejs:item/plus_cast").displayName('运算符铸模 (＋)').unstackable()
	event.create('minus_cast').texture("kubejs:item/minus_cast").displayName('运算符铸模 (－)').unstackable()
	event.create('multiply_cast').texture("kubejs:item/multiply_cast").displayName('运算符铸模 (x)').unstackable()
	event.create('divide_cast').texture("kubejs:item/divide_cast").displayName('运算符铸模 (÷)').unstackable()
	event.create('computation_matrix').parentModel("kubejs:item/computation_matrix").displayName('计算矩阵').unstackable().rarity('epic')

	// 数字
	let number = (id, name) => {
		let e = id.toLowerCase()
		event.create(e).texture("kubejs:item/math/" + e).glow(true).displayName(name).rarity('uncommon')
	}
	number('Zero', '0')
	number('One', '1')
	number('Two', '2')
	number('Three', '3')
	number('Four', '4')
	number('Five', '5')
	number('Six', '6')
	number('Seven', '7')
	number('Eight', '8')
	number('Nine', '9')
	number('Plus', '+')
	number('Minus', '-')
	number('Multiply', '×')
	number('Divide', '÷')
	number('Missingno', '#DIV/0')

	// 石英种子
	let Certus = {
		id: 'Certus',
		zhname: '赛特斯'
	}
	let Fluix = {
		id: 'Fluix',
		zhname: '福鲁伊克斯'
	}
	let types = [Certus, Fluix]
	types.forEach(e => {
		let id = e.id.toLowerCase()
		event.create('growing_' + id + '_seed', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_" + id).displayName(e.zhname + '石英种子')
		event.create('tiny_' + id + '_crystal').texture("kubejs:item/quartz/crystal_seed_" + id + "2").displayName('微型' + e.zhname + '石英种子')
		event.create('growing_tiny_' + id + '_crystal', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_" + id + "2").displayName('微型' + e.zhname + '石英种子')
		event.create('small_' + id + '_crystal').texture("kubejs:item/quartz/crystal_seed_" + id + "3").displayName('小块' + e.zhname + '石英')
		event.create('growing_small_' + id + '_crystal', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_" + id + "3").displayName('小块' + e.zhname + '石英')
	})
	event.create('nether_seed').texture("kubejs:item/quartz/crystal_seed_nether").displayName('下界石英种子')
	event.create('growing_nether_seed', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_nether").displayName('下界石英种子')
	event.create('tiny_nether_crystal').texture("kubejs:item/quartz/crystal_seed_nether2").displayName('微型下界石英')
	event.create('growing_tiny_nether_crystal', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_nether2").displayName('微型下界石英')
	event.create('small_nether_crystal').texture("kubejs:item/quartz/crystal_seed_nether3").displayName('小块下界石英')
	event.create('growing_small_nether_crystal', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_nether3").displayName('小块下界石英')

	// 构件
	let mechanism = (id, name, rarity) => {
		let e = id.toLowerCase()
		event.create(e + '_mechanism').texture("kubejs:item/mechanism/" + e + "_mechanism").displayName(name).rarity(rarity ? rarity : 'common')
		event.create('incomplete_' + e + '_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_" + e + "_mechanism").displayName(name + '（未完成）')
	}
	mechanism('Kinetic', '动力构件')
	mechanism('Sealed', '密封构件')
	mechanism('Sturdy', '坚实构件', 'uncommon')
	mechanism('Infernal', '酷热构件', 'uncommon')
	mechanism('Inductive', '感应构件', 'uncommon')
	mechanism('Abstruse', '§3谐振构件', 'rare')
	mechanism('Calculation', '计算构件', 'rare')

	// 工具
	event.create('netherite_saw').parentModel("kubejs:item/tool/netherite_saw").displayName('下界合金手锯').maxDamage(2653)
	event.create('chromatic_resonator').texture("kubejs:item/tool/chromatic_resonator").displayName('异彩共鸣器').maxDamage(512).rarity('uncommon')
	event.create('calculator').texture("kubejs:item/tool/calculator").displayName('计算器').maxDamage(256).rarity('uncommon')
	event.create('flash_drive').texture("kubejs:item/tool/boot_medium").displayName('闪存盘').maxDamage(256).rarity('uncommon')

	// 粉末
	event.create('brass_dust').texture("kubejs:item/dust/brass_dust").displayName('黄铜粉')
	event.create('cobalt_dust').texture("kubejs:item/dust/cobalt_dust").displayName('钴粉')
	event.create('zinc_dust').texture("kubejs:item/dust/zinc_dust").displayName('锌粉')
	event.create('desh_dust').texture("kubejs:item/dust/desh_dust").displayName('戴斯粉')
	event.create('ostrum_dust').texture("kubejs:item/dust/ostrum_dust").displayName('紫金粉')
	event.create('calorite_dust').texture("kubejs:item/dust/calorite_dust").displayName('耐热金属粉')

	// 处理器
	event.create('incomplete_calculation_processor', 'create:sequenced_assembly').texture("kubejs:item/processor/incomplete_calculation_processor").displayName('运算处理器（半成品）')
	event.create('incomplete_logic_processor', 'create:sequenced_assembly').texture("kubejs:item/processor/incomplete_logic_processor").displayName('逻辑处理器（半成品）')
	event.create('incomplete_engineering_processor', 'create:sequenced_assembly').texture("kubejs:item/processor/incomplete_engineering_processor").displayName('工程处理器（半成品）')

	// 黏性蕨
	event.create('earth_slimy_fern_leaf').texture("kubejs:item/fern/leaf/earth_slimy_fern_leaf").displayName('大地黏性蕨叶')
	event.create('ender_slimy_fern_leaf').texture("kubejs:item/fern/leaf/ender_slimy_fern_leaf").displayName('末影黏性蕨叶')
	event.create('sky_slimy_fern_leaf').texture("kubejs:item/fern/leaf/sky_slimy_fern_leaf").displayName('碧空黏性蕨叶')
	event.create('earth_slimy_fern_paste').texture("kubejs:item/fern/paste/earth_slimy_fern_paste").displayName('大地黏性蕨粉末')
	event.create('ender_slimy_fern_paste').texture("kubejs:item/fern/paste/ender_slimy_fern_paste").displayName('末影黏性蕨粉末')
	event.create('sky_slimy_fern_paste').texture("kubejs:item/fern/paste/sky_slimy_fern_paste").displayName('碧空黏性蕨粉末')

	// 管道模块
	event.create('pipe_module_utility').texture("kubejs:item/pipe_module_utility").displayName('通用管道模块')
	event.create('pipe_module_tier_1').texture("kubejs:item/pipe_module_tier_1").displayName('黄铜管道模块')
	event.create('pipe_module_tier_2').texture("kubejs:item/pipe_module_tier_2").displayName('殷钢管道模块')
	event.create('pipe_module_tier_3').texture("kubejs:item/pipe_module_tier_3").displayName('谐振管道模块')

	// 杂物
	event.create('radiant_coil').glow(true).texture("kubejs:item/radiant_coil").displayName('光辉线圈').rarity('uncommon')
	event.create('circuit_scrap').texture("kubejs:item/circuit_scrap").displayName('模板碎片')
	event.create('incomplete_coke_chunk', 'create:sequenced_assembly').texture("kubejs:item/incomplete_coke_chunk").displayName('碎焦炭')
	event.create('coke_chunk').texture("kubejs:item/coke_chunk").displayName('焦炭块')
	event.create('smoke_mote').texture("kubejs:item/smoke_mote").displayName('微小烟云')
	event.create('sand_ball').texture("kubejs:item/sand_ball").displayName('沙球').maxStackSize(4)
	event.create('rough_sand').texture("kubejs:item/rough_sand").displayName('沙块')
	event.create('purified_sand').texture("kubejs:item/purified_sand").displayName('高纯沙')
	event.create('press_rod_die').texture("kubejs:item/press_rod_die").displayName('杆冲压模具').unstackable()
	event.create('dye_entangled_singularity').texture("kubejs:item/dye_entangled_singularity").displayName('异彩奇点').rarity('uncommon')
	event.create('andesite_alloy_gear').texture("kubejs:item/andesite_alloy_gear").displayName('安山合金齿轮')
	event.create('matter_plastics').texture("kubejs:item/matter_plastics").displayName('物质塑料').rarity('uncommon')
	event.create('gloden_hand').texture("kubejs:item/gloden_hand").displayName('金制手部零件')
	event.create('bronze_hand').texture("kubejs:item/bronze_hand").displayName('青铜手部零件')
	event.create('aethersite_alloy').texture("kubejs:item/aethersite_alloy").displayName('以太合金').rarity('uncommon')
	event.create('polar_algal_blend').texture("kubejs:item/polar_algal_blend").displayName('极地海藻混合物')

	// 矿物
	event.create('crushed_raw_cobalt').texture("kubejs:item/ore/crushed_raw_cobalt").displayName('粉碎钴矿石')
	event.create('crushed_desh_ore').texture("kubejs:item/ore/crushed_desh_ore").displayName('粉碎戴斯矿石')
	event.create('crushed_ostrum_ore').texture("kubejs:item/ore/crushed_ostrum_ore").displayName('粉碎紫金矿石')
	event.create('crushed_calorite_ore').texture("kubejs:item/ore/crushed_calorite_ore").displayName('粉碎耐热金属矿石')

	// 混合物
	event.create('silicon_compound').texture("kubejs:item/compound/silicon_compound").displayName('硅混合物')
	event.create('nickel_compound').texture("kubejs:item/compound/nickel_compound").displayName('铁镍混合物')
	event.create('invar_compound', 'create:sequenced_assembly').texture("kubejs:item/compound/invar_compound").displayName('殷瓦钢胚')

	// 背包
	event.create('sewing_spool').texture("kubejs:item/backpack/sewing_spool").displayName('缝纫线轴').maxDamage(12)
	event.create('incomplete_upgrade_base', 'create:sequenced_assembly').texture("kubejs:item/backpack/incomplete_upgrade_base").displayName('空白背包升级（半成品）')

})

StartupEvents.registry('block', event => {

	// 炼金镭射
	event.create('ponder_laser_lamp').model('kubejs:block/ponder_laser_lamp').soundType("lantern").notSolid().renderType("translucent").displayName('镭射灯（可思索）')
	event.create('ponder_laser_lamp_on').model('kubejs:block/ponder_laser_lamp_on').soundType("lantern").notSolid().renderType("translucent").displayName('镭射灯（可思索）')

	// 机壳
	event.create('enderium_casing').model('kubejs:block/enderium_casing').soundType('metal').hardness(4.0).displayName('末影机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('zinc_casing').soundType('metal').hardness(3.0).displayName('锌机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('invar_casing').soundType('metal').hardness(3.0).displayName('殷钢机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('fluix_casing').soundType('metal').hardness(3.0).displayName('福鲁伊克斯机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('matter_casing').soundType('stone').hardness(8.0).displayName('物质机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('creative_casing').soundType('stone').hardness(-1.0).displayName('§d创造机壳§r').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")

	// 机器
	let machine = (name, layer, material, display) => {
		let id = name.toLowerCase()
		event.create(id + '_machine')
			.model('kubejs:block/' + id + '_machine')
			.soundType(material)
			.hardness(3.0)
			.displayName(display)
			.notSolid()
			.renderType(layer)
			.tagBlock("create:wrench_pickup")
			.tagBlock("minecraft:mineable/pickaxe")
	}

	machine('Andesite', "translucent", "lantern", "安山机器")
	machine('Copper', "cutout", "lantern", "铜机器")
	machine('Brass', "translucent", "lantern", "黄铜机器")
	machine('Obsidian', "translucent", "lantern", "坚实机器")
	machine('Zinc', "cutout", "lantern", "锌机器")
	machine('Enderium', "cutout", "lantern", "谐振机器")
	// machine('Inductive', "translucent", "lantern", "物流机器")

})

StartupEvents.registry('fluid', event => {

	event.create("fine_sand").displayName("细砂").bucketColor(0xE3DBB0).stillTexture('kubejs:fluid/fine_sand_still').flowingTexture('kubejs:fluid/fine_sand_flow')
	event.create("waste").displayName("异彩废液").bucketColor(0x123d36).stillTexture('kubejs:fluid/waste_still').flowingTexture('kubejs:fluid/waste_flow')
	event.create("sky_stone").displayName("不稳陨石").bucketColor(0x595959).stillTexture('kubejs:fluid/sky_stone_still').flowingTexture('kubejs:fluid/sky_stone_flowing')

	event.create('raw_logic').displayName("玻色-爱因斯坦凝聚态逻辑（未处理）").stillTexture('kubejs:fluid/number_still').flowingTexture('kubejs:fluid/number_flow').color(0xE7FFCB)
	let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
	for (let i = 0; i < 10; i++)
		event.create('number_' + i).displayName(`玻色-爱因斯坦凝聚态逻辑（${i}）`).stillTexture('kubejs:fluid/number_still').flowingTexture('kubejs:fluid/number_flow').color(colors[i])
	event.create('matrix').displayName("§d液态智能§r").stillTexture('kubejs:fluid/matrix_still').flowingTexture('kubejs:fluid/matrix_flow').bucketColor(colors[0]).rarity('epic')


})

ItemEvents.modification(event => {
	let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
	colors.forEach(element => {
		event.modify('ae2:' + element + '_paint_ball', item => {
			item.maxStackSize = 1
		})
	});

})