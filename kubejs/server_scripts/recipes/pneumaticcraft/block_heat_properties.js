ServerEvents.recipes(e => {
    e.custom({
        type: 'pneumaticcraft:heat_properties',
        block: 'emendatusenigmatica:uranium_block',
        temperature: 438,
        thermalResistance: 500,
        transformCold: {
            block: 'emendatusenigmatica:lead_block',
        },
        heatCapacity: 500000,
    });
});
