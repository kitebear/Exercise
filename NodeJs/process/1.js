//返回当前进程的命令行参数数组。
//console.log(process.argv);

//返回一个对象，成员为当前Shell的环境变量，比如process.env.HOME。
//console.log(process.env);

//process.installPrefix：node的安装路径的前缀，比如/usr/local，则node的执行文件目录为/usr/local/bin/node。
//console.log(process.installPrefix);

//process.stdin.resume();
//
//process.on('SIGINT', function() {
//    console.log('SIGINT信号，按Control-c退出');
//});