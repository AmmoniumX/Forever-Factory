// priority: 0
console.info('[AMMONIUM@KUBEJS]: customs.js loaded')

ServerEvents.recipes(e => {
    // e.custom({
    //     type: "createaddition:liquid_burning",
    //     input: {
    //         "fluid": "thermal:refined_fuel",
    //         "amount": 1000
    //     },
    //     "burnTime": 5900,
    //     "superheated": false
    // })
    e.custom({
        type: "thermal:crystallizer",
        ingredients: [
          {
            fluid: "immersiveengineering:ethanol",
            amount: 250
          },
          {
            item: "minecraft:amethyst_shard"
          }
        ],
        result: [
          {
            item: "minecraft:amethyst_cluster"
          }
        ],
        energy: 16000
    })
    e.custom({
        type: "thermal:crystallizer",
        ingredients: [
          {
            fluid: "pneumaticcraft:ethanol",
            amount: 250
          },
          {
            item: "minecraft:amethyst_shard"
          }
        ],
        result: [
          {
            item: "minecraft:amethyst_cluster"
          }
        ],
        energy: 16000
    })
    e.custom({
        type: "thermal:crystallizer",
        ingredients: [
          {
            fluid: "mekanism:ethene",
            amount: 250
          },
          {
            item: "minecraft:amethyst_shard"
          }
        ],
        result: [
          {
            item: "minecraft:amethyst_cluster"
          }
        ],
        energy: 16000
    })
    
    e.recipes.thermal.rock_gen('kubejs:dense_rock', Blocks.BEDROCK, Block.getBlock('naturesaura:generator_limit_remover'))

    e.custom({
      type:"immersiveengineering:blast_furnace",
      input:{
        tag:"forge:ingots/iron"
      },
      result:{
        tag:"forge:ingots/steel"
      },
      slag:{
        tag:"forge:slag"
      },
      time:600
    })

    e.custom({
      "type":"immersiveengineering:coke_oven",
      "creosote":375,
      "input":{"item":"ars_nouveau:red_archwood_log"},
      "result":{"item":"minecraft:charcoal"},
      "time":450}
    )
})
