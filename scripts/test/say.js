define(['canjs', 'jquery'], function(can, $){
    function sayHello(){console.log('hello world')}
    return {
        'say': sayHello,
        'getDom':function(){console.log($('#main'));console.log(can)}
    }
})