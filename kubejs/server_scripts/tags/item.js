// priority: 1
// Add
ServerEvents.tags('item', e => {
    // let advAdd = (tags, target) => advancedAdd.bind(e)(tags, target)
    /**
     * @param {Special.ItemTag} tags 
     * @param {Special.Item | Special.Item[]} target
     */
    let add = (tags, target) => advancedAdd.bind(e)(tags, target)
    add('forge:obsidian', '#chipped:obsidian')
    
    let ingotsOrDustsMaterials = [
        'iron',
        'copper',
        'gold',
        'aluminum',
        'osmium',
        'lead',
        'nickel',
        'silver',
        'tin',
        'uranium',
        'zinc'
    ]
    ingotsOrDustsMaterials.forEach(material => {
        add(`forge:ingots_or_dusts/${material}`, [`#forge:ingots/${material}`, `#forge:dusts/${material}`])
    })

    add('forge:dusts/ender_pearl', '#forge:dusts/ender')
    add('forge:ender_pearl_or_dust', ['minecraft:ender_pearl', '#forge:dusts/ender_pearl'])
    add('forge:nuggets/iron_or_zinc', ['#forge:nuggets/iron', '#forge:nuggets/zinc'])
    add('forge:flour', ['pneumaticcraft:wheat_flour', 'enderio:flour'])
    add('forge:coal_coke', 'emendatusenigmatica:coal_coke_gem')
    
    let createCrushedMaterials = [
        'iron',
        'gold',
        'copper',
        'zinc',
        'osmium',
        'silver',
        'tin',
        'lead',
        'aluminum',
        'uranium',
        'nickel',
        'platinum',
        'quicksilver'
    ]
    createCrushedMaterials.forEach(material => add(`create:crushed_raw_materials/${material}`, `create:crushed_raw_${material}`))

    add('forge:dusts/saltpeter', 'emendatusenigmatica:niter_dust')
    add('forge:dyes/yellow', '#forge:dusts/sulfur')
    add('forge:furnaces/orichalcum', 'ironfurnaces:allthemodium_furnace')
    add('forge:furnaces/mithril', 'ironfurnaces:vibranium_furnace')
    add('forge:furnaces/adamantite', 'ironfurnaces:unobtainium_furnace')
    add('forge:steel_ingots', '#forge:ingots/steel')
    add('forge:calorite_ingots', '#forge:ingots/calorite')
    add('forge:processors/basic', ['refinedstorage:basic_processor', 'ae2:calculation_processor'])
    add('forge:processors/advanced', ['refinedstorage:advanced_processor', 'ae2:engineering_processor'])
    add('forge:processors/improved', ['refinedstorage:improved_processor', 'ae2:logic_processor'])
    add('forge:construction_cores', ['refinedstorage:construction_core', 'ae2:formation_core'])
    add('forge:destruction_cores', ['refinedstorage:destruction_core', 'ae2:annihilation_core'])
    add('forge:wrenches', 'refinedstorage:wrench')
    add('forge:circuits/basic', 'pneumaticcraft:printed_circuit_board')
    add('forge:dusts/ender', 'emendatusenigmatica:ender_pearl_dust')
    add('minecraft:trimmable_armor', [
        'emendatusenigmatica:orichalcum_chestplate',
        'emendatusenigmatica:orichalcum_boots',
        'emendatusenigmatica:orichalcum_helmet',
        'emendatusenigmatica:orichalcum_leggings',
        'emendatusenigmatica:mithril_chestplate',
        'emendatusenigmatica:mithril_boots',
        'emendatusenigmatica:mithril_helmet',
        'emendatusenigmatica:mithril_leggings',
        'emendatusenigmatica:adamantite_chestplate',
        'emendatusenigmatica:adamantite_boots',
        'emendatusenigmatica:adamantite_helmet',
        'emendatusenigmatica:adamantite_leggings',
    ])
    add('functionalstorage:drawerless_wood_planks', [
        /biomesoplenty:.*planks/,
        'immersiveengineering:fiberboard',
        /ad_astra:.*planks/,
        /blue_skies:.*planks/,
        'ars_nouveau:archwood_planks',
        /twilightforest:.*planks/,
        /twilightforest:.*towerwood/,
        /undergarden:.*planks/,
        /alexscaves:.*planks/,
        /regions_unexplored:.*planks/,
        /forbidden_arcanus:.*planks/,
        'minecraft:bamboo_planks',
        '#chipped:bamboo_planks',
        'integrateddynamics:menril_planks',
        'naturesaura:ancient_planks'
    ])
    add('create:rose_quartz', ['create:rose_quartz', 'biomesoplenty:rose_quartz_chunk'])
    add('forge:tools/swords', ['wstweaks:blaze_blade', 'wstweaks:lava_blade'])

})

// Remove
ServerEvents.tags('item', e => {
    let remove = (tags, target) => advancedRemove.bind(e)(tags, target)
    remove('forge:storage_blocks/ender_pearl', ['cyclic:eye_teleport'])
    e.remove('forge:furnaces/allthemodium', 'ironfurnaces:allthemodium_furnace')
    e.remove('forge:furnaces/vibranium', 'ironfurnaces:vibranium_furnace')
    e.remove('forge:furnaces/unobtainium', 'ironfurnaces:unobtainium_furnace')
    e.remove('forge:ores/amethyst', 'minecraft:amethyst_shard')
    e.remove('functionalstorage:drawerless_wood_planks', 'twilightforest:towerwood_borer_spawn_egg')
})