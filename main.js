var roleMap = {
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder'),
    mechanic: require('role.mechanic')
};

var config = require('config');
var resourceBalancer = require('resourceBalancer');

var spawnName = config.spawnName;

module.exports.loop = function () {

    //resourceBalancer.findResource(Game.creeps['builder7087005']);

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
            'Spawn: ' + spawningCreep.memory.role,
            Game.spawns[spawnName].pos.x + 1,
            Game.spawns[spawnName].pos.y,
            {align: 'left', opacity: 0.8});
    }

    Memory.creepsByRole = {};

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        
        if (creep.memory.name == null) {
            creep.memory.name = name;
        }
        
        for (var role in roleMap) {
            if (creep.memory.role == role) {
                var roleProcedure = roleMap[role];
                Memory.creepsByRole[role] = Memory.creepsByRole[role] || [];
                Memory.creepsByRole[role].push(name);
                roleProcedure.run(creep, Memory.creepsByRole[role].length - 1);
            }
        }
        
        // if (creep.fatigue == 0) {
        //     creep.say('zz');
        // }

    }
}