export({
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
                var end = args.end||0;
                ele.style.opacity = (end - start) * point;
            }
        }
    },
    "storyboard":{
        "length":1000,
        "items":[{
            "type":"animation"
            "name":"fadeIn",
            "easing":"easeIn",
            "duration":500,
            "on":".title"
        }]
    }
});
