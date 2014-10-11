Node IR
==============

Provides JavaScript events for the Banana Pi IR receiver
--------------

Based on the system events.

How to use it:

Just create a IR object and ask it to display all events

```javaScript
    var IR = require('node-ir');
    var ir = new IR();
    ir.displayEvents();
    ir.on('key', function (code) {
    	console.log(code);
    });
```

Start the script and watch the key number appearing on the console when you press it on your remote.

You can define events to be emitted on key press by giving the IR constructor a configuration object. (This example is on the config folder)

```JSON

{
    "26": "ok",             // Will emit the event "ok" on key 26 press
    "89": "power",
    "5": "play",
    "82": {                 // Will emit the event "number" on key 82 press
        "type": "number",   // With the value 1
        "value": 1
    },
    "80": {                 // Will emit the same event as before, but
        "type": "number",   // With the value 2
        "value": 2
    },
    "16": {
        "type": "number",
        "value": 3
    },
    //...
    //and so on
    //...
    "12": {
        "type": "number",
        "value": 9
    },
    "15": {
        "type": "number",
        "value": 0
    }
}

```

Now you can use the IR object with some configuration

```JavaScript
var IR = require('node-ir');
var ir = IR(myAwesomeConfVariable);

ir.on('ok', function () {
    console.log("Key OK pressed");
});

ir.on('number', function (value) {
    console.log("Button " + value + "of the numeric keypad pressed");
});

```

One more thing. You can stop displaying all the events by using

```JavaScript
ir.hideEvents();
```

Do whatever you want with this module, I don't care.
