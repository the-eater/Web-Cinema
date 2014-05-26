var Easings = require('./easings.js')
module.exports = {
    createFrame:function(window,time,proj){
        var items = proj.storyboard.items.filter(function(a){
            return a.startTime <= time && (a.startTime + a.duration) >= time;
        });
        items.forEach(function(a){
            if(a.type == "animation"){
                var on = window.document.querySelectorAll(a.on);
                for(var i=0;i<on.length;i++){
                    proj.animations[a.name].apply(on[i],Easings[a.easing||"linear"]((time - a.startTime) / a.duration),a.args || {});
                }
            }
        });
    }
}
