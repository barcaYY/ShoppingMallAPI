const express=require('express');
const cors=require('cors');
const session=require('express-session');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
const productRouter=require('./routes/product.js');
const indexRouter=require('./routes/index');
const cartRouter=require('./routes/cart');
//创建web服务器
var server=express();
server.listen(8080);
server.use(cors({
	'credentials':true,
	'origin':'http://localhost:8100'
}));

// 使用 session 中间件
server.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
}));
//托管静态资源到public目录下
server.use(express.static('public'));
server.use(bodyParser.json());
server.use('/user',userRouter);
server.use('/product',productRouter);
server.use('/cart',cartRouter);
server.use(indexRouter);
