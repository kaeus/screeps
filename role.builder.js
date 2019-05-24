var creepTalk = require('creeptalk');

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep, i) {
        if (creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say(creepTalk.harvest);
        }
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say(creepTalk.build);
        }

        if (creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (targets.length) {
                var constructionSiteIndex = i % targets.length
                if (creep.build(targets[constructionSiteIndex]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[constructionSiteIndex], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }

    }
};

module.exports = roleBuilder;