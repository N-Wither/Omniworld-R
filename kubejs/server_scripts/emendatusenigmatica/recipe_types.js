// priority: 10

const RecipeTypeUtils = {
  /**
   * @param {string} itemStr 
   */
  parseItem(itemStr){
    if (itemStr.includes(" ")) {
      let splited = itemStr.split(" ");
      splited[0] = splited[0].replace("x", "");
      return splited.reverse();
    } else return [itemStr];
  }
}

// Immersive Engineering

/**
 * @typedef {{base_ingredient: Internal.JsonElement, count: number}} IEBaseIngredient
 */
const ImmersiveEngineering = {
  MOLDS: {
    GEAR: 'immersiveengineering:mold_gear',
    PLATE: 'immersiveengineering:mold_plate',
    ROD: 'immersiveengineering:mold_rod'
  },

  /**
   * @param {Internal.Ingredient} ingredient 
   * @param {number} count 
   * @returns {IEBaseIngredient}
   */
  _baseIngredient(ingredient, count){
    if(count == undefined || parseInt(count) == 1)
    return {
      base_ingredient: Ingredient.of(ingredient).toJson()
    }
    else return {
      base_ingredient: Ingredient.of(ingredient).toJson(),
      count: parseInt(count)
    }
  },

  /**
   * @param {IEBaseIngredient | string} ingredient 
   * @returns 
   */
  _checkIngredient(ingredient){
    if(typeof ingredient == 'string'){
      ingredient = RecipeTypeUtils.parseItem(ingredient)
      return ImmersiveEngineering._baseIngredient(ingredient[0], ingredient[1])
    }
    else return ingredient
  },

  /**
   * @param {string} itemstr 
   * @returns 
   */
  _chanceItem(itemstr){
    let out = {
      output: {},
      chance: 1.0,
    };
    if (itemstr.includes(" ")) {
      let splited = itemstr.split(" ");
      if (isNaN(parseInt(splited[0]))) {
        out.output = ForgeItem(splited[0]);
        out.chance = parseFloat(splited[1]);
      } else if (isNaN(parseFloat(splited[1])) && splited.length == 3) {
        out.output = ForgeItem([splited[0], splited[1]].join(' '))
        out.chance = parseFloat(splited[2]);
      } else {
        out.output = ForgeItem(itemstr)
      }
    } else out.output = ForgeItem(itemstr)

    return out;
  },

  /**
   * 
   * @param {IEBaseIngredient | string} result 
   * @param {IEBaseIngredient | string} input 
   * @param {string} mold 
   * @param {number} energy 
   * @returns 
   */
  metalPress(result, input, mold, energy){
    result = ImmersiveEngineering._checkIngredient(result)
    input = ImmersiveEngineering._checkIngredient(input)
    return {
      type: 'immersiveengineering:metal_press',
      energy: energy || 2400,
      input: input,
      mold: mold,
      result: result,
    }
  },

  /**
   * 
   * @param {string} result 
   * @param {string} input 
   * @returns 
   */
  hammerCrushing(result, input){
    return {
      type: 'immersiveengineering:hammer_crushing',
      input: ForgeItem(input),
      result: ForgeItem(result)
    }
  },

  /**
   * @param {IEBaseIngredient | string} result 
   * @param {string} input 
   * @param {string[]} secondaries 
   * @param {number} energy 
   */
  crusher(result, input, energy, secondaries){
    result = ImmersiveEngineering._checkIngredient(result)
    let out = {
      type: 'immersiveengineering:crusher',
      input: ForgeItem(input),
      result: result,
      energy: energy || 3000,
      secondaries: []
    }

    if(secondaries) out.secondaries = secondaries.map(entry => ImmersiveEngineering._chanceItem(entry))

    return out
  },
};

// console.log(ImmersiveEngineering.crusher(`#forge:dusts/iron`, `#forge:raw_materials/iron`, 6000, [`#forge:dusts/iron 0.33`]))