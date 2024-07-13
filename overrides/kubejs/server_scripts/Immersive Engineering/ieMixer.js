// priority: 0
console.info('[AMMONIUM@KUBEJS]: ieMixer.js loaded')

ServerEvents.recipes(e => {
    e.custom({
        "type": "immersiveengineering:mixer",
        "energy": 1600,
        "fluid": {
            "amount": 250,
            "tag": "pneumaticcraft:plastic"
        },
        "inputs": [
            {
                item: "minecraft:rotten_flesh"
            }
        ],
        "result": {
            "amount": 250,
            "fluid": "pneumaticcraft:etching_acid"
        }
    })
})
