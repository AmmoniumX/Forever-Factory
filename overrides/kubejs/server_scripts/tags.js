// priority: 9
// Set to run after removed and before recipes
console.info('[AMMONIUM@KUBEJS]: tags.js loaded')

ServerEvents.tags('item', e => {
    e.add('forge:gems', 'minecraft:coal')
    e.add('forge:gems/coal', 'minecraft:coal')
    e.add('thermal:crafting/dies', 'kubejs:press_rod_die')
    e.add('thermal:crafting/dies', 'kubejs:press_effigy_die')
    e.add('forge:slimeballs', 'kubejs:oil_clump')
    e.add('thermal:crafting/casts', 'kubejs:chiller_plate_cast')
    e.add('thermal:crafting/casts', 'thermal:press_gear_die')

    const materials = ['copper', 'zinc', 'iron', 'aluminum', 'tin', 'lead', 'nickel', 
        'silver', 'gold', 'osmium', 'uranium', 'rutile', 'diamond', 'emerald', 'lapis', 
        'coal', 'redstone', 'netherite']

    materials.forEach(material => {
        e.add(`forge:hardened/${material}`, `kubejs:hardened_${material}`)
    })
})

ServerEvents.tags('fluid', e => {
    // e.add('kubejs:dense_matter_solution', 'kubejs:dense_matter_solution')

})

ServerEvents.tags("entity_type", e => {
    e.add('ars_nouveau:drygmy_blacklist', ['minecraft:blaze', 'thermal:blizz', 'thermal:blitz', 'thermal:basalz'])
    e.add('industrialforegoing:mob_duplicator_blacklist', ['minecraft:blaze', 'thermal:blizz', 'thermal:blitz', 'thermal:basalz'])

})
