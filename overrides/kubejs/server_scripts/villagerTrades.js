console.info('[AMMONIUM@KUBEJS]: villagerTrades.js loaded')

MoreJSEvents.villagerTrades((event) => {
    // Doesn't work because apparently PC does their own custom stuff
    // event.forEachTrades(["pneumaticcraft:mechanic"], 5, (listings) => {
    //     console.log("Mechanic pre"+listings.size());
    // });

    // event.removeTrades({
    //         // For the items just use any kubejs format for items/ingredients
    //         // these three are required
    //         firstItem: 'minecraft:emerald',
    //         secondItem: 'minecraft:air',
    //         outputItem: 'pneumaticcraft:printed_circuit_board',
    
    //         // these are optional
    //         // firstCount -> can be just a number or a range with [min, max]
    //         // secondCount
    //         // outputCount
    //         // types: []
    //         // professions: []
    // });

    // event.removeTrades({
    //     firstItem: 'minecraft:emerald',
    //     secondItem: 'minecraft:air',
    //     outputItem: 'pneumaticcraft:printed_circuit_board',
    //     firstCount: 25
    // });
    // event.forEachTrades(["pneumaticcraft:mechanic"], 5, (listings) => {
    //     console.log("Mechanic post"+listings.size());
    // });

})