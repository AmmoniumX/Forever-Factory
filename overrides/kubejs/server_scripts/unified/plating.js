// priority: 0
console.info('[AMMONIUM@KUBEJS]: plating.js loaded')

ServerEvents.recipes(e => {
    /**
     * Creates a Immersive Engineering plating recipe
     *
     * @param {string|Item} result - The result of the recipe.
     * @param {string|Item} inputs - The input of the recipe.
     */
    function immersivePressing(result, input) {
        let resultIsString = typeof result === 'string';
        let resultItem = resultIsString ? Item.of(result) : result;
        let inputIsString = typeof input === 'string';
        let inputItem = inputIsString ? Item.of(input) : input;
        e.custom({
            "type": "immersiveengineering:metal_press",
            "energy": 2400,
            "input": inputItem.toJson(),
            "mold": "immersiveengineering:mold_plate",
            "result": resultItem.toJson()
        })
    }

    function allPressing(result, input) {
        immersivePressing(result, input);
        e.recipes.create.pressing(result, input);
        e.recipes.thermal.press(result, input);
        e.shapeless(result, [input, 'emendatusenigmatica:enigmatic_hammer']
    ).damageIngredient(Item.of('emendatusenigmatica:enigmatic_hammer'))
    }
    
    allPressing('emendatusenigmatica:osmium_plate', 'mekanism:ingot_osmium')
    allPressing('emendatusenigmatica:compressed_iron_plate', 'emendatusenigmatica:compressed_iron_ingot')
    allPressing('emendatusenigmatica:titanium_plate', 'emendatusenigmatica:titanium_ingot')
    allPressing('thermal:rose_gold_plate', 'thermal:rose_gold_ingot')
    allPressing('thermal:netherite_plate', 'minecraft:netherite_ingot')
    allPressing('thermal:signalum_plate', 'thermal:signalum_ingot')
    allPressing('thermal:lumium_plate', 'thermal:lumium_ingot')
    allPressing('thermal:enderium_plate', 'thermal:enderium_ingot')
    allPressing('thermal:tin_plate', 'thermal:tin_ingot')
    allPressing('thermal:bronze_plate', 'thermal:bronze_ingot')
    allPressing('thermal:invar_plate', 'thermal:invar_ingot')
    
})
