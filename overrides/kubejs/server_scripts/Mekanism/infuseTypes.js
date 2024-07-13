// priority: 0
console.info('[AMMONIUM@KUBEJS]: infuseTypes.js loaded')

ServerEvents.recipes(e => {
    e.custom({
		type:"mekanism:infusion_conversion",
		input:{
			ingredient:[{
				item:'kubejs:dark_essence'}]},
		output:{
			infuse_type:"kubejs:dark_essence",
			amount:10}
	});
    e.custom({
		type:"mekanism:infusion_conversion",
		input:{
			ingredient:[{
				item:'kubejs:enriched_dark_essence'}]},
		output:{
			infuse_type:"kubejs:dark_essence",
			amount:200}
	});
    e.custom({
		type:"mekanism:infusion_conversion",
		input:{
			ingredient:[{
				item:'kubejs:light_essence'}]},
		output:{
			infuse_type:"kubejs:light_essence",
			amount:10}
	});
    e.custom({
		type:"mekanism:infusion_conversion",
		input:{
			ingredient:[{
				item:'kubejs:enriched_light_essence'}]},
		output:{
			infuse_type:"kubejs:light_essence",
			amount:200}
	});
})
