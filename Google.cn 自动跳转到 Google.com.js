// ==UserScript==
// @name         Google.cn 自动跳转到 Google.com
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动将所有 google.cn 域名跳转到 google.com
// @author       You
// @match        *://*.google.cn/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // 获取当前 URL
    let url = window.location.href;
    // 将域名中的 .google.cn 替换为 .google.com
    let newUrl = url.replace(/\.google\.cn/, ".google.com");
    // 如果替换后不同，则跳转
    if (newUrl !== url) {
        window.location.replace(newUrl);
    }
})();
