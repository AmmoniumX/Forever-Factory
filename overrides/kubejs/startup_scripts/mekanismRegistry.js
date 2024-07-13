// priority: 0
console.info('[AMMONIUM@KUBEJS]: Loading mekanismRegistry.js')

const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = Java.loadClass('mekanism.common.registration.impl.GasDeferredRegister')
const $SlurryDeferredRegister = Java.loadClass('mekanism.common.registration.impl.SlurryDeferredRegister')
const $InfuseTypeDeferredRegister = Java.loadClass('mekanism.common.registration.impl.InfuseTypeDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')
const SLURRY = new $SlurryDeferredRegister('kubejs')
const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')

// Example usage:
// GASES.register('example_gas', 0xA020F0)
// SLURRY.register('example_slurry', builder => builder.color(0xA020F0))
// INFUSETYPE.register('example_infuse_type', 0xA020F0)

INFUSETYPE.register('dark_essence', 0x1d0133)
INFUSETYPE.register('light_essence', 0xfffca1)

GASES.register($EventBuses.getModEventBus('kubejs').get())
SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())
INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())