// priority: 0
console.info('[AMMONIUM@KUBEJS]: Loading itemregistry.js')

Platform.mods.kubejs.name = "Forever Factory"

StartupEvents.registry('item', e => {
    e.create('livingrock_effigy').tooltip('A dormant effigy, waiting to be awakened')
    e.create('press_effigy_die').displayName('Effigy die')
    e.create('awakening_spirit').displayName('Spirit of Awakening')
    e.create('oil_clump')
    e.create('andesite_hull').displayName('Andesite Machinery')
    e.create('basic_mech').displayName('Basic Mechanism')
    e.create('basic_mech_inc').displayName('Incomplete Basic Mechanism')
    e.create('press_rod_die').displayName('Rod Die')
    e.create('compressed_mech').displayName('Compressed Mechanism')
    e.create('compressed_mech_inc').displayName('Incomplete Compressed Mechanism')
    e.create('invar_rod')
    e.create('packaged_integrated_circuits').texture('kubejs:item/basic_package')
    e.create('integrated_circuit')
    e.create('certus_seed')
    e.create('computing_core_base')
    e.create('computing_core_inc').displayName('Incomplete Computing Core')
    e.create('computing_core').tooltip('This Computing Core was assembled correctly')
    e.create('computing_core_overflowing').displayName('Overflowing Computing Core').tooltip('Maybe a little less thermal paste next time?')
    e.create('computing_core_burnt').displayName('Burnt Computing Core').tooltip('This Computing Core was overcooked')
    e.create('computing_core_misaligned').displayName('Misaligned Computing Core').tooltip('This Computing Core was not assembled correctly')
    e.create('computing_core_corrupted').displayName('Corrupted Computing Core').tooltip('This Computing Core was corrupted by unmentionable entities')
    e.create('sbc').displayName('Single Board Computer').rarity(1)
    e.create('ingot_neutronium').displayName('Neutronium Ingot')
    e.create('plate_neutronium').displayName('Neutronium Plate')
    e.create('gear_neutronium').displayName('Neutronium Gear')
    e.create('gear_redstone').displayName('Redstone Gear')
    e.create('chiller_plate_cast').displayName('Plate Cast')
    e.create('dense_rock').tooltip('A rock so dense, you can\'t seem to break it apart. It has a great magic potential')
    e.create('dense_rock_mana').displayName('Mana-Imbued Denser Rock').tooltip('A very dense rock, imbued with mana').rarity(1)
    e.create('dense_rock_aura').displayName('Aura-Imbued Densest Rock').tooltip('An even denser rock, imbued with mana and aura').rarity(2)
    e.create('primordial_stone').tooltip('An impossibly dense rock, infused by all known schools of magic. Said to hold the power of creation').rarity(3)
    e.create('light_primordial_stone').tooltip('A lighter primordial stone, the true origin of light metallic elements').rarity(3)
    e.create('heavy_primordial_stone').tooltip('A heavier primordial stone, the true origin of heavy metallic elements').rarity(3)
    e.create('prismatic_primordial_stone').tooltip('A prismatic primordial stone, the true origin of gems and powders').rarity(3)
    e.create('basilic_reagent')
    e.create('enriched_basilic_reagent')
    e.create('dark_essence').displayName('Essence of Darkness')
    e.create('enriched_dark_essence').displayName('Enriched Essence of Darkness')
    e.create('light_essence').displayName('Essence of Light')
    e.create('enriched_light_essence').displayName('Enriched Essence of Light')
    e.create('cryotheum_crystal')
    e.create('subzero_cell').displayName('Subzero Fluid Cell').tooltip('Not a real container. Can be filled with extremely cold fluids')
    e.create('cryotheum_cell')
    e.create('cryo_mainframe').displayName('Cryo-Cooled Mainframe').tooltip('A cryotheum-cooled mainframe, capable of handling high computational loads').rarity(2)

    const materials = ['copper', 'zinc', 'iron', 'aluminum', 'tin', 'lead', 'nickel', 
        'silver', 'gold', 'osmium', 'uranium', 'rutile', 'diamond', 'emerald', 'lapis', 
        'coal', 'redstone', 'netherite']
    materials.forEach(material => {
        e.create(`hardened_${material}`)
        if (material == 'rutile' || material == 'netherite') {
            return;
        } else {
            e.create(`perfect_${material}`).rarity(3)
        }
    })
    e.create(`perfect_titanium`).rarity(3)

    e.create('infinity_catalyst').tooltip('Infinite potential.').rarity(3)
    e.create('sentient_mainframe').tooltip('Capable of advanced reasonal thinking. Treat with care, and respect.').rarity(3)
})
