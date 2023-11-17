//priority: 11

/**
 * 
 * @param {Internal.TagEntry | string} tag 
 * @returns 
 */
const ForgeItem = (item) => {
    let result = {}
    if(item.startsWith('#')) {
        result.tag = item.substring(1)
    }
    else if (item.includes(' ')) {
        let splited = item.split(' ')
        result.count = parseInt(splited[0])
        if(splited[1].startsWith('#')) {
            result.tag = splited[1].substring(1)
        }
        else {
            result.item = splited[1]
        }
    }
    else result.item = item
    return result
}