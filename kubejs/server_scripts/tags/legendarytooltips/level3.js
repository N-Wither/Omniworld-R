ServerEvents.tags('item', e => {
    e.add('legendarytooltips:level_3', [
        /aether:.*/,
        /lost_aether_content:.*/,
        /deep_aether:*/
    ])

    e.remove('legendarytooltips:level_3', [
        /deep_aether:.*(sword|axe|pickaxe|shovel|helmet|chestplate|leggings|boots|shield)/,
        /lost_aether_content:.*(sword|axe|pickaxe|shovel|helmet|chestplate|leggings|boots|shield)/,
        /aether:.*shield/,
        /aether:.*(sword|axe|pickaxe|shovel|helmet|chestplate|leggings|boots)/,
        'aether:valkyrie_lance',
        'aether:vampire_blade',
        'minecraft:diamond_sword',
        'aether:phoenix_bow',
        'aether:pig_slayer',
        'aether:hammer_of_kingbdogz',
    ])

    e.remove('legendarytooltips:level_3', [
        /aether:aerogel.*/,
        'aether:book_of_lore',
        /aether:valkyrie.*/,
        /aether:phoenix.*/,
        /aether:.*key/,
        'aether:victory_medal',
        'lost_aether_content:shield_of_emile',
        'aether:holy_sword',
        'aether:vampire_blade',
        'aether:lightning_sword',
        'aether:lightning_knife',
        'aether:flaming_sword',
        'aether:hammer_of_kingbdogz',
        'aether:pig_slayer',
        'aether:cloud_staff',
        /aether:neptune.*/,
        /aether:obsidian.*/,
        'aether:sentry_boots',
        'lost_aether_content:agility_boots',
        'lost_aether_content:swetty_mask',
        'aether:regeneration_stone',
        'aether:iron_bubble',
        'aether:shield_of_repulsion',
        'lost_aether_content:sentry_shield',
        'lost_aether_content:invincibility_gem',
        'lost_aether_content:flaming_gemstone',
        'lost_aether_content:power_gloves',
        /aether:.*gummy_swet/,
        'aether:life_shard',
        'aether:agility_cape',
        'aether:invisibility_cloak',
        'lost_aether_content:phoenix_cape'
    ])
})