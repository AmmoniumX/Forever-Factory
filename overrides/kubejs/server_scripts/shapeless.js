// priority: 0
console.info('[AMMONIUM@KUBEJS]: shapeless.js loaded')

ServerEvents.recipes(e => {
	e.shapeless('kubejs:basic_mech',
        ['#minecraft:planks', 'create:andesite_alloy', 'create:cogwheel', 
        'create:shaft', 'emendatusenigmatica:enigmatic_hammer']
    ).damageIngredient(Item.of('emendatusenigmatica:enigmatic_hammer'))
    e.shapeless('2x kubejs:basic_mech',
        ['#forge:treated_wood', 'create:andesite_alloy', 'create:cogwheel', 
        'create:shaft', 'emendatusenigmatica:enigmatic_hammer']
    ).damageIngredient(Item.of('emendatusenigmatica:enigmatic_hammer'))
    e.shapeless('kubejs:andesite_hull',
        ['create:andesite_casing', 'kubejs:basic_mech', 'emendatusenigmatica:enigmatic_hammer']
    ).damageIngredient(Item.of('emendatusenigmatica:enigmatic_hammer'))
    e.shapeless('create:mechanical_pump', 
        ['create:copper_casing', 'create:cogwheel', 'create:fluid_pipe']
    )
    // e.shapeless('create:blaze_burner', 
    //     ['create:empty_blaze_burner', 'kubejs:blaze_effigy']
    // )
    e.shapeless('pneumaticcraft:printed_circuit_board', 
        ['pneumaticcraft:unassembled_pcb', 'immersiveengineering:component_electronic']
    )
    e.shapeless('botania:fertilizer', ['thermal:phytogro', '2x #botania:petals'])
    e.shapeless(Item.of('powah:dielectric_paste', 8), ['2x #minecraft:coals', 'minecraft:clay_ball', 'minecraft:blaze_powder'])
    e.shapeless('ironjetpacks:strap', ['create_jetpack:netherite_jetpack'])
    e.shapeless('4x modularrouters:sender_module_3', ['4x modularrouters:sender_module_2', 'mekanism:teleportation_core'])
    e.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"pneumaticcraft:book"}'), ['minecraft:book', '#forge:ingots/compressed_iron'])

    e.shapeless('2x minecraft:rotten_flesh',['kubejs:rotten_nitrate'])

})
