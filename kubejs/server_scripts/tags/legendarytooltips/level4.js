ServerEvents.tags('item', e => {
    e.add('legendarytooltips:level_4', [
        /undergarden:.*/
    ])

    e.remove('legendarytooltips:level_4', [
        /undergarden:forgotten.*/,
        /undergarden:.*(sword|axe|pickaxe|shovel|helmet|chestplate|leggings|boots|shield)/,
    ])
    
    e.add('legendarytooltips:level_4', 'undergarden:forgotten_upgrade_smithing_template')
})