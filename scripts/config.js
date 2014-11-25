　require.config({
      baseUrl: "scripts",
　　　 paths: {
　　　　　　"jquery": "component/jquery.min",
　　　　　　"canjs": "component/can",
　　　　}
　　});


/* Module begin */
require(['test/say'],function(action){
    action.say();
    action.getDom()
})

