ServerEvents.recipes(e => {
    e.custom({
        type: 'functionalstorage:custom_compacting',
        higher_input: {
            count: 1,
            item: 'minecraft:amethyst_block',
        },
        lower_input: {
            count: 4,
            item: 'minecraft:amethyst_shard',
        },
    }).id('functionalstorage:custom_compacting/amethyst')
});
