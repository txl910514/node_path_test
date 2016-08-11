var gulp = require('gulp');
var connect = require('gulp-connect');
var path = require('path');

//使用connect启动一个Web服务器
gulp.task('connect', function () {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('path_test', function () {
/*  做项目时，往往都是基于相对路径，于是经常会出现类似这样的路径 path//upload/../file/./123.jpg。
  当然这个是把所有坑都写到一起了，不过就算这样的路径，path.normalize 分分钟搞定。*/
/*  var str = path.normalize('./path//upload/data/../file/./123.jpg');
  console.log(str); // path/upload/file/123.jpg*/

/*  path.join 拼接路径
  那些奇葩路径往往都是自己拼接导致的，如果用一些工具帮助我们处理这，就可以直接得到规范的路径了，而且不需要担心跨平台问题。这里的 path.join 就可以帮助我们生产跨平台，规范化的路径字符串。*/
/*  var str1 = path.join('./path/./', './upload', '/file', '123.jpg');
  console.log(str1); // path/upload/file/123.jpg

  var str2 = path.join('path', 'upload', 'file', '123.jpg');
  console.log(str2); // path/upload/file/123.jpg

  var arr = ['path', 'upload', 'file', '123.jpg'];
  var str3 = path.join.apply(null, arr);
  console.log(str3); // path/upload/file/123.jpg*/


/*  path.resolve 绝对路径
  这个绝对路径操作，跟上面的不太一样，如果你懂命令行 cd 命令，那就秒懂了，否则需要花点时间多跑几个例子才能理解。这次直接上官方例子。*/
/*  var strp=path.resolve('tmp/file', '/foo/bar', '..', 'a/../subfile');
 // 返回 /tmp/subfile
  console.log(strp);*/

/*  path.relative 相对路径
  有绝对就有相对，有时我们有两个绝对路径, 我们需要从中找出相对目录的起源目录。*/
/*  var strr=path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
  console.log(strr);*/
// 返回 ../../impl/bbb


/*  path.dirname 文件路径
  根据一个文件或目录得到它所在的目录路径，这个很常用。*/
/*  var strd1 = path.dirname('path/upload/file/123.jpg');
  console.log(strd1); // path/upload/file*/

/*  var strd2 = path.dirname(__filename); // 等价于 __dirname
  console.log(strd2, __dirname, __filename); // 当前文件所在目录*/


/*  path.basename 获取路径中的文件名
  确切的说是返回最后一个路径分割后面的文件名，不论是文件还是目录，第二个参数可以忽略文件后缀。*/
/*  var strb1 = path.basename('path/upload/file/123.txt.jpg');
  console.log(strb1); // 123.txt.jpg

  var strb2 = path.basename('path/upload/file/123.txt.jpg', '.jpg');
  console.log(strb2); // 123.txt

  var strb3 = path.basename('path/upload/file/123.txt.jpg', '.txt.jpg');
  console.log(strb3); // 123

  var strb4 = path.basename('path/upload/file/');
  console.log(strb4); // file

  var strb5 = path.basename(__filename);
  console.log(strb5); // file*/


/*  path.extname 文件后缀
  确切说，就是返回最后一个 . 之后的字符串，没有则返回空。*/

/*
  var stre1 = path.extname('path/upload/file/123.txt.jpg');
  console.log(stre1); // '.jpg'

  var stre2 = path.extname('path/upload/file/123.txt');
  console.log(stre2); // '.txt'

  var stre3 = path.extname('path/upload/file/');
  console.log(stre3); //

  var stre4 = path.extname(__filename);
  console.log(stre4); //*/

/*  path.parse 解析路径
  把一个路径解析为一个 {root:'', dir:'', base:'', ext:'', name:''} 这样的对象。
有时候要获取文件名，文件后缀，文件目录，这样到省事了，直接搞定。上官方例子。*/

/*  var strp1=path.parse('/home/user/dir/file.txt');
  console.log(strp1);

  var strp2=path.parse(__filename);
  console.log(strp2);*/

/*  path.format 生成路径
  正好跟 path.parse 相反，这个则是根据 {root:'', dir:'', base:'', ext:'', name:''} 这样的对象来生成字符串。上官方例子。*/

  var srtf=path.format({
    root : "/",
    dir : "/opt/node_path_test",
    base : "gulpfile.js",
    ext : ".js",
    name : "gulpfile"
  });

  console.log(srtf);

});

gulp.task('default', ['connect', 'path_test']);
