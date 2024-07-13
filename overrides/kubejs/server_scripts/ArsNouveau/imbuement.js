// priority: 0
console.info('[AMMONIUM@KUBEJS]: imbuement.js loaded')

ServerEvents.recipes(e => {
    function imbuement(output, input, source) {
        e.custom({
            type: "ars_nouveau:imbuement",
            count: 1,
            input: {
                item: input
            },
            output: output,
            pedestalItems: [],
            source: source
        });
    }
    imbuement('kubejs:primordial_stone', 'kubejs:dense_rock_aura', 2000)
})
