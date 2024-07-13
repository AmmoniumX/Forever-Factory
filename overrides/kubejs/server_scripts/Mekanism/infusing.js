// priority: 0
console.info('[AMMONIUM@KUBEJS]: infusing.js loaded')

ServerEvents.recipes(e => {
    e.recipes.mekanism.metallurgic_infusing('immersiveengineering:ingot_steel', '#forge:ingots/iron', {infuse_type: 'mekanism:carbon', amount: 10})
    e.recipes.mekanism.metallurgic_infusing('extendedcrafting:redstone_ingot', '#forge:ingots/steel', {infuse_type: 'mekanism:redstone', amount: 10})
    e.recipes.mekanism.metallurgic_infusing('extendedcrafting:black_iron_ingot', '#forge:ingots/steel', {infuse_type: 'mekanism:carbon', amount: 10})
    e.recipes.mekanism.metallurgic_infusing('thermal:signalum_ingot', 'thermal:signalum_dust', {infuse_type: 'mekanism:redstone', amount: 20})
    e.recipes.mekanism.metallurgic_infusing('thermal:lumium_ingot', 'thermal:lumium_dust', {infuse_type: 'mekanism:gold', amount: 30})
    e.recipes.mekanism.metallurgic_infusing('thermal:enderium_ingot', 'thermal:enderium_dust', {infuse_type: 'mekanism:diamond', amount: 40})
    e.recipes.mekanism.metallurgic_infusing('kubejs:enriched_basilic_reagent', 'kubejs:basilic_reagent', {infuse_type: 'kubejs:dark_essence', amount: 10})
    e.recipes.mekanism.metallurgic_infusing('mekanism:basic_control_circuit', 'pneumaticcraft:module_expansion_card', {infuse_type: 'mekanism:redstone', amount: 10})
    e.recipes.mekanism.metallurgic_infusing('kubejs:enriched_dark_essence', 'kubejs:dark_essence', {infuse_type: 'kubejs:light_essence', amount: 10})
    e.recipes.mekanism.metallurgic_infusing('kubejs:enriched_light_essence', 'kubejs:light_essence', {infuse_type: 'kubejs:dark_essence', amount: 10})
    e.recipes.mekanism.metallurgic_infusing('minecraft:wither_skeleton_skull', 'minecraft:skeleton_skull', {infuse_type: 'kubejs:dark_essence', amount: 10})
    
})
