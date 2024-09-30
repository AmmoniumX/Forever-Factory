// priority: 0
console.info('[AMMONIUM@KUBEJS]: oreProcessing.js loaded')

ServerEvents.recipes(e => {
    const metals = ['copper', 'zinc', 'iron', 'aluminum', 'tin', 'lead', 'nickel', 'silver', 'gold', 'osmium', 'uranium', 'rutile']
    const vanilla_metals = ['copper', 'iron', 'gold']
    const vanilla_gems = ['diamond', 'emerald', 'lapis', 'coal']
    const modded_metals = ['zinc', 'aluminum', 'tin', 'lead', 'nickel', 'silver', 'osmium', 'uranium']
    const native_dusts = ['redstone']

    metals.forEach(metal => {
        // Fluid to Ingots
        e.recipes.thermal.chiller(Item.of(`#forge:ingots/${metal}`, 1), [`thermal:chiller_ingot_cast`, Fluid.of(`emendatusenigmatica:${metal}`, 100)]).energy(200)
        // Ingots to fluids
        e.recipes.thermal.crucible(Fluid.of(`emendatusenigmatica:${metal}`, 100), `#forge:ingots/${metal}`).energy(200)
        // Dirty dust to dust
        e.recipes.thermal.pulverizer(Item.of(`emendatusenigmatica:${metal}_dust`).withChance(1.33), Item.of(`emendatusenigmatica:${metal}_dirty_dust`)).energy(800)
    })

    function altarCrumbling(input, output, aura, time) {
        e.custom({
            type: "naturesaura:altar",
            input: input,
            output: output,
            catalyst: {
                item: "naturesaura:crushing_catalyst"
            },
            aura: aura,
            time: time
        })

    }

    // Crumbling gems and dusts
    vanilla_gems.forEach(gem => {
        if (gem == 'coal') {
            altarCrumbling({ item: Item.of(`#forge:hardened/${gem}`).getId() }, { item: Item.of(`#forge:storage_blocks/${gem}`).getId(), count:12 }, 4500, 150)
        } else{
            altarCrumbling({ item: Item.of(`#forge:hardened/${gem}`).getId() }, { item: Item.of(`#forge:gems/${gem}`).getId(), count:48 }, 4500, 150)
        }
    })

    native_dusts.forEach(dust => {
        altarCrumbling({ item: Item.of(`#forge:hardened/${dust}`).getId() }, { item: Item.of(`#forge:dusts/${dust}`).getId(), count:48 }, 4500, 150)
    })

    altarCrumbling({ item: Item.of(`#forge:hardened/netherite`).getId() }, { item: 'minecraft:netherite_scrap', count:12 }, 4500, 150)

    // Hardened metals to dirty slurry
    metals.forEach(metal => {
        e.recipes.mekanism.dissolution({amount:6000, slurry:`emendatusenigmatica:dirty_${metal}`}, 
            {amount:1, gas:'mekanism:sulfuric_acid'}, `#forge:hardened/${metal}`)
    })

    const heavy_metals = ['lead', 'silver', 'gold', 'osmium', 'uranium', 'rutile']
    const light_metals = ['copper', 'nickel', 'zinc', 'iron', 'aluminum', 'tin']
    const prismatic = ['diamond', 'emerald', 'lapis', 'coal', 'redstone']

    let heavy_metals_hardened = []
    let light_metals_hardened = []
    let prismatic_hardened = []

    heavy_metals.forEach(metal => {
        heavy_metals_hardened.push(Item.of(`#forge:hardened/${metal}`).withChance(0.16))
    })

    light_metals.forEach(metal => {
        light_metals_hardened.push(Item.of(`#forge:hardened/${metal}`).withChance(0.16))
    })

    prismatic.forEach(metal => {
        prismatic_hardened.push(Item.of(`#forge:hardened/${metal}`).withChance(0.20))
    })
    prismatic_hardened.push(Item.of('#forge:hardened/netherite').withChance(0.05))

    // Crushing recipes
    e.recipes.create.crushing(heavy_metals_hardened, 'kubejs:heavy_primordial_stone')
    e.recipes.create.crushing(light_metals_hardened, 'kubejs:light_primordial_stone')
    e.recipes.create.crushing(prismatic_hardened, 'kubejs:prismatic_primordial_stone')
})
