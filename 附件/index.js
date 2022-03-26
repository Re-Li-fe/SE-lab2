window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search(this);
    });
    document.addEventListener('keydown', function(e) {
        if (e.key == "Enter"){
        var ele = document.getElementById('search-btn');
        search(ele);}
    });

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener("click",function(){
        clickLogin();
    })
}

function search(ele) {
    // TODO: 搜索触发后的行为
    if(ele.previousElementSibling.value=='')
    alert("请输入搜索内容");
    else
    {
        window.open("http://www.baidu.com/s?wd="+ele.previousElementSibling.value);
        console.log(123);
    }
    ele.previousElementSibling.value='';
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" >\
                        </span>\
                        <span id="name"></span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
    var para = username.toString();
    username = para.split('<')[0];
    document.getElementById('name').innerHTML = username;

}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}