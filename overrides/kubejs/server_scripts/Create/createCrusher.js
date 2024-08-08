// priority: 0
console.info('[AMMONIUM@KUBEJS]: createCrusher.js loaded')

ServerEvents.recipes(e => {
    e.recipes.create.crushing([Item.of('minecraft:sand', 2), Item.of('immersiveengineering:dust_saltpeter').withChance(0.125)], '#forge:sandstone/colorless')
    e.recipes.create.crushing(['#forge:dusts/rutile', Item.of('#forge:dusts/rutile').withChance(0.25)], '#forge:raw_materials/rutile')
    e.recipes.create.milling(['ae2:certus_quartz_crystal', Item.of('ae2:certus_quartz_crystal').withChance(0.5), Item.of('ae2:certus_quartz_crystal', 2).withChance(0.25)], 'kubejs:certus_seed')
    e.recipes.create.crushing(['ae2:sky_dust', Item.of('ae2:sky_dust').withChance(0.25)], 'ae2:sky_stone_block')
    e.recipes.create.milling(['ae2:sky_dust', Item.of('minecraft:redstone', 2).withChance(0.5), Item.of("ae2:certus_quartz_dust", 2).withChance(0.5), Item.of("kubejs:integrated_circuit", 3).withChance(0.5)], 'kubejs:computing_core_burnt')
	e.recipes.create.milling([Item.of('minecraft:sand').withChance(0.33), Item.of('minecraft:flint').withChance(0.33)], 'minecraft:gravel')
})
