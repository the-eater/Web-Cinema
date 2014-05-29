var fs = require('fs');
var async = require('async');
var WebCinema = require('../libs/index.js');
$(function(){
    var recent = localStorage['recentProjects']&&JSON.parse(localStorage['recentProjects'])||[fs.realpathSync('./sample/main.js')];
    
    async.eachLimit(recent, 2, function(path){
        fs.readFile(path, function(err, data){
            if(err) return;
            var json = data.toString('utf8');
            try{
            var project = WebCinema.Engine.load(json);
            }catch(e){};
            if(!project) return;
            $('<div>').text(project.name).click(function(){
                  location = "./ide.html#" + escape(path);
            }).addClass('button').appendTo('.recent');
        });
    });
    
    $('.open').click(function(){
        $('#open_dialog').click();
    });
    
    
    $('.create').click(function(){
        location = "./ide.html#new";
    });
    
    $('#open_dialog').change(function(){
        var file = $('#open_dialog')[0].files[0];
        location = "./ide.html#" + escape(file.path);
    });
});