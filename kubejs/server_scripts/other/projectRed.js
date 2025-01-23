// Load common functions
require('../common.js');

ServerEvents.recipes(event => {
    projectRed(event)
})

function projectRed(event) {

    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": MC('redstone')
        },
        "result": {
            "fluid": TE('redstone'),
            "amount": 100
        },
        "temperature": 300,
        "time": 10
    });

    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": MC('redstone_block')
        },
        "result": {
            "fluid": TE('redstone'),
            "amount": 900
        },
        "temperature": 500,
        "time": 90
    });

    let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']

    event.remove({ output: PR_C('red_ingot') })
    event.remove({ output: PR_C('red_iron_comp') })
    event.remove({ input: PR_C('plate') })
    event.remove({ mod: 'projectred_illumination' })
    event.remove({ id: PR_T('red_alloy_wire') })

    //红石合金锭
    event.recipes.create.compacting([PR_C('red_ingot')], [MC('copper_ingot'), Fluid.of(TE("redstone"), 250)])
    event.recipes.create.compacting([PR_C('red_ingot')], [MC('copper_ingot'), MC("redstone"), MC("redstone"), MC("redstone"), MC("redstone")])
    event.recipes.thermal.smelter(PR_C('red_ingot'), [MC("copper_ingot"), MC("redstone")])

    //红石合金导线
    event.recipes.create.compacting([PR_T('red_alloy_wire', 4)], ['createaddition:copper_wire', Fluid.of(TE("redstone"), 250)])
    event.recipes.create.compacting([PR_T('red_alloy_wire', 4)], ['createaddition:copper_wire', MC("redstone"), MC("redstone"), MC("redstone"), MC("redstone")])
    event.recipes.thermal.smelter(PR_T('red_alloy_wire', 4), ['createaddition:copper_wire', MC("redstone")])
    event.custom({
        "type": "createaddition:rolling",
        "input": {
            "item": "projectred_core:red_ingot"
        },
        "result": {
            "item": "projectred_transmission:red_alloy_wire",
            "count": 4
        }
    })

    // event.recipes.immersiveengineering.metal_press(
    //     "4x projectred_transmission:red_alloy_wire",
    //     "projectred_core:red_ingot",
    //     "immersiveengineering:mold_wire"
    // )
    // event.shapeless("4x projectred_transmission:red_alloy_wire", [
    //     "projectred_core:red_ingot",
    //     Item.of("immersiveengineering:wirecutter").ignoreNBT(),
    // ]);

    event.shapeless(PR_C('platformed_plate'), [PR_C('plate'), PR_T('red_alloy_wire'), CR("andesite_alloy")])

    let convert = (c, id) => {
        event.shapeless(PR_I(c + "_inverted" + id), [PR_I(c + id)])
        event.shapeless(PR_I(c + id), [PR_I(c + "_inverted" + id)])
    }

    colours.forEach(c => {
        event.shaped(PR_I(c + '_illumar_lamp', 1), [
            'G',
            'C',
            'S'
        ], {
            G: F('#glass/colorless'),
            C: PR_C(c + '_illumar'),
            S: MC('redstone')
        })

        event.stonecutting(PR_I(c + '_fixture_light', 4), PR_I(c + '_illumar_lamp'))
        event.stonecutting(PR_I(c + '_fallout_light', 4), PR_I(c + '_illumar_lamp'))
        event.stonecutting(PR_I(c + '_lantern', 4), PR_I(c + '_illumar_lamp'))
        event.stonecutting(PR_I(c + '_cage_light', 4), PR_I(c + '_illumar_lamp'))
        convert(c, '_illumar_lamp')
        convert(c, '_fallout_light')
        convert(c, '_lantern')
        convert(c, '_cage_light')
        convert(c, '_fixture_light')
    })

    let circuit = (id, override) => {
        if (override)
            event.remove({ output: id })
        event.stonecutting(Item.of(id, 1), PR_C('platformed_plate'))
    }

    let p_circuit = (id) => circuit("projectred_integration:" + id + "_gate", true)

    circuit(MC("repeater"), false)
    circuit(MC("comparator"), false)
    circuit(CR("pulse_repeater"), true)
    circuit(CR("powered_latch"), true)
    circuit(CR("powered_toggle_latch"), true)
    circuit('createaddition:redstone_relay', true)
    circuit('quark:redstone_randomizer', true)

    p_circuit("or")
    p_circuit("nor")
    p_circuit("not")
    p_circuit("and")
    p_circuit("nand")
    p_circuit("xor")
    p_circuit("xnor")
    p_circuit("buffer")
    p_circuit("multiplexer")
    p_circuit("pulse")
    p_circuit("repeater")
    p_circuit("randomizer")
    p_circuit("sr_latch")
    p_circuit("toggle_latch")
    p_circuit("transparent_latch")
    p_circuit("light_sensor")
    p_circuit("rain_sensor")
    p_circuit("timer")
    p_circuit("sequencer")
    p_circuit("counter")
    p_circuit("state_cell")
    p_circuit("synchronizer")
    p_circuit("bus_transceiver")
    p_circuit("null_cell")
    p_circuit("invert_cell")
    p_circuit("buffer_cell")
    p_circuit("comparator")
    p_circuit("and_cell")
    p_circuit("bus_randomizer")
    p_circuit("bus_converter")
    p_circuit("bus_input_panel")
    p_circuit("stacking_latch")
    p_circuit("segment_display")
    p_circuit("dec_randomizer")
}