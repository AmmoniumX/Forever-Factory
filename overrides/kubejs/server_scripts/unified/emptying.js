// priority: 0
console.info('[AMMONIUM@KUBEJS]: emptying.js loaded')

ServerEvents.recipes(e => {
    e.recipes.create.mixing(Fluid.of('pneumaticcraft:oil', 500), 'kubejs:oil_clump').heated()
    e.recipes.thermal.crucible(Fluid.of('pneumaticcraft:oil', 500), 'kubejs:oil_clump').energy(800)
    e.recipes.thermal.crucible(Fluid.of('kubejs:primordial_soup', 1500), 'kubejs:primordial_stone').energy(200)
    e.recipes.thermal.crucible(Fluid.of('kubejs:gelid_cryotheum', 250), 'kubejs:cryotheum_crystal').energy(1200)
    e.recipes.thermal.crucible(Fluid.of('kubejs:blazing_pyrotheum', 250), 'powah:crystal_blazing').energy(1200)

    e.recipes.create.emptying([Fluid.of('kubejs:liquid_sunlight', 250), 'naturesaura:bottle_two_the_rebottling'], Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}').strongNBT())
    e.recipes.create.emptying([Fluid.of('kubejs:liquid_ghosts', 250), 'naturesaura:bottle_two_the_rebottling'], Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}').strongNBT())
    e.recipes.create.emptying([Fluid.of('kubejs:liquid_darkness', 250), 'naturesaura:bottle_two_the_rebottling'], Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}').strongNBT())
})
