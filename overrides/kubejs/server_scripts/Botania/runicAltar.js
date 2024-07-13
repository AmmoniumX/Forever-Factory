// priority: 0
console.info('[AMMONIUM@KUBEJS]: runicAltar.js loaded')

ServerEvents.recipes(e => {
    e.recipes.botania.runic_altar('2x botania:rune_water', ['botania:mana_powder', 
        'botania:manasteel_ingot', 'minecraft:bone_meal', 'minecraft:sugar_cane', 
        'ars_nouveau:water_essence'], 5200)

    e.recipes.botania.runic_altar('2x botania:rune_earth', ['botania:mana_powder',
        'botania:manasteel_ingot', 'minecraft:stone', 'minecraft:coal_block', 
        '#forge:mushrooms', 'ars_nouveau:earth_essence'], 5200)

    e.recipes.botania.runic_altar('2x botania:rune_fire', ['botania:mana_powder',
        'botania:manasteel_ingot', 'minecraft:nether_brick', 'minecraft:gunpowder',
        'minecraft:nether_wart', 'ars_nouveau:fire_essence'], 5200)

    e.recipes.botania.runic_altar('2x botania:rune_air', ['botania:mana_powder',
        'botania:manasteel_ingot', 'minecraft:feather', 'minecraft:string', 
        'ars_nouveau:air_essence'], 5200)
})
