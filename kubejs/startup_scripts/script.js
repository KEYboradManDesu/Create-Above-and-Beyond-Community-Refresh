// priority: 0

console.info('KubeJS Startup Script...')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	// 烦人数学
	event.create('three_cast').texture("kubejs:item/three_cast").unstackable()
	event.create('eight_cast').texture("kubejs:item/eight_cast").unstackable()
	event.create('plus_cast').texture("kubejs:item/plus_cast").unstackable()
	event.create('minus_cast').texture("kubejs:item/minus_cast").unstackable()
	event.create('multiply_cast').texture("kubejs:item/multiply_cast").unstackable()
	event.create('divide_cast').texture("kubejs:item/divide_cast").unstackable()
	event.create('computation_matrix').parentModel("kubejs:item/computation_matrix").unstackable().rarity(RARITY_EPIC)

	// 数字
	let number = (id, name) => {
		let e = id.toLowerCase()
		event.create(e).texture("kubejs:item/math/" + e).glow(true).rarity(RARITY_UNCOMMON)
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
	let types = ["certus", "fluix"]
	types.forEach(e => {
		let id = e.toLowerCase()
		event.create('growing_' + id + '_seed', 'create:sequenced_assembly').texture("ae2:item/crystal_seed_" + id)
		event.create('tiny_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "2")
		event.create('growing_tiny_' + id + '_crystal', 'create:sequenced_assembly').texture("ae2:item/crystal_seed_" + id + "2")
		event.create('small_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "3")
		event.create('growing_small_' + id + '_crystal', 'create:sequenced_assembly').texture("ae2:item/crystal_seed_" + id + "3")
	})
	event.create('nether_seed').texture("kubejs:item/quartz/crystal_seed_nether")
	event.create('growing_nether_seed', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_nether")
	event.create('tiny_nether_crystal').texture("kubejs:item/quartz/crystal_seed_nether2")
	event.create('growing_tiny_nether_crystal', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_nether2")
	event.create('small_nether_crystal').texture("kubejs:item/quartz/crystal_seed_nether3")
	event.create('growing_small_nether_crystal', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_nether3")

	// 构件
	let mechanism = (id, rarity) => {
		let e = id.toLowerCase()
		event.create(e + '_mechanism').texture("kubejs:item/mechanism/" + e + "_mechanism").rarity(rarity ? rarity : RARITY_COMMON)
		event.create('incomplete_' + e + '_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_" + e + "_mechanism")
	}
	mechanism('Kinetic')
	mechanism('Sealed')
	mechanism('Sturdy', RARITY_UNCOMMON)
	mechanism('Infernal', RARITY_UNCOMMON)
	mechanism('Inductive', RARITY_UNCOMMON)
	mechanism('Abstruse', RARITY_RARE)
	mechanism('Calculation', RARITY_RARE)

	// 工具
	event.create('netherite_saw').parentModel("kubejs:item/tool/netherite_saw").maxDamage(2653)
	event.create('chromatic_resonator').texture("kubejs:item/tool/chromatic_resonator").maxDamage(512).rarity(RARITY_UNCOMMON)
	event.create('calculator').texture("kubejs:item/tool/calculator").maxDamage(256).rarity(RARITY_UNCOMMON)
	event.create('flash_drive').texture("kubejs:item/tool/boot_medium").maxDamage(256).rarity(RARITY_UNCOMMON)

	// 粉末
	event.create('brass_dust').texture("kubejs:item/dust/brass_dust")
	event.create('cobalt_dust').texture("kubejs:item/dust/cobalt_dust")
	event.create('zinc_dust').texture("kubejs:item/dust/zinc_dust")
	event.create('rune_dust').texture("kubejs:item/dust/rune_dust")
	event.create('mysterywood_sawdust').texture("kubejs:item/dust/mysterywood_sawdust")
	event.create('desh_dust').texture("kubejs:item/dust/desh_dust")
	event.create('ostrum_dust').texture("kubejs:item/dust/ostrum_dust")
	event.create('calorite_dust').texture("kubejs:item/dust/calorite_dust")

	// 处理器
	event.create('incomplete_calculation_processor', 'create:sequenced_assembly').texture("kubejs:item/processor/incomplete_calculation_processor")
	event.create('incomplete_logic_processor', 'create:sequenced_assembly').texture("kubejs:item/processor/incomplete_logic_processor")
	event.create('incomplete_engineering_processor', 'create:sequenced_assembly').texture("kubejs:item/processor/incomplete_engineering_processor")

	// 黏性蕨
	event.create('earth_slimy_fern_leaf').texture("kubejs:item/fern/leaf/earth_slimy_fern_leaf")
	event.create('ender_slimy_fern_leaf').texture("kubejs:item/fern/leaf/ender_slimy_fern_leaf")
	event.create('sky_slimy_fern_leaf').texture("kubejs:item/fern/leaf/sky_slimy_fern_leaf")
	event.create('earth_slimy_fern_paste').texture("kubejs:item/fern/paste/earth_slimy_fern_paste")
	event.create('ender_slimy_fern_paste').texture("kubejs:item/fern/paste/ender_slimy_fern_paste")
	event.create('sky_slimy_fern_paste').texture("kubejs:item/fern/paste/sky_slimy_fern_paste")

	// 管道模块
	event.create('pipe_module_utility').texture("kubejs:item/pipe_module_utility")
	event.create('pipe_module_tier_1').texture("kubejs:item/pipe_module_tier_1")
	event.create('pipe_module_tier_2').texture("kubejs:item/pipe_module_tier_2")
	event.create('pipe_module_tier_3').texture("kubejs:item/pipe_module_tier_3")

	// 杂物
	event.create('radiant_coil').glow(true).texture("kubejs:item/radiant_coil").rarity(RARITY_UNCOMMON)
	event.create('circuit_scrap').texture("kubejs:item/circuit_scrap")
	event.create('incomplete_coke_chunk', 'create:sequenced_assembly').texture("kubejs:item/incomplete_coke_chunk")
	event.create('coke_chunk').texture("kubejs:item/coke_chunk")
	event.create('smoke_mote').texture("kubejs:item/smoke_mote")
	event.create('sand_ball').texture("kubejs:item/sand_ball").maxStackSize(4)
	event.create('rough_sand').texture("kubejs:item/rough_sand")
	event.create('purified_sand').texture("kubejs:item/purified_sand")
	event.create('press_rod_die').texture("kubejs:item/press_rod_die").unstackable()
	event.create('dye_entangled_singularity').texture("kubejs:item/dye_entangled_singularity").rarity(RARITY_UNCOMMON)
	event.create('arcane_golden_sheet').texture("kubejs:item/arcane_golden_sheet")
	event.create('andesite_alloy_gear').texture("kubejs:item/andesite_alloy_gear")
	event.create('andesite_alloy_ingot').texture("kubejs:item/andesite_alloy_classic")
	event.create('arcane_gold_gear').texture("kubejs:item/arcane_gold_gear")
	event.create('matter_plastics').texture("kubejs:item/matter_plastics").rarity(RARITY_UNCOMMON)
	event.create('gloden_hand').texture("kubejs:item/gloden_hand")
	event.create('bronze_hand').texture("kubejs:item/bronze_hand")
	event.create('aethersite_alloy').texture("kubejs:item/aethersite_alloy")
	event.create('polar_algal_blend').texture("kubejs:item/polar_algal_blend")

	// 粉碎矿石
	event.create('crushed_raw_cobalt').texture("kubejs:item/ore/crushed_raw_cobalt")
	event.create('crushed_desh_ore').texture("kubejs:item/ore/crushed_desh_ore")
	event.create('crushed_ostrum_ore').texture("kubejs:item/ore/crushed_ostrum_ore")
	event.create('crushed_calorite_ore').texture("kubejs:item/ore/crushed_calorite_ore")

	// 混合物
	event.create('silicon_compound').texture("kubejs:item/compound/silicon_compound")
	event.create('nickel_compound').texture("kubejs:item/compound/nickel_compound")
	event.create('invar_compound').texture("kubejs:item/compound/invar_compound")
	event.create('processing_invar_compound', 'create:sequenced_assembly').texture("kubejs:item/compound/invar_compound")

	// 背包
	event.create('sewing_spool').texture("kubejs:item/backpack/sewing_spool").maxDamage(12)
	event.create('incomplete_upgrade_base', 'create:sequenced_assembly').texture("kubejs:item/backpack/incomplete_upgrade_base")

	// 弹药
	event.create('basic_gun_kit').texture("alloyedguns:item/basic_gun_kit")
	event.create('shell_empty').texture("alloyedguns:item/shell_empty")
	event.create('bullet_casing').texture("alloyedguns:item/bullet_casing")
	event.create('incomplete_advanced_bullet', 'create:sequenced_assembly').texture("alloyedguns:item/incomplete_advanced_bullet")
	event.create('incomplete_basic_bullet', 'create:sequenced_assembly').texture("alloyedguns:item/incomplete_basic_bullet")
	event.create('incomplete_complex_bullet', 'create:sequenced_assembly').texture("alloyedguns:item/incomplete_complex_bullet")
	event.create('incomplete_shell', 'create:sequenced_assembly').texture("alloyedguns:item/incomplete_shell")
	event.create('unarmed_missile', 'create:sequenced_assembly').texture("alloyedguns:item/unarmed_missile")
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')

	// 炼金镭射
	event.create('ponder_laser_lamp').model('kubejs:block/ponder_laser_lamp').material("lantern").notSolid().renderType("translucent")
	event.create('ponder_laser_lamp_on').model('kubejs:block/ponder_laser_lamp_on').material("lantern").notSolid().renderType("translucent")

	// 机壳
	event.create('enderium_casing').model('kubejs:block/enderium_casing').material('metal').hardness(4.0).tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('zinc_casing').material('metal').hardness(3.0).tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('invar_casing').material('metal').hardness(3.0).tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('fluix_casing').material('metal').hardness(3.0).tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('matter_casing').material('stone').hardness(8.0).tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('creative_casing').material('stone').hardness(-1.0).tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")

	// 机器
	let machine = (name, layer, material) => {
		let id = name.toLowerCase()
		event.create(id + '_machine')
			.model('kubejs:block/' + id + '_machine')
			.material(material)
			.hardness(3.0)
			.notSolid()
			.renderType(layer)
			.tagBlock("create:wrench_pickup")
			.tagBlock("minecraft:mineable/pickaxe")
	}

	machine('Andesite', "translucent", "lantern")
	machine('Copper', "cutout", "lantern")
	machine('Brass', "translucent", "lantern")
	machine('Obsidian', "translucent", "lantern")
	machine('Zinc', "cutout", "lantern")
	machine('Enderium', "cutout", "lantern")
	// machine('Inductive', "translucent", "lantern")

})

onEvent('fluid.registry', event => {

	event.create("fine_sand").bucketColor(0xE3DBB0).stillTexture('kubejs:fluid/fine_sand_still').flowingTexture('kubejs:fluid/fine_sand_flow').noBlock()
	//异彩废液Kubejs自制版
	//event.create("waste").bucketColor(0x123d36).stillTexture('kubejs:fluid/waste_still').flowingTexture('kubejs:fluid/waste_flow').noBlock()
	event.create("sky_stone").bucketColor(0x595959).stillTexture('kubejs:fluid/sky_stone_still').flowingTexture('kubejs:fluid/sky_stone_flowing').noBlock()

	event.create('raw_logic').stillTexture('kubejs:fluid/number_still').flowingTexture('kubejs:fluid/number_flow').color(0xE7FFCB).noBlock()
	let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
	for (let i = 0; i < 10; i++)
		event.create('number_' + i).stillTexture('kubejs:fluid/number_still').flowingTexture('kubejs:fluid/number_flow').color(colors[i]).noBlock()
	event.create('matrix').stillTexture('kubejs:fluid/matrix_still').flowingTexture('kubejs:fluid/matrix_flow').bucketColor(colors[0]).noBlock()
})

onEvent('item.modification', event => {
	let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
	colors.forEach(element => {
		event.modify('ae2:' + element + '_paint_ball', item => {
			item.maxStackSize = 1
		})
	});

	event.modify('cgm:basic_bullet', item => {
		item.maxStackSize = 64
	});
	event.modify('kubejs:complex_bullet', item => {
		item.maxStackSize = 32
	});
	event.modify('cgm:advanced_bullet', item => {
		item.maxStackSize = 48
	});
	event.modify('cgm:shell', item => {
		item.maxStackSize = 48
	});
	event.modify('cgm:grenade', item => {
		item.maxStackSize = 16
	});
	event.modify('cgm:stun_grenade', item => {
		item.maxStackSize = 16
	});
	event.modify('cgm:missile', item => {
		item.maxStackSize = 16
	});
})