/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('config');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    spawnName: 'MainBase',
    spawnNumbers: {
        harvester: 2,
        builder: 2,
        upgrader: 2
    },
    role_parts: {
        harvester: [WORK,CARRY,MOVE],
        builder: [WORK,CARRY,MOVE],
        upgrader: [WORK,CARRY,MOVE]
    }
};