var Harness

if (typeof process != 'undefined' && process.pid) {
    require('Task/Test/Run/NodeJSBundle')
    
    Harness = Test.Run.Harness.NodeJS
} else
    Harness = Test.Run.Harness.Browser.ExtJS

    
Harness.my.configure({
    title : 'Advanced attribute test suite',

    preload : [
        'jsan:Task.Joose.Core',
        'Task.JooseX.Attribute.Bootstrap'
    ]
})


Harness.my.start(
    '010_trigger.t.js',
    '020_lazy.t.js',
    '030_combined.t.js',
    '100_all_in_one.t.js'
)
