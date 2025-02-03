ServerEvents.recipes(event => {

    event.remove({ input: "darkerdepths:aridrock_gold_ore" });
    event.remove({ input: "darkerdepths:aridrock_iron_ore" });
    event.remove({ input: "darkerdepths:limestone_gold_ore" });
    event.remove({ input: "darkerdepths:limestone_iron_ore" });

    event.remove({ input: "beyond_earth:hammer" });
    event.remove({ output: "beyond_earth:hammer" });

    event.remove({ output: "create_dd:integrated_mechanism" });
    event.remove({ output: "create_dd:infernal_mechanisms" });
    event.remove({ output: "create_dd:inductive_mechanism" });
    event.remove({ output: "create_dd:calculation_mechanism" });
    event.remove({ output: "create_dd:crafting_inductive_mechanism1" });
    event.remove({ output: "create_dd:crafting_inductive_mechanism2" });

    event.remove({ id: "createbigcannons:melting/melt_bronze_block" });
    event.remove({ id: "createbigcannons:melting/melt_bronze_ingot" });
    event.remove({ id: "createbigcannons:melting/melt_bronze_nugget" });
    event.remove({ id: "createbigcannons:melting/melt_steel_block" });
    event.remove({ id: "createbigcannons:melting/melt_steel_ingot" });
    event.remove({ id: "createbigcannons:melting/melt_steel_nugget" });

    event.remove({ id: "beyond_earth:desh_plate" });
    event.remove({ id: "beyond_earth:iron_plate" });

    const blackList = {
        not: [
            { id: "tconstruct:smeltery/casts/gold_casts/ingots" },
            { id: "tconstruct:smeltery/casts/gold_casts/nuggets" },
            { id: "tconstruct:smeltery/casts/gold_casts/rods" },
            { id: "tconstruct:smeltery/casts/gold_casts/plates" },
            { id: "tconstruct:smeltery/casts/gold_casts/gears" },
            { id: "tconstruct:smeltery/casts/gold_casts/wires" },
            { id: "minecraft:quartz_pillar" },
            { id: "minecraft:cut_copper_from_copper_block_stonecutting" },
            { id: "minecraft:cut_copper_stairs_from_cut_copper_stonecutting" },
            { id: "minecraft:cut_copper_slab_from_cut_copper_stonecutting" },
            { id: "minecraft:cut_copper" },
            { id: "minecraft:cut_copper_stairs" },
            { id: "minecraft:cut_copper_slab" },
            { id: "minecraft:copper_ingot" },
            { id: "minecraft:cut_copper_stairs_from_copper_block_stonecutting" },
            { id: "minecraft:cut_copper_slab_from_copper_block_stonecutting" },
            { id: "minecraft:waxed_copper_block_from_honeycomb" },
            { id: "minecraft:waxed_cut_copper_from_honeycomb" },
        ]
    };

    let removeIO = (item) => {
        event.remove({ input: item });
        event.remove({ output: item });
    };

    let replaceIO = (tag, item) => {
        event.replaceInput(blackList, tag, item);
        event.replaceOutput(blackList, tag, item);
    };

    let stone = Item.of(MC("cobblestone"), 1).withChance(.5);
    let limestone = Item.of("darkerdepths:limestone", 1).withChance(.5);
    let aridrock = Item.of("darkerdepths:aridrock", 1).withChance(.5);
    let otherstone = Item.of(OC("otherstone"), 1).withChance(.5);

    event.recipes.create.crushing([Item.of("forbidden_arcanus:stellarite_piece", 1), Item.of("forbidden_arcanus:stellarite_piece", 1).withChance(.25), stone], "forbidden_arcanus:stella_arcanum");
    event.recipes.create.crushing([Item.of("forbidden_arcanus:xpetrified_orb", 2), Item.of("forbidden_arcanus:xpetrified_orb", 1).withChance(.25), stone], "forbidden_arcanus:xpetrified_ore");
    event.recipes.create.crushing([Item.of("buddycards:luminis_crystal", 2), Item.of("buddycards:luminis_crystal", 1).withChance(.25), stone], "buddycards:luminis_ore");
    event.recipes.create.crushing([Item.of("forbidden_arcanus:arcane_crystal", 2), Item.of("forbidden_arcanus:arcane_crystal_dust", 1).withChance(.25), stone], "forbidden_arcanus:arcane_crystal_ore");
    event.recipes.create.crushing([Item.of(OC("iesnium_dust"), 2), Item.of(OC("iesnium_dust"), 1).withChance(.25), otherstone], OC("iesnium_ore"));
    event.recipes.create.crushing([Item.of(TE("sapphire"), 2), Item.of(TE("sapphire"), 1).withChance(.25), stone], TE("sapphire_ore"));
    event.recipes.create.crushing([Item.of(TE("ruby"), 2), Item.of(TE("ruby"), 1).withChance(.25), stone], TE("ruby_ore"));
    event.recipes.create.crushing([Item.of(MC("diamond"), 2), Item.of(MC("diamond"), 1).withChance(.25), limestone], "darkerdepths:limestone_diamond_ore");
    event.recipes.create.crushing([Item.of(MC("diamond"), 2), Item.of(MC("diamond"), 1).withChance(.25), aridrock], "darkerdepths:aridrock_diamond_ore");
    event.recipes.create.crushing([Item.of(MC("coal"), 2), Item.of(MC("coal"), 2).withChance(.5), limestone], "darkerdepths:limestone_coal_ore");
    event.recipes.create.crushing([Item.of(MC("coal"), 2), Item.of(MC("coal"), 2).withChance(.5), aridrock], "darkerdepths:aridrock_coal_ore");
    event.recipes.create.crushing([Item.of(MC("lapis_lazuli"), 12), Item.of(MC("lapis_lazuli"), 8).withChance(.25), limestone], "darkerdepths:limestone_lapis_ore");
    event.recipes.create.crushing([Item.of(MC("lapis_lazuli"), 12), Item.of(MC("lapis_lazuli"), 8).withChance(.25), aridrock], "darkerdepths:aridrock_lapis_ore");
    event.recipes.create.crushing([Item.of(CR('crushed_raw_iron'), 1), limestone], "darkerdepths:limestone_iron_ore");
    event.recipes.create.crushing([Item.of(CR('crushed_raw_iron'), 1), aridrock], "darkerdepths:aridrock_iron_ore");
    event.recipes.create.crushing([Item.of(CR('crushed_raw_gold'), 1), limestone], "darkerdepths:limestone_gold_ore");
    event.recipes.create.crushing([Item.of(CR('crushed_raw_gold'), 1), aridrock], "darkerdepths:aridrock_gold_ore");
    event.recipes.create.crushing([Item.of(TE('sulfur'), 1).withChance(.15)], "biomesoplenty:brimstone");

    // 蓝宝石 和 红宝石 块合成
    event.shaped("thermal:ruby_block", [
        'PPP',
        'PPP',
        'PPP'
    ], {
        P: "thermal:ruby"
    })
    event.shaped("9x thermal:ruby", ['P'], { P: "thermal:ruby_block" })

    event.shaped("thermal:sapphire_block", [
        'PPP',
        'PPP',
        'PPP'
    ], {
        P: "thermal:sapphire"
    })
    event.shaped("9x thermal:sapphire", ['P'], { P: "thermal:sapphire_block" })

    // 蜂蜜
    event.remove({ id: "tconstruct:smeltery/entity_melting/bee" });
    event.remove({ id: "tconstruct:smeltery/melting/slime/honey_block" });
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": "minecraft:honey_block"
        },
        "result": {
            "fluid": "create:honey",
            "amount": 1000
        },
        "temperature": 1,
        "time": 94
    });
    event.custom({
        "type": "tconstruct:entity_melting",
        "entity": {
            "type": "minecraft:bee"
        },
        "result": {
            "fluid": "create:honey",
            "amount": 25
        },
        "damage": 2
    });

    // 下界残骸熔融
    event.custom({
        "type": "tconstruct:ore_melting",
        "rate": "metal",
        "ingredient": {
            "tag": "forge:ores/netherite_scrap"
        },
        "result": {
            "fluid": "tconstruct:molten_debris",
            "amount": 90
        },
        "temperature": 1175,
        "time": 143,
        "byproducts": [
            {
                "fluid": "tconstruct:molten_diamond",
                "amount": 100,
                "rate": "gem"
            },
            {
                "fluid": "tconstruct:molten_gold",
                "amount": 270,
                "rate": "metal"
            }
        ]
    })

    // 铸铁熔融
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": "forge:ingots/cast_iron"
        },
        "result": {
            "fluid": "createbigcannons:molten_cast_iron",
            "amount": 90
        },
        "temperature": 800,
        "time": 90
    })
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": "forge:nuggets/cast_iron"
        },
        "result": {
            "fluid": "createbigcannons:molten_cast_iron",
            "amount": 10
        },
        "temperature": 800,
        "time": 10
    })
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": "createbigcannons:block_cast_iron"
        },
        "result": {
            "fluid": "createbigcannons:molten_cast_iron",
            "amount": 810
        },
        "temperature": 810,
        "time": 810
    })

    // 粉碎末地石
    event.recipes.create.milling([Item.of('2x occultism:crushed_end_stone')], 'minecraft:end_stone').processingTime(100);

    // 硬化硝
    event.remove({ id: "createbigcannons:milling/alloy_nethersteel_cast_iron" });
    event.recipes.create.milling([Item.of('2x thermal:niter_dust')], 'createbigcannons:hardened_nitro').processingTime(100);

    // 硫粉
    replaceIO("#forge:dusts/sulfur", "thermal:sulfur_dust");
    event.recipes.create.milling(["thermal:sulfur_dust"], "#forge:gems/sulfur").processingTime(200);

    // 硝粉
    replaceIO("#forge:dusts/saltpeter", "thermal:niter_dust");
    event.recipes.create.milling(["thermal:niter_dust"], "#forge:gems/niter").processingTime(200);

    // 磷灰石粉
    replaceIO("#forge:dusts/apatite", "thermal:apatite_dust");
    event.recipes.create.milling(["thermal:apatite_dust"], "#forge:gems/apatite").processingTime(200);

    // 石英粉
    replaceIO("#forge:dusts/quartz", "thermal:quartz_dust");
    event.recipes.create.milling(["thermal:quartz_dust"], "#forge:gems/quartz").processingTime(200);

    // 福禄伊克斯石英粉
    replaceIO("#forge:dusts/fluix", "ae2:fluix_dust");
    event.recipes.create.milling(["ae2:fluix_dust"], "#forge:gems/fluix").processingTime(200);

    // 赛特斯石英粉
    replaceIO("#forge:dusts/certus_quartz", "ae2:certus_quartz_dust");
    event.recipes.create.milling(["ae2:certus_quartz_dust"], "#forge:gems/certus_quartz").processingTime(200);

    // 黑曜石粉
    replaceIO("#forge:dusts/obsidian", "create:powdered_obsidian");
    event.recipes.create.crushing(CR("powdered_obsidian"), MC("obsidian"));

    // 朱砂粉（红石粉）
    event.recipes.create.milling(['4x ' + MC('redstone')], TE('cinnabar')).processingTime(700);
    event.recipes.create.crushing(['6x ' + MC('redstone')], TE('cinnabar')).processingTime(500);
    event.recipes.thermal.pulverizer(['8x ' + MC('redstone')], TE('cinnabar')).energy(10000);
    event.custom({
        "type": "occultism:crushing",
        "ingredient": {
            "tag": "forge:ores/cinnabar"
        },
        "result": {
            "tag": "forge:dusts/redstone",
            "count": 8
        },
        "crushing_time": 400,
        "ignore_crushing_multiplier": false
    })

    // 萤石粉
    event.recipes.create.milling(['3x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').processingTime(700);
    event.recipes.create.crushing(['6x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').processingTime(500);
    event.recipes.thermal.pulverizer(['9x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').energy(10000);

    replaceIO("create_dd:integrated_mechanism", "create:precision_mechanism");
    replaceIO("create_dd:infernal_mechanism", "kubejs:infernal_mechanism");
    replaceIO("create_dd:inductive_mechanism", "kubejs:kinetic_mechanism");
    replaceIO("create_dd:calculation_mechanism", "kubejs:calculation_mechanism");

    event.replaceInput({ id: "create:milling/lapis_lazuli" }, MC("lapis_lazuli"), TE("lapis_dust"))

    event.replaceInput(MC("quartz"), AE2("#all_nether_quartz"));
    event.replaceInput(F("#gems/quartz"), AE2("#all_nether_quartz"));

    replaceIO("#forge:silicon", "ae2:silicon");
    replaceIO("#forge:dusts/ender_pearl", "ae2:ender_dust");
    replaceIO("#forge:sawdust", "thermal:sawdust");
    replaceIO("#forge:slag", "thermal:slag");
    replaceIO("#forge:storage_blocks/charcoal", "mekanism:block_charcoal");
    replaceIO("#forge:coal_coke", "thermal:coal_coke");
    replaceIO("#forge:fuels/bio", "createaddition:biomass");
    replaceIO("thermal:tea", "farmersrespite:green_tea_leaves");
    replaceIO('create_dd:chromatic_compound', 'create:chromatic_compound');
    replaceIO('create_dd:refined_radiance', 'create:refined_radiance');
    replaceIO('create_dd:shadow_steel', 'create:shadow_steel');

    event.remove({ output: "thermal:cinnabar_dust" });

	function unifyAllTheMetal(
		name,
		ore,
		deepslateOre,
		rawOre,
		rawOreBlock,
		block,
		ingot,
		nugget,
		gem,
		dust,
		fluid,
		gear,
		plate,
		rod,
		crushed,
		wire,
		spring,
		byproduct,
		fluid_byproduct) {
		let obj = {
			name: name,
			ore: ore,
			deepslateOre: deepslateOre,
			rawOre: rawOre,
			rawOreBlock: rawOreBlock,
			block: block,
			ingot: ingot,
			nugget: nugget,
			gem: gem,
			dust: dust,
			fluid: fluid,
			gear: gear,
			plate: plate,
			rod: rod,
			crushed: crushed,
			wire: wire,
			spring: spring,
			byproduct: byproduct,
			fluid_byproduct: fluid_byproduct,
		};

		if (rawOre) {
			replaceIO(`#forge:raw_materials/${name}`, rawOre);
		}
		if (rawOreBlock) {
			replaceIO(`#forge:storage_blocks/raw_${name}`, rawOreBlock);
		}
		if (block) {
			replaceIO(`#forge:storage_blocks/${name}`, block);
		}
		if (ingot) {
			replaceIO(`#forge:ingots/${name}`, ingot);
		}
		if (nugget) {
			replaceIO(`#forge:nuggets/${name}`, nugget);
		}
		if (gem) {
			replaceIO(`#forge:gems/${name}`, gem);
		}
		if (dust) {
			replaceIO(`#forge:dusts/${name}`, dust);
		}
		if (gear) {
			replaceIO(`#forge:gears/${name}`, gear);
		}
		if (plate) {
			replaceIO(`#forge:plates/${name}`, plate);
		}
		if (rod) {
			replaceIO(`#forge:rods/${name}`, rod);
		}
		if (spring) {
			replaceIO(`#forge:springs/${name}`, spring);
		};
		if (wire) {
			replaceIO(`#forge:wires/${name}`, wire);
		}

		processing(obj, event);
	};

	unifyAllTheMetal(
		"andesite_alloy",
		"",
		"",
		"",
		"",
		"create:andesite_alloy_block",
		"create:andesite_alloy",
		"",
		"",
		"",
		"",
		// "kubejs:andesite_alloy_gear",
		"",
		"create_dd:andesite_sheet",
		"vintageimprovements:andesite_rod",
		"",
		"vintageimprovements:andesite_wire",
		"vintageimprovements:andesite_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"amethyst_bronze",
		"",
		"",
		"",
		"",
		"tconstruct:amethyst_bronze_block",
		"tconstruct:amethyst_bronze_ingot",
		"tconstruct:amethyst_bronze_nugget",
		"",
		"",
		"tconstruct:molten_amethyst_bronze",
		"",
		"vintageimprovements:amethyst_bronze_sheet",
		"vintageimprovements:amethyst_bronze_rod",
		"",
		"vintageimprovements:amethyst_bronze_wire",
		"vintageimprovements:amethyst_bronze_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"brass",
		"",
		"",
		"",
		"",
		"create:brass_block",
		"create:brass_ingot",
		"create:brass_nugget",
		"",
		"kubejs:brass_dust",
		"tconstruct:molten_brass",
		"",
		"create:brass_sheet",
		"createaddition:brass_rod",
		"",
		"vintageimprovements:brass_wire",
		"vintageimprovements:brass_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"bronze",
		"",
		"",
		"",
		"",
		"create_dd:bronze_block",
		"create_dd:bronze_ingot",
		"create_dd:bronze_nugget",
		"",
		"thermal:bronze_dust",
		"tconstruct:molten_bronze",
		"thermal:bronze_gear",
		"create_dd:bronze_sheet",
		"vintageimprovements:bronze_rod",
		"",
		"vintageimprovements:bronze_wire",
		"vintageimprovements:bronze_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"constantan",
		"",
		"",
		"",
		"",
		"thermal:constantan_block",
		"thermal:constantan_ingot",
		"thermal:constantan_nugget",
		"",
		"thermal:constantan_dust",
		"tconstruct:molten_constantan",
		"thermal:constantan_gear",
		"thermal:constantan_plate",
		"vintageimprovements:constantan_rod",
		"",
		"vintageimprovements:constantan_wire",
		"vintageimprovements:constantan_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"copper",
		"minecraft:copper_ore",
		"minecraft:deepslate_copper_ore",
		"minecraft:raw_copper",
		"minecraft:raw_copper_block",
		"minecraft:copper_block",
		"minecraft:copper_ingot",
		"create:copper_nugget",
		"",
		"thermal:copper_dust",
		"tconstruct:molten_copper",
		"thermal:copper_gear",
		"create:copper_sheet",
		"createaddition:copper_rod",
		"create:crushed_raw_copper",
		"createaddition:copper_wire",
		"vintageimprovements:copper_spring",
		"minecraft:gold_nugget",
		"tconstruct:molten_gold"
	);

	unifyAllTheMetal(
		"diamond",
		"minecraft:diamond_ore",
		"minecraft:deepslate_diamond_ore",
		"",
		"",
		"minecraft:diamond_block",
		"",
		"",
		"minecraft:diamond",
		"thermal:diamond_dust",
		"tconstruct:molten_diamond",
		"thermal:diamond_gear",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	);

	unifyAllTheMetal(
		"ruby",
		"thermal:ruby_ore",
		"thermal:deepslate_ruby_ore",
		"",
		"",
		"thermal:ruby_block",
		"",
		"",
		"thermal:ruby",
		"thermal:ruby_dust",
		"",
		"thermal:ruby_gear",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	);

	unifyAllTheMetal(
		"sapphire",
		"thermal:sapphire_ore",
		"thermal:deepslate_sapphire_ore",
		"",
		"",
		"thermal:sapphire_block",
		"",
		"",
		"thermal:sapphire",
		"thermal:sapphire_dust",
		"",
		"thermal:sapphire_gear",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	);

	unifyAllTheMetal(
		"electrum",
		"",
		"",
		"",
		"",
		"thermal:electrum_block",
		"thermal:electrum_ingot",
		"thermal:electrum_nugget",
		"",
		"thermal:electrum_dust",
		"tconstruct:molten_electrum",
		"thermal:electrum_gear",
		"thermal:electrum_plate",
		"createaddition:electrum_rod",
		"",
		"",
		"createaddition:electrum_wire",
		"vintageimprovements:electrum_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"emerald",
		"minecraft:emerald_ore",
		"minecraft:deepslate_emerald_ore",
		"",
		"",
		"minecraft:emerald_block",
		"",
		"",
		"minecraft:emerald",
		"thermal:emerald_dust",
		"tconstruct:molten_emerald",
		"thermal:emerald_gear",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	);

	unifyAllTheMetal(
		"enderium",
		"",
		"",
		"",
		"",
		"thermal:enderium_block",
		"thermal:enderium_ingot",
		"thermal:enderium_nugget",
		"",
		"thermal:enderium_dust",
		"tconstruct:molten_enderium",
		"thermal:enderium_gear",
		"thermal:enderium_plate",
		"vintageimprovements:enderium_rod",
		"",
		"vintageimprovements:enderium_wire",
		"vintageimprovements:enderium_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"signalum",
		"",
		"",
		"",
		"",
		"thermal:signalum_block",
		"thermal:signalum_ingot",
		"thermal:signalum_nugget",
		"",
		"thermal:signalum_dust",
		"tconstruct:molten_signalum",
		"thermal:signalum_gear",
		"thermal:signalum_plate",
		"vintageimprovements:signalum_rod",
		"",
		"vintageimprovements:signalum_wire",
		"vintageimprovements:signalum_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"gold",
		"minecraft:gold_ore",
		"minecraft:deepslate_gold_ore",
		"minecraft:raw_gold",
		"minecraft:raw_gold_block",
		"minecraft:gold_block",
		"minecraft:gold_ingot",
		"minecraft:gold_nugget",
		"",
		"thermal:gold_dust",
		"tconstruct:molten_gold",
		"thermal:gold_gear",
		"create:golden_sheet",
		"createaddition:gold_rod",
		"create:crushed_raw_gold",
		"createaddition:gold_wire",
		"vintageimprovements:golden_spring",
		"create:zinc_nugget",
		"tconstruct:molten_zinc"
	);

	unifyAllTheMetal(
		"invar",
		"",
		"",
		"",
		"",
		"thermal:invar_block",
		"thermal:invar_ingot",
		"thermal:invar_nugget",
		"",
		"thermal:invar_dust",
		"tconstruct:molten_invar",
		"thermal:invar_gear",
		"thermal:invar_plate",
		"vintageimprovements:invar_rod",
		"",
		"vintageimprovements:invar_wire",
		"vintageimprovements:invar_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"iron",
		"minecraft:iron_ore",
		"minecraft:deepslate_iron_ore",
		"minecraft:raw_iron",
		"minecraft:raw_iron_block",
		"minecraft:iron_block",
		"minecraft:iron_ingot",
		"minecraft:iron_nugget",
		"",
		"thermal:iron_dust",
		"tconstruct:molten_iron",
		"thermal:iron_gear",
		"create:iron_sheet",
		"createaddition:iron_rod",
		"create:crushed_raw_iron",
		"createaddition:iron_wire",
		"vintageimprovements:iron_spring",
		"thermal:nickel_nugget",
		"tconstruct:molten_nickel"
	);

	unifyAllTheMetal(
		"lapis",
		"",
		"",
		"",
		"",
		"minecraft:lapis_block",
		"",
		"",
		"minecraft:lapis_lazuli",
		"thermal:lapis_dust",
		"",
		"thermal:lapis_gear",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	);

	unifyAllTheMetal(
		"lead",
		"thermal:lead_ore",
		"thermal:deepslate_lead_ore",
		"thermal:raw_lead",
		"thermal:raw_lead_block",
		"thermal:lead_block",
		"thermal:lead_ingot",
		"thermal:lead_nugget",
		"",
		"thermal:lead_dust",
		"tconstruct:molten_lead",
		"thermal:lead_gear",
		"thermal:lead_plate",
		"vintageimprovements:lead_rod",
		"create:crushed_raw_lead",
		"vintageimprovements:lead_spring",
		"vintageimprovements:lead_spring",
		"minecraft:iron_nugget",
		"tconstruct:molten_iron"
	);

	unifyAllTheMetal(
		"lumium",
		"",
		"",
		"",
		"",
		"thermal:lumium_block",
		"thermal:lumium_ingot",
		"thermal:lumium_nugget",
		"",
		"thermal:lumium_dust",
		"tconstruct:molten_lumium",
		"thermal:lumium_gear",
		"thermal:lumium_plate",
		"vintageimprovements:lumium_rod",
		"",
		"vintageimprovements:lumium_wire",
		"vintageimprovements:lumium_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"manyullyn",
		"",
		"",
		"",
		"",
		"tconstruct:manyullyn_block",
		"tconstruct:manyullyn_ingot",
		"tconstruct:manyullyn_nugget",
		"",
		"",
		"tconstruct:molten_manyullyn",
		"",
		"vintageimprovements:manyullyn_sheet",
		"vintageimprovements:manyullyn_rod",
		"",
		"vintageimprovements:manyullyn_wire",
		"vintageimprovements:manyullyn_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"netherite",
		"",
		"",
		"",
		"",
		"minecraft:netherite_block",
		"minecraft:netherite_ingot",
		"thermal:netherite_nugget",
		"",
		"thermal:netherite_dust",
		"tconstruct:molten_netherite",
		"thermal:netherite_gear",
		"vintageimprovements:netherite_sheet",
		"vintageimprovements:netherite_rod",
		"",
		"vintageimprovements:netherite_wire",
		"vintageimprovements:netherite_spring",
		"occultism:iesnium_nugget",
		"materialis:molten_iesnium"
	);

	unifyAllTheMetal(
		"nickel",
		"thermal:nickel_ore",
		"thermal:deepslate_lead_ore",
		"thermal:raw_nickel",
		"thermal:raw_nickel_block",
		"thermal:nickel_block",
		"thermal:nickel_ingot",
		"thermal:nickel_nugget",
		"",
		"thermal:nickel_dust",
		"tconstruct:molten_nickel",
		"thermal:nickel_gear",
		"thermal:nickel_plate",
		"vintageimprovements:nickel_rod",
		"create:crushed_raw_nickel",
		"vintageimprovements:nickel_wire",
		"vintageimprovements:nickel_spring",
		"create:copper_nugget",
		"tconstruct:molten_copper"
	);

	unifyAllTheMetal(
		"pig_iron",
		"",
		"",
		"",
		"",
		"tconstruct:pig_iron_block",
		"tconstruct:pig_iron_ingot",
		"tconstruct:pig_iron_nugget",
		"",
		"",
		"tconstruct:molten_pig_iron",
		"",
		"vintageimprovements:pig_iron_sheet",
		"vintageimprovements:pig_iron_rod",
		"",
		"vintageimprovements:pig_iron_wire",
		"vintageimprovements:pig_iron_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"quartz",
		"",
		"",
		"",
		"",
		"minecraft:quartz_block",
		"",
		"",
		"minecraft:quartz",
		"thermal:quartz_dust",
		"tconstruct:molten_quartz",
		"thermal:quartz_gear",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	);

	unifyAllTheMetal(
		"rose_gold",
		"",
		"",
		"",
		"",
		"tconstruct:rose_gold_block",
		"tconstruct:rose_gold_ingot",
		"tconstruct:rose_gold_nugget",
		"",
		"thermal:rose_gold_dust",
		"tconstruct:molten_rose_gold",
		"thermal:rose_gold_gear",
		"vintageimprovements:rose_gold_sheet",
		"vintageimprovements:rose_gold_rod",
		"",
		"vintageimprovements:rose_gold_wire",
		"vintageimprovements:rose_gold_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"silver",
		"thermal:silver_ore",
		"thermal:deepslate_silver_ore",
		"thermal:raw_silver",
		"thermal:raw_silver_block",
		"thermal:silver_block",
		"thermal:silver_ingot",
		"thermal:silver_nugget",
		"",
		"thermal:silver_dust",
		"tconstruct:molten_silver",
		"thermal:silver_gear",
		"thermal:silver_plate",
		"vintageimprovements:silver_rod",
		"create:crushed_raw_silver",
		"vintageimprovements:silver_wire",
		"vintageimprovements:silver_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"steel",
		"",
		"",
		"",
		"",
		"create_dd:steel_block",
		"create_dd:steel_ingot",
		"create_dd:steel_nugget",
		"",
		"thermal:steel_dust",
		"tconstruct:molten_steel",
		"thermal:steel_gear",
		"create_dd:steel_sheet",
		"vintageimprovements:steel_rod",
		"",
		"vintageimprovements:steel_wire",
		"vintageimprovements:steel_wire",
		"",
		""
	);

	unifyAllTheMetal(
		"tin",
		"thermal:tin_ore",
		"thermal:deepslate_tin_ore",
		"thermal:raw_tin",
		"thermal:raw_tin_block",
		"create_dd:tin_block",
		"create_dd:tin_ingot",
		"create_dd:tin_nugget",
		"",
		"thermal:tin_dust",
		"tconstruct:molten_tin",
		"thermal:tin_gear",
		"create_dd:tin_sheet",
		"vintageimprovements:tin_rod",
		"create:crushed_raw_tin",
		"vintageimprovements:tin_wire",
		"vintageimprovements:tin_spring",
		"create:copper_nugget",
		"tconstruct:molten_copper"
	);

	unifyAllTheMetal(
		"zinc",
		"create:zinc_ore",
		"create:deepslate_zinc_ore",
		"create:raw_zinc",
		"create:raw_zinc_block",
		"create:zinc_block",
		"create:zinc_ingot",
		"create:zinc_nugget",
		"",
		"kubejs:zinc_dust",
		"tconstruct:molten_zinc",
		"",
		"create_dd:zinc_sheet",
		"vintageimprovements:zinc_rod",
		"create:crushed_raw_zinc",
		"vintageimprovements:zinc_wire",
		"vintageimprovements:zinc_spring",
		"thermal:lead_nugget",
		"tconstruct:molten_lead"
	);

	unifyAllTheMetal(
		"cobalt",
		"tconstruct:cobalt_ore",
		"",
		"tconstruct:raw_cobalt",
		"tconstruct:raw_cobalt_block",
		"tconstruct:cobalt_block",
		"tconstruct:cobalt_ingot",
		"tconstruct:cobalt_nugget",
		"",
		"kubejs:cobalt_dust",
		"tconstruct:molten_cobalt",
		"",
		"vintageimprovements:cobalt_sheet",
		"vintageimprovements:cobalt_rod",
		"kubejs:crushed_raw_cobalt",
		"vintageimprovements:cobalt_wire",
		"vintageimprovements:cobalt_spring",
		"create:powdered_obsidian",
		"tconstruct:molten_obsidian"
	);

	unifyAllTheMetal(
		"neptunium",
		"",
		"",
		"",
		"",
		"aquaculture:neptunium_block",
		"aquaculture:neptunium_ingot",
		"aquaculture:neptunium_nugget",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	);

	unifyAllTheMetal(
		"cast_iron",
		"",
		"",
		"",
		"",
		"createbigcannons:cast_iron_block",
		"createbigcannons:cast_iron_ingot",
		"createbigcannons:cast_iron_nugget",
		"",
		"",
		"createbigcannons:molten_cast_iron",
		"",
		"vintageimprovements:cast_iron_sheet",
		"vintageimprovements:cast_iron_rod",
		"",
		"vintageimprovements:cast_iron_wire",
		"vintageimprovements:cast_iron_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"industrial_iron",
		"",
		"",
		"",
		"",
		"create:industrial_iron_block",
		"create_dd:industrial_iron_ingot",
		"create_dd:industrial_iron_nugget",
		"",
		"",
		"",
		"",
		"create_dd:industrial_iron_sheet",
		"",
		"",
		"",
		"",
		"",
		""
	);

	unifyAllTheMetal(
		"arcane_gold",
		"",
		"",
		"",
		"",
		"forbidden_arcanus:arcane_gold_block",
		"forbidden_arcanus:arcane_gold_ingot",
		"forbidden_arcanus:arcane_gold_nugget",
		"",
		"",
		"",
		"kubejs:arcane_gold_gear",
		"kubejs:arcane_golden_sheet",
		"",
		"",
		"",
		"",
		"",
		""
	);

	unifyAllTheMetal(
		"arcane_crystal",
		"forbidden_arcanus:arcane_crystal_ore",
		"forbidden_arcanus:deepslate_arcane_crystal_ore",
		"",
		"",
		"forbidden_arcanus:arcane_crystal_block",
		"",
		"",
		"forbidden_arcanus:arcane_crystal",
		"forbidden_arcanus:arcane_crystal_dust",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	);

	unifyAllTheMetal(
		"refined_radiance",
		"",
		"",
		"",
		"",
		"create_dd:refined_radiance_block",
		"create:refined_radiance",
		"",
		"",
		"",
		"",
		"",
		"create_dd:refined_radiance_sheet",
		"vintageimprovements:refined_radiance_rod",
		"",
		"vintageimprovements:refined_radiance_wire",
		"vintageimprovements:refined_radiance_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"shadow_steel",
		"",
		"",
		"",
		"",
		"create_dd:shadow_steel_block",
		"create:shadow_steel",
		"",
		"",
		"",
		"",
		"",
		"create_dd:shadow_steel_sheet",
		"vintageimprovements:shadow_steel_rod",
		"",
		"vintageimprovements:shadow_steel_wire",
		"vintageimprovements:shadow_steel_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"desh",
		"",
		"",
		"beyond_earth:raw_desh",
		"beyond_earth:raw_desh_block",
		"beyond_earth:desh_block",
		"beyond_earth:desh_ingot",
		"beyond_earth:desh_nugget",
		"",
		"kubejs:desh_dust",
		"beyond_earth:molten_desh",
		"",
		"beyond_earth:desh_plate",
		"vintageimprovements:desh_rod",
		"kubejs:crushed_desh_ore",
		"vintageimprovements:desh_wire",
		"vintageimprovements:desh_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"ostrum",
		"",
		"",
		"beyond_earth:raw_ostrum",
		"beyond_earth:raw_ostrum_block",
		"beyond_earth:ostrum_block",
		"beyond_earth:ostrum_ingot",
		"beyond_earth:ostrum_nugget",
		"",
		"kubejs:ostrum_dust",
		"beyond_earth:molten_ostrum",
		"",
		"",
		"vintageimprovements:ostrum_rod",
		"kubejs:crushed_ostrum_ore",
		"vintageimprovements:ostrum_wire",
		"vintageimprovements:ostrum_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"calorite",
		"",
		"",
		"beyond_earth:raw_calorite",
		"beyond_earth:raw_calorite_block",
		"beyond_earth:calorite_block",
		"beyond_earth:calorite_ingot",
		"beyond_earth:calorite_nugget",
		"",
		"kubejs:calorite_dust",
		"beyond_earth:molten_calorite",
		"",
		"",
		"vintageimprovements:calorite_rod",
		"kubejs:crushed_calorite_ore",
		"vintageimprovements:calorite_wire",
		"vintageimprovements:calorite_spring",
		"",
		""
	);

	unifyAllTheMetal(
		"", //名称
		"", //矿石
		"", //深层矿石
		"", //粗矿
		"", //粗矿块
		"", //块
		"", //锭
		"", //粒
		"", //宝石
		"", //粉
		"", //熔融流体
		"", //齿轮
		"", //板材
		"", //棍
		"", //粉碎矿
		"", //线
		"", //弹簧
		"", //副产物
		""  //熔融流体副产物
	);

})

const processing = (obj, event) => {
	CreatePlate(obj.name, obj.plate, obj.ingot, event);
	tinkersPlate(obj.name, obj.plate, obj.fluid, obj.gem, event);

	CARod(obj.name, obj.rod, obj.ingot, event);
	thermalsRod(obj.name, obj.rod, event);
	tinkersRod(obj.name, obj.rod, obj.fluid, event);

	CAWire(obj.name, obj.wire, obj.plate, event);
	tinkersWire(obj.name, obj.wire, obj.fluid, event);

	CreateGear(obj.name, obj.gear, obj.ingot, obj.gem, event);
	thermalsGear(obj.name, obj.ingot, obj.gem, obj.gear, event);
	minecraftGear(obj.name, obj.ingot, obj.gem, obj.gear, event);
	tinkersGear(obj.name, obj.gear, obj.fluid, obj.gem, event);

	FiuldDust(obj.name, obj.dust, obj.gem, obj.ingot, obj.fluid, obj.fluid_byproduct, event);
	FiuldIngot(obj.ingot, obj.fluid, event);
	FiuldNugget(obj.nugget, obj.fluid, event);
	FiuldBlock(obj.block, obj.gem, obj.ingot, obj.fluid, event);
	FiuldGem(obj.gem, obj.fluid, event);
	FiuldGear(obj.name, obj.ingot, obj.gem, obj.gear, obj.fluid, event);

	Crusheds(obj.name, obj.crushed, obj.gem, obj.ore, obj.deepslateOre, obj.rawOre, obj.rawOreBlock, event);

	Dusts(obj.name, obj.crushed, obj.gem, obj.ingot, obj.dust, event);

	Blocks(obj.name, obj.block, obj.fluid, obj.gem, event);

	crafting_from_Nuggets(obj.name, obj.ingot, obj.nugget, event);
	tinkersIngot(obj.name, obj.ingot, obj.fluid, obj.gem, event);
	Plate_to_Ingot(obj.name, obj.plate, obj.ingot, event);

	crafting_from_Ingots(obj.name, obj.ingot, obj.nugget, event);
	nuggets(obj.name, obj.nugget, obj.crushed, obj.dust, obj.byproduct, event);
};

// 板材

const CreatePlate = (name, plate, ingot, event) => {
    if (plate === "") return;

    if (ingot) {
        event.remove({
            type: "create:pressing",
            output: `#forge:plates/${name}`,
        });

        event.recipes.create.pressing(plate, [`#forge:ingots/${name}`]);
    }
};

const tinkersPlate = (name, item, fluid, gem, event) => {
    if (item === "" || fluid === "") return;

    event.remove({
        output: `#forge:plates/${name}`,
        type: "tconstruct:casting_table",
    });

    event.recipes.tconstruct.casting_table({
        cast: { tag: "tconstruct:casts/multi_use/plate" },
        cast_consumed: false,
        fluid: { name: fluid, amount: gem ? 100 : 90 },
        result: { item: item },
        cooling_time: 60
    }).id(`unify:tconstruct/plate/multi_${name}`);

    event.recipes.tconstruct.casting_table({
        cast: { tag: "tconstruct:casts/single_use/plate" },
        cast_consumed: true,
        fluid: { name: fluid, amount: gem ? 100 : 90 },
        result: { item: item },
        cooling_time: 60
    }).id(`unify:tconstruct/plate/single_${name}`);
};

// 杆

const CARod = (name, rod, ingot, event) => {
    if (rod === "") return;

    if (ingot) {
        event.remove({
            type: "createaddition:rolling",
            output: `#forge:rods/${name}`,
        });

        event.recipes.createaddition.rolling(rod, `#forge:ingots/${name}`);

        event.custom({
            type: "vintageimprovements:curving",
            itemAsHead: "kubejs:press_rod_die",
            ingredients: [
                {
                    tag: `forge:ingots/${name}`
                }
            ],
            results: [
                {
                    item: rod,
                    count: 2
                }
            ]
        });
    }
};

const thermalsRod = (name, rod, event) => {
    if (rod === "") return;

    event.recipes.thermal.press(rod, [
        `#forge:ingots/${name}`,
        "kubejs:press_rod_die",
    ]);
};

const tinkersRod = (name, item, fluid, event) => {
    if (item === "" || fluid === "") return;

    event.remove({
        output: `#forge:rods/${name}`,
        type: "tconstruct:casting_table",
    });

    event.recipes.tconstruct.casting_table({
        cast: { tag: "tconstruct:casts/multi_use/rod" },
        cast_consumed: false,
        fluid: { name: fluid, amount: 45 },
        result: { item: item },
        cooling_time: 60
    }).id(`unify:tconstruct/rod/multi_${name}`);

    event.recipes.tconstruct.casting_table({
        cast: { tag: "tconstruct:casts/single_use/rod" },
        cast_consumed: true,
        fluid: { name: fluid, amount: 45 },
        result: { item: item },
        cooling_time: 60
    }).id(`unify:tconstruct/rod/single_${name}`);
};

// 线

const CAWire = (name, wire, plate, event) => {
    if (wire === "") return;

    if (plate) {
        event.remove({
            type: "createaddition:rolling",
            output: `#forge:wires/${name}`,
        });

        event.recipes.createaddition.rolling(wire, `#forge:plates/${name}`);
    }
};

const tinkersWire = (name, item, fluid, event) => {
    if (item === "" || fluid === "") return;

    event.remove({
        output: `#forge:wires/${name}`,
        type: "tconstruct:casting_table",
    });

    event.recipes.tconstruct.casting_table({
        cast: { tag: "tconstruct:casts/multi_use/wire" },
        cast_consumed: false,
        fluid: { name: fluid, amount: 45 },
        result: { item: item },
        cooling_time: 60
    }).id(`unify:tconstruct/wire/multi_${name}`);

    event.recipes.tconstruct.casting_table({
        cast: { tag: "tconstruct:casts/single_use/wire" },
        cast_consumed: true,
        fluid: { name: fluid, amount: 45 },
        result: { item: item },
        cooling_time: 60
    }).id(`unify:tconstruct/wire/single_${name}`);
};

// 齿轮

const CreateGear = (name, gear, ingot, gem, event) => {
    if (gear === "") return;

    if (ingot !== "") {
        event.custom({
            type: "vintageimprovements:curving",
            itemAsHead: "thermal:press_gear_die",
            ingredients: [
                {
                    tag: `forge:ingots/${name}`
                }
            ],
            results: [
                {
                    item: gear,
                    count: 1
                }
            ]
        });
    }

    if (gem !== "") {
        event.custom({
            type: "vintageimprovements:curving",
            itemAsHead: "thermal:press_gear_die",
            ingredients: [
                {
                    tag: `forge:gems/${name}`
                }
            ],
            results: [
                {
                    item: gear,
                    count: 1
                }
            ]
        });
    }
};

const thermalsGear = (name, ingot, gem, gear, event) => {
    if (gear === "") return;

    event.remove({
        type: "thermal:press",
        output: `#forge:gears/${name}`,
    });

    if (ingot !== "") {
        event.recipes.thermal.press(gear, [
            `#forge:ingots/${name}`,
            "thermal:press_gear_die",
        ]);
    }

    if (gem !== "") {
        event.recipes.thermal.press(gear, [
            `#forge:gems/${name}`,
            "thermal:press_gear_die",
        ]);
    }
};

const tinkersGear = (name, item, fluid, gem, event) => {
    if (item === "" || fluid === "") return;

    event.remove({
        output: `#forge:gears/${name}`,
        type: "tconstruct:casting_table",
    });

    event.recipes.tconstruct.casting_table({
        cast: { tag: "tconstruct:casts/multi_use/gear" },
        cast_consumed: false,
        fluid: { name: fluid, amount: gem ? 100 : 90 },
        result: { item: item },
        cooling_time: 60
    }).id(`unify:tconstruct/gear/multi_${name}`);

    event.recipes.tconstruct.casting_table({
        cast: { tag: "tconstruct:casts/single_use/gear" },
        cast_consumed: true,
        fluid: { name: fluid, amount: gem ? 100 : 90 },
        result: { item: item },
        cooling_time: 60
    }).id(`unify:tconstruct/gear/single_${name}`);
};

const minecraftGear = (name, ingot, gem, gear, event) => {
    if (gear === "") return;

    event.remove({
        type: "minecraft:crafting_shaped",
        output: `#forge:gears/${name}`,
    });

    if (ingot !== "") {
        event.shaped(`4x ${gear}`, [" N ", "NIN", " N "], {
            N: `#forge:ingots/${name}`,
            I: [`minecraft:iron_nugget`, `create:zinc_nugget`, `thermal:nickel_nugget`, `thermal:tin_nugget`],
        }).id(`unify:minecraft/gear/${name}`);
    }

    if (gem !== "") {
        event.shaped(`4x ${gear}`, [" N ", "NIN", " N "], {
            N: `#forge:gems/${name}`,
            I: [`minecraft:iron_nugget`, `create:zinc_nugget`, `thermal:nickel_nugget`, `thermal:tin_nugget`],
        }).id(`unify:minecraft/gear/${name}`);
    }
};

// 流体

const FiuldDust = (name, dust, gem, ingot, fluid, fluid_byproduct, event) => {
    if (dust === "" || fluid === "") return;

    if (fluid_byproduct == "") {
        event.remove({
            type: "tconstruct:melting",
            input: `#forge:dusts/${name}`,
        });

        event.recipes.tconstruct.melting({
            ingredient: { item: dust },
            result: { fluid: fluid, amount: gem ? 100 : 90 },
            temperature: 500,
            time: 30
        });

        event.recipes.create.mixing([Fluid.of(fluid, gem ? 300 : 270)], [Item.of(dust, 3), AE2('matter_ball')]).superheated();
    }

    if (fluid_byproduct !== "") {
        event.remove({
            type: "tconstruct:melting",
            input: `#forge:dusts/${name}`,
        });

        event.recipes.tconstruct.melting({
            ingredient: { item: dust },
            result: { fluid: fluid, amount: gem ? 100 : 90 },
            temperature: 500,
            time: 30,
            byproducts: [{ fluid: fluid_byproduct, amount: 30 }]
        });

        event.recipes.create.mixing([Fluid.of(fluid, gem ? 300 : 270), Fluid.of(fluid_byproduct, 30)], [Item.of(dust, 3), AE2('matter_ball')]).superheated();
    }

    if (ingot !== "") {
        event.recipes.createbigcannons.melting({
            ingredients: [{ item: dust }],
            results: [{ fluid: fluid, amount: 90 }],
            processingTime: 180,
            heatRequirement: "heated"
        });
    }

    if (gem !== "") {
        event.recipes.createbigcannons.melting({
            ingredients: [{ item: dust }],
            results: [{ fluid: fluid, amount: 100 }],
            processingTime: 180,
            heatRequirement: "heated"
        });
    }
};

const FiuldIngot = (ingot, fluid, event) => {
    if (ingot === "" || fluid === "") return;

    event.recipes.createbigcannons.melting({
        ingredients: [{ item: ingot }],
        results: [{ fluid: fluid, amount: 90 }],
        processingTime: 180,
        heatRequirement: "heated"
    });
};

const FiuldNugget = (nugget, fluid, event) => {
    if (nugget === "" || fluid === "") return;

    event.recipes.createbigcannons.melting({
        ingredients: [{ item: nugget }],
        results: [{ fluid: fluid, amount: 10 }],
        processingTime: 20,
        heatRequirement: "heated"
    });
};

const FiuldBlock = (block, gem, ingot, fluid, event) => {
    if (block === "" || fluid === "") return;

    if (gem !== "") {
        event.recipes.createbigcannons.melting({
            ingredients: [{ item: block }],
            results: [{ fluid: fluid, amount: 900 }],
            processingTime: 1620,
            heatRequirement: "heated"
        });
    }

    if (ingot !== "") {
        event.recipes.createbigcannons.melting({
            ingredients: [{ item: block }],
            results: [{ fluid: fluid, amount: 810 }],
            processingTime: 1620,
            heatRequirement: "heated"
        });
    }
};

const FiuldGem = (gem, fluid, event) => {
    if (gem === "" || fluid === "") return;

    event.recipes.createbigcannons.melting({
        ingredients: [{ item: gem }],
        results: [{ fluid: fluid, amount: 100 }],
        processingTime: 180,
        heatRequirement: "heated"
    });
};

const FiuldGear = (name, ingot, gem, gear, fluid, event) => {
    if (gear === "" || fluid === "") return;

    if (gem !== "") {
        event.remove({
            type: "tconstruct:melting",
            input: `#forge:gears/${name}`,
        });

        event.recipes.tconstruct.melting({
            conditions: [{ value: { item: gear, type: "forge:tag_empty" }, type: "forge:not" }],
            ingredient: { item: gear },
            result: { fluid: fluid, amount: 100 },
            temperature: 700,
            time: 57
        });

        event.recipes.createbigcannons.melting({
            ingredients: [{ item: gear }],
            results: [{ fluid: fluid, amount: 100 }],
            processingTime: 180,
            heatRequirement: "heated"
        });
    }

    if (ingot !== "") {
        event.remove({
            type: "tconstruct:melting",
            input: gear,
        });

        event.recipes.tconstruct.melting({
            conditions: [{ value: { item: gear, type: "forge:tag_empty" }, type: "forge:not" }],
            ingredient: { item: gear },
            result: { fluid: fluid, amount: 90 },
            temperature: 700,
            time: 57
        });

        event.recipes.createbigcannons.melting({
            ingredients: [{ item: gear }],
            results: [{ fluid: fluid, amount: 90 }],
            processingTime: 180,
            heatRequirement: "heated"
        });
    }
};

// 碎矿

const Crusheds = (name, crushed, gem, ore, deepslateOre, rawOre, rawOreBlock, event) => {
    if (crushed === "") return;

    if (ore) {
        event.remove({ id: `create:crushing/${name}_ore` });

        if (crushed !== "") {
            event.remove({ input: `#forge:ores/${name}`, type: TE("pulverizer") });

            event.recipes.thermal.pulverizer([crushed], ore).energy(3000);

            event.recipes.create.crushing([
                `1x ${crushed}`,
                Item.of(crushed).withChance(0.75),
                Item.of(`create:experience_nugget`).withChance(0.75),
                Item.of(`minecraft:cobblestone`).withChance(0.125),
            ], ore);
        }

        if (gem !== "") {
            event.recipes.create.crushing([
                `1x ${gem}`,
                Item.of(gem).withChance(0.75),
                Item.of(`create:experience_nugget`).withChance(0.75),
                Item.of(`minecraft:cobblestone`).withChance(0.125),
            ], ore);
        }
    }

    if (deepslateOre) {
        event.remove({ id: `create:crushing/deepslate_${name}_ore` });

        if (crushed !== "") {
            event.remove({ input: `#forge:ores/${name}`, type: TE("pulverizer") });

            event.recipes.thermal.pulverizer([`2x ${crushed}`], deepslateOre).energy(3000);
            event.recipes.create.crushing([
                `2x ${crushed}`,
                Item.of(crushed).withChance(0.25),
                Item.of(`create:experience_nugget`).withChance(0.75),
                Item.of(`minecraft:cobbled_deepslate`).withChance(0.125),
            ], deepslateOre);
        }

        if (gem !== "") {
            event.recipes.create.crushing([
                `2x ${gem}`,
                Item.of(gem).withChance(0.25),
                Item.of(`create:experience_nugget`).withChance(0.75),
                Item.of(`minecraft:cobbled_deepslate`).withChance(0.125),
            ], deepslateOre);
        }
    }

    if (rawOre) {
        event.remove({ id: `create:crushing/raw_${name}` });
        event.remove({ id: `create:crushing/raw_${name}_ore` });

        event.recipes.create.milling(`${crushed}`, `#forge:raw_materials/${name}`);

        event.recipes.create.crushing([
            crushed,
            Item.of(`create:experience_nugget`).withChance(0.75)
        ], `#forge:raw_materials/${name}`);
    }

    if (rawOreBlock) {
        event.remove({ id: `create:crushing/raw_${name}_block` });

        event.recipes.create.crushing([
            `9x ${crushed}`,
            Item.of(`create:experience_nugget`, 9).withChance(0.75),
        ], `#forge:storage_blocks/raw_${name}`);
    }
};

// 粉

const Dusts = (name, crushed, gem, ingot, dust, event) => {
    if (dust === "") return;

    event.remove({
        type: "create:crushing",
        output: `#forge:dusts/${name}`,
    });
    event.remove({
        type: "create:milling",
        output: `#forge:dusts/${name}`,
    });

    event.remove({
        type: "thermal:pulverizer",
        output: `#forge:dusts/${name}`,
    });

    if (crushed !== "") {
        event.recipes.create.milling([`2x ${dust}`], crushed);

        event.recipes.create.crushing([
            `2x ${dust}`,
            Item.of(dust, 2).withChance(0.5)
        ], crushed);

        event.recipes.thermal.pulverizer([Item.of(dust, 4)], crushed).energy(15000);
    }

    if (ingot !== "") {
        event.recipes.create.milling([Item.of(dust).withChance(0.5)], `#forge:ingots/${name}`);
    }

    if (gem !== "") {
        event.recipes.create.milling([dust], gem);
    }
};

// 块
const Blocks = (name, item, fluid, gem, event) => {
    if (item === "" || fluid === "") return;

    event.remove({
        output: `#forge:storage_blocks/${name}`,
        type: "tconstruct:casting_basin",
    });

    event.recipes.tconstruct.casting_basin({
        cast: { tag: "tconstruct:casts/multi_use/block" },
        cast_consumed: false,
        fluid: { name: fluid, amount: gem ? 900 : 810 },
        result: { item: item },
        cooling_time: 200
    }).id(`unify:tconstruct/storage_block/${name}`);
};

// 锭

const crafting_from_Nuggets = (name, ingot, nugget, event) => {
    if (ingot === "" || nugget === "") return;

    event.remove({
        type: "minecraft:crafting_shapeless",
        input: `#forge:nuggets/${name}`,
        output: `#forge:ingots/${name}`,
    });

    event.remove({
        type: "minecraft:crafting_shaped",
        input: `#forge:nuggets/${name}`,
        output: `#forge:ingots/${name}`,
    });

    event.shaped(ingot, ["NNN", "NNN", "NNN"], { N: `#forge:nuggets/${name}` }).id(`unify:minecraft/ingots/${name}`);
};

const tinkersIngot = (name, item, fluid, gem, event) => {
    if (item === "" || fluid === "") return;

    event.remove({
        output: `#forge:ingots/${name}`,
        type: "tconstruct:casting_table",
    });

    event.recipes.tconstruct.casting_table({
        cast: { tag: "tconstruct:casts/multi_use/ingot" },
        cast_consumed: false,
        fluid: { name: fluid, amount: gem ? 100 : 90 },
        result: { item: item },
        cooling_time: 90
    }).id(`unify:tconstruct/ingot/multi_${name}`);

    event.recipes.tconstruct.casting_table({
        cast: { tag: "tconstruct:casts/single_use/ingot" },
        cast_consumed: true,
        fluid: { name: fluid, amount: gem ? 100 : 90 },
        result: { item: item },
        cooling_time: 90
    }).id(`unify:tconstruct/ingot/single_${name}`);
};

const Plate_to_Ingot = (name, plate, ingot, event) => {
    if (ingot === "") return;

    if (plate) {
        event.remove({
            type: "minecraft:blasting",
            output: `#forge:ingots/${name}`,
        });

        event.recipes.minecraft.blasting(ingot, [`#forge:plates/${name}`]);
    }
};

// 粒

const crafting_from_Ingots = (name, ingot, nugget, event) => {
    if (ingot === "" || nugget === "") return;

    event.remove({
        type: "minecraft:crafting_shapeless",
        output: `#forge:nuggets/${name}`,
        input: `#forge:ingots/${name}`,
    });

    event.remove({
        type: "minecraft:crafting_shaped",
        output: `#forge:nuggets/${name}`,
        input: `#forge:ingots/${name}`,
    });

    event.shapeless(`9x ${nugget}`, `#forge:ingots/${name}`).id(`unify:minecraft/nuggets/${name}`);
};

const nuggets = (name, nugget, crushed, dust, byproduct, event) => {
    if (nugget === "") return;

    if (crushed !== "") {
        event.remove({
            type: "minecraft:smelting",
            input: `create:crushed_raw_${name}`,
        });
        event.remove({
            type: "minecraft:blasting",
            input: `create:crushed_raw_${name}`,
        });
        event.remove({
            type: "create:splashing",
            input: `create:crushed_raw_${name}`,
        });

        event.recipes.minecraft.smelting(Item.of(nugget, 3), crushed);

        if (byproduct !== "") {
            event.custom({
                type: "thermal:smelter",
                ingredient: { item: crushed },
                result: [
                    { item: nugget, chance: 9.0 },
                    { item: byproduct, chance: (byproduct.endsWith('nugget') ? 1.8 : 0.2) },
                    { item: "thermal:rich_slag", chance: 0.2 }
                ],
                experience: 0.2,
                energy: 20000
            });
        }
    }

    if (dust !== "") {
        event.remove({
            type: "minecraft:smelting",
            input: `#forge:dusts/${name}`,
        });
        event.remove({
            type: "minecraft:blasting",
            input: `#forge:dusts/${name}`,
        });

        event.recipes.create.splashing([Item.of(nugget, 2)], dust);

        event.recipes.minecraft.smelting(Item.of(nugget, 1), dust).cookingTime(40);
        event.recipes.minecraft.blasting(Item.of(nugget, 2), dust).cookingTime(40);
    }
};