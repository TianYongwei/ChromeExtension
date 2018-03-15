// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  var codeStr = '';

  codeStr = 'var btnNodes = document.getElementsByClassName("Button--primary");';
  codeStr += 'for(var i=0;i<btnNodes.length;i++){console.log(btnNodes[i].className);console.log(btnNodes[i].className.replace("Button--primary",""));btnNodes[i].className=btnNodes[i].className.replace("Button--primary","")};';

  // codeStr = 'var titleNodes = document.getElementsByClassName("QuestionHeader-title");';
  // codeStr += 'for(var i=0;i<titleNodes.length;i++){console.log(i);titleNodes[i].className=""};';

  // codeStr = 'var titleNodes2 = document.getElementsByClassName("QuestionHeader-title");';
  // codeStr += 'for(var i=0;i<titleNodes2.length;i++){console.log(i);titleNodes2[i].className=""};';
  
  chrome.tabs.executeScript({
    code: codeStr
  });
});
