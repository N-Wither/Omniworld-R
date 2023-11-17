ServerEvents.recipes(e => {
    e.recipes.mekanism = {
        enriching: function (output, input) {
            let recipe = e.custom({
                type: 'mekanism:enriching',
                input: {ingredient: Ingredient.of(input).toJson()},
                output: Item.of(output).toJson(),
            });
            return recipe
        },
    };

    e.recipes.mekanism.enriching('create:polished_rose_quartz', '#create:rose_quartz').id('createaddition:compat/mekanism/rose_quartz_enriching');
});