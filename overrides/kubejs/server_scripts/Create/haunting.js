// priority: 0
console.info('[AMMONIUM@KUBEJS]: haunting.js loaded')

ServerEvents.recipes(e => {
    e.recipes.createHaunting('minecraft:egg', 'create:dough')
    e.recipes.createHaunting('projectred_core:electrotine_dust', '#forge:dusts/redstone')
})
