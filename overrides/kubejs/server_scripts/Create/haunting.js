// priority: 0
console.info('[AMMONIUM@KUBEJS]: haunting.js loaded')

ServerEvents.recipes(e => {
    e.recipes.createHaunting('minecraft:egg', 'create:dough')
})
