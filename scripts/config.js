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

can.fixture("DELETE /description/{id}", function(todo) {
    return {};
});
var id=5;
can.fixture("POST /description", function(){
  return {id: (id++)}
});

can.fixture("PUT /description/{id}", function(){
  return {};
});

Todo = can.Model.extend({
        findAll : "GET /description",
        findOne : "GET /description/{id}",
        create  : "POST /description",
        update  : "PUT /description/{id}",
        destroy: 'DELETE /description/{id}'
    },{});



/*
    var t = Todo.findAll({}, function(ttt){
        $('#main').html(can.view('todoList', {todos:ttt}))
    })

can.view('todoList', {todos: Todo.findAll()}).then(function(frag){
    $('#main').html(frag)
})

can.view('todoList', Todo.findAll()).then(function(frag){
    $('#main').html(frag)
})
*/

var Todos = can.Control({
        defaults: {
            view: '../tpl/id_list.ejs',  //relative to scripts dir
            customevent: 'click'
        }
    },{
    init: function(el, options) {
        var self = this;
        this.on('click', 'testClicked');
        Todo.findAll({}, function(todos) {
            //self.element.html(can.view(this.options.view, todos));  error usage, <this> point to Todo object
            self.element.html(can.view(self.options.view, todos));
            self.todosList = todos
        });
    },
    testClicked:function(el, ev){
        console.log('testClicked')
    },
    'li p {customevent}': function(element, ev) {
        console.log('You clicked ' + element.text() + this.options.customevent);
    },
    'li .destroy {customevent}': function(el, ev) {
        var li = el.closest('li'),
        todo = li.data('todo');
        todo.destroy();
    },
  '{Todo} destroyed': function( Todo, ev, todoDestroyed ) {
    alert('destroyed')
    var index = this.todosList.indexOf( todoDestroyed );
    this.element.children( ':nth-child(' + ( index + 1 ) + ')' ).remove();
  },
  '{Todo} updated': function(Todo, ev, todo ) {
    console.log('update', todo)
  },
  '{Todo} created': function(Todo, ev, todo ) {
    console.log('created', todo)
  },
  '{clean} click': function(el, ev){
        var t = new Todo({description:'aaaaaa'})
        t.save()
        console.log(t)
  }

});

//Todo.bind('created', function( ev, todo ) {
    //console.log('create', todo)
//})

//var todosList = new Todos('#main', {});  use default template
var todosList = new Todos('#main', {view: 'todoList2'});

})

