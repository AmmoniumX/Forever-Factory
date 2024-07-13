// priority: 0
console.info('[AMMONIUM@KUBEJS]: energyOrb.js loaded')

ServerEvents.recipes(e => {
    e.recipes.powah.energizing('thermal:blizz_rod', 'kubejs:cryotheum_crystal', 90000)
	e.recipes.powah.energizing(Item.of('thermal:blizz_powder', 3), 'kubejs:cryotheum_crystal', 80000)
	e.recipes.powah.energizing(Item.of('minecraft:blaze_powder', 3), 'powah:crystal_blazing', 80000)
})
