ServerEvents.tags('item', e => {
    e.add('legendarytooltips:level_11', [
        /blue_skies:.*/
    ])

    e.remove('legendarytooltips:level_11', [
        /blue_skies:.*arc/,
        /blue_skies:.*key/,
        /blue_skies:.*blinding.*/,
        /blue_skies:.*nature.*/,
        /blue_skies:.*poison.*/,
        /blue_skies:.*(sword|axe|pickaxe|shovel|shield|spear)/,
        'blue_skies:crushing_hammer',
        'blue_skies:different_sword'
    ])
})