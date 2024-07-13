// priority: 0
console.info('[AMMONIUM@KUBEJS]: ae2Inscriber.js loaded')

ServerEvents.recipes(e => {

    /**
     * Creates a custom AE2 inscriber recipe.
     * Determines the mode based on the number of arguments and creates a custom object.
     *
     * @param {string|Item} result - Recipe's output
     * @param {string|Item} [top] - (optional) Top slot input
     * @param {string|Item} middle - Middle slot input
     * @param {string|Item} [bottom] - (optional) Bottom slot input
     */
    function inscriber(result, top, middle, bottom) {
        // Initialize the ingredients object
        const ingredients = {};
    
        // Assign values to the respective properties
        const properties = ['middle', 'top', 'bottom'];
        properties.forEach((property, index) => {
            if (arguments[index + 1] !== undefined) {
                ingredients[property] = { "item": arguments[index + 1] };
            }
        });
    
        const mode = arguments.length === 3 ? "inscribe" : "press";
    
        e.custom({
            "type": "ae2:inscriber",
            "ingredients": ingredients,
            "mode": mode,
            "result": {
                "item": result
            }
        });
    }
    
    inscriber('ae2:logic_processor', 'kubejs:integrated_circuit', 'ae2:printed_logic_processor', 'ae2:printed_silicon')
    inscriber('ae2:calculation_processor', 'kubejs:integrated_circuit', 'ae2:printed_calculation_processor', 'ae2:printed_silicon')
    inscriber('ae2:engineering_processor', 'kubejs:integrated_circuit', 'ae2:printed_engineering_processor', 'ae2:printed_silicon')

})
