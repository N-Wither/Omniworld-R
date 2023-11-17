// priority: 99

/**
 * @param {string} tag 
 * @returns {string[]}
 */
function splitTag(tag){
    let tagList = []
    let splitedTag = tag.split('/')
    tagList.push(splitedTag[0])
    for(let i = 1; i< splitedTag.length; i++) {
        tagList.push(tagList[i-1] + '/' + splitedTag[i])
    }
    return tagList
}

/**
 * @param {string | string[]} tags 
 * @param {string | string[]} target 
 */
function advancedAdd(tags, target){
    function temp_addTag(tag){
        if(tag.includes('/')){
            let tagList = splitTag(tag)
            tagList.forEach(singleTag => {
                this.add(singleTag, target)
            })
        }else this.add(tag, target)
    }
    let addTag = temp_addTag.bind(this)
    if(typeof tags == 'string'){
        addTag(tags)
    }else{
        tags.forEach(tag => {
            addTag(tag)
        })
    }
}

/**
 * @param {string | string[]} tags 
 * @param {string | string[]} target 
 */
function advancedRemove(tags, target){
    function temp_removeTag(tag){
        if(tag.includes('/')){
            let tagList = splitTag(tag)
            tagList.forEach(singleTag => {
                this.remove(singleTag, target)
            })
        }else this.remove(tag, target)
    }
    let removeTag = temp_removeTag.bind(this)
    if(typeof tags == 'string'){
        removeTag(tags)
    }else{
        tags.forEach(tag => {
            removeTag(tag)
        })
    }
}

const TOME = Item.of('eccentrictome:tome', '{"eccentrictome:mods":{ae2:{0:{Count:1b,id:"ae2:guide"}},alexscaves:{0:{Count:1b,id:"alexscaves:cave_book"}},alexsmobs:{0:{Count:1b,id:"alexsmobs:animal_dictionary"}},apotheosis:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},bloodmagic:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bloodmagic:guide"}}},buildinggadgets2:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}}},cyclic:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"cyclic:guide_book"}}},enderio:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enderio:guide"}}},epicsamurai:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"epicsamurai:samurai_guide"}}},immersiveengineering:{0:{Count:1b,id:"immersiveengineering:manual"}},industrialforegoing:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}}},irons_spellbooks:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}}},laserio:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"laserio:laseriobook"}}},modularrouters:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"modularrouters:book"}}},mysticalagriculture:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"mysticalagriculture:guide"}}},naturesaura:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}}},occultism:{0:{Count:1b,id:"occultism:dictionary_of_spirits",tag:{"modonomicon:book_id":"occultism:dictionary_of_spirits"}}},patchouli:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"patchouli:omniguide"}}},pneumaticcraft:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}}},powah:{0:{Count:1b,id:"powah:book"}},productivebees:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"productivebees:guide"}}},rftoolsbase:{0:{Count:1b,id:"rftoolsbase:manual"}},sebastrnlib:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sebastrnlib:sebastrn_mods_guide_book"}}},solcarrot:{0:{Count:1b,id:"solcarrot:food_book"}},touhou_little_maid:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"touhou_little_maid:memorizable_gensokyo"}}}},"eccentrictome:version":1}')