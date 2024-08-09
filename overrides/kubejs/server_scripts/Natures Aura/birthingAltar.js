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
    birthingAltar('minecraft:cow', ['minecraft:milk_bucket', 'minecraft:hay_block'], 10000, 50)
    birthingAltar('minecraft:pig', ['quark:carrot_crate', 'minecraft:bone'], 10000, 50)
    birthingAltar('minecraft:sheep', ['minecraft:white_wool', 'immersiveengineering:hemp_fabric'], 10000, 50)
    birthingAltar('minecraft:blaze', ['kubejs:awakening_spirit', 'kubejs:livingrock_effigy', 'minecraft:magma_block'], 10000, 50)
    birthingAltar('thermal:blizz', ['kubejs:awakening_spirit', 'kubejs:livingrock_effigy', 'minecraft:snow_block'], 10000, 50)
    birthingAltar('thermal:blitz', ['kubejs:awakening_spirit', 'kubejs:livingrock_effigy', 'minecraft:glowstone'], 10000, 50)
    birthingAltar('thermal:basalz', ['kubejs:awakening_spirit', 'kubejs:livingrock_effigy', 'minecraft:cobbled_deepslate'], 10000, 50)
    birthingAltar('minecraft:villager', ['naturesaura:birth_spirit', 'minecraft:bread', 'minecraft:emerald'], 10000, 50)
    birthingAltar('ars_nouveau:drygmy', ['naturesaura:birth_spirit', 'minecraft:dark_oak_sapling', 'minecraft:apple'], 10000, 50)
    birthingAltar('ars_nouveau:whirlisprig', ['naturesaura:birth_spirit', 'minecraft:oak_sapling', 'create:propeller'], 10000, 50)
    birthingAltar('ars_nouveau:starbuncle', ['naturesaura:birth_spirit', 'minecraft:sweet_berries', 'minecraft:white_dye'], 10000, 50)
})
