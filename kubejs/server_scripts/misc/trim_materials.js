let trimMatRegister = (name, color, translate, ingredient) => {
    let json =  {
        asset_name: name,
        description: {
            color: color,
            translate: `trim_material.${translate}`,
        },
        ingredient: ingredient,
        item_model_index: 0.6,
    };

    ServerEvents.highPriorityData(e => {
        e.addJson(`kubejs:trim_material/${name}`, json)
    })
    ServerEvents.tags('item', e => {
        e.add('minecraft:trim_materials', ingredient)
    })
};

trimMatRegister('orichalcum', '#a1bd67', 'emendatusenigmatica.orichalcum', 'emendatusenigmatica:orichalcum_ingot')
trimMatRegister('mithril', '#6acbb9', 'emendatusenigmatica.mithril', 'emendatusenigmatica:mithril_ingot')
trimMatRegister('adamantite', '#ef585b', 'emendatusenigmatica.adamantite', 'emendatusenigmatica:adamantite_ingot')