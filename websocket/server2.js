var http = require('http');
var fs = require('fs');
var root = 'C:/xampp/htdocs/h5/websocket';
var server = http.createServer(function (req,res) {
    var url = req.url;
    var file = root + url;
    fs.readFile(file,function (err,success) {
        if (err) {
            res.writeHeader(404, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.write('404了资源不存在')
            res.write('<img src="http://moonbuy.cn/mall/static/images/error/upgrade.jpg">')
            res.end()
        } else {
            res.writeHeader(200, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.write(success)
            res.end()
        }
    })

}).listen(8088);
console.log('我是二')