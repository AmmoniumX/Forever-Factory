// priority: 0
console.info('[AMMONIUM@KUBEJS]: Loading blockregistry.js')

StartupEvents.registry('block', e => {
    e.create('trophy_caffeinated', 'cardinal').displayName('Caffeinated Trophy').defaultCutout()
    e.create('trophy_cheapskate', 'cardinal').displayName('Cheapskate Trophy').defaultCutout()
    e.create('trophy_purist', 'cardinal').displayName('Purist Trophy').defaultCutout()
    e.create('trophy_lazy', 'cardinal').displayName('Lazy Trophy').defaultCutout()
    e.create('trophy_omni', 'cardinal').displayName('Omni Trophy').defaultCutout()

    e.create("juiced_log")
    .soundType('wood')
    .hardness(2)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/juiced_log')
    .displayName("Resinated Log")
    .requiresTool(false)
    .tagBlock("mineable/axe")
    // .tagBlock("minecraft:logs")
    // .tagBlock("minecraft:logs_that_burn")
    .blockstateJson = {
        "variants": {
            "axis=x": {
                "model": "kubejs:block/juiced_log",
                "x": 90,
                "y": 90
            },
            "axis=y": {
                "model": "kubejs:block/juiced_log"
            },
            "axis=z": {
                "model": "kubejs:block/juiced_log",
                "x": 90
            }
        }
    }
})