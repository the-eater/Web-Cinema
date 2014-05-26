project({
    "name":"Sample project",
    "html":"./main.html",
    "settings":{
        "size":{
            "width":300,
            "height":100
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
        "duration":4000,
        "items":[{
            "startTime":500,
            "type":"animation",
            "name":"fadeIn",
            "easing":"quadIn",
            "duration":1500,
            "on":".title"
        },{
            "startTime":1000,
            "type":"animation",
            "name":"rotate",
            "easing":"bounceOut",
            "args":{
                "start":180,
                "end":360
            },
            "duration":2000,
            "on":".web"
        }]
    }
});
