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
    naturalAltarCatalyst('minecraft:beef', 'minecraft:rotten_flesh', 10000, 50, 'naturesaura:conversion_catalyst')
    naturalAltarCatalyst('minecraft:mutton', 'minecraft:beef', 10000, 50, 'naturesaura:conversion_catalyst')
    naturalAltarCatalyst('minecraft:porkchop', 'minecraft:mutton', 10000, 50, 'naturesaura:conversion_catalyst')
    naturalAltarCatalyst('minecraft:chicken', 'minecraft:porkchop', 10000, 50, 'naturesaura:conversion_catalyst')
})
