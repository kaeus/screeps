'use strict'

var language = {

  'attack': [
    'Attacking',
  ],

  'attackController': [],

  'build': [
    'Building',
  ],

  'claimController': [
    'Claiming',
  ],

  'dismantle': [
    'Dismantle',
  ],

  'drop': [],

  'harvest': [
    'Harvesting',
    'Energy:GET'
  ],

  'heal': [
    'Healing',
  ],

  'move': [],

  'pickup': [],

  'rangedAttack': [],

  'rangedHeal': [],

  'rangedMassAttack': [],

  'repair': [],

  'reserveController': [
    'Reserving',
  ],

  'suicide': [
    'RIP',
    'Sudoku'
  ],

  'transfer': [
    'XFer',
  ],

  'upgradeController': [
    'Upgrading',
  ],

  'withdraw': [],

}


language.rangedAttack = language.attack
language.rangedMassAttack = language.attack
language.rangedHeal = language.heal
language.repair = language.build

module.exports = language