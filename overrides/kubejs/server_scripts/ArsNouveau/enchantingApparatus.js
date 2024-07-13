// priority: 0
console.info('[AMMONIUM@KUBEJS]: enchantingApparatus.js loaded')

ServerEvents.recipes(e => {
    e.custom({
            type: "ars_nouveau:enchanting_apparatus",
            keepNbtOfReagent: false,
            output: {
                count: 3,
                item: "kubejs:basilic_reagent"
            },
            pedestalItems: [
            {
                item: "ars_nouveau:earth_essence"
            },
            {
                item: "mekanism:enriched_redstone"
            },
            {
                item: "thermal:earth_charge"
            },
            {
                item: "thermal:earth_charge"
            },
            {
                item: "thermal:earth_charge"
            },
            {
                item: "thermal:earth_charge"
            }
        ],
        reagent: [
            {
                item: "botania:rune_earth"
            }
            ],
            sourceCost: 2000
      }
    )

    e.custom({
        "type": "ars_nouveau:enchantment",
        "enchantment": "minecraft:mending",
        "level": 1,
        "pedestalItems": [
          {
            "item": {
              "item": "ars_nouveau:conjuration_essence"
            }
          },
          {
            "item": {
              "tag": "forge:gems/diamond"
            }
          },
          {
            "item": {
              "tag": "forge:gems/diamond"
            }
          },
          {
            "item": {
              "tag": "forge:gems/diamond"
            }
          },
          {
            "item": {
              "tag": "forge:storage_blocks/source"
            }
          },
          {
            "item": {
              "tag": "forge:storage_blocks/source"
            }
          },
          {
            "item": {
              "tag": "forge:storage_blocks/lapis"
            }
          },
          {
            "item": {
              "tag": "forge:storage_blocks/lapis"
            }
          }
        ],
        "sourceCost": 2000
      }
    )
})
