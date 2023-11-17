ServerEvents.tags('item', e => {
    e.add('legendarytooltips:level_7', [
        /tconstruct:.*/,
        /materialis:.*/,
        /empatic:.*/,
        /tinkers_reforged:.*/,
        /tinker_rapier:.*/,
        /bloodsmeltery:.*/,
        /tetra:.*/,
    ])

    e.remove('legendarytooltips:level_7', [
        /tetra:modular_.*/
    ])
})