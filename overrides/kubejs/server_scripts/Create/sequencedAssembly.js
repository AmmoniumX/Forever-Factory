// priority: 0
console.info('[AMMONIUM@KUBEJS]: sequencedAssembly.js loaded')

ServerEvents.recipes(e => {
    e.recipes.create.sequenced_assembly([
        Item.of('kubejs:basic_mech', 4).withChance(16),
        'create:shaft',
        'create:cogwheel',
        'create:andesite_alloy',
        'minecraft:stone_button'
    ], '#minecraft:planks', [
        e.recipes.create.deploying('kubejs:basic_mech_inc', ['kubejs:basic_mech_inc', 'create:andesite_alloy']),
        e.recipes.create.deploying('kubejs:basic_mech_inc', ['kubejs:basic_mech_inc', 'create:cogwheel']),
        e.recipes.create.deploying('kubejs:basic_mech_inc', ['kubejs:basic_mech_inc', 'create:shaft'])
    ]).transitionalItem('kubejs:basic_mech_inc').loops(1)
    e.recipes.create.sequenced_assembly([
        Item.of('kubejs:basic_mech', 8).withChance(16),
        'create:shaft',
        'create:cogwheel',
        'create:andesite_alloy',
        'minecraft:stone_button'
    ], '#forge:treated_wood', [
        e.recipes.create.deploying('kubejs:basic_mech_inc', ['kubejs:basic_mech_inc', 'create:andesite_alloy']),
        e.recipes.create.deploying('kubejs:basic_mech_inc', ['kubejs:basic_mech_inc', 'create:cogwheel']),
        e.recipes.create.deploying('kubejs:basic_mech_inc', ['kubejs:basic_mech_inc', 'create:shaft'])
    ]).transitionalItem('kubejs:basic_mech_inc').loops(1)
    e.recipes.create.sequenced_assembly('kubejs:compressed_mech', 
    'kubejs:basic_mech', [
        e.recipes.create.pressing('kubejs:compressed_mech_inc', 'kubejs:compressed_mech_inc'),
        e.recipes.create.deploying('kubejs:compressed_mech_inc', ['kubejs:compressed_mech_inc', 'emendatusenigmatica:compressed_iron_gear']),
        e.recipes.create.deploying('kubejs:compressed_mech_inc', ['kubejs:compressed_mech_inc', 'kubejs:invar_rod']),
        e.recipes.create.filling('kubejs:compressed_mech_inc', ['kubejs:compressed_mech_inc', Fluid.of('minecraft:lava', 250)])
    ]).transitionalItem('kubejs:compressed_mech_inc').loops(1)
    e.recipes.create.sequenced_assembly([
        Item.of('kubejs:computing_core').withChance(12),
        Item.of('kubejs:computing_core_misaligned').withChance(3),
        Item.of('kubejs:computing_core_overflowing').withChance(2),
        Item.of('kubejs:computing_core_burnt').withChance(2),
        Item.of('kubejs:computing_core_corrupted').withChance(1)
    ], 'kubejs:computing_core_base', [
        e.recipes.create.deploying('kubejs:computing_core_inc', ['kubejs:computing_core_inc', 'ae2:logic_processor']),
        e.recipes.create.deploying('kubejs:computing_core_inc', ['kubejs:computing_core_inc', 'ae2:calculation_processor']),
        e.recipes.create.deploying('kubejs:computing_core_inc', ['kubejs:computing_core_inc', 'ae2:engineering_processor']),
        e.recipes.create.filling('kubejs:computing_core_inc', ['kubejs:computing_core_inc', Fluid.of('kubejs:thermal_paste', 100)]),
        e.recipes.create.pressing('kubejs:computing_core_inc', 'kubejs:computing_core_inc')
    ]).transitionalItem('kubejs:computing_core_inc').loops(1)
})
