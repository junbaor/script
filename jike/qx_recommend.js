const url = "https://jike.junbao.me/api/recommendFeed";
const method = "POST";
const headers = { "Content-Type": "application/json" };
const data = {};

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: JSON.stringify(data)
};

$task.fetch(myRequest).then(response => {
    $done(response.body);
}, reason => {
    console.log("😿 替换动态广场失败, 原因: " + reason.error);
    $notify("😿 替换动态广场失败", "", "原因: " + reason.error + " 请刷新重试");
    $done();
});
