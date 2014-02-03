var uuid = require("node-uuid");
var assert = require("assert");

var Location = function(args) {
    args = args || {};
    
    assert.ok(args.name && args.description, "Need a name and description");

    this.uuid = args.uuid || uuid.v1();
    this.name = args.name;
    this.description = args.description;

    return this;
};

module.exports = Location;