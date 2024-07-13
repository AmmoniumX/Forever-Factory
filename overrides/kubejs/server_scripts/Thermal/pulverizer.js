// priority: 0
console.info('[AMMONIUM@KUBEJS]: pulverizer.js loaded')

ServerEvents.recipes(e => {
    // e.recipes.thermal.pulverizer(Item.of('kubejs:rutile_dust').withChance(1.25), 'kubejs:raw_rutile')
    e.recipes.thermal.pulverizer(Item.of('thermal:apatite_dust').withChance(1.5), 'thermal:apatite')
    e.recipes.thermal.pulverizer(['ae2:certus_quartz_dust', Item.of('ae2:certus_quartz_dust', 2).withChance(0.5)], '#ae2:all_certus_quartz').energy(1200)
})
