　require.config({
      baseUrl: "scripts",
　　　 paths: {
　　　　　　"jquery": "component/jquery.min",
　　　　　　"canjs": "component/can",
　　　　}
　　});




/* Module begin */
require(['jquery', 'canjs'],function($, can){

var todo_list = [
    {
        id : 1,
        description : "Han Han",
    },
    {
        id : 2,
        description : "Sandy Han",
    },
    {
        id : 3,
        description : "Meimei Han",
    },
    {
        id : 4, 
        description : "Meimei SSSS"
    }
];

can.fixture("GET /description/4", function() {
    return todo_list[3];
});

can.fixture("GET /description", function() {
    return todo_list;
});


var Todo = can.Model({
        findAll : "GET /description",
        findOne : "GET /description/{id}"
    },{});
/*
    var t = Todo.findAll({}, function(ttt){
        $('#main').html(can.view('todoList', {todos:ttt}))
    })

can.view('todoList', {todos: Todo.findAll()}).then(function(frag){
    $('#main').html(frag)
})
*/
can.view('todoList', Todo.findAll()).then(function(frag){
    $('#main').html(frag)
})


})

