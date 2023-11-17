// const $ShieldItem = Java.loadClass('net.minecraft.world.item.ShieldItem')
// const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')


StartupEvents.registry("item", e => {
    e.create('taiyaki').displayName('Taiyaki').food(food => {
        food.hunger(6)
        food.saturation(0.8)
    });
	e.create('engulfing_lightning', 'sword').displayName('Engulfing Lightning').tier('engulfing_lightning');
    // e.create('affix_gem').maxStackSize(1).rarity(RARITY_RARE);
    // e.create('affix_gem_with_affix').maxStackSize(1).texture('kubejs:item/affix_gem').glow(true).rarity(RARITY_RARE);
    e.create('rhythm_gamers_glove').unstackable().rarity('rare');
    // e.create('hostilenetworks:forgotten_prediction').texture('kubejs:item/forgotten_prediction');
    // e.create('hostilenetworks:twilight_prediction').texture('kubejs:item/twilight_prediction');
    // e.create('hostilenetworks:ever_prediction').texture('kubejs:item/ever_prediction');
    e.create('infinity_drop')

    // e.createCustom('dummy_shield', new $ShieldItem(new $ItemProperties().durability(200)))

})