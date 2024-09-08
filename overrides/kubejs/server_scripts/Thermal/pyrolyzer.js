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
        "item": "kubejs:juiced_log"
      },
      "result": [
        {
          "item": "mekanism:dust_charcoal"
        },
        {
          "fluid": "immersiveengineering:creosote",
          "amount": 565
        }
      ],
      "experience": 0.15
    })

    e.custom({
      "type": "thermal:pyrolyzer",
      "ingredient": {
        "item": "minecraft:coal"
      },
      "result": [
        {
          "item": "immersiveengineering:coal_coke"
        },
        {
          "item": "thermal:tar",
          "chance": 0.25
        },
        {
          "fluid": "immersiveengineering:creosote",
          "amount": 250
        }
      ],
      "experience": 0.15
    })
})
