// priority: 0
console.info('[AMMONIUM@KUBEJS]: pureDaisy.js loaded')

ServerEvents.recipes(e => {
    e.recipes.botania.pure_daisy('botania:livingrock', 'pneumaticcraft:reinforced_stone')
    e.recipes.botania.pure_daisy('botania:livingwood_log', 'immersiveengineering:treated_wood_horizontal')
})
