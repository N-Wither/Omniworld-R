ServerEvents.tags('item', e => {
    e.add('legendarytooltips:level_12', [
        /twilightforest:.*/
    ])

    e.remove('legendarytooltips:level_12', [
        /twilightforest:.*(sword|axe|pickaxe|shovel|helmet|chestplate|leggings|boots|shield|bow)/
    ])
})