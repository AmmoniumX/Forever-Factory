// priority: 0
console.info('[AMMONIUM@KUBEJS]: pyrolyzer.js loaded')

ServerEvents.recipes(e => {
    e.custom({
        "type": "thermal:pyrolyzer",
        "ingredient": {
          "tag": "minecraft:logs"
        },
        "result": [
          {
            "item": "minecraft:charcoal"
          },
          {
            "fluid": "immersiveengineering:creosote",
            "amount": 375
          }
        ],
        "experience": 0.15
      })

      e.custom({
        "type": "thermal:pyrolyzer",
        "ingredient": {
          "item": "ars_nouveau:red_archwood_log"
        },
        "result": [
          {
            "item": "minecraft:charcoal"
          },
          {
            "fluid": "immersiveengineering:creosote",
            "amount": 565
          }
        ],
        "experience": 0.15
      })
})
