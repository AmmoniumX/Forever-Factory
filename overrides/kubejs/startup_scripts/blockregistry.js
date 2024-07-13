// priority: 0
console.info('[AMMONIUM@KUBEJS]: Loading blockregistry.js')

StartupEvents.registry('block', e => {
    e.create('trophy_caffeinated', 'cardinal').displayName('Caffeinated Trophy').defaultCutout()
    e.create('trophy_cheapskate', 'cardinal').displayName('Cheapskate Trophy').defaultCutout()
    e.create('trophy_purist', 'cardinal').displayName('Purist Trophy').defaultCutout()
    e.create('trophy_lazy', 'cardinal').displayName('Lazy Trophy').defaultCutout()
    e.create('trophy_omni', 'cardinal').displayName('Omni Trophy').defaultCutout()
})