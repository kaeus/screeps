'use strict'

var emoji_language = {

  'attack': [
    '🔥💀💀🔥',
    '☠🔥💀💥',
    '💀💥🔥☠',
  ],

  'attackController': [],

  'build': [
    '🚧 Building',
  ],

  'claimController': [
    '✊✊✊✊✊'
  ],

  'dismantle': [
    '💣💣💣💣💣',
  ],

  'drop': [],

  'harvest': [
    '🔨 Harvesting'
  ],

  'heal': [
    '⚕🚑⚕🚑⚕🚑⚕',
    '🚑⚕🚑⚕🚑⚕🚑',
    '⚕⚕⚕⚕⚕⚕⚕⚕⚕⚕',
  ],

  'move': [],

  'pickup': [],

  'rangedAttack': [],

  'rangedHeal': [],

  'rangedMassAttack': [],

  'repair': [],

  'reserveController': [
    '🔒🔒🔒',
  ],

  'suicide': [
    '💤💤💤💤💤',
    '♻️♻️♻️♻️♻️'
  ],

  'transfer': [
    '🎁🎁🎁',
  ],

  'upgradeController': [
    '💗☯☸🙌',
    '🙌☯💗☸',
    '☯🙌☸💗',
  ],

  'withdraw': [],

}


emoji_language.rangedAttack = emoji_language.attack
emoji_language.rangedMassAttack = emoji_language.attack
emoji_language.rangedHeal = emoji_language.heal
emoji_language.repair = emoji_language.build

module.exports = emoji_language