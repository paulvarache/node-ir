var spawn = require('child_process').spawn;
var events = require('events');
var util = require('util');

function IR (config) {
    events.EventEmitter.call(this);
    this.config = config || require('./config/binding.json');
    this.showAll = false;
    this.ir_process = spawn(__dirname+'/lib/test', ['/dev/input/event0']);
    this.ir_process.stdout.on('data', this.sendEvent.bind(this));
}

util.inherits(IR, events.EventEmitter);

IR.prototype.sendEvent = function (buffer) {
    var key = buffer.toString(),
        ev = this.config[key];
    if (ev) {
        if (ev.type) {
            this.emit(ev.type, ev.value);
        } else {
            this.emit(ev);
        }
    }
    if (this.showAll) {
        this.emit('key', key);
    }
}

IR.prototype.displayEvents = function () {
    this.showAll = true;
}

IR.prototype.hideEvents = function () {
    this.showAll = false;
}

module.exports = IR;
