// priority: 0
console.info('[AMMONIUM@KUBEJS]: hide.js loaded')

JEIEvents.hideItems(e => {
  e.hide('naturesaura:ender_crate')
  e.hide('kubejs:compressed_mech_inc')
  e.hide('kubejs:computing_core_inc')
  e.hide('kubejs:basic_mech_inc')
  e.hide('thermal:dynamo_numismatic')
  e.hide('mekanismgenerators:fission_reactor_casing')
  e.hide('mekanismgenerators:fission_reactor_logic_adapter')
  e.hide('mekanismgenerators:fission_reactor_port')
  e.hide('mekanismgenerators:fission_fuel_assembly')
  e.hide('mekanismgenerators:control_rod_assembly')
  e.hide('createchromaticreturn:refined_mixture_bucket')
  e.hide('createchromaticreturn:shadow_essence_bucket')
  e.hide('createdieselgenerators:distillation_controller')
  e.hide('immersiveengineering:biodiesel_bucket')
  e.hide('createdieselgenerators:biodiesel_bucket')
  e.hide('createdieselgenerators:diesel_bucket')
  e.hide('createdieselgenerators:gasoline_bucket')
  e.hide('createendertransmission:item_transmitter')
  e.hide('createendertransmission:fluid_transmitter')
  e.hide('mob_grinding_utils:mob_swab')
  e.hide('thermal_extra:upgrade_augment')
  e.hide('create_sa:brass_jetpack_chestplate')
  e.hide('create_sa:andesite_jetpack_chestplate')
  e.hide('create_sa:copper_jetpack_chestplate')
  e.hide('engineersdecor:small_solar_panel')
  e.hide('createendertransmission:chunk_loader')
  
})
  
JEIEvents.hideFluids(e => {
  e.hide('createchromaticreturn:refined_mixture')
  e.hide('createchromaticreturn:shadow_essence')
  e.hide('immersiveengineering:biodiesel')
  e.hide('createdieselgenerators:biodiesel')
  e.hide('createdieselgenerators:diesel')
  e.hide('createdieselgenerators:gasoline')
    
})

