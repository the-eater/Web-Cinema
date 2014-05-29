project({
    "name":"Sample project",
    "html":"<!doctype html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>\n    <style>\n        .title {\n            color:#3FC380;\n            font-family:\"Open Sans Condensed\";\n            font-size: 40px;\n        }\n\n        .web {\n            color:white;\n            background:#3FC380;\n            border-radius:50%;\n            display:inline-block;\n            padding-left:21px;\n            padding-top:22px;\n            box-sizing:border-box;\n            width:100px;\n            height:100px;\n        }\n    </style>\n</head>\n<body>\n    <span class=\"title\"><span class=\"web\">Web</span> Cinema</span>\n</body>\n</html>",
    "settings":{
        "size":{
            "width":240,
            "height":120
        }
    },
    "animations":{
        "fadeIn":function(ele, point, args){
            var start = args.start||0;
            var end = args.end||1;
            ele.style.opacity = start + ((end - start) * point);
        },
        "rotate":function(ele,point, args){
            var start = args.start||0;
            var end = args.end||360;
            ele.style.webkitTransform = "rotateX("+(start + ((end - start) * point))+"deg)";
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
