ServerEvents.recipes(e => {
    /**
     * @param {Item} output 
     * @param {String[]} pattern 
     * @param {object} key 
     * @param {String} id 
     */
    function shaped(output, pattern, key, id){
        id = id || output.split(':')[1];
        e.shaped(output, pattern, key).id('kubejs:crafting_shaped/'+id);
    }
    /**
     * @param {Item} output 
     * @param {Ingredient} input 
     * @param {String} id 
     */
    function shapeless(output, input, id){
        e.shapeless(output, input).id('kubejs:crafting_shapeless/'+id);
    }

    // Minecraft

    // Cyclic
    e.shaped('cyclic:eye_teleport', ['PPP', 'PEP', 'PPP'], {P: 'minecraft:ender_pearl', E: 'minecraft:ender_eye'}).id('cyclic:eye_teleport')

    // Eccentric Tome
    e.shapeless(TOME, 'eccentrictome:tome').id('kubejs:all_in_one_tome')

    // Iron Furnaces
    e.shaped(
        'ironfurnaces:allthemodium_furnace',
        ['bab', 'axa', 'bab'],
        {a: '#forge:ingots/orichalcum', b: '#forge:storage_blocks/orichalcum', x: '#forge:furnaces/netherite'}
    ).id('ironfurnaces:allthemodium_furnace')
    e.shaped(
        'ironfurnaces:vibranium_furnace', 
        ['bab', 'axa', 'bab'], 
        {a: '#forge:ingots/mithril', b: '#forge:storage_blocks/mithril', x: '#forge:furnaces/orichalcum'}
    ).id('ironfurnaces:vibranium_furnace')
    e.shaped(
        'ironfurnaces:unobtainium_furnace',
        ['bab', 'axa', 'bab'],
        {a: '#forge:ingots/adamantite', b: '#forge:storage_blocks/adamantite', x: '#forge:furnaces/mithril'}
    ).id('ironfurnaces:unobtainium_furnace')
    e.recipes.minecraft.crafting_shaped(
        'ironfurnaces:upgrade_allthemodium',
        ['bab', 'axa', 'bab'],
        {a: '#forge:ingots/orichalcum', b: '#forge:storage_blocks/orichalcum', x: '#ironfurnaces:netherite_upgrade_crafting'}
    ).id('ironfurnaces:upgrade_allthemodium')
    e.recipes.minecraft.crafting_shaped(
        'ironfurnaces:upgrade_vibranium',
        ['bab', 'axa', 'bab'],
        {a: '#forge:ingots/mithril', b: '#forge:storage_blocks/mithril', x: '#forge:ingots/orichalcum'}
    ).id('ironfurnaces:upgrade_vibranium')
    e.recipes.minecraft.crafting_shaped(
        'ironfurnaces:upgrade_unobtainium',
        ['bab', 'axa', 'bab'],
        {a: '#forge:ingots/adamantite', b: '#forge:storage_blocks/adamantite', x: '#forge:ingots/mithril'}
    ).id('ironfurnaces:upgrade_unobtainium')

    // Mystical Agriculture
    e.recipes.cucumber.shaped_no_mirror(
        'emendatusenigmatica:orichalcum_ingot',
        ['eee', 'e e', 'eee'],
        {e: 'mysticalagriculture:orichalcum_essence'}
    ).id('mysticalagriculture:essence/custom/orichalcum')
    e.recipes.cucumber.shaped_no_mirror(
        'emendatusenigmatica:mithril_ingot',
        ['eee', 'eee', 'eee'],
        {e: 'mysticalagriculture:mithril_essence'}
    ).id('mysticalagriculture:essence/common/mithril_ingot')
    e.recipes.cucumber.shaped_no_mirror(
        'emendatusenigmatica:adamantite_ingot',
        ['eee', 'eee', 'eee'],
        {e: 'mysticalagriculture:adamantite_essence'}
    ).id('mysticalagriculture:essence/custom/adamantite')

    // Alexs Caves
    e.shapeless('emendatusenigmatica:raw_uranium_block', '9x #forge:raw_materials/uranium').id('alexscaves:block_of_uranium')

    // Mekanism
    shaped('mekanism:steel_casing', ['SCS', 'HOH', 'SCS'], {
        S: 'immersiveengineering:component_steel',
        H: '#enderio:fused_quartz',
        O: '#forge:ingots/osmium',
        C: '#forge:circuits/basic'
    });
    shaped("mekanism:metallurgic_infuser", ['IFI', 'ROR', 'IFI'], {
        O: '#forge:ingots/osmium',
        F: '#forge:furnaces/iron',
        R: '#forge:dusts/redstone',
        I: '#forge:ingots/iron'
    });

    // Functional Storage
    e.shaped('functionalstorage:oak_1', ['ppp', 'pcp', 'ppp'], {p: '#functionalstorage:drawerless_wood_planks', c: '#forge:chests/wooden'}).id('functionalstorage:oak_drawer_alternate_x1')
    e.shaped('functionalstorage:oak_2', ['pcp', 'ppp', 'pcp'], {p: '#functionalstorage:drawerless_wood_planks', c: '#forge:chests/wooden'}).id('functionalstorage:oak_drawer_alternate_x2')
    e.shaped('functionalstorage:oak_4', ['cpc', 'ppp', 'cpc'], {p: '#functionalstorage:drawerless_wood_planks', c: '#forge:chests/wooden'}).id('functionalstorage:oak_drawer_alternate_x4')

})