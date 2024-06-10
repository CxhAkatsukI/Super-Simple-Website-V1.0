// var File_Button = document.getElementById("File_Button");
// File_Button.onmouseenter = function () {
//     //console.log("mouse is entering File_Button")
//     File_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
// }
// File_Button.onmouseleave = function () {
//     //console.log("mouse is leaving File_Button")
//     File_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
// }
// //鼠标移入和移除File按钮

// var Edit_Button = document.getElementById("Edit_Button");
// Edit_Button.onmouseenter = function () {
//     //console.log("mouse is entering Edit_Button")
//     Edit_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
// }
// Edit_Button.onmouseleave = function () {
//     //console.log("mouse is leaving Edit_Button")
//     Edit_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
// }
// //鼠标移入和移除Edit按钮


// var View_Button = document.getElementById("View_Button");
// View_Button.onmouseenter = function () {
//     //console.log("mouse is entering View_Button")
//     View_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
// }
// View_Button.onmouseleave = function () {
//     //console.log("mouse is leaving View_Button")
//     View_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
// }
// //鼠标移入和移除View按钮

// var Special_Button = document.getElementById("Special_Button");
// Special_Button.onmouseenter = function () {
//     //console.log("mouse is entering Special_Button")
//     Special_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
// }
// Special_Button.onmouseleave = function () {
//     //console.log("mouse is leaving Special_Button")
//     Special_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
// }
// //鼠标移入和移除Special按钮


// var Welcome_Button = document.getElementById("Welcome_Button");
// Welcome_Button.onmouseenter = function () {
//     //console.log("mouse is entering Welcome_Button")
//     Welcome_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
// }
// Welcome_Button.onmouseleave = function () {
//     //console.log("mouse is leaving Welcome_Button")
//     Welcome_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
// }
// //鼠标移入和移除Welcome按钮

// var Infinite_HD_Button = document.getElementById("Infinite_HD_Button");
// Infinite_HD_Button.onmouseenter = function () {
//     //console.log("mouse is entering Infinite_HD_Button")
//     Infinite_HD_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
// }
// Infinite_HD_Button.onmouseleave = function () {
//     //console.log("mouse is leaving Infinite_HD_Button")
//     Infinite_HD_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
// }
// //鼠标移入和移除Infinite_HD按钮

// var Trash_Button = document.getElementById("Trash_Button");
// Trash_Button.onmouseenter = function () {
//     //console.log("mouse is entering Trash_Button")
//     Trash_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
// }
// Trash_Button.onmouseleave = function () {
//     //console.log("mouse is leaving Trash_Button")
//     Trash_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
// }
// //鼠标移入和移除Trash按钮

// var MonitorMargin = document.getElementById("MonitorMargin")
// var Screen = document.getElementById("Screen")

var Zindex = 0

//以下JavaScripts表示对File按钮的按压操作
File_Button.addEventListener('mouseenter', function () {
    File_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
    var File_Button_Menu = document.createElement('div');
    console.log(File_Button_Menu)
    var File_Button_Subbox = document.createElement('div');
    var File_Button_Content = document.createTextNode('About');
    File_Button_Menu.appendChild(File_Button_Subbox);
    File_Button_Subbox.appendChild(File_Button_Content)
    var id = document.createAttribute('id');
    id.value = "File_Button_Menu";
    File_Button_Menu.setAttributeNode(id);
    MonitorMargin.appendChild(File_Button_Menu)
    File_Button_Subbox.style.width = "100px"
    File_Button_Subbox.style.height = "28px"
    File_Button_Subbox.style.backgroundColor = "White"
    File_Button_Subbox.style.backgroundSize = "cover"
    File_Button_Subbox.style.textAlign = "left"
    File_Button_Subbox.style.float = "left"
    File_Button_Subbox.style.position = "relative"
    File_Button_Subbox.style.left = "18px"
    File_Button_Subbox.style.top = "-69px"
    File_Button_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
    File_Button_Subbox.style.fontSize = "22px"
    //对subbox的属性进行设置
    File_Button_Menu.style.width = "191px"
    File_Button_Menu.style.height = "33px"
    File_Button_Menu.style.backgroundImage = "url(./Library/MenuContent.jpg)"
    File_Button_Menu.style.backgroundSize = "127%"
    File_Button_Menu.style.textAlign = "left"
    File_Button_Menu.style.position = "relative"
    File_Button_Menu.style.left = "55px"
    File_Button_Menu.style.top = "30px"
    //对Menu的属性进行设置
})
//File按钮的移入操作

File_Button.addEventListener('mouseleave', function () {
    File_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
    var File_Button_Menu = document.getElementById("File_Button_Menu")
    var Mouse_Entering_Status = 0
    File_Button_Menu.addEventListener('mouseenter', function () {
        Mouse_Entering_Status = 1
        console.log("1")
    })
    setTimeout(function () {
        if (Mouse_Entering_Status == 1) {
            File_Button_Menu.addEventListener('mouseleave', function () { File_Button_Menu.parentNode.removeChild(File_Button_Menu) })
        }
        //当鼠标移入File_Button_Menu时，如果直接离开，清除File_Button_Menu元素；如果点击，那么在响应后清除File_Button_Menu元素
        if (Mouse_Entering_Status == 0) {
            console.log(Mouse_Entering_Status)
            File_Button_Menu.parentNode.removeChild(File_Button_Menu)
        }
        //当鼠标移出File_Button但未进入File_Button_Menu，直接清除该元素
    }, 10)
})
//File按钮的移出操作

File_Button.addEventListener('mouseenter', function () {
    var File_Button_Menu = document.getElementById("File_Button_Menu")
    console.log(File_Button_Menu)
    File_Button_Menu.addEventListener('click', function () {
        console.log("File_Button_Menu has been clicked");
        if (document.getElementById("File_Button_Menu_Window") != null) {
            var Former_File_Button_Menu_Window = document.getElementById("File_Button_Menu_Window");
            Former_File_Button_Menu_Window.parentNode.removeChild(Former_File_Button_Menu_Window)
        }
        //删除此前创建的File_Button_Menu窗口
        var File_Button_Menu_Window_Layer = document.createElement('div')
        File_Button_Menu_Window_Layer.Zindex = Zindex + 1
        Zindex++
        //创建窗口图层
        var File_Button_Menu_Window = document.createElement('div');
        File_Button_Menu_Window.id = "File_Button_Menu_Window"
        //创建窗口体
        var File_Button_Menu_Window_Subbox = document.createElement('div');
        //创建窗口内部
        var File_Button_Menu_Window_Close_Button = document.createElement('div');
        //创建窗口关闭按钮
        var File_Button_Menu_Window_Content = document.createElement('textarea');
        var File_Button_Menu_Window_Content = document.createElement('textarea');
        File_Button_Menu_Window_Content.setAttribute('id', 'File_Button_Menu_Window_Content');
        File_Button_Menu_Window_Content.style.fontFamily = "'Pixelify Sans', sans-serif"
        File_Button_Menu_Window_Content.style.backgroundColor = "white"
        File_Button_Menu_Window_Content.style.color = "black !important"
        File_Button_Menu_Window_Content.style.width = "435px"
        File_Button_Menu_Window_Content.style.height = "313px"
        File_Button_Menu_Window_Content.style.fontSize = "22px"
        File_Button_Menu_Window_Content.style.textAlign = "left"
        File_Button_Menu_Window_Content.style.resize = "none"
        File_Button_Menu_Window_Content.style.pointerEvents = "none"
        //设置文字框背景颜色
        var File_Button_Menu_Window_Innertext = "\n\n     1111                 00000000            System 1.0\n         11              00                   00          They Say \n         11              00                   00               I'm a \n         11              00                   00         computer\n         11              00                   00               WHAT\n         11              00                   00                  DO\n         11              00                   00                 YOU\n     111111   ◉      00000000                 THINK?\n";

        for (let i = 1; i <= File_Button_Menu_Window_Innertext.length; i++) {
            setTimeout(function () {
                var File_Button_Menu_Window_Innertext_Array = [File_Button_Menu_Window_Innertext.substring(0, i)];
                File_Button_Menu_Window_Content.innerHTML = File_Button_Menu_Window_Innertext_Array[0];
            }, i * 5);
        }

        //创建窗口内容
        File_Button_Menu_Window.appendChild(File_Button_Menu_Window_Subbox);
        //窗口体包含窗口内部
        File_Button_Menu_Window.appendChild(File_Button_Menu_Window_Close_Button);
        //窗口体包含关闭按钮
        File_Button_Menu_Window_Subbox.appendChild(File_Button_Menu_Window_Content);
        //窗口内部包含窗口内容
        File_Button_Menu_Window_Layer.appendChild(File_Button_Menu_Window);
        //窗口图层包含窗口体
        var MonitorMargin = document.getElementById("MonitorMargin")
        MonitorMargin.insertAdjacentElement("afterend", File_Button_Menu_Window_Layer)
        //屏幕包含窗口图层
        var id = document.createAttribute('id');
        id.value = "File_Button_Menu_Window";
        File_Button_Menu_Window.setAttributeNode(id);
        File_Button_Menu_Window_Layer.appendChild(File_Button_Menu_Window);
        File_Button_Menu_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
        File_Button_Menu_Window_Layer.style.width = "1024px"
        File_Button_Menu_Window_Layer.style.height = "768px"
        File_Button_Menu_Window_Layer.style.padding = "0px"
        File_Button_Menu_Window_Layer.style.margin = "0 auto"
        //对窗口图层的属性进行设置
        File_Button_Menu_Window_Subbox.style.width = "440px"
        File_Button_Menu_Window_Subbox.style.height = "317px"
        File_Button_Menu_Window_Subbox.style.backgroundColor = "white"
        File_Button_Menu_Window_Subbox.style.backgroundSize = "cover"
        File_Button_Menu_Window_Subbox.style.textAlign = "left"
        File_Button_Menu_Window_Subbox.style.float = "left"
        File_Button_Menu_Window_Subbox.style.position = "relative"
        File_Button_Menu_Window_Subbox.style.left = "5px"
        File_Button_Menu_Window_Subbox.style.top = "28px"
        File_Button_Menu_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
        File_Button_Menu_Window_Subbox.style.fontSize = "22px"
        //对subbox的属性进行设置
        File_Button_Menu_Window.style.width = "450px"
        File_Button_Menu_Window.style.height = "350px"
        File_Button_Menu_Window.style.backgroundColor = "grey"
        File_Button_Menu_Window.style.backgroundSize = "127"
        File_Button_Menu_Window.style.textAlign = "left"
        File_Button_Menu_Window.style.position = "relative"
        File_Button_Menu_Window.style.left = "245px"
        File_Button_Menu_Window.style.top = "-285px"
        // File_Button_Menu.parentNode.removeChild(File_Button_Menu)
        //对Menu_Window的属性进行设置
        File_Button_Menu_Window_Close_Button.style.width = "9px"
        File_Button_Menu_Window_Close_Button.style.height = "9px"
        File_Button_Menu_Window_Close_Button.style.backgroundColor = "white"
        File_Button_Menu_Window_Close_Button.style.border = "5px black solid"
        File_Button_Menu_Window_Close_Button.style.position = "relative"
        File_Button_Menu_Window_Close_Button.style.left = "5px"
        File_Button_Menu_Window_Close_Button.style.top = "5px"
        //对关闭按钮的属性进行设置
        File_Button_Menu_Window_Close_Button.addEventListener("click", function () {
            File_Button_Menu_Window.parentNode.removeChild(File_Button_Menu_Window)
            File_Button_Menu_Window_Layer.parentNode.removeChild(File_Button_Menu_Window_Layer)
        })
    })
})
//设置File_Button_Menu单击行为

//以下JavaScripts表示对Edit按钮的按压操作
Edit_Button.addEventListener('mouseenter', function () {
    Edit_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
    var Edit_Button_Menu = document.createElement('div');
    console.log(Edit_Button_Menu)
    var Edit_Button_Subbox = document.createElement('div');
    var Edit_Button_Content = document.createTextNode('TxtEditor');
    Edit_Button_Menu.appendChild(Edit_Button_Subbox);
    Edit_Button_Subbox.appendChild(Edit_Button_Content)
    var id = document.createAttribute('id');
    id.value = "Edit_Button_Menu";
    Edit_Button_Menu.setAttributeNode(id);
    MonitorMargin.appendChild(Edit_Button_Menu)
    Edit_Button_Subbox.style.width = "100px"
    Edit_Button_Subbox.style.height = "28px"
    Edit_Button_Subbox.style.backgroundColor = "White"
    Edit_Button_Subbox.style.backgroundSize = "cover"
    Edit_Button_Subbox.style.textAlign = "left"
    Edit_Button_Subbox.style.float = "left"
    Edit_Button_Subbox.style.position = "relative"
    Edit_Button_Subbox.style.left = "18px"
    Edit_Button_Subbox.style.top = "-69px"
    Edit_Button_Subbox.style.fontFamily = "'Pixel_Font', sans-serif"
    Edit_Button_Subbox.style.fontSize = "22px"
    //对subbox的属性进行设置
    Edit_Button_Menu.style.width = "191px"
    Edit_Button_Menu.style.height = "33px"
    Edit_Button_Menu.style.backgroundImage = "url(./Library/MenuContent.jpg)"
    Edit_Button_Menu.style.backgroundSize = "127%"
    Edit_Button_Menu.style.textAlign = "left"
    Edit_Button_Menu.style.position = "relative"
    Edit_Button_Menu.style.left = "109px"
    Edit_Button_Menu.style.top = "30px"
    //对Menu的属性进行设置
})
//Edit按钮的移入操作

Edit_Button.addEventListener('mouseleave', function () {
    Edit_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
    var Edit_Button_Menu = document.getElementById("Edit_Button_Menu")
    var Mouse_Entering_Status = 0
    Edit_Button_Menu.addEventListener('mouseenter', function () {
        Mouse_Entering_Status = 1
        console.log("1")
    })
    setTimeout(function () {
        if (Mouse_Entering_Status == 1) {
            Edit_Button_Menu.addEventListener('mouseleave', function () { Edit_Button_Menu.parentNode.removeChild(Edit_Button_Menu) })
        }
        //当鼠标移入Edit_Button_Menu时，如果直接离开，清除Edit_Button_Menu元素；如果点击，那么在响应后清除Edit_Button_Menu元素
        if (Mouse_Entering_Status == 0) {
            console.log(Mouse_Entering_Status)
            Edit_Button_Menu.parentNode.removeChild(Edit_Button_Menu)
        }
        //当鼠标移出Edit_Button但未进入Edit_Button_Menu，直接清除该元素

    }, 10)
})
//Edit按钮的移出操作

var Edit_Button_Menu_Window_Content_Altered = "这是一个文本编辑器\n自由的编辑它的内容吧\n它是会记住您的更改的哦"
//这一变量保存了编辑器中的文本

Edit_Button.addEventListener('mouseenter', function () {
    var Edit_Button_Menu = document.getElementById("Edit_Button_Menu")
    console.log(Edit_Button_Menu)
    Edit_Button_Menu.addEventListener('click', function () {
        console.log("Edit_Button_Menu has been clicked");
        if (document.getElementById("Edit_Button_Menu_Window") != null) {
            var Former_Edit_Button_Menu_Window = document.getElementById("Edit_Button_Menu_Window");
            Former_Edit_Button_Menu_Window.parentNode.removeChild(Former_Edit_Button_Menu_Window)
        }
        //删除此前创建的Edit_Button_Menu窗口
        var Edit_Button_Menu_Window_Layer = document.createElement('div')
        //创建窗口图层
        var Edit_Button_Menu_Window = document.createElement('div');
        //创建窗口体
        var Edit_Button_Menu_Window_Subbox = document.createElement('div');
        //创建窗口内部
        var Edit_Button_Menu_Window_Close_Button = document.createElement('div');
        //创建窗口关闭按钮
        var Edit_Button_Menu_Window_Content = document.createElement('textarea');
        Edit_Button_Menu_Window_Content.setAttribute('id', 'Edit_Button_Menu_Window_Content');
        Edit_Button_Menu_Window_Content.style.fontFamily = "'Pixel_Font', sans-serif"
        Edit_Button_Menu_Window_Content.style.backgroundColor = "white"
        Edit_Button_Menu_Window_Content.style.width = "435px"
        Edit_Button_Menu_Window_Content.style.height = "313px"
        Edit_Button_Menu_Window_Content.style.fontSize = "22px"
        Edit_Button_Menu_Window_Content.style.textAlign = "center"
        Edit_Button_Menu_Window_Content.style.resize = "none"
        var Edit_Button_Menu_Window_Innertext = Edit_Button_Menu_Window_Content_Altered

        for (let i = 1; i <= Edit_Button_Menu_Window_Innertext.length; i++) {
            setTimeout(function () {
                var Edit_Button_Menu_Window_Innertext_Array = [Edit_Button_Menu_Window_Innertext.substring(0, i)];
                Edit_Button_Menu_Window_Content.innerHTML = Edit_Button_Menu_Window_Innertext_Array[0];
            }, i * 50);
        }


        //创建窗口内容
        Edit_Button_Menu_Window.appendChild(Edit_Button_Menu_Window_Subbox);
        //窗口体包含窗口内部
        Edit_Button_Menu_Window.appendChild(Edit_Button_Menu_Window_Close_Button);
        //窗口体包含关闭按钮
        Edit_Button_Menu_Window_Subbox.appendChild(Edit_Button_Menu_Window_Content);
        //窗口内部包含窗口内容
        Edit_Button_Menu_Window_Layer.appendChild(Edit_Button_Menu_Window);
        //窗口图层包含窗口体
        var MonitorMargin = document.getElementById("MonitorMargin")
        MonitorMargin.insertAdjacentElement("afterend", Edit_Button_Menu_Window_Layer)
        //屏幕包含窗口图层
        var id = document.createAttribute('id');
        id.value = "Edit_Button_Menu_Window";
        Edit_Button_Menu_Window.setAttributeNode(id);
        Edit_Button_Menu_Window_Layer.appendChild(Edit_Button_Menu_Window);
        Edit_Button_Menu_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
        Edit_Button_Menu_Window_Layer.style.width = "1024px"
        Edit_Button_Menu_Window_Layer.style.height = "768px"
        Edit_Button_Menu_Window_Layer.style.padding = "0px"
        Edit_Button_Menu_Window_Layer.style.margin = "0 auto"
        //对窗口图层的属性进行设置
        Edit_Button_Menu_Window_Subbox.style.width = "440px"
        Edit_Button_Menu_Window_Subbox.style.height = "317px"
        Edit_Button_Menu_Window_Subbox.style.backgroundColor = "white"
        Edit_Button_Menu_Window_Subbox.style.backgroundSize = "cover"
        Edit_Button_Menu_Window_Subbox.style.textAlign = "left"
        Edit_Button_Menu_Window_Subbox.style.float = "left"
        Edit_Button_Menu_Window_Subbox.style.position = "relative"
        Edit_Button_Menu_Window_Subbox.style.left = "5px"
        Edit_Button_Menu_Window_Subbox.style.top = "28px"
        Edit_Button_Menu_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
        Edit_Button_Menu_Window_Subbox.style.fontSize = "22px"
        //对subbox的属性进行设置
        Edit_Button_Menu_Window.style.width = "450px"
        Edit_Button_Menu_Window.style.height = "350px"
        Edit_Button_Menu_Window.style.backgroundColor = "grey"
        Edit_Button_Menu_Window.style.backgroundSize = "127"
        Edit_Button_Menu_Window.style.textAlign = "left"
        Edit_Button_Menu_Window.style.position = "relative"
        Edit_Button_Menu_Window.style.left = "245px"
        Edit_Button_Menu_Window.style.top = "-285px"
        //Edit_Button_Menu.parentNode.removeChild(Edit_Button_Menu)
        //对Menu_Window的属性进行设置
        Edit_Button_Menu_Window_Close_Button.style.width = "9px"
        Edit_Button_Menu_Window_Close_Button.style.height = "9px"
        Edit_Button_Menu_Window_Close_Button.style.backgroundColor = "white"
        Edit_Button_Menu_Window_Close_Button.style.border = "5px black solid"
        Edit_Button_Menu_Window_Close_Button.style.position = "relative"
        Edit_Button_Menu_Window_Close_Button.style.left = "5px"
        Edit_Button_Menu_Window_Close_Button.style.top = "5px"
        //对关闭按钮的属性进行设置
        Edit_Button_Menu_Window_Close_Button.addEventListener("click", function () {
            Edit_Button_Menu_Window_Content_Altered = Edit_Button_Menu_Window_Content.value
            Edit_Button_Menu_Window.parentNode.removeChild(Edit_Button_Menu_Window)
            Edit_Button_Menu_Window_Layer.parentNode.removeChild(Edit_Button_Menu_Window_Layer)
        })
    })
})
//设置Edit_Button_Menu单击行为

//以下JavaScripts表示对View按钮的按压操作
View_Button.addEventListener('mouseenter', function () {
    View_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
    var View_Button_Menu = document.createElement('div');
    console.log(View_Button_Menu)
    var View_Button_Subbox = document.createElement('div');
    var View_Button_Content = document.createTextNode('Music');
    View_Button_Menu.appendChild(View_Button_Subbox);
    View_Button_Subbox.appendChild(View_Button_Content)
    var id = document.createAttribute('id');
    id.value = "View_Button_Menu";
    View_Button_Menu.setAttributeNode(id);
    MonitorMargin.appendChild(View_Button_Menu)
    View_Button_Subbox.style.width = "100px"
    View_Button_Subbox.style.height = "28px"
    View_Button_Subbox.style.backgroundColor = "White"
    View_Button_Subbox.style.backgroundSize = "cover"
    View_Button_Subbox.style.textAlign = "left"
    View_Button_Subbox.style.float = "left"
    View_Button_Subbox.style.position = "relative"
    View_Button_Subbox.style.left = "18px"
    View_Button_Subbox.style.top = "-69px"
    View_Button_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
    View_Button_Subbox.style.fontSize = "22px"
    //对subbox的属性进行设置
    View_Button_Menu.style.width = "191px"
    View_Button_Menu.style.height = "33px"
    View_Button_Menu.style.backgroundImage = "url(./Library/MenuContent.jpg)"
    View_Button_Menu.style.backgroundSize = "127%"
    View_Button_Menu.style.textAlign = "left"
    View_Button_Menu.style.position = "relative"
    View_Button_Menu.style.left = "165px"
    View_Button_Menu.style.top = "30px"
    //对Menu的属性进行设置
})
//View按钮的移入操作

View_Button.addEventListener('mouseleave', function () {
    View_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
    var View_Button_Menu = document.getElementById("View_Button_Menu")
    var Mouse_Entering_Status = 0
    View_Button_Menu.addEventListener('mouseenter', function () {
        Mouse_Entering_Status = 1
        console.log("1")
    })
    setTimeout(function () {
        if (Mouse_Entering_Status == 1) {
            View_Button_Menu.addEventListener('mouseleave', function () { View_Button_Menu.parentNode.removeChild(View_Button_Menu) })
        }
        //当鼠标移入View_Button_Menu时，如果直接离开，清除View_Button_Menu元素；如果点击，那么在响应后清除View_Button_Menu元素
        if (Mouse_Entering_Status == 0) {
            console.log(Mouse_Entering_Status)
            View_Button_Menu.parentNode.removeChild(View_Button_Menu)
        }
        //当鼠标移出View_Button但未进入View_Button_Menu，直接清除该元素
    }, 10)
})
//View按钮的移出操作

var musicList = [
    "./Library/Audio/Hotel_California.mp3",
    "./Library/Audio/Believe_it.mp3",
    "./Library/Audio/The_Mandalorian.mp3",
    "./Library/Audio/Start_Again.mp3",
    "./Library/Audio/MooN_LighT.mp3",
    "./Library/Audio/To_The_Moon.mp3",
    // 添加更多音乐文件路径
];

var currentMusicName = ""; 
// 全局变量，用于存储当前歌曲名字

// 播放背景音乐
function playBackgroundMusic(musicPath) {
    var backgroundMusic = new Audio(musicPath);
    var musicName = musicPath.split("/").pop().split(".")[0]; // 提取歌曲名字
    currentMusicName = musicName; // 将歌曲名字赋给全局变量
    updateViewButtonMenuWindowText(); // 更新视图中的文本
    backgroundMusic.play();
    playingMusicList.push(backgroundMusic); // 将音乐对象添加到列表中
}

// 随机选择并播放音乐
function playRandomMusic() {
    var randomIndex = Math.floor(Math.random() * musicList.length);
    playBackgroundMusic(musicList[randomIndex])
    addMusicEndedListener()
}

var playingMusicList = [];

// 添加音乐播放结束的事件监听器
function addMusicEndedListener() {playingMusicList.forEach(function(music) {
    music.addEventListener("ended", playRandomMusic);
});}

// 停止所有背景音乐
function stopAllBackgroundMusic() {
    for (var i = 0; i < playingMusicList.length; i++) {
        playingMusicList[i].pause(); // 暂停播放
    }
    playingMusicList = []; // 清空列表
}

//视图中的文本
var View_Button_Menu_Window_Innertext = `生活太无趣？来点Music吧\n保持播放器窗口在后台运行\n音乐将在列表中随机播放\n如需快速切换曲目，请重新打开此窗口\n1 Hotel_California\n2 Believe_it\n3 The_Mandalorian\n4 Start_Again\n5 MooN_LighT\n6 To_The_Moon\n当前正在播放的曲目\n${currentMusicName}`;

// 更新视图中的文本
function updateViewButtonMenuWindowText() {
    View_Button_Menu_Window_Innertext = `生活太无趣？来点Music吧\n保持播放器窗口在后台运行\n音乐将在列表中随机播放\n如需快速切换曲目，请重新打开此窗口\n1 Hotel_California\n2 Believe_it\n3 The_Mandalorian\n4 Start_Again\n5 MooN_LighT\n6 To_The_Moon\n当前正在播放的曲目\n${currentMusicName}`;
    for (let i = 1; i <= View_Button_Menu_Window_Innertext.length; i++) {
        setTimeout(function () {
            var View_Button_Menu_Window_Innertext_Array = [View_Button_Menu_Window_Innertext.substring(0, i)];
            View_Button_Menu_Window_Content.innerHTML = View_Button_Menu_Window_Innertext_Array[0];
        }, i * 50);
    }
}

View_Button.addEventListener('mouseenter', function () {
    var View_Button_Menu = document.getElementById("View_Button_Menu")
    console.log(View_Button_Menu)
    View_Button_Menu.addEventListener('click', function () {
        console.log("View_Button_Menu has been clicked");
        
        if (document.getElementById("View_Button_Menu_Window") != null) {
            var Former_View_Button_Menu_Window = document.getElementById("View_Button_Menu_Window");
            Former_View_Button_Menu_Window.parentNode.removeChild(Former_View_Button_Menu_Window);
            stopAllBackgroundMusic();
        }
        //删除此前创建的View_Button_Menu窗口
        if (document.getElementById("View_Button_Menu_Window") == null) {
            playRandomMusic();
        }

        var View_Button_Menu_Window_Layer = document.createElement('div')
        //创建窗口图层
        var View_Button_Menu_Window = document.createElement('div');
        //创建窗口体
        var View_Button_Menu_Window_Subbox = document.createElement('div');
        //创建窗口内部
        var View_Button_Menu_Window_Close_Button = document.createElement('div');
        //创建窗口关闭按钮
        var View_Button_Menu_Window_Content = document.createElement('textarea');
        View_Button_Menu_Window_Content.setAttribute('id', 'View_Button_Menu_Window_Content');
        View_Button_Menu_Window_Content.style.fontFamily = "'Pixel_Font', sans-serif"
        View_Button_Menu_Window_Content.style.backgroundColor = "white"
        View_Button_Menu_Window_Content.style.color = "black !important"
        View_Button_Menu_Window_Content.style.width = "435px"
        View_Button_Menu_Window_Content.style.height = "313px"
        View_Button_Menu_Window_Content.style.fontSize = "22px"
        View_Button_Menu_Window_Content.style.textAlign = "center"
        View_Button_Menu_Window_Content.style.resize = "none"
        View_Button_Menu_Window_Content.style.pointerEvents = "none"
        //设置文字框背景颜色
        

        for (let i = 1; i <= View_Button_Menu_Window_Innertext.length; i++) {
            setTimeout(function () {
                var View_Button_Menu_Window_Innertext_Array = [View_Button_Menu_Window_Innertext.substring(0, i)];
                View_Button_Menu_Window_Content.innerHTML = View_Button_Menu_Window_Innertext_Array[0];
            }, i * 50);
        }
        //逐字输出内容
        //创建窗口内容
        View_Button_Menu_Window.appendChild(View_Button_Menu_Window_Subbox);
        //窗口体包含窗口内部
        View_Button_Menu_Window.appendChild(View_Button_Menu_Window_Close_Button);
        //窗口体包含关闭按钮
        View_Button_Menu_Window_Subbox.appendChild(View_Button_Menu_Window_Content);
        //窗口内部包含窗口内容
        View_Button_Menu_Window_Layer.appendChild(View_Button_Menu_Window);
        //窗口图层包含窗口体
        var MonitorMargin = document.getElementById("MonitorMargin")
        MonitorMargin.insertAdjacentElement("afterend", View_Button_Menu_Window_Layer)
        //屏幕包含窗口图层
        var id = document.createAttribute('id');
        id.value = "View_Button_Menu_Window";
        View_Button_Menu_Window.setAttributeNode(id);
        View_Button_Menu_Window_Layer.appendChild(View_Button_Menu_Window);
        View_Button_Menu_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
        View_Button_Menu_Window_Layer.style.width = "1024px"
        View_Button_Menu_Window_Layer.style.height = "768px"
        View_Button_Menu_Window_Layer.style.padding = "0px"
        View_Button_Menu_Window_Layer.style.margin = "0 auto"
        //对窗口图层的属性进行设置
        View_Button_Menu_Window_Subbox.style.width = "440px"
        View_Button_Menu_Window_Subbox.style.height = "317px"
        View_Button_Menu_Window_Subbox.style.backgroundColor = "white"
        View_Button_Menu_Window_Subbox.style.backgroundSize = "cover"
        View_Button_Menu_Window_Subbox.style.textAlign = "left"
        View_Button_Menu_Window_Subbox.style.float = "left"
        View_Button_Menu_Window_Subbox.style.position = "relative"
        View_Button_Menu_Window_Subbox.style.left = "5px"
        View_Button_Menu_Window_Subbox.style.top = "28px"
        View_Button_Menu_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
        View_Button_Menu_Window_Subbox.style.fontSize = "22px"
        //对subbox的属性进行设置
        View_Button_Menu_Window.style.width = "450px"
        View_Button_Menu_Window.style.height = "350px"
        View_Button_Menu_Window.style.backgroundColor = "grey"
        View_Button_Menu_Window.style.backgroundSize = "127"
        View_Button_Menu_Window.style.textAlign = "left"
        View_Button_Menu_Window.style.position = "relative"
        View_Button_Menu_Window.style.left = "245px"
        View_Button_Menu_Window.style.top = "-285px"
        //View_Button_Menu.parentNode.removeChild(View_Button_Menu)
        //对Menu_Window的属性进行设置
        View_Button_Menu_Window_Close_Button.style.width = "9px"
        View_Button_Menu_Window_Close_Button.style.height = "9px"
        View_Button_Menu_Window_Close_Button.style.backgroundColor = "white"
        View_Button_Menu_Window_Close_Button.style.border = "5px black solid"
        View_Button_Menu_Window_Close_Button.style.position = "relative"
        View_Button_Menu_Window_Close_Button.style.left = "5px"
        View_Button_Menu_Window_Close_Button.style.top = "5px"
        //对关闭按钮的属性进行设置
        View_Button_Menu_Window_Close_Button.addEventListener("click", function () {
            stopAllBackgroundMusic()
            View_Button_Menu_Window.parentNode.removeChild(View_Button_Menu_Window)
            View_Button_Menu_Window_Layer.parentNode.removeChild(View_Button_Menu_Window_Layer)
        })
    })
})
//设置View_Button_Menu单击行为


//以下JavaScripts表示对Special按钮的按压操作
Special_Button.addEventListener('mouseenter', function () {
    Special_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
    var Special_Button_Menu = document.createElement('div');
    console.log(Special_Button_Menu)
    var Special_Button_Subbox = document.createElement('div');
    var Special_Button_Content = document.createTextNode('Acknowledgement');
    Special_Button_Menu.appendChild(Special_Button_Subbox);
    Special_Button_Subbox.appendChild(Special_Button_Content)
    var id = document.createAttribute('id');
    id.value = "Special_Button_Menu";
    Special_Button_Menu.setAttributeNode(id);
    MonitorMargin.appendChild(Special_Button_Menu)
    Special_Button_Subbox.style.width = "100px"
    Special_Button_Subbox.style.height = "28px"
    Special_Button_Subbox.style.backgroundColor = "White"
    Special_Button_Subbox.style.backgroundSize = "cover"
    Special_Button_Subbox.style.textAlign = "left"
    Special_Button_Subbox.style.float = "left"
    Special_Button_Subbox.style.position = "relative"
    Special_Button_Subbox.style.left = "11px"
    Special_Button_Subbox.style.top = "-69px"
    Special_Button_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
    Special_Button_Subbox.style.fontSize = "20px"
    //对subbox的属性进行设置
    Special_Button_Menu.style.width = "191px"
    Special_Button_Menu.style.height = "33px"
    Special_Button_Menu.style.backgroundImage = "url(./Library/MenuContent.jpg)"
    Special_Button_Menu.style.backgroundSize = "127%"
    Special_Button_Menu.style.textAlign = "left"
    Special_Button_Menu.style.position = "relative"
    Special_Button_Menu.style.left = "233px"
    Special_Button_Menu.style.top = "30px"
    //对Menu的属性进行设置
})
//Special按钮的移入操作

Special_Button.addEventListener('mouseleave', function () {
    Special_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
    var Special_Button_Menu = document.getElementById("Special_Button_Menu")
    var Mouse_Entering_Status = 0
    Special_Button_Menu.addEventListener('mouseenter', function () {
        Mouse_Entering_Status = 1
        console.log("1")
    })
    setTimeout(function () {
        if (Mouse_Entering_Status == 1) {
            Special_Button_Menu.addEventListener('mouseleave', function () { Special_Button_Menu.parentNode.removeChild(Special_Button_Menu) })
        }
        //当鼠标移入Special_Button_Menu时，如果直接离开，清除Special_Button_Menu元素；如果点击，那么在响应后清除Special_Button_Menu元素
        if (Mouse_Entering_Status == 0) {
            console.log(Mouse_Entering_Status)
            Special_Button_Menu.parentNode.removeChild(Special_Button_Menu)
        }
        //当鼠标移出Special_Button但未进入Special_Button_Menu，直接清除该元素
    }, 10)
})
//Special按钮的移出操作

Special_Button.addEventListener('mouseenter', function () {
    var Special_Button_Menu = document.getElementById("Special_Button_Menu")
    console.log(Special_Button_Menu)
    Special_Button_Menu.addEventListener('click', function () {
        console.log("Special_Button_Menu has been clicked");
        if (document.getElementById("Special_Button_Menu_Window") != null) {
            var Former_Special_Button_Menu_Window = document.getElementById("Special_Button_Menu_Window");
            Former_Special_Button_Menu_Window.parentNode.removeChild(Former_Special_Button_Menu_Window);
        }
        //删除此前创建的Special_Button_Menu窗口
        var Special_Button_Menu_Window_Layer = document.createElement('div')
        //创建窗口图层
        var Special_Button_Menu_Window = document.createElement('div');
        //创建窗口体
        var Special_Button_Menu_Window_Subbox = document.createElement('div');
        //创建窗口内部
        var Special_Button_Menu_Window_Close_Button = document.createElement('div');
        //创建窗口关闭按钮
        var Special_Button_Menu_Window_Content = document.createElement('textarea');
        Special_Button_Menu_Window_Content.setAttribute('id', 'Edit_Button_Menu_Window_Content');
        Special_Button_Menu_Window_Content.style.fontFamily = "'Pixelify Sans', sans-serif"
        Special_Button_Menu_Window_Content.style.backgroundColor = "white"
        Special_Button_Menu_Window_Content.style.color = "black !important"
        Special_Button_Menu_Window_Content.style.width = "435px"
        Special_Button_Menu_Window_Content.style.height = "313px"
        Special_Button_Menu_Window_Content.style.fontSize = "13px"
        Special_Button_Menu_Window_Content.style.textAlign = "center"
        Special_Button_Menu_Window_Content.style.resize = "none"
        Special_Button_Menu_Window_Content.style.pointerEvents = "none"
        //设置文字框背景颜色
        var Special_Button_Menu_Window_Innertext = "acknowledgment\nSystemUI: Infinitemac.org\n\nFont 1: https://fonts.googleapis.com\nFont 2: Copyright (c) 2022, TakWolf (https://takwolf.com),with Reserved Font Name 'Fusion Pixel'.\n\n Musics\nPaul Cardall: New_Life Redeemer Eliza's_Theme\nEagles: Hotel_California\nAnjulie&Lexnour: Believe It\nIwamoto&glasscat: Start_Again\nPaul Hankinson Covers: The_Mandalorian\nRASK: MooN_LighT\nKan Gao&Laura Shigihara: To_The_Moon\n\nPicture&Background\nMidjourney Bot gifdb.com";

        for (let i = 1; i <= Special_Button_Menu_Window_Innertext.length; i++) {
            setTimeout(function () {
                var Special_Button_Menu_Window_Innertext_Array = [Special_Button_Menu_Window_Innertext.substring(0, i)];
                Special_Button_Menu_Window_Content.innerHTML = Special_Button_Menu_Window_Innertext_Array[0];
            }, i * 50);
        }
        Special_Button_Menu_Window.appendChild(Special_Button_Menu_Window_Subbox);
        //窗口体包含窗口内部
        Special_Button_Menu_Window.appendChild(Special_Button_Menu_Window_Close_Button);
        //窗口体包含关闭按钮
        Special_Button_Menu_Window_Subbox.appendChild(Special_Button_Menu_Window_Content);
        //窗口内部包含窗口内容
        Special_Button_Menu_Window_Layer.appendChild(Special_Button_Menu_Window);
        //窗口图层包含窗口体
        var MonitorMargin = document.getElementById("MonitorMargin")
        MonitorMargin.insertAdjacentElement("afterend", Special_Button_Menu_Window_Layer)
        //屏幕包含窗口图层
        var id = document.createAttribute('id');
        id.value = "Special_Button_Menu_Window";
        Special_Button_Menu_Window.setAttributeNode(id);
        Special_Button_Menu_Window_Layer.appendChild(Special_Button_Menu_Window);
        Special_Button_Menu_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
        Special_Button_Menu_Window_Layer.style.width = "1024px"
        Special_Button_Menu_Window_Layer.style.height = "768px"
        Special_Button_Menu_Window_Layer.style.padding = "0px"
        Special_Button_Menu_Window_Layer.style.margin = "0 auto"
        //对窗口图层的属性进行设置
        Special_Button_Menu_Window_Subbox.style.width = "440px"
        Special_Button_Menu_Window_Subbox.style.height = "317px"
        Special_Button_Menu_Window_Subbox.style.backgroundColor = "white"
        Special_Button_Menu_Window_Subbox.style.backgroundSize = "cover"
        Special_Button_Menu_Window_Subbox.style.textAlign = "left"
        Special_Button_Menu_Window_Subbox.style.float = "left"
        Special_Button_Menu_Window_Subbox.style.position = "relative"
        Special_Button_Menu_Window_Subbox.style.left = "5px"
        Special_Button_Menu_Window_Subbox.style.top = "28px"
        Special_Button_Menu_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
        Special_Button_Menu_Window_Subbox.style.fontSize = "22px"
        //对subbox的属性进行设置
        Special_Button_Menu_Window.style.width = "450px"
        Special_Button_Menu_Window.style.height = "350px"
        Special_Button_Menu_Window.style.backgroundColor = "grey"
        Special_Button_Menu_Window.style.backgroundSize = "127"
        Special_Button_Menu_Window.style.textAlign = "left"
        Special_Button_Menu_Window.style.position = "relative"
        Special_Button_Menu_Window.style.left = "245px"
        Special_Button_Menu_Window.style.top = "-285px"
        // Special_Button_Menu.parentNode.removeChild(Special_Button_Menu)
        //对Menu_Window的属性进行设置
        Special_Button_Menu_Window_Close_Button.style.width = "9px"
        Special_Button_Menu_Window_Close_Button.style.height = "9px"
        Special_Button_Menu_Window_Close_Button.style.backgroundColor = "white"
        Special_Button_Menu_Window_Close_Button.style.border = "5px black solid"
        Special_Button_Menu_Window_Close_Button.style.position = "relative"
        Special_Button_Menu_Window_Close_Button.style.left = "5px"
        Special_Button_Menu_Window_Close_Button.style.top = "5px"
        //对关闭按钮的属性进行设置
        Special_Button_Menu_Window_Close_Button.addEventListener("click", function () {
            Special_Button_Menu_Window.parentNode.removeChild(Special_Button_Menu_Window)
            Special_Button_Menu_Window_Layer.parentNode.removeChild(Special_Button_Menu_Window_Layer)
        })
    })
})
//设置Special_Button_Menu单击行为

var System_Disk_Button = document.getElementById("System_Disk_Button");
System_Disk_Button.addEventListener('mouseenter', function () {
    //console.log("mouse is entering System_Disk_Button")
    System_Disk_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
    System_Disk_Button.addEventListener('dblclick', function () {
        if (document.getElementById("System_Disk_Button_Window") != null) {
            
            var Former_System_Disk_Button_Window = document.getElementById("System_Disk_Button_Window")
            Former_System_Disk_Button_Window.parentNode.removeChild(Former_System_Disk_Button_Window)
        }
        //删除此前创建的System_Disk_Button窗口
        var System_Disk_Button_Window_Layer = document.createElement('div');
        System_Disk_Button_Window_Layer.id = "System_Disk_Button_Window_Layer"
        //创建窗口图层
        var System_Disk_Button_Window = document.createElement('div');
        //创建窗口体
        var System_Disk_Button_Window_Subbox = document.createElement('div');
        //创建窗口内部
        var System_Disk_Button_Window_Close_Button = document.createElement('div');
        //创建窗口关闭按钮
        var System_Disk_Button_Window_Content = document.createElement('div');
        System_Disk_Button_Window_Content.style.backgroundColor = "white"
        //创建窗口内容
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！
        var Notes_Button = document.createElement('div')
        Notes_Button.setAttribute('id', 'Notes_Button')
        System_Disk_Button_Window_Content.appendChild(Notes_Button)
        //窗口内容包含窗口图标
        Notes_Button.style.width = "70px"
        Notes_Button.style.height = "78px"
        Notes_Button.style.backgroundImage = "url(./Library/Notes.png)"
        Notes_Button.style.backgroundSize = "cover"
        Notes_Button.style.position = "relative"
        Notes_Button.style.left = "5px"
        Notes_Button.style.top = "5px"
        //Notes按钮的外观！
        Notes_Button.addEventListener('mouseenter', function () {
            Notes_Button.style.backgroundImage = "url(./Library/Anti_Notes.png)"
        })
        Notes_Button.addEventListener('mouseleave', function () {
            Notes_Button.style.backgroundImage = "url(./Library/Notes.png)"
        })
        //Notes按钮鼠标悬停行为
        Notes_Button.addEventListener('dblclick', function () {
            if (document.getElementById("Notes_Button_Window") != null) {
                var Former_Notes_Button_Window = document.getElementById("Notes_Button_Window")
                Former_Notes_Button_Window.parentNode.removeChild(Former_Notes_Button_Window)
            }
            //删除此前创建的Notes_Button窗口
            var Notes_Button_Window_Layer = document.createElement('div')
            Notes_Button_Window_Layer.id = "Notes_Button_Window_Layer"
            //创建窗口图层
            var Notes_Button_Window = document.createElement('div');
            //创建窗口体
            var Notes_Button_Window_Subbox = document.createElement('div');
            //创建窗口内部
            var Notes_Button_Window_Close_Button = document.createElement('div');
            //创建窗口关闭按钮
            var Notes_Button_Window_Content = document.createElement('textarea');
            Notes_Button_Window_Content.setAttribute('id', 'Edit_Button_Window_Content');
            Notes_Button_Window_Content.style.fontFamily = "'Pixel_Font', sans-serif"
            Notes_Button_Window_Content.style.backgroundColor = "white"
            Notes_Button_Window_Content.style.color = "black !important"
            Notes_Button_Window_Content.style.width = "435px"
            Notes_Button_Window_Content.style.height = "313px"
            Notes_Button_Window_Content.style.fontSize = "22px"
            Notes_Button_Window_Content.style.textAlign = "center"
            Notes_Button_Window_Content.style.resize = "none"
            Notes_Button_Window_Content.style.pointerEvents = "none"
            //设置文字框背景颜色
            var Notes_Button_Window_Innertext = "请务必要点开每个窗口看看哦\n另\n如果屏幕上方的菜单栏出现显示错误\n请刷新网页\n另\nView菜单中的音乐播放器很有趣\n不去听听吗";

            for (let i = 1; i <= Notes_Button_Window_Innertext.length; i++) {
                setTimeout(function () {
                    var Notes_Button_Window_Innertext_Array = [Notes_Button_Window_Innertext.substring(0, i)];
                    Notes_Button_Window_Content.innerHTML = Notes_Button_Window_Innertext_Array[0];
                }, i * 50);
            }


            //创建窗口内容
            Notes_Button_Window.appendChild(Notes_Button_Window_Subbox);
            //窗口体包含窗口内部
            Notes_Button_Window.appendChild(Notes_Button_Window_Close_Button);
            //窗口体包含关闭按钮
            Notes_Button_Window_Subbox.appendChild(Notes_Button_Window_Content);
            //窗口内部包含窗口内容
            Notes_Button_Window_Layer.appendChild(Notes_Button_Window);
            //窗口图层包含窗口体
            var MonitorMargin = document.getElementById("MonitorMargin")
            MonitorMargin.insertAdjacentElement("afterend", Notes_Button_Window_Layer)
            //屏幕包含窗口图层
            var id = document.createAttribute('id');
            id.value = "Notes_Button_Window";
            Notes_Button_Window.setAttributeNode(id);
            Notes_Button_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
            Notes_Button_Window_Layer.style.width = "1024px"
            Notes_Button_Window_Layer.style.height = "768px"
            Notes_Button_Window_Layer.style.padding = "0px"
            Notes_Button_Window_Layer.style.margin = "0 auto"
            //对窗口图层的属性进行设置
            Notes_Button_Window_Subbox.style.width = "440px"
            Notes_Button_Window_Subbox.style.height = "317px"
            Notes_Button_Window_Subbox.style.backgroundColor = "white"
            Notes_Button_Window_Subbox.style.backgroundSize = "cover"
            Notes_Button_Window_Subbox.style.textAlign = "left"
            Notes_Button_Window_Subbox.style.float = "left"
            Notes_Button_Window_Subbox.style.position = "relative"
            Notes_Button_Window_Subbox.style.left = "5px"
            Notes_Button_Window_Subbox.style.top = "28px"
            Notes_Button_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
            Notes_Button_Window_Subbox.style.fontSize = "22px"
            //对subbox的属性进行设置
            Notes_Button_Window.style.width = "450px"
            Notes_Button_Window.style.height = "350px"
            Notes_Button_Window.style.backgroundColor = "grey"
            Notes_Button_Window.style.backgroundSize = "127"
            Notes_Button_Window.style.textAlign = "left"
            Notes_Button_Window.style.position = "relative"
            Notes_Button_Window.style.left = "245px"
            Notes_Button_Window.style.top = "-285px"
            //对Menu_Window的属性进行设置
            Notes_Button_Window_Close_Button.style.width = "9px"
            Notes_Button_Window_Close_Button.style.height = "9px"
            Notes_Button_Window_Close_Button.style.backgroundColor = "white"
            Notes_Button_Window_Close_Button.style.border = "5px black solid"
            Notes_Button_Window_Close_Button.style.position = "relative"
            Notes_Button_Window_Close_Button.style.left = "5px"
            Notes_Button_Window_Close_Button.style.top = "5px"
            //对关闭按钮的属性进行设置
            Notes_Button_Window_Close_Button.addEventListener('click', function () {
                var intervalID = setInterval(function () {
                    if (document.getElementById("Notes_Button_Window_Layer") != null) {
                        var Notes_Button_Window_Layer = document.getElementById("Notes_Button_Window_Layer");
                        Notes_Button_Window_Layer.parentNode.removeChild(Notes_Button_Window_Layer);
                    } else {
                        clearInterval(intervalID); // 清除interval
                    }
                }, 1);
            })
    
        })
        //Notes按钮单击行为
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！
        System_Disk_Button_Window.appendChild(System_Disk_Button_Window_Subbox);
        //窗口体包含窗口内部
        System_Disk_Button_Window.appendChild(System_Disk_Button_Window_Close_Button);
        //窗口体包含关闭按钮
        System_Disk_Button_Window_Subbox.appendChild(System_Disk_Button_Window_Content);
        //窗口内部包含窗口内容
        System_Disk_Button_Window_Layer.appendChild(System_Disk_Button_Window);
        //窗口图层包含窗口体
        var MonitorMargin = document.getElementById("MonitorMargin")
        MonitorMargin.insertAdjacentElement("afterend", System_Disk_Button_Window_Layer)
        //屏幕包含窗口图层
        var id = document.createAttribute('id');
        id.value = "System_Disk_Button_Window";
        System_Disk_Button_Window.setAttributeNode(id);
        System_Disk_Button_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
        System_Disk_Button_Window_Layer.style.width = "1024px"
        System_Disk_Button_Window_Layer.style.height = "768px"
        System_Disk_Button_Window_Layer.style.padding = "0px"
        System_Disk_Button_Window_Layer.style.margin = "0 auto"
        //对窗口图层的属性进行设置
        System_Disk_Button_Window_Subbox.style.width = "440px"
        System_Disk_Button_Window_Subbox.style.height = "317px"
        System_Disk_Button_Window_Subbox.style.backgroundColor = "white"
        System_Disk_Button_Window_Subbox.style.backgroundSize = "cover"
        System_Disk_Button_Window_Subbox.style.textAlign = "left"
        System_Disk_Button_Window_Subbox.style.float = "left"
        System_Disk_Button_Window_Subbox.style.position = "relative"
        System_Disk_Button_Window_Subbox.style.left = "5px"
        System_Disk_Button_Window_Subbox.style.top = "28px"
        System_Disk_Button_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
        System_Disk_Button_Window_Subbox.style.fontSize = "22px"
        //对subbox的属性进行设置
        System_Disk_Button_Window.style.width = "450px"
        System_Disk_Button_Window.style.height = "350px"
        System_Disk_Button_Window.style.backgroundColor = "grey"
        System_Disk_Button_Window.style.backgroundSize = "127"
        System_Disk_Button_Window.style.textAlign = "left"
        System_Disk_Button_Window.style.position = "relative"
        System_Disk_Button_Window.style.left = "245px"
        System_Disk_Button_Window.style.top = "-285px"
        //对Menu_Window的属性进行设置
        System_Disk_Button_Window_Close_Button.style.width = "9px"
        System_Disk_Button_Window_Close_Button.style.height = "9px"
        System_Disk_Button_Window_Close_Button.style.backgroundColor = "white"
        System_Disk_Button_Window_Close_Button.style.border = "5px black solid"
        System_Disk_Button_Window_Close_Button.style.position = "relative"
        System_Disk_Button_Window_Close_Button.style.left = "5px"
        System_Disk_Button_Window_Close_Button.style.top = "5px"
        //对关闭按钮的属性进行设置
        System_Disk_Button_Window_Close_Button.addEventListener('click', function () {
            var intervalID = setInterval(function () {
                if (document.getElementById("System_Disk_Button_Window_Layer") != null) {
                    var System_Disk_Button_Window_Layer = document.getElementById("System_Disk_Button_Window_Layer");
                    System_Disk_Button_Window_Layer.parentNode.removeChild(System_Disk_Button_Window_Layer);
                } else {
                    clearInterval(intervalID); // 清除interval
                }
            }, 1);
        })
    })
})
System_Disk_Button.addEventListener('mouseleave', function () {
    //console.log("mouse is leaving System_Disk_Button")
    System_Disk_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
})
//鼠标移入和移除System_Disk按钮

var Welcome_Button = document.getElementById("Welcome_Button");
Welcome_Button.addEventListener('mouseenter', function () {
    //console.log("mouse is entering Welcome_Button")
    Welcome_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
    Welcome_Button.addEventListener('dblclick', function () {
        if (document.getElementById("Welcome_Button_Window") != null) {
            var Former_Welcome_Button_Window = document.getElementById("Welcome_Button_Window")
            Former_Welcome_Button_Window.parentNode.removeChild(Former_Welcome_Button_Window)
        }
        //删除此前创建的Welcome_Button窗口
        var Welcome_Button_Window_Layer = document.createElement('div')
        Welcome_Button_Window_Layer.id = "Welcome_Button_Window_Layer"
        //创建窗口图层
        var Welcome_Button_Window = document.createElement('div');
        //创建窗口体
        var Welcome_Button_Window_Subbox = document.createElement('div');
        //创建窗口内部
        var Welcome_Button_Window_Close_Button = document.createElement('div');
        //创建窗口关闭按钮
        var Welcome_Button_Window_Content = document.createElement('div');
        Welcome_Button_Window_Content.style.backgroundColor = "white"
        Welcome_Button_Window_Content.style.fontFamily = "'Pixel_Font', sans-serif"
        Welcome_Button_Window_Content.style.fontSize = "20px"
        //设置文字框背景颜色
        var Welcome_Button_Window_Innertext = "欢迎来到System1.0操作系统！在这里，您可以不受约束的同时打开多个应用，自由的编辑文字，聆听音乐，以及探索各种各样有趣的功能。我们最近更新了超棒的中文语言包，好东西就要来了，请不要关闭电脑。头抬起，您不是最新的。如果你认为BIOS是一种新的植物性燃料，那么技术预览版可能不适合你。不要说我们没有警告过你，这是第一个版本，即便十分不稳定，您也不能滚回到以前的版本。错误，找不到对象，请滚回功率，坐和放宽，重新启动多次，更迅速，更搞笑，内部集线器将显示二手，你的OneDrive满是92%。电池100%完全收费，We are getting 天气 ready for you,山西浑源县高吹尘，微软dows将在一分钟后关闭。绝对没有CO的形成2将永远永远归创作者所有，您想结果这个进程吗？请使用您的老鼠点击关闭按钮。";

        for (let i = 1; i <= Welcome_Button_Window_Innertext.length; i++) {
            setTimeout(function () {
                var Welcome_Button_Window_Innertext_Array = [Welcome_Button_Window_Innertext.substring(0, i)];
                Welcome_Button_Window_Content.innerHTML = Welcome_Button_Window_Innertext_Array[0];
            }, i * 100);
        }

        //创建窗口内容
        Welcome_Button_Window.appendChild(Welcome_Button_Window_Subbox);
        //窗口体包含窗口内部
        Welcome_Button_Window.appendChild(Welcome_Button_Window_Close_Button);
        //窗口体包含关闭按钮
        Welcome_Button_Window_Subbox.appendChild(Welcome_Button_Window_Content);
        //窗口内部包含窗口内容
        Welcome_Button_Window_Layer.appendChild(Welcome_Button_Window);
        //窗口图层包含窗口体
        var MonitorMargin = document.getElementById("MonitorMargin")
        MonitorMargin.insertAdjacentElement("afterend", Welcome_Button_Window_Layer)
        //屏幕包含窗口图层
        var id = document.createAttribute('id');
        id.value = "Welcome_Button_Window";
        Welcome_Button_Window.setAttributeNode(id);
        Welcome_Button_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
        Welcome_Button_Window_Layer.style.width = "1024px"
        Welcome_Button_Window_Layer.style.height = "768px"
        Welcome_Button_Window_Layer.style.padding = "0px"
        Welcome_Button_Window_Layer.style.margin = "0 auto"
        //对窗口图层的属性进行设置
        Welcome_Button_Window_Subbox.style.width = "440px"
        Welcome_Button_Window_Subbox.style.height = "317px"
        Welcome_Button_Window_Subbox.style.backgroundColor = "white"
        Welcome_Button_Window_Subbox.style.backgroundSize = "cover"
        Welcome_Button_Window_Subbox.style.textAlign = "left"
        Welcome_Button_Window_Subbox.style.float = "left"
        Welcome_Button_Window_Subbox.style.position = "relative"
        Welcome_Button_Window_Subbox.style.left = "5px"
        Welcome_Button_Window_Subbox.style.top = "28px"
        Welcome_Button_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
        Welcome_Button_Window_Subbox.style.fontSize = "22px"
        //对subbox的属性进行设置
        Welcome_Button_Window.style.width = "450px"
        Welcome_Button_Window.style.height = "350px"
        Welcome_Button_Window.style.backgroundColor = "grey"
        Welcome_Button_Window.style.backgroundSize = "127"
        Welcome_Button_Window.style.textAlign = "left"
        Welcome_Button_Window.style.position = "relative"
        Welcome_Button_Window.style.left = "245px"
        Welcome_Button_Window.style.top = "-285px"
        //对Menu_Window的属性进行设置
        Welcome_Button_Window_Close_Button.style.width = "9px"
        Welcome_Button_Window_Close_Button.style.height = "9px"
        Welcome_Button_Window_Close_Button.style.backgroundColor = "white"
        Welcome_Button_Window_Close_Button.style.border = "5px black solid"
        Welcome_Button_Window_Close_Button.style.position = "relative"
        Welcome_Button_Window_Close_Button.style.left = "5px"
        Welcome_Button_Window_Close_Button.style.top = "5px"
        //对关闭按钮的属性进行设置
        Welcome_Button_Window_Close_Button.addEventListener('click', function () {
            var intervalID = setInterval(function () {
                if (document.getElementById("Welcome_Button_Window_Layer") != null) {
                    var Welcome_Button_Window_Layer = document.getElementById("Welcome_Button_Window_Layer");
                    Welcome_Button_Window_Layer.parentNode.removeChild(Welcome_Button_Window_Layer);
                } else {
                    clearInterval(intervalID); // 清除interval
                }
            }, 1);
        })

    })
})
Welcome_Button.addEventListener('mouseleave', function () {
    //console.log("mouse is leaving Welcome_Button")
    Welcome_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
})
//鼠标移入和移除Welcome按钮

var Infinite_HD_Button = document.getElementById("Infinite_HD_Button");
Infinite_HD_Button.addEventListener('mouseenter', function () {
    //console.log("mouse is entering Infinite_HD_Button")
    Infinite_HD_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
    Infinite_HD_Button.addEventListener('dblclick', function () {
        if (document.getElementById("Infinite_HD_Button_Window") != null) {
            var Former_Infinite_HD_Button_Window = document.getElementById("Infinite_HD_Button_Window")
            Former_Infinite_HD_Button_Window.parentNode.removeChild(Former_Infinite_HD_Button_Window)
        }
        //删除此前创建的Infinite_HD_Button窗口
        var Infinite_HD_Button_Window_Layer = document.createElement('div')
        Infinite_HD_Button_Window_Layer.id = "Infinite_HD_Button_Window_Layer"
        //创建窗口图层
        var Infinite_HD_Button_Window = document.createElement('div');
        //创建窗口体
        var Infinite_HD_Button_Window_Subbox = document.createElement('div');
        //创建窗口内部
        var Infinite_HD_Button_Window_Close_Button = document.createElement('div');
        //创建窗口关闭按钮
        var Infinite_HD_Button_Window_Content = document.createElement('div');
        Infinite_HD_Button_Window_Content.style.backgroundColor = "white"
        //创建窗口内容
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！
        var Something_You_Must_Know_Button = document.createElement('div')
        Something_You_Must_Know_Button.setAttribute('id', 'Something_You_Must_Know_Button')
        Infinite_HD_Button_Window_Content.appendChild(Something_You_Must_Know_Button)
        //窗口内容包含窗口图标
        Something_You_Must_Know_Button.style.width = "200px"
        Something_You_Must_Know_Button.style.height = "78px"
        Something_You_Must_Know_Button.style.backgroundImage = "url(./Library/Something_You_Must_Know.png)"
        Something_You_Must_Know_Button.style.backgroundSize = "cover"
        Something_You_Must_Know_Button.style.position = "relative"
        Something_You_Must_Know_Button.style.left = "5px"
        Something_You_Must_Know_Button.style.top = "5px"
        //Something_You_Must_Know按钮的外观！
        Something_You_Must_Know_Button.addEventListener('mouseenter', function () {
            Something_You_Must_Know_Button.style.backgroundImage = "url(./Library/Anti_Something_You_Must_Know.png)"
            Something_You_Must_Know_Button.style.backgroundPosition = "-7px 0px"
        })
        Something_You_Must_Know_Button.addEventListener('mouseleave', function () {
            Something_You_Must_Know_Button.style.backgroundImage = "url(./Library/Something_You_Must_Know.png)"
            Something_You_Must_Know_Button.style.backgroundPosition = "0px 0px"
        })
        //Something_You_Must_Know按钮鼠标悬停行为
        Something_You_Must_Know_Button.addEventListener('dblclick', function () {
            if (document.getElementById("Something_You_Must_Know_Button_Window") != null) {
                var Former_Something_You_Must_Know_Button_Window = document.getElementById("Something_You_Must_Know_Button_Window")
                Former_Something_You_Must_Know_Button_Window.parentNode.removeChild(Former_Something_You_Must_Know_Button_Window)
            }
            //删除此前创建的Something_You_Must_Know_Button窗口
            var Something_You_Must_Know_Button_Window_Layer = document.createElement('div')
            Something_You_Must_Know_Button_Window_Layer.id = "Something_You_Must_Know_Button_Window_Layer"
            //创建窗口图层
            var Something_You_Must_Know_Button_Window = document.createElement('div');
            //创建窗口体
            var Something_You_Must_Know_Button_Window_Subbox = document.createElement('div');
            //创建窗口内部
            var Something_You_Must_Know_Button_Window_Close_Button = document.createElement('div');
            //创建窗口关闭按钮
            var Something_You_Must_Know_Button_Window_Content = document.createElement('textarea');
            Something_You_Must_Know_Button_Window_Content.setAttribute('id', 'Edit_Button_Window_Content');
            Something_You_Must_Know_Button_Window_Content.style.fontFamily = "'Pixel_Font', sans-serif"
            Something_You_Must_Know_Button_Window_Content.style.backgroundColor = "white"
            Something_You_Must_Know_Button_Window_Content.style.color = "black !important"
            Something_You_Must_Know_Button_Window_Content.style.width = "435px"
            Something_You_Must_Know_Button_Window_Content.style.height = "313px"
            Something_You_Must_Know_Button_Window_Content.style.fontSize = "22px"
            Something_You_Must_Know_Button_Window_Content.style.textAlign = "center"
            Something_You_Must_Know_Button_Window_Content.style.resize = "none"
            Something_You_Must_Know_Button_Window_Content.style.pointerEvents = "none"
            //设置文字框背景颜色
            var Something_You_Must_Know_Button_Window_Innertext = "如果你看到\n什么写着不能打开的东西\n那就请放心的打开它吧\n不然怎么能触发剧情呢\n(bushi)";

            for (let i = 1; i <= Something_You_Must_Know_Button_Window_Innertext.length; i++) {
                setTimeout(function () {
                    var Something_You_Must_Know_Button_Window_Innertext_Array = [Something_You_Must_Know_Button_Window_Innertext.substring(0, i)];
                    Something_You_Must_Know_Button_Window_Content.innerHTML = Something_You_Must_Know_Button_Window_Innertext_Array[0];
                }, i * 50);
            }


            //创建窗口内容
            Something_You_Must_Know_Button_Window.appendChild(Something_You_Must_Know_Button_Window_Subbox);
            //窗口体包含窗口内部
            Something_You_Must_Know_Button_Window.appendChild(Something_You_Must_Know_Button_Window_Close_Button);
            //窗口体包含关闭按钮
            Something_You_Must_Know_Button_Window_Subbox.appendChild(Something_You_Must_Know_Button_Window_Content);
            //窗口内部包含窗口内容
            Something_You_Must_Know_Button_Window_Layer.appendChild(Something_You_Must_Know_Button_Window);
            //窗口图层包含窗口体
            var MonitorMargin = document.getElementById("MonitorMargin")
            MonitorMargin.insertAdjacentElement("afterend", Something_You_Must_Know_Button_Window_Layer)
            //屏幕包含窗口图层
            var id = document.createAttribute('id');
            id.value = "Something_You_Must_Know_Button_Window";
            Something_You_Must_Know_Button_Window.setAttributeNode(id);
            Something_You_Must_Know_Button_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
            Something_You_Must_Know_Button_Window_Layer.style.width = "1024px"
            Something_You_Must_Know_Button_Window_Layer.style.height = "768px"
            Something_You_Must_Know_Button_Window_Layer.style.padding = "0px"
            Something_You_Must_Know_Button_Window_Layer.style.margin = "0 auto"
            //对窗口图层的属性进行设置
            Something_You_Must_Know_Button_Window_Subbox.style.width = "440px"
            Something_You_Must_Know_Button_Window_Subbox.style.height = "317px"
            Something_You_Must_Know_Button_Window_Subbox.style.backgroundColor = "white"
            Something_You_Must_Know_Button_Window_Subbox.style.backgroundSize = "cover"
            Something_You_Must_Know_Button_Window_Subbox.style.textAlign = "left"
            Something_You_Must_Know_Button_Window_Subbox.style.float = "left"
            Something_You_Must_Know_Button_Window_Subbox.style.position = "relative"
            Something_You_Must_Know_Button_Window_Subbox.style.left = "5px"
            Something_You_Must_Know_Button_Window_Subbox.style.top = "28px"
            Something_You_Must_Know_Button_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
            Something_You_Must_Know_Button_Window_Subbox.style.fontSize = "22px"
            //对subbox的属性进行设置
            Something_You_Must_Know_Button_Window.style.width = "450px"
            Something_You_Must_Know_Button_Window.style.height = "350px"
            Something_You_Must_Know_Button_Window.style.backgroundColor = "grey"
            Something_You_Must_Know_Button_Window.style.backgroundSize = "127"
            Something_You_Must_Know_Button_Window.style.textAlign = "left"
            Something_You_Must_Know_Button_Window.style.position = "relative"
            Something_You_Must_Know_Button_Window.style.left = "245px"
            Something_You_Must_Know_Button_Window.style.top = "-285px"
            //对Menu_Window的属性进行设置
            Something_You_Must_Know_Button_Window_Close_Button.style.width = "9px"
            Something_You_Must_Know_Button_Window_Close_Button.style.height = "9px"
            Something_You_Must_Know_Button_Window_Close_Button.style.backgroundColor = "white"
            Something_You_Must_Know_Button_Window_Close_Button.style.border = "5px black solid"
            Something_You_Must_Know_Button_Window_Close_Button.style.position = "relative"
            Something_You_Must_Know_Button_Window_Close_Button.style.left = "5px"
            Something_You_Must_Know_Button_Window_Close_Button.style.top = "5px"
            //对关闭按钮的属性进行设置
            Something_You_Must_Know_Button_Window_Close_Button.addEventListener('click', function () {
                var intervalID = setInterval(function () {
                    if (document.getElementById("Something_You_Must_Know_Button_Window_Layer") != null) {
                        var Something_You_Must_Know_Button_Window_Layer = document.getElementById("Something_You_Must_Know_Button_Window_Layer");
                        Something_You_Must_Know_Button_Window_Layer.parentNode.removeChild(Something_You_Must_Know_Button_Window_Layer);
                    } else {
                        clearInterval(intervalID); // 清除interval
                    }
                }, 1);
            })

        })
        //Something_You_Must_Know按钮单击行为
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！

        Infinite_HD_Button_Window.appendChild(Infinite_HD_Button_Window_Subbox);
        //窗口体包含窗口内部
        Infinite_HD_Button_Window.appendChild(Infinite_HD_Button_Window_Close_Button);
        //窗口体包含关闭按钮
        Infinite_HD_Button_Window_Subbox.appendChild(Infinite_HD_Button_Window_Content);
        //窗口内部包含窗口内容
        Infinite_HD_Button_Window_Layer.appendChild(Infinite_HD_Button_Window);
        //窗口图层包含窗口体
        var MonitorMargin = document.getElementById("MonitorMargin")
        MonitorMargin.insertAdjacentElement("afterend", Infinite_HD_Button_Window_Layer)
        //屏幕包含窗口图层
        var id = document.createAttribute('id');
        id.value = "Infinite_HD_Button_Window";
        Infinite_HD_Button_Window.setAttributeNode(id);
        Infinite_HD_Button_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
        Infinite_HD_Button_Window_Layer.style.width = "1024px"
        Infinite_HD_Button_Window_Layer.style.height = "768px"
        Infinite_HD_Button_Window_Layer.style.padding = "0px"
        Infinite_HD_Button_Window_Layer.style.margin = "0 auto"
        //对窗口图层的属性进行设置
        Infinite_HD_Button_Window_Subbox.style.width = "440px"
        Infinite_HD_Button_Window_Subbox.style.height = "317px"
        Infinite_HD_Button_Window_Subbox.style.backgroundColor = "white"
        Infinite_HD_Button_Window_Subbox.style.backgroundSize = "cover"
        Infinite_HD_Button_Window_Subbox.style.textAlign = "left"
        Infinite_HD_Button_Window_Subbox.style.float = "left"
        Infinite_HD_Button_Window_Subbox.style.position = "relative"
        Infinite_HD_Button_Window_Subbox.style.left = "5px"
        Infinite_HD_Button_Window_Subbox.style.top = "28px"
        Infinite_HD_Button_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
        Infinite_HD_Button_Window_Subbox.style.fontSize = "22px"
        //对subbox的属性进行设置
        Infinite_HD_Button_Window.style.width = "450px"
        Infinite_HD_Button_Window.style.height = "350px"
        Infinite_HD_Button_Window.style.backgroundColor = "grey"
        Infinite_HD_Button_Window.style.backgroundSize = "127"
        Infinite_HD_Button_Window.style.textAlign = "left"
        Infinite_HD_Button_Window.style.position = "relative"
        Infinite_HD_Button_Window.style.left = "245px"
        Infinite_HD_Button_Window.style.top = "-285px"
        //对Menu_Window的属性进行设置
        Infinite_HD_Button_Window_Close_Button.style.width = "9px"
        Infinite_HD_Button_Window_Close_Button.style.height = "9px"
        Infinite_HD_Button_Window_Close_Button.style.backgroundColor = "white"
        Infinite_HD_Button_Window_Close_Button.style.border = "5px black solid"
        Infinite_HD_Button_Window_Close_Button.style.position = "relative"
        Infinite_HD_Button_Window_Close_Button.style.left = "5px"
        Infinite_HD_Button_Window_Close_Button.style.top = "5px"
        //对关闭按钮的属性进行设置
        Infinite_HD_Button_Window_Close_Button.addEventListener('click', function () {
            var intervalID = setInterval(function () {
                if (document.getElementById("Infinite_HD_Button_Window_Layer") != null) {
                    var Infinite_HD_Button_Window_Layer = document.getElementById("Infinite_HD_Button_Window_Layer");
                    Infinite_HD_Button_Window_Layer.parentNode.removeChild(Infinite_HD_Button_Window_Layer);
                } else {
                    clearInterval(intervalID); // 清除interval
                }
            }, 1);
        })
    })
})
Infinite_HD_Button.addEventListener('mouseleave', function () {
    //console.log("mouse is leaving Infinite_HD_Button")
    Infinite_HD_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
})
//鼠标移入和移除Infinite_HD按钮

var Trash_Button = document.getElementById("Trash_Button");
Trash_Button.addEventListener('mouseenter', function () {
    //console.log("mouse is entering Trash_Button")
    Trash_Button.style.animation = "Mouse_Hovering_Animation 0.3s linear 0s infinite"
    Trash_Button.addEventListener('dblclick', function () {
        if (document.getElementById("Trash_Button_Window") != null) {
            var Former_Trash_Button_Window = document.getElementById("Trash_Button_Window")
            Former_Trash_Button_Window.parentNode.removeChild(Former_Trash_Button_Window)
        }
        //删除此前创建的Trash_Button窗口
        var Trash_Button_Window_Layer = document.createElement('div')
        Trash_Button_Window_Layer.id = "Trash_Button_Window_Layer"
        //创建窗口图层
        var Trash_Button_Window = document.createElement('div');
        //创建窗口体
        var Trash_Button_Window_Subbox = document.createElement('div');
        //创建窗口内部
        var Trash_Button_Window_Close_Button = document.createElement('div');
        //创建窗口关闭按钮
        var Trash_Button_Window_Content = document.createElement('div');
        Trash_Button_Window_Content.style.backgroundColor = "white"
        //创建窗口内容
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！
        var Do_Not_Open_Button = document.createElement('div')
        Do_Not_Open_Button.setAttribute('id', 'Do_Not_Open_Button')
        Trash_Button_Window_Content.appendChild(Do_Not_Open_Button)
        //窗口内容包含窗口图标
        Do_Not_Open_Button.style.width = "104px"
        Do_Not_Open_Button.style.height = "91px"
        Do_Not_Open_Button.style.backgroundImage = "url(./Library/Do_Not_Open.png)"
        Do_Not_Open_Button.style.backgroundSize = "cover"
        Do_Not_Open_Button.style.position = "relative"
        Do_Not_Open_Button.style.left = "5px"
        Do_Not_Open_Button.style.top = "5px"
        //Do_Not_Open按钮的外观！
        Do_Not_Open_Button.addEventListener('mouseenter', function () {
            Do_Not_Open_Button.style.backgroundImage = "url(./Library/Anti_Do_Not_Open.png)"
            Do_Not_Open_Button.style.backgroundPosition = "-7px 0px"
        })
        Do_Not_Open_Button.addEventListener('mouseleave', function () {
            Do_Not_Open_Button.style.backgroundImage = "url(./Library/Do_Not_Open.png)"
            Do_Not_Open_Button.style.backgroundPosition = "0px 0px"
        })
        //Do_Not_Open按钮鼠标悬停行为
        Do_Not_Open_Button.addEventListener('dblclick', function () {
            if (document.getElementById("Do_Not_Open_Button_Window") != null) {
                var Former_Do_Not_Open_Button_Window_Layer = document.getElementById("Do_Not_Open_Button_Window_Layer")
                Former_Do_Not_Open_Button_Window_Layer.parentNode.removeChild(Former_Do_Not_Open_Button_Window_Layer)
            }
            //删除此前创建的Do_Not_Open_Button窗口
            var Do_Not_Open_Button_Window_Layer = document.createElement('div')
            Do_Not_Open_Button_Window_Layer.id = "Do_Not_Open_Button_Window_Layer";
            //创建窗口图层
            var Do_Not_Open_Button_Window = document.createElement('div');
            Do_Not_Open_Button_Window.id = "Do_Not_Open_Button_Window"
            //创建窗口体
            var Do_Not_Open_Button_Window_Subbox = document.createElement('div');
            //创建窗口内部
            var Do_Not_Open_Button_Window_Close_Button = document.createElement('div');
            //创建窗口关闭按钮
            var Do_Not_Open_Button_Window_Content = document.createElement('textarea');
            Do_Not_Open_Button_Window_Content.setAttribute('id', 'Do_Not_Open_Button_Window_Button_Window_Content');
            Do_Not_Open_Button_Window_Content.style.fontFamily = "'Pixel_Font', sans-serif"
            Do_Not_Open_Button_Window_Content.style.backgroundColor = "white"
            Do_Not_Open_Button_Window_Content.style.color = "black !important"
            Do_Not_Open_Button_Window_Content.style.width = "435px"
            Do_Not_Open_Button_Window_Content.style.height = "313px"
            Do_Not_Open_Button_Window_Content.style.fontSize = "22px"
            Do_Not_Open_Button_Window_Content.style.textAlign = "center"
            Do_Not_Open_Button_Window_Content.style.float = "left"
            Do_Not_Open_Button_Window_Content.style.resize = "none"
            Do_Not_Open_Button_Window_Content.style.pointerEvents = "none"
            //设置文字框背景颜色
            var Do_Not_Open_Button_Window_Innertext = ["-----A Boy's Diary-----\n1984年1月17日\n.  .  .  .  .", "我从未理解过任何事情。\n.  .  .  .  .", "微积分太难了\n.  .  .  .  .", "线性代数也不会\n.  .  .  .  .", "没有人理解我\n.  .  .  .  .", "食堂也不好吃\n.  .  .  .  .", "他们根本不在乎我是生是死。\n.  .  .  .  .  .", "我以为这个世界应该是没有痛苦和不确定性的。\n.  .  .  .  .  .  .  .  .  .  .", "如果我从未存在过，也是无所谓的吧\n.  .  .  .  .  .  .  . ", "人类经常在心中感到痛苦，但人们可以忘记过去，这使得他们能够继续生活。\n.  .  .  .  .  .  .  .  .  .  .  .  .  .  . ", "你会发现你并不是第一个被人类行为所困惑、害怕甚至恶心的人。\n.  .  .  .  .  .  .  .  .  . ", "然后当你死了，他们星期天来给你的肚子上放一堆花，说着那些废话。谁想在死了之后要花？没有人。\n.  .  .  .  .  .  .  .  .  .", "\"我只想做那看守麦田的人。我知道这很疯狂，但那是我唯一真正想要做的事情。\"\n.  .  .  .  .  .  .  .  .  .  .  .  .", "人类害怕黑暗，所以他们创造了火\n.  .  .  .  . ", "人类也恐惧痛苦，但他们的世界仍是一场悲剧。\n.  .  .  .  .  .  .", "每个人都有多于自己快乐所需要的微笑，和多于自己痛苦所需要的眼泪。\n.  .  .  .  .  .  .  .  .  .  . ", "我想要一直微笑下去\n.  .  .  .  .", "但很抱歉\n在这个世界里，我做不到\n.  .  .  .  .  .  .", "所以\n或许\n结束这个世界会更好\n去到一个没有痛苦的地方\n你说呢 "]
            //["-----A Boy's Diary-----\n     ","No-one understands me\n     ", "Nobody wants me.\n     ", "Nobody cares whether I live or die.\n   ", "I never understood anything.\n     ","I thought this was supposed to be a world without pain and without uncertainty.\n     ","It would be better if I never existed.\n   ","Human beings cannot eliminate loneliness forever; a person always remains alone. However, people can forget the past, which enables them to continue living. Humans often feel pain in their hearts. Because the soul fears pain, it perceives survival as difficult. You are as fragile as glass, especially your heart.\n     ","You'll find that you're not the first person who was ever confused and frightened and even sickened by human behavior. You're by no means alone on that score, you'll be excited and stimulated to know. Many, many men have been just as troubled morally and spiritually as you are right now. Happily, some of them kept records of their troubles. \n     ","You'll learn from them—if you want to. Just as someday, if you have something to offer, someone will learn something from you. It's a beautiful reciprocal arrangement. And it isn't education. It's history. It's poetry.\n     ","When you're dead, they really fix you up. I hope to hell when I do die somebody has sense enough to just dump me in the river or something. Anything except sticking me in a goddam cemetery. People coming and putting a bunch of flowers on your stomach on Sunday, and all that crap. Who wants flowers when you're dead? Nobody.\n     ","I'd just be the catcher in the rye and all. I know it's crazy, but that's the only thing I'd really like to be. I know it's crazy.I thought what I'd do was, I'd pretend I was one of those deaf-mutes. That way I wouldn't have to have any goddam stupid useless conversations with anybody.\n     ","Man fears the darkness, and so he scrapes away at the edges of it with fire.\n     ","The fate of destruction is also the joy of rebirth.\n     ","It is better to END THIS WORLD\n     "];

            var PrintingCondition = true

            function printElement(index) {
                if (!PrintingCondition) {return}
                else{
                if (index < Do_Not_Open_Button_Window_Innertext.length) {
                    var Do_Not_Open_Button_Window_Content_Varying_Text = Do_Not_Open_Button_Window_Innertext[index];
                    for (let i = 1; i <= Do_Not_Open_Button_Window_Innertext[index].length; i++) {
                        setTimeout(function () {
                            var Do_Not_Open_Button_Window_Innertext_Array = [Do_Not_Open_Button_Window_Content_Varying_Text.substring(0, i)];
                            Do_Not_Open_Button_Window_Content.innerHTML = Do_Not_Open_Button_Window_Innertext_Array[0];
                        }, i * 150);
                    }
                    setTimeout(function () {
                        printElement(index + 1);
                    }, (Do_Not_Open_Button_Window_Innertext[index].length) * 150); // 每隔1秒打印一个元素
                }
                if (index === Do_Not_Open_Button_Window_Innertext.length) {
                    createNewElement();
                }}
                
            }

            function createNewElement() {
                // 创建新元素的代码示例
                var Do_Not_Open_Button_Window_Content_Comfirming_Button = document.createElement('div');
                Do_Not_Open_Button_Window_Content_Comfirming_Button.style.height = "50px"
                Do_Not_Open_Button_Window_Content_Comfirming_Button.style.width = "125px"
                Do_Not_Open_Button_Window_Content_Comfirming_Button.style.backgroundSize = "cover"
                Do_Not_Open_Button_Window_Content_Comfirming_Button.style.backgroundImage = "url(./Library/OK_Button.png)"
                Do_Not_Open_Button_Window_Content_Comfirming_Button.style.float = "left"
                Do_Not_Open_Button_Window_Content_Comfirming_Button.style.position = "relative"
                Do_Not_Open_Button_Window_Content_Comfirming_Button.style.left = "159px"
                Do_Not_Open_Button_Window_Content_Comfirming_Button.style.border = "white 5px solid"
                Do_Not_Open_Button_Window_Content_Comfirming_Button.style.top = "-58px"
                // 将新元素插入到文档中的适当位置
                Do_Not_Open_Button_Window.appendChild(Do_Not_Open_Button_Window_Content_Comfirming_Button);
                // 例如，这里将新元素插入到文档的 body 中
                Do_Not_Open_Button_Window_Content_Comfirming_Button.addEventListener('click', function () {
                    var Machine_Audio = new Audio("./Library/Machine.mp3")
                    Machine_Audio.play();
                    setTimeout(() => {
                        var targetURL = "./Library/SecondStage.html";
                        window.location.href = targetURL;
                    }, 3000);

                })
            }
            printElement(0)
            //周期性打印文本


            //创建窗口内容
            Do_Not_Open_Button_Window.appendChild(Do_Not_Open_Button_Window_Subbox);
            //窗口体包含窗口内部
            Do_Not_Open_Button_Window.appendChild(Do_Not_Open_Button_Window_Close_Button);
            //窗口体包含关闭按钮
            Do_Not_Open_Button_Window_Subbox.appendChild(Do_Not_Open_Button_Window_Content);
            //窗口内部包含窗口内容
            Do_Not_Open_Button_Window_Layer.appendChild(Do_Not_Open_Button_Window);
            //窗口图层包含窗口体
            var MonitorMargin = document.getElementById("MonitorMargin")
            MonitorMargin.insertAdjacentElement("afterend", Do_Not_Open_Button_Window_Layer)
            //屏幕包含窗口图层
            var id = document.createAttribute('id');
            id.value = "Do_Not_Open_Button_Window";
            Do_Not_Open_Button_Window.setAttributeNode(id);
            Do_Not_Open_Button_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
            Do_Not_Open_Button_Window_Layer.style.width = "1024px"
            Do_Not_Open_Button_Window_Layer.style.height = "768px"
            Do_Not_Open_Button_Window_Layer.style.padding = "0px"
            Do_Not_Open_Button_Window_Layer.style.margin = "0 auto"
            //对窗口图层的属性进行设置
            Do_Not_Open_Button_Window_Subbox.style.width = "440px"
            Do_Not_Open_Button_Window_Subbox.style.height = "317px"
            Do_Not_Open_Button_Window_Subbox.style.backgroundColor = "white"
            Do_Not_Open_Button_Window_Subbox.style.backgroundSize = "cover"
            Do_Not_Open_Button_Window_Subbox.style.textAlign = "left"
            Do_Not_Open_Button_Window_Subbox.style.float = "left"
            Do_Not_Open_Button_Window_Subbox.style.position = "relative"
            Do_Not_Open_Button_Window_Subbox.style.left = "5px"
            Do_Not_Open_Button_Window_Subbox.style.top = "28px"
            Do_Not_Open_Button_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
            Do_Not_Open_Button_Window_Subbox.style.fontSize = "22px"
            //对subbox的属性进行设置
            Do_Not_Open_Button_Window.style.width = "450px"
            Do_Not_Open_Button_Window.style.height = "350px"
            Do_Not_Open_Button_Window.style.backgroundColor = "grey"
            Do_Not_Open_Button_Window.style.backgroundSize = "127"
            Do_Not_Open_Button_Window.style.textAlign = "left"
            Do_Not_Open_Button_Window.style.position = "relative"
            Do_Not_Open_Button_Window.style.left = "245px"
            Do_Not_Open_Button_Window.style.top = "-285px"
            //对Menu_Window的属性进行设置
            Do_Not_Open_Button_Window_Close_Button.style.width = "9px"
            Do_Not_Open_Button_Window_Close_Button.style.height = "9px"
            Do_Not_Open_Button_Window_Close_Button.style.backgroundColor = "white"
            Do_Not_Open_Button_Window_Close_Button.style.border = "5px black solid"
            Do_Not_Open_Button_Window_Close_Button.style.position = "relative"
            Do_Not_Open_Button_Window_Close_Button.style.left = "5px"
            Do_Not_Open_Button_Window_Close_Button.style.top = "5px"
            //对关闭按钮的属性进行设置
            Do_Not_Open_Button_Window_Close_Button.addEventListener('click', function () {
                PrintingCondition = false
                Do_Not_Open_Button_Window_Layer.parentNode.removeChild(Do_Not_Open_Button_Window_Layer)
                // var intervalID = setInterval(function () {
                //     if (document.getElementById("Do_Not_Open_Button_Window_Layer") != null) {
                //         var Do_Not_Open_Button_Window_Layer = document.getElementById("Do_Not_Open_Button_Window_Layer");
                //         Do_Not_Open_Button_Window_Layer.parentNode.removeChild(Do_Not_Open_Button_Window_Layer);
                //     } else {
                //         clearInterval(intervalID); // 清除interval
                //     }
                // }, 1);
            })

        })
        //Do_Not_Open按钮单击行为
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！
        //以下内容均为窗口内部内容！

        Trash_Button_Window.appendChild(Trash_Button_Window_Subbox);
        //窗口体包含窗口内部
        Trash_Button_Window.appendChild(Trash_Button_Window_Close_Button);
        //窗口体包含关闭按钮
        Trash_Button_Window_Subbox.appendChild(Trash_Button_Window_Content);
        //窗口内部包含窗口内容
        Trash_Button_Window_Layer.appendChild(Trash_Button_Window);
        //窗口图层包含窗口体
        var MonitorMargin = document.getElementById("MonitorMargin")
        MonitorMargin.insertAdjacentElement("afterend", Trash_Button_Window_Layer)
        //屏幕包含窗口图层
        var id = document.createAttribute('id');
        id.value = "Trash_Button_Window";
        Trash_Button_Window.setAttributeNode(id);
        Trash_Button_Window_Layer.style.backgroundColor = "rgba(0,0,0,0)"
        Trash_Button_Window_Layer.style.width = "1024px"
        Trash_Button_Window_Layer.style.height = "768px"
        Trash_Button_Window_Layer.style.padding = "0px"
        Trash_Button_Window_Layer.style.margin = "0 auto"
        //对窗口图层的属性进行设置
        Trash_Button_Window_Subbox.style.width = "440px"
        Trash_Button_Window_Subbox.style.height = "317px"
        Trash_Button_Window_Subbox.style.backgroundColor = "white"
        Trash_Button_Window_Subbox.style.backgroundSize = "cover"
        Trash_Button_Window_Subbox.style.textAlign = "left"
        Trash_Button_Window_Subbox.style.float = "left"
        Trash_Button_Window_Subbox.style.position = "relative"
        Trash_Button_Window_Subbox.style.left = "5px"
        Trash_Button_Window_Subbox.style.top = "28px"
        Trash_Button_Window_Subbox.style.fontFamily = "'Pixelify Sans', sans-serif"
        Trash_Button_Window_Subbox.style.fontSize = "22px"
        //对subbox的属性进行设置
        Trash_Button_Window.style.width = "450px"
        Trash_Button_Window.style.height = "350px"
        Trash_Button_Window.style.backgroundColor = "grey"
        Trash_Button_Window.style.backgroundSize = "127"
        Trash_Button_Window.style.textAlign = "left"
        Trash_Button_Window.style.position = "relative"
        Trash_Button_Window.style.left = "245px"
        Trash_Button_Window.style.top = "-285px"
        //对Menu_Window的属性进行设置
        Trash_Button_Window_Close_Button.style.width = "9px"
        Trash_Button_Window_Close_Button.style.height = "9px"
        Trash_Button_Window_Close_Button.style.backgroundColor = "white"
        Trash_Button_Window_Close_Button.style.border = "5px black solid"
        Trash_Button_Window_Close_Button.style.position = "relative"
        Trash_Button_Window_Close_Button.style.left = "5px"
        Trash_Button_Window_Close_Button.style.top = "5px"
        //对关闭按钮的属性进行设置
        Trash_Button_Window_Close_Button.addEventListener('click', function () {
            var intervalID = setInterval(function () {
                if (document.getElementById("Trash_Button_Window_Layer") != null) {
                    var Trash_Button_Window_Layer = document.getElementById("Trash_Button_Window_Layer");
                    Trash_Button_Window_Layer.parentNode.removeChild(Trash_Button_Window_Layer);
                } else {
                    clearInterval(intervalID); // 清除interval
                }
            }, 1);
        })

    })
})
Trash_Button.addEventListener('mouseleave', function () {
    //console.log("mouse is leaving Trash_Button")
    Trash_Button.style.animation = "Mouse_leaving_Animation 0.3s linear 0s infinite"
})
//鼠标移入和移除Trash按钮
