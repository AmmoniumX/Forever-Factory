// priority: 0
console.info('[AMMONIUM@KUBEJS]: fanBehind.js loaded')

ServerEvents.recipes(e => {
    e.recipes.create.splashing(Item.of('minecraft:quartz', 4).withChance(0.12), 'minecraft:soul_sand')
    e.recipes.create.splashing('minecraft:flint', 'minecraft:gravel')
    e.recipes.create.splashing([Item.of('ae2:flawless_budding_quartz').withChance(0.05), Item.of('ae2:certus_quartz_crystal', 8).withChance(0.80)], 'ae2:flawed_budding_quartz')
})
