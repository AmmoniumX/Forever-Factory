ServerEvents.recipes(event => {
  event.custom({
	"type": "pneumaticcraft:heat_properties",
	"block": "createaddition:liquid_blaze_burner",
	"statePredicate": { "blaze": "kindled" },
	"temperature": 2500,
	"thermalResistance": 100
	})

})