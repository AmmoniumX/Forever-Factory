// priority: 0
console.info('[AMMONIUM@KUBEJS]: pressureChamber.js loaded')

ServerEvents.recipes(e => {
    /**
     * Creates a PneumaticCraft pressure chamber recipe
     *
     * @param {Array|string|Item} results - The result(s) of the recipe
     * @param {number} pressure - The pressure of the pressure chamber
     * @param {Array|string|Item} inputs - The input(s) of the recipe
     */
    function pressureChamber(results, pressure, inputs) {
        // Check if results and inputs are arrays or single objects
        let resultsArray = Array.isArray(results) ? results : [results]
        let inputsArray = Array.isArray(inputs) ? inputs : [inputs]
        resultsArray = resultsArray.map(result => typeof result === 'string' ? Item.of(result) : result)
        inputsArray = inputsArray.map(input => typeof input === 'string' ? Item.of(input) : input)
        let resultsJson = resultsArray.map(result => result.toJson())
        let inputsJson = inputsArray.map(input => {
            let json = input.toJson()
            let count = json.get("count")
            // If count>1 add the "pneumaticcraft:stacked_item" property
            if (count > 1) {
                json.addProperty("type", "pneumaticcraft:stacked_item")
            }
            return json
        })
        e.custom({
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": inputsJson,
            "pressure": pressure,
            "results": resultsJson
        })
    }
    
    pressureChamber(Item.of('pneumaticcraft:capacitor', 2), 1.0, 
        ['#forge:wires/gold', 'minecraft:redstone', 'pneumaticcraft:plastic']
    )
    pressureChamber(Item.of('pneumaticcraft:transistor', 2), 1.0, 
        ['#forge:wires/gold', '#forge:silicon', 'pneumaticcraft:plastic']
    )
    pressureChamber([Item.of('kubejs:compressed_mech', 4), Item.of('minecraft:bucket')],
        2.0,
        [Item.of('kubejs:basic_mech', 4), 'emendatusenigmatica:compressed_iron_gear',
            'kubejs:invar_rod', 'minecraft:lava_bucket']
    )
    pressureChamber(Item.of('kubejs:compressed_mech', 4),
        2.0,
        [Item.of('kubejs:basic_mech', 4), 'emendatusenigmatica:compressed_iron_gear',
            'kubejs:invar_rod', 'powah:crystal_blazing']
    )
    pressureChamber(Item.of('pneumaticcraft:empty_pcb', 3), 3.0,
        ['immersiveengineering:circuit_board', 'emendatusenigmatica:titanium_plate', Item.of('#forge:wires/electrum', 6)]
    )
})
