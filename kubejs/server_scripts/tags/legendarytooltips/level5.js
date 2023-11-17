ServerEvents.tags('item', e => {
    e.add('legendarytooltips:level_5', [
        /immersiveengineering:.*/,
        /engineersdecor:.*/,
        /immersivepetroleum:.*/
    ])

    e.remove('legendarytooltips:level_5', [
        /immersiveengineering:.*(sword|axe|pickaxe|shovel|helmet|chestplate|leggings|boots|shield)/,
    ])
})