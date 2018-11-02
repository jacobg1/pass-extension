// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeTo = document.getElementById('changeTo');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
  changeTo.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id, {
          file: 'jquery/jquery-3.3.1.min.js'
        }, function () {
           chrome.tabs.executeScript({
             file: 'changeTo.js'
           });
        });
    });
  };

  let changeFrom = document.getElementById('changeFrom');

  changeFrom.onclick = function (element) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id, {
          file: 'jquery/jquery-3.3.1.min.js'
        }, function () {
           chrome.tabs.executeScript({
             file: 'changeFrom.js'
           });
        });
    });
  };
  let changeLinkTo = document.getElementById('changeLinkTo');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
  changeLinkTo.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id, {
          file: 'jquery/jquery-3.3.1.min.js'
        }, function () {
           chrome.tabs.executeScript({
             file: 'changeLinkTo.js'
           });
        });
    });
  };

  let changeLinkFrom = document.getElementById('changeLinkFrom');

  changeLinkFrom.onclick = function (element) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id, {
          file: 'jquery/jquery-3.3.1.min.js'
        }, function () {
           chrome.tabs.executeScript({
             file: 'changeLinkFrom.js'
           });
        });
    });
  };
