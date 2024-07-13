// priority: 0
console.info('[AMMONIUM@KUBEJS]: pressureChamber.js loaded')

ServerEvents.recipes(e => {
    function immersiveRolling(result, input) {
        let resultIsString = typeof result === 'string';
        let resultItem = resultIsString ? Item.of(result) : result;
        let inputIsString = typeof input === 'string';
        let inputItem = inputIsString ? Item.of(input) : input;
        e.custom({
            "type": "immersiveengineering:metal_press",
            "energy": 2400,
            "input": inputItem.toJson(),
            "mold": "immersiveengineering:mold_rod",
            "result": resultItem.toJson()
        })
    }
    function createRolling(result, input) {
        let resultIsString = typeof result === 'string';
        let resultItem = resultIsString ? Item.of(result) : result;
        let inputIsString = typeof input === 'string';
        let inputItem = inputIsString ? Item.of(input) : input;
        e.custom({
            "type":"createaddition:rolling",
            "input": inputItem.toJson(),
            "result": resultItem.toJson()
        })
    }
    function thermalRolling(result, input) {
        e.recipes.thermal.press(result, [input, 'kubejs:press_rod_die'])
    }

    function allRolling(result, input) {
        immersiveRolling(result, input);
        createRolling(result, input);
        thermalRolling(result, input);
    }
    
    // Example usage
    allRolling(Item.of('kubejs:invar_rod', 2), '#forge:ingots/invar');
    allRolling(Item.of('emendatusenigmatica:copper_rod', 2), '#forge:ingots/copper');
    allRolling(Item.of('emendatusenigmatica:iron_rod', 2), '#forge:ingots/iron');
    allRolling(Item.of('emendatusenigmatica:gold_rod', 2), '#forge:ingots/gold');
    allRolling(Item.of('createaddition:electrum_rod', 2), '#forge:ingots/electrum');
    allRolling(Item.of('createaddition:brass_rod', 2), '#forge:ingots/brass');
    allRolling(Item.of('emendatusenigmatica:nickel_rod', 2), '#forge:ingots/nickel');
    allRolling(Item.of('emendatusenigmatica:tin_rod', 2), '#forge:ingots/tin');
    allRolling(Item.of('emendatusenigmatica:osmium_rod', 2), '#forge:ingots/osmium');
    allRolling(Item.of('emendatusenigmatica:silver_rod', 2), '#forge:ingots/silver');
    allRolling(Item.of('emendatusenigmatica:uranium_rod', 2), '#forge:ingots/uranium');
    allRolling(Item.of('emendatusenigmatica:zinc_rod', 2), '#forge:ingots/zinc');
    allRolling(Item.of('emendatusenigmatica:lead_rod', 2), '#forge:ingots/lead');
    allRolling(Item.of('emendatusenigmatica:compressed_iron_rod', 2), '#forge:ingots/compressed_iron');
    allRolling(Item.of('immersiveengineering:stick_steel', 2), '#forge:ingots/steel');
    allRolling(Item.of('emendatusenigmatica:aluminum_rod', 2), '#forge:ingots/aluminum');
        
    
})
