// priority: 0
console.info('[AMMONIUM@KUBEJS]: ieCrusher.js loaded')

ServerEvents.recipes(e => {
    e.custom({
        type: "immersiveengineering:crusher",
        energy: 6000,
        input: {
            tag: "forge:raw_materials/rutile"
        },
        result: {
            tag: "forge:dusts/rutile"
        },
        secondaries: [
            {
                chance: 0.33333334,
                output: {
                    tag: "forge:dusts/rutile"
                }
            }
        ]
    })
})
