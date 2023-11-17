ServerEvents.recipes(e => {
    /**
     * 
     * @param {Special.Item} item 
     * @param {number} multiplier 
     * @returns 
     */
    let IeFertilizer = (item, multiplier) => ({
        type: 'immersiveengineering:fertilizer',
        growthModifier: multiplier,
        input: {
            item: item
        }
    })

    e.custom(IeFertilizer('industrialforegoing:fertilizer', 1.25))
    e.custom(IeFertilizer('mysticalagriculture:fertilized_essence', 1.3))
    e.custom(IeFertilizer('mysticalagriculture:mystical_fertilizer', 2))
})