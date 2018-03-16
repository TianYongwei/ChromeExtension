// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  
  var codeStr = '';
  codeStr += 'console.log("开始...");';
  /**
   * “低调化”处理
   * 1、按钮去色
   * 2、问题标题去掉加粗
   * 3、点赞按钮去色
   * 4、按钮的蓝色边框
   */
  codeStr += 'var classNames = new Array();';
  codeStr += 'classNames.push("Button--primary");';//高亮按钮
  codeStr += 'classNames.push("Button--blue");';//按钮-蓝色边框
  codeStr += 'classNames.push("Button");';//按钮
  codeStr += 'classNames.push("is-active");';//已赞按钮
  codeStr += 'classNames.push("QuestionHeader-title");';//问题标题
  codeStr += 'classNames.forEach(element => {console.log(element)});';

  codeStr += 'classNames.forEach(element => {';
  codeStr += '  console.log(document.getElementsByClassName(element).length);';
  codeStr += '  var btnPrimaryLength = document.getElementsByClassName(element).length;';
  codeStr += '  try{for(var i = 0;i<btnPrimaryLength;i++){document.getElementsByClassName(element)[0].className=document.getElementsByClassName(element)[0].className.replace(element,"")}}catch(err){console.log("隐藏Botton-primary出错！" + err)};';  
  codeStr += '});';

  /**
   * 隐藏处理
   * 1、隐藏知乎logo
   * 2、隐藏相关推荐和相关问题
   * 3、隐藏通知按钮，消息按钮
   */
  codeStr += 'document.getElementsByClassName("Icon--logo")[0].setAttribute("viewBox","0 0 0 0");';
  codeStr += 'var cards = document.getElementsByClassName("Card");';
  codeStr += 'for(var i=0;i<cards.length;i++){if("相关推荐" == cards[i].getAttribute("data-za-detail-view-path-module_name")) {cards[i].style.display="none"}if("RelatedQuestions" == cards[i].getAttribute("data-za-detail-view-path-module")) {cards[i].style.display="none"}};';
  codeStr += 'document.getElementsByClassName("Icon--news")[0].setAttribute("viewBox","0 0 0 0");';
  codeStr += 'document.getElementsByClassName("Icon--message")[0].setAttribute("viewBox","0 0 0 0");';

  /**
   * 改变fav.icon
   */
  codeStr += 'document.getElementsByTagName("link")[0].setAttribute("href","noneStr");';
  codeStr += 'console.log(document.getElementsByTagName("link")[0]);';

  codeStr += 'console.log("结束...");';
  
  chrome.tabs.executeScript({
    code: codeStr
  });
});
