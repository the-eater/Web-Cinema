project({
    "name":"Sample project",
    "html":"./main.html",
    "settings":{
        "size":{
            "width":240,
            "height":120
        }
    },
    "animations":{
        "fadeIn":{
            "preferredDuration":1000,
            "apply":function(ele, point, args){
                var start = args.start||0;
                var end = args.end||1;
                ele.style.opacity = start + ((end - start) * point);
            }
        },
        "rotate":{
            "apply":function(ele,point,args){
                var start = args.start||0;
                var end = args.end||360;
                ele.style.webkitTransform = "rotateX("+(start + ((end - start) * point))+"deg)";
            }
        }
    },
    "storyboard":{
        "duration":2000,
        "items":[{
            "startTime":0,
            "type":"animation",
            "name":"rotate",
            "easing":"linear",
            "args":{
                "start":0,
                "end":360
            },
            "duration":2000,
            "on":".web"
        }]
    }
});
