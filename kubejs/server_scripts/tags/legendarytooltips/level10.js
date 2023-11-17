ServerEvents.tags('item', e => {
    e.add('legendarytooltips:level_10', [
        /the_bumblezone:.*/,
        /productivebees:.*/
    ])

    e.remove('legendarytooltips:level_10', [
        'the_bumblezone:stinger_spear',
        /the_bumblezone:.*(shield|helmet|chestplate|leggings|boots)/
    ])
})