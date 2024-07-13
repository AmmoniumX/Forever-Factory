// priority: 0
console.info('[AMMONIUM@KUBEJS]: powahEvents.js loaded')

PowahEvents.registerCoolants(e => {
    e.addFluid('kubejs:gelid_cryotheum', -50)
})

PowahEvents.registerMagmaticFluid(e => {
    e.add('kubejs:blazing_pyrotheum', 150000)
})