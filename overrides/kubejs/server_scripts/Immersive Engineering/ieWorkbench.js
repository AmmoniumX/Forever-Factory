// priority: 0
console.info('[AMMONIUM@KUBEJS]: ieWorkbench.js loaded')

ServerEvents.recipes(e => {
    /**
     * Creates a Immersive Engineering workbench recipe
     *
     * @param {string|Item} result - The result of the recipe.
     * @param {string} category - The category of the recipe.
     * @param {Array|string|Item} inputs - The input(s) of the recipe./
     */
    function workbench(result, category, inputs) {
        // Check if inputs is an array or a single object
        let inputsArray = Array.isArray(inputs) ? inputs : [inputs];
        inputsArray = inputsArray.map(input => typeof input === 'string' ? Item.of(input) : input);
        let inputsJson = inputsArray.map(input => input.toJson());
        let resultJson = typeof result === 'string' ? Item.of(result).toJson() : result.toJson();
    
        e.custom({
            "type": "immersiveengineering:blueprint",
            "category": category,
            "inputs": inputsJson,
            "result": resultJson
        })
    }
    
    workbench('immersiveengineering:component_electronic', 'components',
        ['kubejs:compressed_mech', 'pneumaticcraft:capacitor', 'pneumaticcraft:transistor', Item.of('#forge:wires/copper', 2)]
    )
    workbench('thermal:rf_coil', 'components', [Item.of('minecraft:redstone', 4), 'emendatusenigmatica:gold_rod'])
    
})
