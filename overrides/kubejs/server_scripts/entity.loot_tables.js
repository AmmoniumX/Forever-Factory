EntityEvents.drops(event => {
  // Override zombie loot table that will drop 5 of either carrot (25% chance) or apple (75% chance)
	// event.addEntity('minecraft:zombie', table => {
		// table.addPool(pool => {
		// pool.rolls = 5
		// pool.addItem('minecraft:carrot', 1)
		// pool.addItem('minecraft:apple', 3)
		// })
	// })

	// event.modifyEntity('minecraft:blaze', table => {
	// 	table.addPool(pool => {
	// 	pool.rolls = [3, 5]
	// 	pool.addItem(Item.of('minecraft:blaze_rod'));
	// 	})
	// })
  
})