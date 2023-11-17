ServerEvents.recipes(e => {
    /* let crop = {
        type: 'botanypots:crop',
        seed: {
            item: 'minecraft:cactus',
        },
        categories: ['sand'],
        growthTicks: 1200,
        display: {
            block: 'minecraft:cactus',
        },
        drops: [
            {
                chance: 1.0,
                output: {
                    item: 'minecraft:cactus',
                },
            },
        ],
    }; */

    e.custom({
        type: 'botanypots:crop',
        seed: {
            item: 'miniutilities:flame_lily_seeds',
        },
        categories: ['sand'],
        growthTicks: 6000,
        display: {
            type: 'botanypots:aging',
            block: 'miniutilities:flame_lily_block',
        },
        drops: [
            {
                chance: 1.0,
                output: {
                    item: 'miniutilities:flame_lily',
                    count: 2
                },
            },
            {
                chance: 0.05,
                output: {
                    item: 'miniutilities:flame_lily_seeds'
                }
            }
        ],
    }).id('kubejs:botanypots/crop/flame_lily')

    e.custom({
        type: 'botanypots:crop',
        seed: {
            item: 'miniutilities:ender_lily_seeds',
        },
        categories: ['dirt', 'farmland'],
        growthTicks: 6000,
        display: {
            type: 'botanypots:aging',
            block: 'miniutilities:ender_lily_block',
        },
        drops: [
            {
                chance: 1.0,
                output: {
                    item: 'minecraft:ender_pearl',
                    count: 2
                },
            },
            {
                chance: 0.05,
                output: {
                    item: 'miniutilities:ender_lily_seeds'
                }
            }
        ],
    }).id('kubejs:botanypots/crop/ender_lily')
});
