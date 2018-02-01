use myGame

db.monsters.insert({
    "name": "werewolf",
    "health": 7,
    "lastFought": new Date(2017, 20, 04),
    "attacks": ["bite", "claw", "eat"],
    "stats": { "attack": 8, "defense": 6 }
}, {
    "name": "vampire",
    "health": 9,
    "lastFought": new Date(2017, 05, 01),
    "attacks": ["bite", "suck", "drink"],
    "stats": { "attack": 7, "defense": 5 }
})

function monsters(name, health, lastFought, attacks, stats, db) {
    db.monsters.insert({
        "name": "godzilla",
        "health": "8",
        "lastFought": new Date(2016, 02, 01),
        "attacks": ["stomp", "bite", "pull apart"],
        "stats": { "attack": 10, "defense": 10 }
    });

    console.log(db.monsters.find());
    db.monsters.find({ "name": "vampire" })
    db.monsters.find({ "attacks": "bite" }, { "multi": true })
    db.monsters.find({ "stats.defense": 7 });
    
}
var mongo = function(db) {
  db.monsters.find({"stats.attack": {"lt": 10}}, {"multi": true})
  db.monsters.find({"level": {"gte": 5, "lte":10}}, {"multi": true})
  db.monsters.find({"attacks": {"ne": "bite"}}, {"multi": true})
  db.monsters.find({"level": {"lt": 6}}, {"name": true, "level": true, "health": true, "_id" :false})
  db.monsters.find({"stats.attack": {"gt": 10, "lt": 20}}, {"health": false, "style" : false}, {"multi": true})
  db.monsters.find().count() 
  db.monsters.find().sort({"level": -1}) 
};

