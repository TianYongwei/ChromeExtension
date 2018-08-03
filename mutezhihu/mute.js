setTimeout(function(){
$(document).ready(function(){
    console.log("jqery is ok;")
	action();
});
},100);

function action() {
    console.log("开始...");
    /**
     * “低调化”处理
     * 1、按钮去色
     * 2、问题标题去掉加粗
     * 3、点赞按钮去色
     * 4、按钮的蓝色边框
     */
    var classNames = new Array();
    classNames.push("Button--primary");//高亮按钮
    classNames.push("Button--blue");//按钮-蓝色边框
    classNames.push("Button");//按钮
    classNames.push("is-active");//已赞按钮
    classNames.push("QuestionHeader-title");//问题标题
    classNames.push("Banner-image");//广告
    classNames.forEach(element => {
        console.log(element)
    });

    classNames.forEach(element => {
        console.log(document.getElementsByClassName(element).length + '========');
        var btnPrimaryLength = document.getElementsByClassName(element).length;
        try{
            for(var i = 0;i<btnPrimaryLength;i++){
                let html = document.getElementsByClassName(element)[0]
                // console.log(element)
                // console.log(html)
                html.className = 
                html.className.replace(element,"");
                // console.log(html)
                // console.error(document.getElementsByClassName(element)[i])
                // console.error(document.getElementsByClassName(element)[i].className)
                // console.error(typeof document.getElementsByClassName(element)[i].className)
                // console.log(document.getElementsByClassName(element).length)
            }
        } catch(err){
            console.error("隐藏Botton-primary出错！" + err);
            console.error(element);
            console.error(document.getElementsByClassName(element)[0].className);
            // continue;
        }
    });

    /**
     * 隐藏处理
     * 1、隐藏知乎logo
     * 2、隐藏相关推荐和相关问题
     * 3、隐藏通知按钮，消息按钮
     */
    document.getElementsByClassName("Icon--logo")[0].setAttribute("viewBox","0 0 0 0");
    var cards = document.getElementsByClassName("Card");
    for(var i=0;i<cards.length;i++){
        if("相关推荐" == cards[i].getAttribute("data-za-detail-view-path-module_name")) {
            cards[i].style.display="none"
        }
        if("RelatedQuestions" == cards[i].getAttribute("data-za-detail-view-path-module")) {
            cards[i].style.display="none"
        }
    };
    document.getElementsByClassName("Icon--news")[0].setAttribute("viewBox","0 0 0 0");
    document.getElementsByClassName("Icon--message")[0].setAttribute("viewBox","0 0 0 0");

    /**
     * 改变fav.icon
     */
    document.getElementsByTagName("link")[0].setAttribute("href","noneStr");
    console.log(document.getElementsByTagName("link")[0]);

    console.log("结束...");
}

String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}