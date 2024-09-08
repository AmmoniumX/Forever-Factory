// priority: 0
console.info('[AMMONIUM@KUBEJS]: thermalPress.js loaded')

ServerEvents.recipes(e => {
    e.recipes.thermal.press(Item.of('kubejs:integrated_circuit', 24), ['kubejs:packaged_integrated_circuits', 'thermal:press_unpacking_die']).energy(800)
    e.recipes.thermal.press('kubejs:livingrock_effigy', ['botania:livingrock', 'kubejs:press_effigy_die']).energy(2000)
    e.recipes.thermal.press('kubejs:gear_redstone', ['4x #forge:ingots/redstone_ingot', 'thermal:press_gear_die']).energy(2400)
})
