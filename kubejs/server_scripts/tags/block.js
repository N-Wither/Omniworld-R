ServerEvents.tags('block', e => {
    /**
     * @param {string | string[]} tags 
     * @param {string | string[]} target 
     * @returns {void}
     */
    let add = (tags, target) => advancedAdd.bind(e)(tags, target)
    // e.add('forge:immovable', [])
    add('forge:farmland', [
        /farmingforblockheads:.*framland.*/,
        'minecraft:farmland',
        /blue_skies:.*farmland/,
        'farmersdelight:rich_soil_farmland',
        'undergarden:deepsoil_farmland',
        /mysticalagriculture:.*farmland/,
        'mysticalagradditons:insanium_farmland',
        'forbidden_arcanus:magical_farmland'
    ])

    add('forge:immovable', [
        'dankstorage:dock',
        'ae2:cable_bus'
    ])
})