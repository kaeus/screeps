var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var config = require('config');

var spawnName = config.spawnName;

module.exports.loop = function () {

    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    for (var role in config.spawnNumbers) {
        var spawnLimit = config.spawnNumbers[role];
        var currentUnits = _.filter(Game.creeps, (creep) => creep.memory.role == role);
        var roleParts = config.role_parts[role];
        
        if (currentUnits.length < spawnLimit && roleParts && !Game.spawns[spawnName].spawning) {
            var newName = role + Game.time;
            console.log('Attempting to spawn another ' + role);
            Game.spawns[spawnName].spawnCreep(config.role_parts[role], newName, { memory: { role: role }});
        }
    }

    if (Game.spawns[spawnName].spawning) {
        var spawningCreep = Game.creeps[Game.spawns[spawnName].spawning.name];
        Game.spawns[spawnName].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns[spawnName].pos.x + 1,
            Game.spawns[spawnName].pos.y,
            {align: 'left', opacity: 0.8});
    }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}