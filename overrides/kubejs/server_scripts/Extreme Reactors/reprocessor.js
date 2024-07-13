// priority: 0
console.info('[AMMONIUM@KUBEJS]: reprocessor.js loaded')

ServerEvents.recipes(e => {
    e.custom({
        type: "bigreactors:reprocessor",
        waste: {
          ingredient: {
            item: "powah:crystal_niotic"
          },
          count: 1
        },
        fluid: {
          fluid: {
            fluid: "bigreactors:rossinite",
            count: 2000
          }
        },
        result: {
          item: "bigreactors:insanite_ingot"
        }
      }
    )
})
