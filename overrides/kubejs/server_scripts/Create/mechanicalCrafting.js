// priority: 0
console.info('[AMMONIUM@KUBEJS]: mechanicalCrafting.js loaded')

ServerEvents.recipes(e => {
    e.recipes.create.mechanical_crafting('create_jetpack:jetpack', [
        ' ABA ',
        'ACDCA',
        'AEFEA',
        ' E E '
    ], {
        'A': '#forge:plates/brass',
        'B': 'create:shaft',
        'C': 'create:precision_mechanism',
        'D': 'create:copper_backtank',
        'E': 'create:chute',
        'F': 'immersiveengineering:glider'
    })
})
