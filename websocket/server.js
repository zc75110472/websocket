var http = require('http');

var sever = http.createServer(function (request, response) {
    // console.log('有人访问网页了');
    // console.log(request) 用户主机信息
    // 写入请求头信息 (防止乱码)
    // response.writeHeader(200, {
    //     'content-type': 'text/html;charset=utf-8'
    // })
    // response.write('你好')  // 返回客户端信息
    // response.write('<img width="200" src="http://127.0.0.1/h5/websocket/default.jpg">')
    response.writeHeader(404, {
        'content-type': 'text/html;charset=utf-8'
    })
    response.write('404了资源不存在')
    response.write('<img src="http://moonbuy.cn/mall/static/images/error/upgrade.jpg">')
    response.end()
}).listen(8090);

console.log('服务器启动了hha')