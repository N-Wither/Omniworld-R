ServerEvents.recipes(e => {
    global.EE_MATERIALS.forEach(
        /**
         * @param {EEConfig} mat 
         */
        mat => {
            if(mat.toolProperties == undefined) return;

            let name = mat.name
            let material = `#forge:${mat.baseItem}s/${name}`

            e.shaped(`emendatusenigmatica:${name}_axe`, ['mm ', 'ms ', ' s '], {m: material, s: '#forge:rods/wooden'}).id(`emendatusenigmatica:${name}_axe`)
            e.shaped(`emendatusenigmatica:${name}_hoe`, ['mm ', ' s ', ' s '], {m: material, s: '#forge:rods/wooden'}).id(`emendatusenigmatica:${name}_hoe`)
            e.shaped(`emendatusenigmatica:${name}_pickaxe`, ['mmm', ' s ', ' s '], {m: material, s: '#forge:rods/wooden'}).id(`emendatusenigmatica:${name}_pickaxe`)
            e.shaped(`emendatusenigmatica:${name}_shovel`, [' m ', ' s ', ' s '], {m: material, s: '#forge:rods/wooden'}).id(`emendatusenigmatica:${name}_shovel`)
            e.shaped(`emendatusenigmatica:${name}_sword`, [' m ', ' m ', ' s '], {m: material, s: '#forge:rods/wooden'}).id(`emendatusenigmatica:${name}_sword`)
    })
})