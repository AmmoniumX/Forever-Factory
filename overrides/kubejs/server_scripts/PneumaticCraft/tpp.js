// priority: 0
console.info('[AMMONIUM@KUBEJS]: tpp.js loaded')

ServerEvents.recipes(e => {
    e.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
          type: "pneumaticcraft:fluid",
          amount: 100,
          fluid: "kubejs:dense_matter_solution"
        },
        fluid_output: {
          amount: 2,
          fluid: "kubejs:liquid_neutronium"
        },
        pressure: 7.0,
        temperature: {
          min_temp: 573
        }
      })
})
