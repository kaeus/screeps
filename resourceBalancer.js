var refreshIntervals = {
    room: 100,
    object: 10
};


var resourceBalancer = {
    findResource: function(room) {
        return this.resourceList(room, FIND_SOURCES);
    },
    resourceList: function(room, findConst) {
        var cache = this.createMemoryCache(room, findConst);
        
        return cache.entries;
    },
    createMemoryCache: function(room, object) {
        var gameTime = Game.time;
        var roomCache = Memory.findCache[room.name];
        if (roomCache == null || (gameTime - roomCache.createdAt) > refreshIntervals.room) {
            roomCache = Memory.findCache[room.name] = {
                createdAt: gameTime,
            }
        }
        
        var objectCache = Memory.findCache[room.name][object];
        if (objectCache == null || (gameTime - objectCache.createdAt) > refreshIntervals.object) {
            objectCache = Memory.findCache[room.name][object] = {
                createdAt: gameTime,
                entries: room.find(object),
            }
        }
        
        return objectCache;
    },
};

module.exports = resourceBalancer;