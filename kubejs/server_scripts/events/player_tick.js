let formatTime = (time) => {
    let min = Math.floor(time / 1200)
    let sec = Math.floor((time - min * 1200) / 20)
    let cs = time % 20 * 5
    if(time >= 1200)
    return `${min}:${sec.toString().padStart(2, '0')}`
    else
    return `${sec.toString().padStart(2, '0')}.${cs.toString().padStart(2, '0')}`
}

PlayerEvents.tick(e => {
    let effects = e.player.getActiveEffects()
    let effectsInfo = {}
    // let effectsIcon = {}
    let y = 64
    let count = 0

    if(effects.length == 0) return;

    if(e.player.persistentData.effectCount != null){
        if(e.player.persistentData.effectCount != effects.length)
        for(let i = 0; i < e.player.persistentData.effectCount + 1; i++) {
            effectsInfo[`effect_${i}`] = {
                type: 'text',
                text: '',
                alignX: 'left',
                alignY: 'top',
                x: 24,
                y: y + i * 14
            }
            // effectsIcon[`effect_icon_${i}`] = {remove: true}
        }
    }

    e.player.paint(effectsInfo)

    effects.forEach(eff => {
        let info = {
            type: 'text',
            alignX: 'left',
            alignY: 'top',
            text: '',
            x: 24,
            y: y,
            draw: 'ingame',
            shadow: true,
        }
        let duration = eff.duration == -1 ? '∞' : eff.duration
        let lvl = eff.amplifier == 0 ? '' : Component.translate(`enchantment.level.${eff.amplifier + 1}`).getString()
        let text = `${eff.effect.displayName.getString()}${lvl} ${formatTime(duration)}`

        if(duration < 200) {text = '§c' + text}
        info.text = text
        effectsInfo[`effect_${count}`] = info

        // let id = eff.effect.descriptionId.replace('effect.', '').replace('.', ':mob_effect/')
        // let path = 'minecraft:gui/bars'

        // let icon = {
        //     type: 'atlas_texture',
        //     texture: path,
        //     alignX: 'left',
        //     alignY: 'top',
        //     draw: 'ingame',
        //     x: 2,
        //     y: y
        // }
        // effectsIcon[`effect_icon_${count}`] = icon

        count += 1
        y += 14
    })

    e.player.paint(effectsInfo)
    // e.player.paint(effectsIcon)
    e.player.persistentData.effectCount = count
    // e.player.paint(effectsInfo)
})