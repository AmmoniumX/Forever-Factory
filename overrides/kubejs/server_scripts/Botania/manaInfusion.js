// priority: 0
console.info('[AMMONIUM@KUBEJS]: manaInfusion.js loaded')

ServerEvents.recipes(e => {
    e.recipes.botania.mana_infusion('kubejs:dense_rock_mana', 'kubejs:dense_rock', 10000)
    e.recipes.botania.mana_infusion('minecraft:ender_pearl', 'minecraft:snowball', 3000, 'botania:alchemy_catalyst')
})
