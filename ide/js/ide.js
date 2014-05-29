var fs = require('fs');
var WebCinema = require('../libs/index.js')

var projPath = false,
    proj = false;

$(function(){
    if(location.hash !== 'new'){
        var path = unescape(location.hash.substr(1));
        console.log(path);
        fs.exists(path,function(does){
            if(does){
                fs.readFile(path,function(err,data){
                    if(!err){
                        proj = WebCinema.Engine.load(data.toString('utf8'));
                        projPath = path;
                        var recent = JSON.parse(localStorage['recent']||"[]")||[];
                        if(recent.length > 4) recent.pop();
                        recent.unshift(path);
                        localStorage['recent'] = JSON.stringify(recent);
                        initUI();
                    }else{
                        alert('Error opening project: ' + err.message);
                        location = "./index.html";
                    }
                });
            }else{
               if(confirm('Project doesn\'t exist, create new project in that location instead?')){
                   projPath = path;
                   proj = WebCinema.Engine.createNew();
               }else{
                   location = "./index.html";
               }
            }
        });
    }else{
        proj =    WebCinema.Engine.createNew();
        initUI();
    }
});

function initUI(){
    $('#name').val(proj.name);
    Object.keys(proj.animations).forEach(function(ani){
        $('.collection').append($('<div class="item">').text('.' + ani).data({
            type:'animation',
            name:ani
        })).click(clickItem);
    });
};

function clickItem(){
    var type = $(this).data('type');
    if(type == "animation"){
        
    }
}