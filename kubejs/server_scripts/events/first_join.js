PlayerEvents.loggedIn(e => {
    if(e.player.persistentData.firstJoin != true) {
        e.player.give(TOME)
        e.player.give('5x minecraft:bread')
        e.player.give('sophisticatedbackpacks:backpack')
        e.player.persistentData.firstJoin = true
    }
})