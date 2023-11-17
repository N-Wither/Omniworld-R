ServerEvents.recipes(e => {
    e.recipes.create = {
        sandpaperPolishing: CreateRecipes.sandpaperPolishing.bind(e)
    }

    e.recipes.create.sandpaperPolishing('create:polished_rose_quartz', '#create:rose_quartz').id('create:sandpaper_polishing/rose_quartz')
})