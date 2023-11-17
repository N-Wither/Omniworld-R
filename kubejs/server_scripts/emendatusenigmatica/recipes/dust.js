ServerEvents.recipes(e => {
    let blacklist = {
        create: ['iron', 'gold', 'copper', 'zinc', 'osmium', 'tin', 'lead', 'uranium'],
        immersiveengineering: {
            hammerCrushing: ['iron', 'copper', 'gold', 'aluminum', 'osmium', 'lead', 'nickel', 'silver', 'tin', 'uranium', 'zinc'],
            crusher: ['copper', 'aluminum', 'lead', 'silver', 'nickel', 'uranium', 'constantan', 'electrum', 'steel', 'iron', 'gold', 'osmium', 'tin', 'zinc', 'silver', 'coal_coke', 'invar', 'bronze', 'brass', 'fluorite']
        },
        enderio: {
            sag: ['coal', 'iron', 'ender_pearl', 'gold', 'quartz', 'lapis', 'wood']
        },
        mekanism: {
            crusher: ['coal', 'iron', 'copper', 'gold', 'netherite', 'diamond', 'emerald', 'osmium', 'lead', 'tin', 'uranium', 'fluorite', 'bronze', 'steel', 'wood']
        }
    }

    global.EE_MATERIALS.forEach(
        /**
         * @param {EEConfig} mat
         */
        mat => {
            let name = mat.name;

            let checkedTypes = {
                ore: isIngredientExist(`#forge:ores/${name}`),
                raw: isIngredientExist(`#forge:raw_materials/${name}`),
                rawBlock: isIngredientExist(`#forge:storage_blocks/raw_${name}`),
                ingot: isIngredientExist(`#forge:ingots/${name}`),
                gem: isIngredientExist(`#forge:gems/${name}`),
                block: isIngredientExist(`#forge:storage_blocks/${name}`),
                dust: isIngredientExist(`#forge:dusts/${name}`),
            };
            let processedItems = {
                ingot: findIngredientItem(
                    `#forge:ingots/${name}`,
                    `emendatusenigmatica:${name}_ingot`
                ),
                crushed: findIngredientItem(
                    `#create:crushed_raw_materials/${name}`,
                    `emendatusenigmatica:crushed_${name}`
                ),
                nugget: findIngredientItem(
                    `#forge:nuggets/${name}`,
                    `emendatusenigmatica:${name}_nugget`
                ),
                raw: findIngredientItem(
                    `#forge:raw_materials/${name}`,
                    `emendatusenigmatica:raw_${name}`
                ),
                rawBlock: findIngredientItem(
                    `#forge:storage_blocks/raw_${name}`,
                    `emendatusenigmatica:raw_${name}_block`
                ),
                dust: findIngredientItem(`#forge:dusts/${name}`, `emendatusenigmatica:${name}_dust`),
                gem: findIngredientItem(`#forge:gems/${name}`, `emendatusenigmatica:${name}_gem`),
            };

            if(Platform.isLoaded('immersiveengineering')) {
                if(checkedTypes.ore && mat.baseItem == 'ingot'){
                    if(!blacklist.immersiveengineering.hammerCrushing.includes(name)){
                        e.custom(ImmersiveEngineering.hammerCrushing(`#forge:dusts/${name}`, `#forge:ores/${name}`))
                        .id(`emendatusenigmatica:immersiveengineering/hammercrushing/${name}_ore`)
                    }
                    if(!blacklist.immersiveengineering.crusher.includes(name)){
                        e.custom(ImmersiveEngineering.crusher(`2x #forge:dusts/${name}`, `#forge:ores/${name}`, 6000))
                        .id(`emendatusenigmatica:immersiveengineering/crusher/${name}_ore`)
                    }
                }
                if(checkedTypes.raw && mat.baseItem == 'ingot'){
                    if(!blacklist.immersiveengineering.hammerCrushing.includes(name)){
                        e.custom(ImmersiveEngineering.hammerCrushing(`#forge:dusts/${name}`, `#forge:raw_materials/${name}`))
                        .id(`emendatusenigmatica:immersiveengineering/hammercrushing/${name}_raw`)
                    }
                    if(!blacklist.immersiveengineering.crusher.includes(name)){
                        e.custom(ImmersiveEngineering.crusher(`#forge:dusts/${name}`, `#forge:raw_materials/${name}`, 6000, [`#forge:dusts/${name} 0.33`]))
                        .id(`emendatusenigmatica:immersiveengineering/crusher/${name}_raw`)
                    }
                }
                if(checkedTypes.rawBlock && mat.baseItem == 'ingot'){
                    if(!blacklist.immersiveengineering.crusher.includes(name)){
                        e.custom(ImmersiveEngineering.crusher(`12x #forge:dusts/${name}`, `#forge:storage_blocks/raw_${name}`, 54000))
                        .id(`emendatusenigmatica:immersiveengineering/crusher/${name}_raw_block`)
                    }
                }
                if(checkedTypes.ingot){
                    if(!blacklist.immersiveengineering.crusher.includes(name)){
                        e.custom(ImmersiveEngineering.crusher(`#forge:dusts/${name}`, `#forge:ingots/${name}`, 3000))
                        .id(`emendatusenigmatica:immersiveengineering/crusher/${name}_ingot`)
                    }
                }
                if(checkedTypes.gem){
                    if(!blacklist.immersiveengineering.crusher.includes(name)){
                        e.custom(ImmersiveEngineering.crusher(`#forge:dusts/${name}`, `#forge:gems/${name}`, 3000))
                        .id(`emendatusenigmatica:immersiveengineering/crusher/${name}_gem`)
                    }
                }
            }

            if(Platform.isLoaded('enderio')) {
                if(!blacklist.enderio.sag.includes(name)) {
                    e.recipes.enderio.sag_milling([processedItems.dust], `#forge:${mat.baseItem}s/${name}`)
                    .energy(2000)
                    .id(`emendatusenigmatica:enderio/sag_milling/${name}_${mat.baseItem}`)

                    if(checkedTypes.ore) {
                        if(mat.baseItem == 'ingot')
                        e.recipes.enderio.sag_milling(
                            [processedItems.dust, Item.of(processedItems.dust).withChance(0.33), Item.of('minecraft:cobblestone').withChance(0.15)],
                            `#forge:ores/${name}`
                            ).energy(2400).id(`emendatusenigmatica:enderio/sag_milling/${name}_ore`)

                        if(mat.baseItem == 'gem')
                        e.recipes.enderio.sag_milling(
                            ['2x ' + processedItems.gem, Item.of(processedItems.gem).withChance(0.25), Item.of('minecraft:cobblestone').withChance(0.15)],
                            `#forge:ores/${name}`
                            ).energy(2400).id(`emendatusenigmatica:enderio/sag_milling/${name}_ore`)
                    }
                }
            }

            if(Platform.isLoaded('mekanism')) {
                if(!blacklist.mekanism.crusher.includes(name))
                e.custom({
                    type: 'mekanism:crushing',
                    input: { ingredient: { tag: `forge:${mat.baseItem}s/${name}` } },
                    output: Item.of(`emendatusenigmatica:${name}_dust`).toJson(),
                }).id(`emendatusenigmatica:mekanism/crushing/${name}_${mat.baseItem}`);
            }
        }
    );
});
