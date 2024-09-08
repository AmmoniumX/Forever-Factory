// priority: 0
console.info('[AMMONIUM@KUBEJS]: shaped.js loaded')

ServerEvents.recipes(e => {
	e.shaped(Item.of('create:copper_casing', 4),
        [
            'ABA',
            'BCB',
            'ABA'
        ],{
            A: '#forge:ingots/copper',
            B: 'thermal:cured_rubber',
            C: '#forge:glass'
        }
    )
    e.shaped('thermal:device_tree_extractor',
        [
            'ABA',
            'CDC',
            'A A'
        ],{
            A: '#minecraft:planks',
            B: 'kubejs:basic_mech',
            C: '#forge:glass',
            D: 'minecraft:bucket'
        }
    )
    e.shaped('adminshop:shop',
        [
            'ABA',
            'ACA',
            'AAA'
        ],{
            A: '#forge:stone',
            B: 'minecraft:crafting_table',
            C: '#forge:chests'
        }
    )
    e.shaped(Item.of('adminshop:permit', 
    "{display:{Lore:['{\"text\":\"Buy: Tiny TNT\"}'],Name:'{\"text\":\"[T1] Explosives Permit\",\"italic\":false}'},key:1}"),
        [
            'AAA',
            'ABA',
            'AAA'
        ],{
            A: 'kubejs:basic_mech',
            B: 'minecraft:diamond'
        }
    )
    e.shaped(Item.of('adminshop:permit', 
    "{display:{Lore:['{\"text\":\"Buy: Crude Oil, Oil Clump\"}'],Name:'{\"text\":\"[T2] Oil Contract\",\"italic\":false}'},key:2}"),
        [
            'AAA',
            'ABA',
            'AAA'
        ],{
            A: 'kubejs:compressed_mech',
            B: '#forge:storage_blocks/compressed_iron'
        }
    )
    e.shaped(Item.of('adminshop:permit', 
    "{display:{Lore:['{\"text\":\"Buy: Gold Fiber, Floral Fertilizer, Archwood Saplings\"}'],Name:'{\"text\":\"[T3] Novice Magician Contract\",\"italic\":false}'},key:3}"),
        [
            'AAA',
            'ABA',
            'AAA'
        ],{
            A: 'minecraft:poppy',
            B: 'pneumaticcraft:printed_circuit_board'
        }
    )
    e.shaped('kubejs:press_rod_die',
        [
            ' A ',
            'ABA',
            ' A '
        ],{
            A: '#forge:plates/invar',
            B: '#forge:rods/brass'
        }
    )
    e.shaped('kubejs:press_effigy_die',
        [
            ' A ',
            'ABA',
            ' A '
        ],{
            A: '#forge:plates/invar',
            B: 'botania:livingrock'
        }
    )
    e.shaped('kubejs:chiller_plate_cast',
        [
            ' A ',
            'ABA',
            ' A '
        ],{
            A: '#forge:plates/bronze',
            B: '#forge:plates/netherite'
        }
    )
    e.shaped('create:blaze_burner',
        [
            ' A ',
            'ABA',
            ' A '
        ],{
            A: '#forge:plates/brass',
            B: 'minecraft:magma_block'
        }
    )
    e.shaped('immersiveengineering:stick_steel',
        [
            'A',
            'A'
        ],{
            A: 'thermal:steel_ingot'
        }
    )
    e.shaped('kubejs:invar_rod',
        [
            'A',
            'A'
        ],{
            A: 'thermal:invar_ingot'
        }
    )
    e.shaped('pneumaticcraft:air_compressor',
        [
            'AAA',
            'ABC',
            'ADA'
        ],{
            A: 'pneumaticcraft:reinforced_bricks',
            B: 'kubejs:compressed_mech',
            C: 'pneumaticcraft:pressure_tube',
            D: 'compressedcreativity:rotational_compressor'
        }
    )
    e.shaped('2x pneumaticcraft:pressure_chamber_interface',
        [
            'AB',
            'BC'
        ],{
            A: 'minecraft:hopper',
            B: 'pneumaticcraft:pressure_chamber_wall',
            C: 'kubejs:compressed_mech'
        }
    )
    e.shaped('clickmachine:auto_clicker',
        [
            'AAA',
            'ABA',
            'ACA'
        ],{
            A: '#forge:stone',
            B: 'kubejs:compressed_mech',
            C: 'minecraft:redstone_block'
        }
    )
    e.shaped('irongenerators:stone_generator',
        [
            'ABA',
            'BCB',
            'ADA'
        ],{
            A: 'minecraft:smooth_stone',
            B: 'minecraft:redstone',
            C: 'minecraft:blast_furnace',
            D: 'createaddition:alternator'
        }
    )
    e.shaped('createaddition:alternator',
        [
            'ABA',
            'BCB',
            'ADA'
        ],{
            A: '#forge:plates/iron',
            B: 'createaddition:copper_spool',
            C: '#forge:rods/iron',
            D: 'kubejs:compressed_mech'
        }
    )
    e.shaped('kubejs:computing_core_base',
    [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: '#forge:dusts/redstone',
        B: '#ae2:all_certus_quartz',
        C: 'ae2:smooth_sky_stone_slab'
    })
    e.shaped('8x kubejs:awakening_spirit',
        [
            'AAA',
            'ABA',
            'AAA'
        ],{
            A: 'botania:livingrock',
            B: 'ars_nouveau:source_gem'
        }
    )
    e.shaped('4x mekanism:steel_casing',
        [
            'ABA',
            'BCB',
            'ABA'
        ],{
            A: '#forge:ingots/steel',
            B: '#thermal:glass/hardened',
            C: 'kubejs:sbc'
        }
    )
    e.shaped('6x mekanism:basic_tier_installer',
        [
            'ABA',
            'CDC',
            'ABA'
        ],{
            A: 'minecraft:redstone',
            B: 'mekanism:basic_control_circuit',
            C: '#forge:ingots/iron',
            D: 'kubejs:sbc'
        }
    )
    e.shaped('4x mekanism:advanced_tier_installer',
        [
            'ABA',
            'CDC',
            'ABA'
        ],{
            A: 'mekanism:alloy_infused',
            B: 'mekanism:advanced_control_circuit',
            C: '#forge:ingots/osmium',
            D: 'kubejs:sbc'
        }
    )
    e.shaped('2x mekanism:elite_tier_installer',
        [
            'ABA',
            'CDC',
            'ABA'
        ],{
            A: 'mekanism:alloy_reinforced',
            B: 'mekanism:elite_control_circuit',
            C: '#forge:ingots/gold',
            D: 'kubejs:sbc'
        }
    )
    e.shaped('mekanism:ultimate_tier_installer',
        [
            'ABA',
            'CDC',
            'ABA'
        ],{
            A: 'mekanism:alloy_atomic',
            B: 'mekanism:ultimate_control_circuit',
            C: '#forge:gems/diamond',
            D: 'kubejs:sbc'
        }
    )
    e.shaped('ae2:quantum_link',
        [
            'ABA',
            'BCB',
            'ABA'
        ],{
            A: 'ae2:quartz_glass',
            B: 'ae2:fluix_pearl',
            C: 'mekanism:teleportation_core'
        }
    )
    e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachines:fluid_combiner"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],{
            A: 'extendedcrafting:black_iron_ingot',
            B: 'mekanism:elite_fluid_tank',
            C: 'mekanism:steel_casing'
        }
    )
    e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachines:heavy_compressor"}'),
        [
            'ABA',
            'DCD',
            'ABA'
        ],{
            A: 'extendedcrafting:black_iron_ingot',
            B: 'minecraft:anvil',
            C: 'mekanism:steel_casing',
            D: 'minecraft:iron_ingot'
        }
    )
    e.shaped('thermal:upgrade_augment_2',
        [
            'ABA',
            'CDC',
            'AEA'
        ],{
            A: '#forge:ingots/electrum',
            B: '#forge:gems/quartz',
            C: '#forge:gears/redstone',
            D: 'thermal:upgrade_augment_1',
            E: 'pneumaticcraft:printed_circuit_board'
        }
    )
    e.shaped('kubejs:gear_redstone',
        [
            ' A ',
            'ABA',
            ' A '
        ],{
            A: '#forge:ingots/redstone_ingot',
            B: '#forge:nuggets/iron'
        }
    )
    e.shaped('thermal:upgrade_augment_3',
        [
            'ABA',
            'CDC',
            'AEA'
        ],{
            A: '#forge:ingots/enderium',
            B: '#thermal:glass/hardened',
            C: '#forge:gears/lumium',
            D: 'thermal:upgrade_augment_2',
            E: 'kubejs:sbc'
        }
    )
    e.shaped('kubejs:subzero_cell',
        [
            '   ',
            'ABA',
            '   '
        ],{
            A: '#forge:plates/enderium',
            B: 'thermal:enderium_glass'
        }
    )
    e.shaped('2x createendertransmission:energy_transmitter',
        [
            'ADA',
            'BCB',
            'ADA'
        ],{
            A: 'pneumaticcraft:reinforced_stone',
            B: 'create:shaft',
            C: 'create:precision_mechanism',
            D: 'createaddition:capacitor'
        }
    )
    e.shaped('souloverclockers:attuner',
        [
            ' A',
            'B '
        ],{
            A: 'souloverclockers:eye',
            B: 'minecraft:stick'
        }
    )
    e.shaped('6x pipez:fluid_pipe',
        [
            'AAA',
            'BCB',
            'AAA'
        ], {
            A: 'create:fluid_pipe',
            B: 'minecraft:bucket',
            C: 'kubejs:compressed_mech'
        }
    )
    e.shaped('6x pipez:item_pipe',
        [
            'AAA',
            'BCB',
            'AAA'
        ], {
            A: '#forge:ingots/iron',
            B: 'minecraft:dropper',
            C: 'kubejs:compressed_mech'
        }
    )
    e.shaped('6x pipez:energy_pipe',
        [
            'AAA',
            'BCB',
            'AAA'
        ], {
            A: '#forge:ingots/iron',
            B: 'minecraft:redstone_torch',
            C: 'kubejs:compressed_mech'
        }
    )
    e.shaped('2x integrateddynamics:part_connector_omni_directional',
        [
            ' A ',
            'BCB',
            ' A '
        ], {
            A: 'integrateddynamics:cable',
            B: 'integrateddynamics:part_connector_mono_directional',
            C: 'mekanism:teleportation_core'
        }
    )
    e.shaped(Item.of('adminshop:permit', 
        "{display:{Lore:['[\"\",{\"text\":\"Buy: Graphite electrode blueprint, unbreakable graphite electrodes\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"[T4] Senior Engineer\\'s Contract\",\"italic\":false}]'},key:4}"),
        [
            'AAA',
            'ABA',
            'AAA'
        ],{
            A: '#forge:ingots/titanium',
            B: 'immersiveengineering:component_electronic'
        }
    )
    e.shaped('4x everycomp:q/integrateddynamics/menril_chest',
        [
            'AAA',
            'A A',
            'AAA'
        ],{
            A: 'integrateddynamics:menril_log'
        }
    )
    e.shaped('8x integrateddynamics:variable_transformer_input',
        [
            ' A ',
            'BCB',
            ' A '
        ],{
            A: 'integrateddynamics:variable',
            B: 'integrateddynamics:crystalized_menril_chunk',
            C: 'kubejs:compressed_mech'
        }
    )
    e.shaped('8x integrateddynamics:variable_transformer_output',
        [
            ' B ',
            'ACA',
            ' B '
        ],{
            A: 'integrateddynamics:variable',
            B: 'integrateddynamics:crystalized_menril_chunk',
            C: 'kubejs:compressed_mech'
        }
    )

})
