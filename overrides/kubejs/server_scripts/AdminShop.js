// priority: 0
console.info('[AMMONIUM@KUBEJS]: AdminShop.js loaded')

ServerEvents.recipes(e => {

    // Remove default recipes
    e.remove({ id: 'adminshop:example_buy_item'})
    e.remove({ id: 'adminshop:example_sell_item'})
    e.remove({ id: 'adminshop:example_permits'})
    e.remove({ id: 'adminshop:example_buy_fluid'})
    e.remove({ id: 'adminshop:example_sell_fluid'})
    e.remove({ id: 'adminshop:example_buy_nbt'})
    e.remove({ id: 'adminshop:example_sell_nbt'})
    e.remove({ id: 'adminshop:example_sell_item_tag'})

    let sellCounter = 0
    let buyCounter = 0

    function sellItem(item, count, price, permit) {
        let recipe = {
            "type": "adminshop:item_selling",
            "price": price,
            "input": {
                "item": {
                    "item": item,
                    "count": count
                },
            }
        }
        if (permit !== undefined && permit !== null && permit !== "") {
            recipe["permit"] = permit
        }
        e.custom(recipe).id(`foreverfactory:sell_${sellCounter++}`)
    }

    function sellItemNBT(item, count, price, nbt, permit) {
        let recipe = {
            "type": "adminshop:item_selling",
            "price": price,
            "input": {
                "item": {
                    "item": item,
                    "count": count,
                    "nbt": nbt
                },
            }
        }
        if (permit !== undefined && permit !== null && permit !== "") {
            recipe["permit"] = permit
        }
        e.custom(recipe).id(`foreverfactory:sell_${sellCounter++}`)
    }

    function sellTag(tag, count, price, permit) {
        let recipe = {
            "type": "adminshop:item_selling",
            "price": price,
            "input": {
                "tag": {
                    "tag": tag,
                    "count": count
                },
            }
        }
        if (permit !== undefined && permit !== null && permit !== "") {
            recipe["permit"] = permit
        }
        e.custom(recipe).id(`foreverfactory:sell_${sellCounter++}`)
    }

    function sellFluid(fluid, amount, price, permit) {
        let recipe = {
            "type": "adminshop:fluid_selling",
            "price": price,
            "result": {
                "fluid": fluid,
                "amount": amount
            }
        }
        if (permit !== undefined && permit !== null && permit !== "") {
            recipe["permit"] = permit
        }
        e.custom(recipe).id(`foreverfactory:sell_${sellCounter++}`)
    }

    function buyItem(item, count, price, permit) {
        let recipe = {
            "type": "adminshop:item_buying",
            "price": price,
            "result": {
                "item": item,
                "count": count
            }
        }
        if (permit !== undefined && permit !== null && permit !== "") {
            recipe["permit"] = permit
        }
        e.custom(recipe).id(`foreverfactory:buy_${buyCounter++}`)
    }

    function buyItemNBT(item, count, price, nbt, permit) {
        let recipe = {
            "type": "adminshop:item_buying",
            "price": price,
            "result": {
                "item": item,
                "count": count,
                "nbt": nbt
            }
        }
        if (permit !== undefined && permit !== null && permit !== "") {
            recipe["permit"] = permit
        }
        e.custom(recipe).id(`foreverfactory:buy_${buyCounter++}`)
    }

    function buyFluid(fluid, amount, price, permit) {
        let recipe = {
            "type": "adminshop:fluid_buying",
            "price": price,
            "result": {
                "fluid": fluid,
                "amount": amount
            }
        }
        if (permit !== undefined && permit !== null && permit !== "") {
            recipe["permit"] = permit
        }
        e.custom(recipe).id(`foreverfactory:buy_${buyCounter++}`)
    }

    const OIL_PERMIT = "oil"
    const MAGIC_PERMIT = "magic"
    const ENGINEERING_PERMIT = "engineering"
    const EXPLOSIVES_PERMIT = "explosives"

    buyItem('minecraft:grass_block', 16, 160)
    buyItem('minecraft:oak_sapling', 4, 100)
    buyItem('minecraft:spruce_sapling', 4, 100)
    buyItem('minecraft:birch_sapling', 4, 100)
    buyItem('minecraft:jungle_sapling', 4, 100)
    buyItem('minecraft:acacia_sapling', 4, 100)
    buyItem('minecraft:dark_oak_sapling', 4, 100)
    buyItem('integrateddynamics:menril_sapling', 4, 100)
    buyItem('minecraft:oak_log', 16, 1200)
    buyItem('minecraft:andesite', 16, 720)
    buyItem('minecraft:clay_ball', 16, 1200)
    buyItem('minecraft:brown_mushroom', 1, 75)
    buyItem('minecraft:red_mushroom', 1, 75)
    buyItem('minecraft:kelp', 1, 300)
    buyItem('minecraft:sugar_cane', 1, 300)
    buyItem('immersiveengineering:seed', 1, 300)
    buyItem('minecraft:bamboo', 1, 300)
    buyItem('minecraft:carrot', 1, 150)
    buyItem('minecraft:potato', 1, 150)
    buyItem('minecraft:wheat_seeds', 1, 150)
    buyItem('minecraft:beetroot_seeds', 1, 150)
    buyItem('minecraft:melon_seeds', 1, 150)
    buyItem('minecraft:pumpkin_seeds', 1, 150)
    buyItem('minecraft:sweet_berries', 1, 150)
    buyItem('minecraft:bread', 4, 500)
    buyFluid('minecraft:milk', 1000, 1000)
    buyItem('minecraft:bone', 1, 100)
    buyItem('minecraft:obsidian', 16, 4000)
    buyItem('minecraft:raw_copper', 16, 160)
    buyItem('emendatusenigmatica:raw_zinc', 16, 320)
    buyItem('minecraft:raw_iron', 16, 480)
    buyItem('emendatusenigmatica:raw_aluminum', 16, 640)
    buyItem('emendatusenigmatica:raw_tin', 16, 800)
    buyItem('emendatusenigmatica:raw_lead', 16, 960)
    buyItem('emendatusenigmatica:raw_nickel', 16, 1120)
    buyItem('emendatusenigmatica:raw_silver', 16, 1280)
    buyItem('minecraft:raw_gold', 16, 1440)
    buyItem('emendatusenigmatica:raw_rutile', 16, 1600)
    buyItem('emendatusenigmatica:raw_osmium', 16, 1760)
    buyItem('emendatusenigmatica:raw_uranium', 16, 1920)
    buyItem('minecraft:coal_ore', 16, 800)
    buyItem('minecraft:redstone_ore', 16, 5760)
    buyItem('minecraft:emerald_ore', 16, 14400)
    buyItem('minecraft:lapis_ore', 16, 4000)
    buyItem('minecraft:diamond_ore', 16, 12800)
    buyItem('minecraft:ancient_debris', 16, 64000)
    buyItem('ae2:tiny_tnt', 1, 300, EXPLOSIVES_PERMIT)
    buyFluid('pneumaticcraft:oil', 1000, 5000, OIL_PERMIT)
    buyItem('kubejs:oil_clump', 8, 4000, OIL_PERMIT)
    buyItem('minecraft:soul_campfire', 1, 500)
    buyItem('ae2:calculation_processor_press', 1, 200000)
    buyItem('ae2:engineering_processor_press', 1, 200000)
    buyItem('ae2:logic_processor_press', 1, 200000)
    buyItem('ae2:silicon_press', 1, 200000)
    buyItem('minecraft:amethyst_cluster', 1, 250000)
    buyItem('kubejs:certus_seed', 1, 250000)
    buyItem('ae2:sky_stone_block', 1, 15000)
    buyItem('botania:fertilizer', 8, 35000, MAGIC_PERMIT)
    buyItem('naturesaura:gold_fiber', 8, 35000, MAGIC_PERMIT)
    buyItem('ars_nouveau:red_archwood_sapling', 4, 2000, MAGIC_PERMIT)
    buyItem('ars_nouveau:blue_archwood_sapling', 4, 2000, MAGIC_PERMIT)
    buyItem('ars_nouveau:green_archwood_sapling', 4, 2000, MAGIC_PERMIT)
    buyItem('ars_nouveau:purple_archwood_sapling', 4, 2000, MAGIC_PERMIT)
    buyItemNBT('immersiveengineering:blueprint', 1, 1000000, 
        '{blueprint:\"electrode\", display:{Name:\'{\"text\":\"Blueprint: Arc Furnace Electrodes\", \"italic\":false}\'}}'
    , ENGINEERING_PERMIT)
    buyItemNBT('immersiveengineering:graphite_electrode', 1, 1000000000,
        '{Unbreakable:1b, display:{Name:\'{\"text\":\"Industrial-Grade Graphite Electrode\", \"italic\":false, \"color\":\"yellow\"}\'}}'
    , ENGINEERING_PERMIT)

    sellTag('minecraft:logs', 16, 800)
    sellItem('kubejs:basic_mech', 4, 1000)
    sellItem('kubejs:compressed_mech', 4, 5000)
    sellItem('immersiveengineering:component_electronic', 4, 25000)
    sellItem('pneumaticcraft:printed_circuit_board', 4, 125000)
    sellItem('kubejs:sbc', 1, 156250)
    sellItem('kubejs:cryo_mainframe', 1, 781250)
    sellItem('kubejs:sentient_mainframe', 1, 12500000)

    // Currency
    buyItem('thermal:copper_coin', 1, 1)
    sellItem('thermal:copper_coin', 1, 1)
    
    buyItem('thermal:tin_coin', 1, 8)
    sellItem('thermal:tin_coin', 1, 8)
    
    buyItem('thermal:iron_coin', 1, 64)
    sellItem('thermal:iron_coin', 1, 64)

    buyItem('thermal:lead_coin', 1, 512)
    sellItem('thermal:lead_coin', 1, 512)

    buyItem('thermal:nickel_coin', 1, 4096)
    sellItem('thermal:nickel_coin', 1, 4096)

    buyItem('thermal:silver_coin', 1, 32768)
    sellItem('thermal:silver_coin', 1, 32768)

    buyItem('thermal:gold_coin', 1, 262144)
    sellItem('thermal:gold_coin', 1, 262144)

})