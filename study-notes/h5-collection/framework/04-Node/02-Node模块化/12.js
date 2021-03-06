/**
 * Created by Administrator on 2017/6/29.
 */

var http = require('http');
var formidable = require('formidable');
var sd = require('silly-datetime');
var path = require('path');
var fs = require('fs')

var server = http.createServer(function (req,res) {
    //判断是否post请求以及对应action
    if(req.url== '/dopost' && req.method.toLowerCase() == 'post') {

        //1.创建对应的form
        var form = new formidable.IncomingForm();

        //1.1在上传完成之前设置对应的上传路径
        form.uploadDir = "./upLoad";


        //2.解析对应的请求,表示所有的东西上传过来后进行解析

        //在解析的时候,我们可以获取旧的路径,然后使用新的路径代替就得路径

        form.parse(req,function (err, fields, files) {

            //req:表示请求
            //feilds:表示所有的域,包含单选框以及复选框以及别的在form可以用提交参数的所有的元素
            //files:表示所有上传过来的文件
            //2.1设置新的路径用来保证上传图片的名称唯一性

            //2017-6-29 16:07:30
            //2017629160729
            var nameTime = sd.format(new Date(), 'YYYYMMDDHHmmss');
            //设置一个随机数字用于和上面的时间进行拼接
            var random = parseInt(Math.random()*9999+10000);
            var extname = path.extname(files.tupian.path);
            //注意我们设置图片的令无论是旧的还是新的都采用决定路径
            var newName = __dirname +'/upLoad'+nameTime+random+extname;
            var oldName = __dirname +'/'+files.tupian.path;

            //修改名称,利用fs这个包
            fs.rename(oldName,newName,function (err) {
                if(err){
                    throw  err;
                }

            });





            //返回完成
            res.end();



        })


    }
});
server.listen(3000,'127.0.0.1');