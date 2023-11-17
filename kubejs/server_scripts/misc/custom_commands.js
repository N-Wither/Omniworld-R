ServerEvents.commandRegistry(e => {
    const {commands: Commands} = e
    e.register(
        Commands.literal('purge').executes(ctx => {
            ctx.source.server.runCommandSilent('kill @e[type=item]')
            if(ctx.source.isPlayer()) {
                let player = ctx.source.player.name.getString()
                ctx.source.server.runCommandSilent(`tellraw ${player} {"text": "${Component.translate('kubejs.server_events.purge').getString()}"}`)
            }

            return 1
        })
    )
})