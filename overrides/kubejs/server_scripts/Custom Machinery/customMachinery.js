// priority: 0
console.info('[AMMONIUM@KUBEJS]: customMachinery.js loaded')

ServerEvents.recipes(e => {
  e.recipes.custommachinery.custom_machine("custommachines:fluid_combiner", 100)
  .requireFluid(Fluid.of("emendatusenigmatica:gold", 100))
  .requireFluid(Fluid.of("emendatusenigmatica:lead", 100))
  .requireFluid(Fluid.of("emendatusenigmatica:osmium", 100))
  .requireEnergyPerTick(200)
  .produceFluid(Fluid.of("kubejs:dense_matter_solution", 100))
})
