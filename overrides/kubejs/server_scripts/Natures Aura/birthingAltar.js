// priority: 0
console.info('[AMMONIUM@KUBEJS]: birthingAltar.js loaded')

ServerEvents.recipes(e => {
    /**
     * Creates a Nature's Aura birthing altar recipe
     *
     * @param {string} entity - The resulting entity spawned
     * @param {Array.<string>} ingredients - A list of ingredient item ids
     * @param {string} aura - The amount of aura to be consumed
     * @param {string} time - The time to complete in ticks
     */
    function birthingAltar(entity, ingredients, aura, time) {
        // Transform the list of ingredient names into a list of objects
        const formattedIngredients = ingredients.map(item => ({ item: item }));
    
        // Construct the JSON object
        e.custom({
            type: "naturesaura:animal_spawner",
            ingredients: formattedIngredients,
            entity: entity,
            aura: aura,
            time: time
        });
    }
    birthingAltar('minecraft:blaze', ['kubejs:awakening_spirit', 'kubejs:livingrock_effigy', 'minecraft:magma_block'], 15000, 50)
    birthingAltar('thermal:blizz', ['kubejs:awakening_spirit', 'kubejs:livingrock_effigy', 'minecraft:snow_block'], 15000, 50)
    birthingAltar('thermal:blitz', ['kubejs:awakening_spirit', 'kubejs:livingrock_effigy', 'minecraft:glowstone'], 15000, 50)
    birthingAltar('thermal:basalz', ['kubejs:awakening_spirit', 'kubejs:livingrock_effigy', 'minecraft:cobbled_deepslate'], 15000, 50)
})
