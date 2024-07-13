// priority: 0
console.info('[AMMONIUM@KUBEJS]: filling.js loaded')

ServerEvents.recipes(e => {
    function bottling(output, inputs) {
        e.recipes.thermal.bottler(output, inputs)
        e.recipes.create.filling(output, inputs)
    }
    bottling('immersiveengineering:treated_wood_horizontal', ['#minecraft:planks', Fluid.of('immersiveengineering:creosote', 125)])
    bottling('immersiveengineering:treated_wood_horizontal', ['#minecraft:planks', Fluid.of('thermal:creosote', 125)])
    bottling('kubejs:cryotheum_cell', ['kubejs:subzero_cell', Fluid.of('kubejs:gelid_cryotheum', 500)])
    bottling(Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), ['naturesaura:bottle_two_the_rebottling', Fluid.of('kubejs:liquid_sunlight', 250)])
    bottling(Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'), ['naturesaura:bottle_two_the_rebottling', Fluid.of('kubejs:liquid_ghosts', 250)])
    bottling(Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), ['naturesaura:bottle_two_the_rebottling', Fluid.of('kubejs:liquid_darkness', 250)])

})
