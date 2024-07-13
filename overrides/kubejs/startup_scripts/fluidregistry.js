// priority: 0
console.info('[AMMONIUM@KUBEJS]: Loading fluidregistry.js')

StartupEvents.registry('fluid', e => {
    e.create('thermal_paste')
    .thickTexture(0x777777)
    .bucketColor(0x777777)
    .displayName("Thermal Paste")

    e.create('dense_matter_solution')
    .thinTexture(0x274B89)
    .bucketColor(0x274B89)
    .displayName("Dense Matter Solution")
    
    e.create('liquid_neutronium')
    .thinTexture(0xD1FFFF)
    .bucketColor(0xD1FFFF)
    .displayName("Liquid Neutronium")
    
    // e.create('heavy_air')
    // .thickTexture(0x2E2E2E)
    // .bucketColor(0x2E2E2E)
    // .displayName("Heavy Air")

    e.create('primordial_soup')
    .thinTexture(0xFFBB00)
    .bucketColor(0xFFBB00)
    .displayName("Primordial Soup")

    e.create('gelid_cryotheum')
    .thinTexture(0x51ffff)
    .bucketColor(0x51ffff)
    .displayName("Gelid Cryotheum")

    e.create('blazing_pyrotheum')
    .thinTexture(0xffae00)
    .bucketColor(0xffae00)
    .displayName("Blazing Pyrotheum")

    e.create('liquid_sunlight')
    .thinTexture(0xffff00)
    .bucketColor(0xffff00)
    .displayName("Liquid Sunlight")

    e.create('liquid_ghosts')
    .thinTexture(0x520000)
    .bucketColor(0x520000)
    .displayName("Liquid Ghosts")

    e.create('liquid_darkness')
    .thinTexture(0x1c0d29)
    .bucketColor(0x1c0d29)
    .displayName("Liquid Darkness")

    e.create('refined_mixture')
    .thinTexture(0xffbdf0)
    .bucketColor(0xffbdf0)
    .displayName("Refined Mixture")

    e.create('shadow_essence')
    .thinTexture(0x3d2652)
    .bucketColor(0x3d2652)
    .displayName("Shadow Essence")

})