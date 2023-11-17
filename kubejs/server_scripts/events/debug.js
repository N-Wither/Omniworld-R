PlayerEvents.chat(e => {
    if(e.message == '-debug'){
        // e.player.tell(Client.languageManager.selected)
        e.cancel()
    }
})