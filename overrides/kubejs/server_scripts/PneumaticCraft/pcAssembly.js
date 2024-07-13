// priority: 0
console.info('[AMMONIUM@KUBEJS]: pcAssembly.js loaded')

ServerEvents.recipes(e => {
    /**
     * Creates a PneumaticCraft laser assembly recipe
     *
     * @param {string} result - The result item id
     * @param {string} input - The input item id
     */
    function laserAssembly(result, input) {
        e.custom({
            "type": "pneumaticcraft:assembly_laser",
            "input": {
                "item": input
            },
            "program": "laser",
            "result": {
                "item": result
            }
        })
    }
    /**
     * Creates a PneumaticCraft drill assembly recipe
     *
     * @param {string} result - The result item id
     * @param {string} input - The input item id
     */
    function drillAssembly(result, input) {
        e.custom({
            "type": "pneumaticcraft:assembly_drill",
            "input": {
                "item": input
            },
            "program": "drill",
            "result": {
                "item": result
            }
        })
    }
    
    laserAssembly('kubejs:packaged_integrated_circuits', 'pneumaticcraft:printed_circuit_board')
    drillAssembly('minecraft:skeleton_skull', 'minecraft:bone_block')

})
