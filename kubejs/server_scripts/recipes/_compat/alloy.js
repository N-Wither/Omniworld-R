ServerEvents.recipes(e => {
    /**
     * Create alloy recipes for multiple mods.
     * @param {Internal.Item} output 
     * @param {Internal.Ingredient[]} input 
     * @param {Object} mods 
     * @param {string} id
     */
    let multiModAlloy = (output, input, mods, id) => {
        let modIds = Object.keys(mods)
        if(!id && typeof output == 'string') id = output.split(':')[1]
        if(modIds.includes('enderio')){
            let recipe = e.recipes.enderio.alloy_smelting(output, input).id('kubejs:compat/enderio/alloy_smelting/' + id)
            if(mods.enderio.energy){recipe.energy(mods.enderio.energy)}
            if(mods.enderio.xp){recipe.experience(mods.enderio.xp)}
        }
        if(modIds.includes('create')){
            // Wait until KubeJS Create released
        }
    }

    multiModAlloy('forbidden_arcanus:obsidian_ingot', ['#forge:obsidian', '4x #forge:nuggets/iron'], {enderio: {energy: 2000, xp: 0.1}})
    multiModAlloy(
        '2x emendatusenigmatica:electrum_ingot',
        ['#forge:ingots_or_dusts/gold', '#forge:ingots_or_dusts/silver'],
        {enderio: {energy: 3200, xp: 0.4}}
    )
    multiModAlloy(
        "3x emendatusenigmatica:invar_ingot",
        ['2x #forge:ingots_or_dusts/iron', '#forge:ingots_or_dusts/nickel'],
        {enderio: {energy: 4800, xp: 0.6}}
    )
    multiModAlloy(
        '4x emendatusenigmatica:bronze_ingot',
        ['3x #forge:ingots_or_dusts/copper', '#forge:ingots_or_dusts/tin'],
        {enderio: {energy: 6400, xp: 0.8}}
    )
    multiModAlloy(
        '2x emendatusenigmatica:constantan_ingot',
        ['#forge:ingots_or_dusts/copper', '#forge:ingots_or_dusts/nickel'],
        {enderio: {energy: 3200, xp: 0.8}}
    )
    multiModAlloy(
        '2x emendatusenigmatica:enderium_ingot',
        ['3x #forge:ingots_or_dusts/lead', '#forge:dusts/diamond', '#forge:ender_pearl_or_dust'],
        {enderio: {energy: 16000, xp: 0.4}}
    )
    multiModAlloy(
        '4x emendatusenigmatica:lumium_ingot',
        ['3x #forge:ingots_or_dusts/tin', '#forge:ingots_or_dusts/silver', '2x #forge:dusts/glowstone'],
        {enderio: {energy: 12000, xp: 0.8}}
    )
    multiModAlloy(
        'minecraft:netherite_ingot',
        ['4x #forge:ingots_or_dusts/gold', '4x minecraft:netherite_scrap'],
        {enderio: {energy: 800, xp: 0.2}}
    )
    multiModAlloy(
        '4x emendatusenigmatica:signalum_ingot',
        ['3x #forge:ingots_or_dusts/copper', '#forge:ingots_or_dusts/silver', '4x #forge:dusts/redstone'],
        {enderio: {energy: 12000, xp: 0.8}}
    )
    multiModAlloy(
        'create:andesite_alloy',
        ['#forge:nuggets/iron_or_zinc', 'minecraft:andesite'],
        {enderio: {energy: 3200, xp: 0.2}}
    )
    multiModAlloy(
        '2x emendatusenigmatica:brass_ingot',
        ['#forge:ingots_or_dusts/copper', '#forge:ingots_or_dusts/zinc'],
        {enderio: {energy: 3200, xp: 0.4}}
    )
    multiModAlloy(
        'emendatusenigmatica:steel_ingot',
        ['#forge:ingots_or_dusts/iron', '#forge:coal_coke'],
        {enderio: {energy: 4800, xp: 0.2}}
    )
})