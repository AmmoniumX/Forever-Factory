// priority: 0
console.info('[AMMONIUM@KUBEJS]: worldgen.js loaded')

WorldgenEvents.remove(e => {
    e.removeOres(props => {
        props.worldgenLayer = 'underground_ores'
    })
    e.removeOres(props => {
        props.blocks = '/^.+_ore$/'
    })
})