BlockEvents.rightClicked('kubejs:torcherino', e => {
    e.player.tell(Component.translate('kubejs.server_events.torcherino').aqua());
    e.player.swing(e.getHand())
})

BlockEvents.rightClicked(e => {
    // Engulfing Lightning
    if((e.block.hasTag('forge:plants') || e.block.hasTag('minecraft:flowers')) && e.hand == 'main_hand' && e.item.id == 'kubejs:engulfing_lightning'){
        e.server.schedule(5, callback => {
            let blockx = e.block.x;
            let blocky = e.block.y;
            let blockz = e.block.z;
            e.player.addItemCooldown(e.player.getHeldItem('main_hand'), 80);
            callback.server.runCommandSilent(`fill ${blockx - 8} ${blocky - 1} ${blockz - 8} ${blockx + 8} ${blocky + 1} ${blockz + 8} minecraft:air replace #forge:plants`);
            callback.server.runCommandSilent(`fill ${blockx - 8} ${blocky - 1} ${blockz - 8} ${blockx + 8} ${blocky + 1} ${blockz + 8} minecraft:air replace #minecraft:flowers`);
        })
        e.cancel();
        e.player.swing(e.getHand());
        e.player.playSound('minecraft:block.grass.break');
    };

    //Plant Poisonous Potato
    if(e.block.hasTag('forge:farmland') && e.item.id == "minecraft:poisonous_potato" && e.block.up.id == 'minecraft:air'){
        e.server.runCommandSilent(`setblock ${e.block.x} ${e.block.y + 1} ${e.block.z} minecraft:potatoes`);
        if(!e.player.isCreative) e.item.count--;
        e.player.swing(e.hand);
        e.player.playSound('minecraft:item.crop.plant');
    }

    // Plush
    if(e.block.id == "kubejs:nwither_plush" && e.player.getHeldItem('main_hand') == null){
        let facing = e.getFacing()
        e.server.runCommandSilent(`setblock ${e.block.x} ${e.block.y} ${e.block.z} ${e.block.id}[facing=${facing}]`)
    }
})