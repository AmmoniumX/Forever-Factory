// priority: 0
console.info('[AMMONIUM@KUBEJS]: naturalAltar.js loaded')

ServerEvents.recipes(e => {
    function naturalAltarCatalyst(output, input, aura, time, catalyst) {
        e.custom({
            type: "naturesaura:altar",
            input: {
                item: input
            },
            output: {
                item: output
            },
            catalyst: {
                item: catalyst
            },
            aura: aura,
            time: time
        });
    }
    function naturalAltar(output, input, aura, time) {
        e.custom({
            type: "naturesaura:altar",
            input: {
                item: input
            },
            output: {
                item: output
            },
            aura: aura,
            time: time
        });
    }
    naturalAltar('kubejs:dense_rock_aura', 'kubejs:dense_rock_mana', 15000, 80)
})
