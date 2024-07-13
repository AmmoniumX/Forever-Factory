// priority: 0
console.info('[AMMONIUM@KUBEJS]: compacting.js loaded')

ServerEvents.recipes(e => {
    e.recipes.create.compacting('thermal:rubber', [Fluid.of(('thermal:resin'), 100)])
    e.recipes.create.pressing('emendatusenigmatica:compressed_iron_plate', 'pneumaticcraft:ingot_iron_compressed')
})
