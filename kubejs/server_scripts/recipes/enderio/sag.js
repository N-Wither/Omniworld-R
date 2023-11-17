ServerEvents.recipes(e => {
    e.recipes.enderio.sag_milling(
        ['emendatusenigmatica:ender_pearl_dust', Item.of('emendatusenigmatica:ender_pearl_dust').withChance(0.2)],
        'minecraft:ender_pearl'
    ).energy(1920).bonus(EnderIOBonusType.CHANCE_ONLY).id('enderio:sag_milling/ender_pearl')
})