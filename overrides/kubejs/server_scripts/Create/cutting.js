// priority: 0
console.info('[AMMONIUM@KUBEJS]: cutting.js loaded')

ServerEvents.recipes(e => {
    e.recipes.create.cutting(Item.of('kubejs:integrated_circuit', 24), 'kubejs:packaged_integrated_circuits')
    e.recipes.create.cutting('kubejs:livingrock_effigy', 'botania:livingrock').processingTime(100)
})
