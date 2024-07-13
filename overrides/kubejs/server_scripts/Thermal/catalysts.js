// priority: 0
console.info('[AMMONIUM@KUBEJS]: catalysts.js loaded')

ServerEvents.recipes(e => {
    // e.recipes.thermal.pulverizer_catalyst('thermal:basalz_powder').primaryMod(1.25).secondaryMod(3.0).energyMod(0.75).minChance(0.0).useChance(0.5);
	e.recipes.thermal.pulverizer_catalyst('thermal:earth_charge').primaryMod(1.5).secondaryMod(3.5).energyMod(0.65).minChance(0.0).useChance(0.40);
	e.recipes.thermal.pulverizer_catalyst('kubejs:basilic_reagent').primaryMod(2.0).secondaryMod(4.0).energyMod(0.55).minChance(0.0).useChance(0.30);
	e.recipes.thermal.pulverizer_catalyst('kubejs:enriched_basilic_reagent').primaryMod(2.25).secondaryMod(5.0).energyMod(0.45).minChance(0.0).useChance(0.15);
})
