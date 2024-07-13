// priority: 0
console.info('[AMMONIUM@KUBEJS]: extendedcrafting.js loaded')

ServerEvents.recipes(e => {
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "key": {
          "R": {
            "item": "extendedcrafting:redstone_ingot"
          },
          "I": {
            "item": "kubejs:integrated_circuit"
          },
          "C": {
            "item": "kubejs:computing_core"
          },
          "S": {
            "item": "ae2:silicon"
          },
          "P": {
            "item": "pneumaticcraft:printed_circuit_board"
          }
        },
        "pattern": [
          "RIRIR",
          "ICSCI",
          "RSPSR",
          "ICSCI",
          "RIRIR"
        ],
        "result": {
          "item": "kubejs:sbc",
          "count": 2
        }
      })
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "key": {
          "A": {
            "item": "mekanism:alloy_reinforced"
          },
          "B": {
            "item": "botania:manasteel_ingot"
          },
          "C": {
            "item": "bigreactors:blutonium_ingot"
          },
          "D": {
            "item": "kubejs:cryotheum_cell"
          },
          "E": {
            "item": "kubejs:sbc"
          },
          "F": {
            "item": "extendedcrafting:ender_ingot"
          },
          "G": {
            "item": "mekanism:elite_control_circuit"
          },
          "H": {
            "item": "botania:rune_winter"
          },
          "I": {
            "item": "thermal:enderium_ingot"
          }
        },
        "pattern": [
          "ABBBA",
          "CDEDF",
          "CGHGF",
          "CDEDF",
          "AIIIA"
        ],
        "result": {
          "item": "kubejs:cryo_mainframe",
          "count": 1
        }
      })
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "key": {
          "A": {
            "item": "createchromaticreturn:shadow_steel"
          },
          "B": {
            "item": "createchromaticreturn:refined_radiance"
          },
          "C": {
            "item": "kubejs:perfect_diamond"
          },
          "D": {
            "item": "kubejs:perfect_gold"
          },
          "E": {
            "item": "kubejs:perfect_redstone"
          },
          "F": {
            "item": "kubejs:perfect_lapis"
          },
          "G": {
            "item": "kubejs:perfect_silver"
          },
          "H": {
            "item": "kubejs:perfect_copper"
          },
          "I": {
            "item": "kubejs:perfect_iron"
          },
          "J": {
            "item": "kubejs:perfect_coal"
          },
          "K": {
            "item": "kubejs:perfect_emerald"
          }
        },
        "pattern": [
          "   A   ",
          "  ACA  ",
          " ADBEA ",
          "AFBGBHA",
          " AIBJA ",
          "  AKA  ",
          "   A   "
        ],
        "result": {
          "item": "kubejs:infinity_catalyst",
          "count": 1
        }
      })
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "key": {
          "A": {
            "item": "create:sturdy_sheet"
          },
          "B": {
            "item": "kubejs:gear_neutronium"
          },
          "C": {
            "item": "createchromaticreturn:durasteel_ingot"
          },
          "D": {
            "item": "createchromaticreturn:multiplite_ingot"
          },
          "E": {
            "item": "kubejs:basic_mech"
          },
          "F": {
            "item": "pneumaticcraft:printed_circuit_board"
          },
          "G": {
            "item": "kubejs:cryo_mainframe"
          },
          "H": {
            "item": "immersiveengineering:component_electronic"
          },
          "I": {
            "item": "kubejs:compressed_mech"
          },
          "J": {
            "item": "kubejs:sbc"
          },
          "K": {
            "item": "kubejs:infinity_catalyst"
          },
          "L": {
            "item": "createchromaticreturn:silkstrum"
          }
        },
        "pattern": [
          "AAABAAA",
          "ACDEDCA",
          "ALFGHLA",
          "BIJKJIB",
          "ALHGFLA",
          "ACDEDCA",
          "AAABAAA"
        ],
        "result": {
          "item": "kubejs:sentient_mainframe",
          "count": 1
        }
      })
})
