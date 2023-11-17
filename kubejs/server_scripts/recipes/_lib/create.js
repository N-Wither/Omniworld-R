// priority: 15

const CreateRecipes  = {
    /**
     * 
     * @param {OutputItem_} output 
     * @param {InputItem_} input 
     * @returns {Internal.RecipeJS}
     */
    sandpaperPolishing(output, input) {
        let recipe = this.custom({
            type: 'create:sandpaper_polishing',
            ingredients: [Ingredient.of(input).toJson()],
            results: [Item.of(output).toJson()]
        })

        return recipe
    }
}