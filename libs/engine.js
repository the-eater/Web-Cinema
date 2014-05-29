var Easings = require('./easings.js')
module.exports = {
    load:function(projFile){
        var body = new Function('project',projFile);
        var proj;
        body(function(project){
            proj = project;
        });
        return proj;
    },
    createFrame:function(window,time,proj){
        var items = proj.storyboard.items.filter(function(a){
            return a.startTime <= time && (a.startTime + a.duration) >= time;
        });
        items.forEach(function(a){
            if(a.type == "animation"){
                var on = window.document.querySelectorAll(a.on);
                for(var i=0;i<on.length;i++){
                    proj.animations[a.name](on[i],Easings[a.easing||"linear"]((time - a.startTime) / a.duration),a.args || {});
                }
            }
        });
    },
    createNew:function(){
        return {
            "name":"New project",
            "html":"Hello world!",
            "settings":{
                "size":{
                    "width":1920,
                    "height":1080
                }
            },
            "animations":{},
            "storyboard":{
                "duration":3000,
                "items":[]
            }
        };
    }
}
