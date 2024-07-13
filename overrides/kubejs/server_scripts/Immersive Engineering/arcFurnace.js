// priority: 0
console.info('[AMMONIUM@KUBEJS]: arcFurnace.js loaded')

ServerEvents.recipes(e => {
    e.custom({
        type: "immersiveengineering:arc_furnace",
        additives: [
            {
                tag: "forge:dusts/hop_graphite"
            }
        ],
        energy: 51200,
        input: {
            base_ingredient: {
                tag: "forge:dusts/rutile"
            },
            count: 8
        },
        results: [
            {
                base_ingredient: {
                    tag: "forge:ingots/titanium"
                },
                count: 8
            }
        ],
        time: 100
    })
})
