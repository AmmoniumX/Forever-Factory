// priority: 0
console.info('[AMMONIUM@KUBEJS]: chiller.js loaded')

ServerEvents.recipes(e => {
    e.recipes.thermal.chiller('kubejs:ingot_neutronium', ['thermal:chiller_ingot_cast', Fluid.of('kubejs:liquid_neutronium', 100)])
    e.recipes.thermal.chiller('kubejs:plate_neutronium', ['kubejs:chiller_plate_cast', Fluid.of('kubejs:liquid_neutronium', 100)])
    e.recipes.thermal.chiller('kubejs:gear_neutronium', ['thermal:press_gear_die', Fluid.of('kubejs:liquid_neutronium', 400)])
    e.recipes.thermal.chiller('pneumaticcraft:plastic', ['thermal:chiller_ingot_cast', Fluid.of('pneumaticcraft:plastic', 500)])
})
