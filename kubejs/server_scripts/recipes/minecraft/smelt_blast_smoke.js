ServerEvents.recipes(e => {
    /**
     * 
     * @param {Item | string} output 
     * @param {Ingredient | string} input 
     * @param {number} xp 
     * @param {string} id 
     */
    let multismelt = (output, input, xp, id) => {
        if(!id) id = output.split(':')[1]
        e.recipes.minecraft.smelting(output, input).xp(xp).id(`kubejs:minecraft/smelting/${id}`)
        e.recipes.minecraft.blasting(output, input).xp(xp).id(`kubejs:minecraft/blasting/${id}`)
    }

    multismelt('minecraft:iron_ingot', '#forge:ores/iron', 0.7, 'iron_ingot_from_ore')
    multismelt('minecraft:iron_ingot', '#forge:raw_materials/iron', 0.7, 'iron_ingot_from_raw')
    multismelt('minecraft:copper_ingot', '#forge:ores/copper', 0.7, 'copper_ingot_from_ore')
    multismelt('minecraft:copper_ingot', '#forge:raw_materials/copper', 0.7, 'copper_ingot_from_raw')
    multismelt('minecraft:gold_ingot', '#forge:ores/gold', 0.7, 'gold_ingot_from_ore')
    multismelt('minecraft:gold_ingot', '#forge:raw_materials/gold', 0.7, 'gold_ingot_from_raw')
    multismelt('minecraft:emerald', '#forge:ores/emerald', 0.7)
    multismelt('minecraft:diamond', '#forge:ores/diamond', 0.7)
    multismelt('minecraft:lapis_lazuli', '#forge:ores/lapis', 0.2)
})