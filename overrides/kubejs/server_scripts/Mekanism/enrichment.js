// priority: 0
console.info('[AMMONIUM@KUBEJS]: enrichment.js loaded')

ServerEvents.recipes(e => {
    e.recipes.mekanism.enriching(Item.of('#forge:dusts/rutile', 4), Item.of('#forge:raw_materials/rutile', 3))
})
