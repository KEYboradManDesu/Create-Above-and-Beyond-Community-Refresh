onEvent('block.registry', event => {
	// 混沌炼金注册
	// 原味CAB配方，熟悉的味道
	var mad = 0;
	for (mad = 0; mad < 15; mad++)
		event.create(`failed_alchemy_${mad}`)
			.material('glass')
			.color(0, 0x394867)
			.color(1, 0x14274E)
			.hardness(0.1)
			.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
			.model("kubejs:block/mundane_substrate")
			.displayName(`凡品炼金混合物`)
			.item(e => e.color(0, 0x394867).color(1, 0x14274E))
			.renderType("cutout")
			.tagBlock("minecraft:mineable/pickaxe")
			

	global.substrates = []
	global.substrate_mapping = {}
	var current_category = []
	var category_index = 0
	var substrate_index = 0

	let category = () => {
		global.substrates.push(current_category)
		current_category = []
		category_index++
		substrate_index = 0
	}

	let substrate_base = (c1, c2, id, name, model, ingredient, outputItem) => {
		global.substrate_mapping[id] = {
			category: category_index,
			index: substrate_index,
			name: name.replace("反应物", "").replace("催化剂", "")
		}
		current_category.push({
			id: `kubejs:substrate_${id}`,
			ingredient: ingredient,
			outputItem: outputItem
		})
		event.create(`substrate_${id}`)
			.material('glass')
			.color(0, c1)
			.color(1, c2)
			.hardness(0.1)
			.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
			.model("kubejs:block/" + model)
			.displayName(name)
			.renderType("cutout")
			.item(e => e.rarity(model == "catalyst" ? RARITY_UNCOMMON : RARITY_COMMON).color(0, c1).color(1, c2))
			.tagBlock("minecraft:mineable/pickaxe")
		substrate_index++
	}

	let reagent = (c1, c2, id, prefix, ingredient, outputItem) => substrate_base(c1, c2, id, `${prefix}反应物`, "substrate", ingredient, outputItem)
	let catalyst = (c1, c2, id, prefix, ingredient) => substrate_base(c1, c2, id, `${prefix}催化剂`, "catalyst", ingredient)

	reagent(0x5F5F5F, 0x8E8E8E, "andesite", "安山岩", "minecraft:andesite")
	reagent(0x7F7F7F, 0xD4D4D4, "diorite", "闪长岩", "minecraft:diorite")
	reagent(0x563A2F, 0x9A6C5B, "granite", "花岗岩", "minecraft:granite")
	reagent(0x585858, 0x646363, "cobblestone", "圆石", "minecraft:cobblestone")
	reagent(0x32333D, 0x5C5C5C, "basalt", "玄武岩", "minecraft:basalt")
	reagent(0x6B5D4F, 0x7D6B5A, "gabbro", "辉长岩", "create_dd:gabbro")
	category()
	reagent(0xD30000, 0xB80F0A, "red", "绯红", ["minecraft:rose_bush", "minecraft:poppy", "minecraft:red_tulip"], "minecraft:red_dye")
	reagent(0xFC6600, 0xb1560f, "orange", "橙色", ["minecraft:orange_tulip", "biomesoplenty:burning_blossom", "minecraft:pumpkin"], "minecraft:orange_dye")
	reagent(0xFFF200, 0xdba520, "yellow", "黄色", ["biomesoplenty:goldenrod", "minecraft:sunflower", "minecraft:dandelion"], "minecraft:yellow_dye")
	reagent(0x9dc183, 0x708238, "green", "绿色", ["minecraft:fern", "minecraft:cactus", "biomesoplenty:watergrass"], "minecraft:green_dye")
	reagent(0x57a0d2, 0x0080fe, "blue", "蓝色", ["biomesoplenty:blue_hydrangea", "minecraft:cornflower", "minecraft:blue_orchid"], "minecraft:light_blue_dye")
	reagent(0xb200ed, 0xff66cc, "magenta", "品红色", ["minecraft:lilac", "minecraft:allium", "minecraft:pink_tulip"], "minecraft:magenta_dye")
	category()
	reagent(0xAC3B00, 0xD5AC26, "blaze", "烈焰", "minecraft:blaze_powder")
	reagent(0x4F7E48, 0x8AD480, "slime", "史莱姆", "minecraft:slime_ball")
	reagent(0x5B151A, 0xBC3E49, "nether", "下界", "minecraft:nether_wart")
	reagent(0x05030A, 0x36234C, "obsidian", "黑曜石", "create:powdered_obsidian")
	reagent(0x535353, 0x717171, "gunpowder", "火药", "minecraft:gunpowder")
	reagent(0x529680, 0xA2CFC0, "prismarine", "海晶", "minecraft:prismarine_shard")
	category()
	reagent(0x9E72BE, 0xB7C9D1, "arcane", "神秘", "forbidden_arcanus:arcane_crystal_dust")
	reagent(0x27A9BB, 0x2CC7C9, "apatite", "磷灰石", "thermal:apatite_dust")
	reagent(0xC7A94A, 0xEEF071, "sulfur", "硫磺", "thermal:sulfur_dust")
	reagent(0x735A65, 0xB8AFAF, "niter", "硝石", "thermal:niter_dust")
	reagent(0x91C5FC, 0xA7CBCF, "certus", "赛特斯石英", "ae2:certus_quartz_dust")
	reagent(0xB19E8F, 0xE7E2DB, "quartz", "下界石英", "ae2:nether_quartz_dust")
	category()
	reagent(0x616A60, 0xD0D2C5, "zinc", "锌", "kubejs:zinc_dust")
	reagent(0xDD7E5D, 0xFCEFBA, "copper", "铜", "thermal:copper_dust")
	reagent(0xA6A6A6, 0xD5D5D5, "iron", "铁", "thermal:iron_dust")
	reagent(0x977756, 0xE4D196, "nickel", "镍", "thermal:nickel_dust")
	reagent(0x232456, 0x7C95A4, "lead", "铅", "thermal:lead_dust")
	reagent(0xD99413, 0xFAF25E, "gold", "金", "thermal:gold_dust")
	category()
	reagent(0xFC7781, 0xFCCED0, "cinnabar", "朱砂", "thermal:cinnabar")
	reagent(0x335DC1, 0x7395E7, "lapis", "青金石", "thermal:lapis_dust")
	reagent(0x246BE9, 0x76C6FC, "sapphire", "蓝宝石", "thermal:sapphire_dust")
	reagent(0x00A82B, 0xADFACB, "emerald", "绿宝石", "thermal:emerald_dust")
	reagent(0x9D0A33, 0xFB7B71, "ruby", "红宝石", "thermal:ruby_dust")
	reagent(0x20C3B3, 0xD2FCF3, "diamond", "钻石", "thermal:diamond_dust")
	category()
	catalyst(0x506D84, 0x889EAF, "igneous", "火成")
	catalyst(0xB5CDA3, 0xC9E4C5, "herbal", "草本")
	catalyst(0x9F5F80, 0xFF8474, "volatile", "不稳定")
	catalyst(0xFFB037, 0xFFE268, "crystal", "晶化")
	catalyst(0x232457, 0x7D97A6, "metal", "金属")
	catalyst(0x3EDBF0, 0xC0FEFC, "gem", "宝石")
	category()

	event.create(`substrate_chaos`)
		.material('glass')
		.color(0, 0xb200ed)
		.color(1, 0xff66cc)
		.hardness(0.1)
		.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
		.model("kubejs:block/chaos_catalyst")
		.displayName("§b§khu§on§mДa§r§b§k§oャ§lt.化§r§b§k§n劑§l\"【")
		.renderType("cutout")
		.item(e => e.rarity(RARITY_RARE).color(0, 0xb200ed).color(1, 0xff66cc))
		.tagBlock("minecraft:mineable/pickaxe")
	

	event.create(`substrate_silicon`)
		.material('glass')
		.color(0, 0x474449)
		.color(1, 0x967DA0)
		.hardness(0.1)
		.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
		.model("kubejs:block/substrate")
		.displayName("§d高能硅反应物")
		.renderType("cutout")
		.item(e => e.rarity(RARITY_EPIC).color(0, 0x474449).color(1, 0x967DA0))
		.tagBlock("minecraft:mineable/pickaxe")


	event.create(`substrate_silver`)
		.material('glass')
		.color(0, 0x9FADB4)
		.color(1, 0xBECCD2)
		.hardness(0.1)
		.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
		.model("kubejs:block/substrate")
		.displayName("§7银元素§r反应物")
		.renderType("cutout")
		.item(e => e.color(0, 0x9FADB4).color(1, 0xBECCD2))
		.tagBlock("minecraft:mineable/pickaxe")

	event.create(`accellerator_glowstone`)
		.material('glass')
		.color(0, 0xFFBC5E)
		.hardness(0.1)
		.box(.125, 0, .125, .875, 10.0 / 16.0, .875, false)
		.model("kubejs:block/accellerator")
		.displayName("§6荧石§r稳定剂")
		.renderType("cutout")
		.item(e => e.color(0, 0xFFBC5E))
		.tagBlock("minecraft:mineable/pickaxe")

	event.create(`accellerator_redstone`)
		.material('glass')
		.color(0, 0xAA0F01)
		.hardness(0.1)
		.box(.125, 0, .125, .875, 10.0 / 16.0, .875, false)
		.model("kubejs:block/accellerator")
		.displayName("§c红石§r稳定剂")
		.renderType("cutout")
		.item(e => e.color(0, 0xAA0F01))
		.tagBlock("minecraft:mineable/pickaxe")
	
})