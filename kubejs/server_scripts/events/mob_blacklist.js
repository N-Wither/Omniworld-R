EntityEvents.spawned(e => {
    let getBiome = () => {
        let pos = new BlockPos(Math.floor(e.entity.x), Math.floor(e.entity.y), Math.floor(e.entity.z))
        return e.entity.level().getBiome(pos).unwrap().left().get().location()
    }

    if(e.entity.type == 'touhou_little_maid:fairy'){
        let biome = getBiome()
        let biomeBlackList = /(alexscaves).*/
        if(e.entity.level().dimension == 'aether:the_aether' || biomeBlackList.test(biome)) {
            e.cancel()
            if(e.player) {
                e.player.tell('You cannot spawn this entity here!')
            }
        }
    }
})