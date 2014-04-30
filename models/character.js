var uuid = require("node-uuid");
var assert = require("assert");

var Character = function(args) {
    args = args || {};
    
    assert.ok(args.name, "Need a name for character.");

    this.uuid = args.uuid || uuid.v1();
    this.name = args.name;

    return this;
};

module.exports = Character;