var creepTalk = require('creeptalk');

var roleMechanic = {
    /** @param {Creep} creep **/
    run: function(creep) {
    
        if (creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
            creep.say(creepTalk.harvest);
        } else if (!creep.memory.repairing && creep.carry.energy < creep.carryCapacity) {
            creep.memory.repairing = false;
            creep.say(creepTalk.harvest);
        } else if (!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
            creep.say(creepTalk.repair);
        }
        
        if (creep.memory.repairing) 
        {
            const targets = creep.room.find(FIND_STRUCTURES);
            targets.sort((a,b) => a.hits - b.hits);
            if (targets.length) {
                if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('repair');
                }
            }
        } else {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.say(creepTalk.harvest);
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
}

module.exports = roleMechanic;