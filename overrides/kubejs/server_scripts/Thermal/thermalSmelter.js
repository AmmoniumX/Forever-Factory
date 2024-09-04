// priority: 0
console.info('[AMMONIUM@KUBEJS]: thermalSmelter.js loaded')

ServerEvents.recipes(e => {
    e.recipes.thermal.smelter('thermal:rf_coil', ['#forge:rods/gold', '2x minecraft:redstone']).energy(800)
    e.recipes.thermal.smelter('immersiveengineering:circuit_board', ['immersiveengineering:plate_duroplast', '#forge:plates/copper'])
    e.recipes.thermal.smelter('extendedcrafting:redstone_ingot', ['#forge:ingots/steel', 'minecraft:redstone_block']).energy(2000)
    e.recipes.thermal.smelter('extendedcrafting:black_iron_ingot', ['#forge:ingots/steel', 'minecraft:coal_block']).energy(2000)
    e.recipes.thermal.smelter('mekanism:enriched_carbon', ['minecraft:coal_block', 'minecraft:blaze_powder']).energy(1000)
    e.recipes.thermal.smelter('mekanism:enriched_diamond', ['minecraft:diamond_block', 'thermal:blizz_powder']).energy(1000)
    e.recipes.thermal.smelter('mekanism:enriched_redstone', ['minecraft:redstone_block', 'thermal:basalz_powder']).energy(1000)
    e.recipes.thermal.smelter('mekanism:enriched_refined_obsidian', ['mekanism:dust_refined_obsidian', 'thermal:blitz_powder']).energy(1000)
    e.recipes.thermal.smelter('mekanism:enriched_gold', ['minecraft:gold_block', 'thermal:blitz_powder']).energy(1000)
    e.recipes.thermal.smelter('extendedcrafting:ender_ingot', ['thermal:ender_pearl_dust', '#forge:ingots/steel', 'ae2:fluix_dust']).energy(1200)
    const materials = ['copper', 'zinc', 'iron', 'aluminum', 'tin', 'lead', 'nickel', 
        'silver', 'gold', 'osmium', 'uranium', 'diamond', 'emerald', 'lapis', 
        'coal', 'redstone'] // Excluding rutile
    materials.forEach(material => {
        e.recipes.thermal.smelter(`kubejs:perfect_${material}`, [`kubejs:hardened_${material}`, `32x #forge:storage_blocks/${material}`]).energy(6000)
    })
    e.recipes.thermal.smelter('kubejs:perfect_titanium', ['kubejs:hardened_rutile', '32x #forge:storage_blocks/titanium']).energy(6000)

})
