// priority: 0
console.info('[AMMONIUM@KUBEJS]: smelting.js loaded')

ServerEvents.recipes(e => {
    e.smelting('minecraft:leather', 'immersiveengineering:hemp_fabric')
    e.smelting('ae2:silicon', 'minecraft:quartz')
})
