// priority: -1
Platform.getInfo('emendatusenigmatica').name = 'Emendatus Enigmatica'

const ChatFormatting = Java.loadClass('net.minecraft.ChatFormatting')
const Rarity = Java.loadClass('net.minecraft.world.item.Rarity')

ItemEvents.modification(event => {
  const throwables = [
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:snowball',
    'alexsmobs:emu_egg'
  ]
  throwables.forEach(throwables => 
    event.modify(throwables, item => {
      item.maxStackSize = 64
    })
  );
  
  let redRarity = Rarity.create('red', ChatFormatting.RED)
  let redRarityItems = [
    "avaritia:infinity_block",
    "functionalstorage:creative_vending_upgrade",
    'kubejs:infinity_drop',
    "avaritia:cosmic_meatballs",
    "avaritia:ultimate_stew",
    "avaritia:endest_pearl"
  ]
  redRarityItems.forEach(i => {
    event.modify(i, item => {
      item.setRarity(redRarity)
    })
  })

  let purpleRarity = Rarity.create('purple', ChatFormatting.LIGHT_PURPLE)
  let purpleRarityItems = [
    "kubejs:engulfing_lightning"
  ]
  purpleRarityItems.forEach(i => {
    event.modify(i, item => {
      item.setRarity(purpleRarity)
    })
  })
})