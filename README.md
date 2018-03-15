### mute_zhihu

#### 实验网页
- [知乎:https://www.zhihu.com/question/20179805](https://www.zhihu.com/question/20179805){:target="_blank"}

#### 参考

- [介绍:https://developer.chrome.com/extensions](https://developer.chrome.com/extensions){:target="_blank"}
- [官方示例:https://developer.chrome.com/extensions](https://developer.chrome.com/extensions){:target="_blank"}

<script type="text/javascript">
    sonsole.log(123)
    var aTagArr = [].slice.apply(document.getElementsByTagName("a"));

    aTagArr.forEach(function (e, i) {
    e.href.indexOf("_blank") > -1 ? e.target = "_blank" : null;
    });
</script>