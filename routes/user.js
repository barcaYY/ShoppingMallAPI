//引入上一级目录下的mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//1.用户注册
router.post('/register',(req,res)=>{
  //获取post请求的数据
  var obj=req.body;
  //判断用户名是否为空
  var $uname=obj.uname;
  if(!$uname){
    res.send({code:401,msg:'uname required'});
	//阻止继续往后执行
    return;
  }
  //验证密码、邮箱、手机是否为空
  var $upwd=obj.upwd;
  if(!$upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  var $email=obj.email;
  if(!$email){
    res.send({code:403,msg:'email required'});
	return;
  }
  var $phone=obj.phone;
  if(!$phone){
    res.send({code:404,msg:'phone required'});
	return;
  }
  //执行SQL语句，将注册的数据插入到xz_user数据表中，成功响应 {code:200,msg:'register suc'}
  pool.query('INSERT INTO xz_user SET ?',[obj],(err,result)=>{
    if(err) throw err;
	//是否添加成功
	if(result.affectedRows>0){
	  res.send({code:200,msg:'register suc'});
	}
  });
});
//2.用户登录路由
router.post('/login',(req,res)=>{
  var obj=req.body;
  console.log(obj)
  //验证数据是否为空
  var $uname=obj.uname;
  var $upwd=obj.upwd;
  if(!$uname){
    res.send({code:401,msg:'uname required'});
	return;
  }
  if(!$upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  //执行SQL语句，查看是否登录成功（使用用户名和密码两个条件能查询到数据）
  pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
    if(err) throw err;
	//判断查询的结果（数组）长度是否大于0
	//如果大于0，说明查询到数据，有这个用户登录成功
	if(result.length>0){
    req.session.loginUname=$uname;
    req.session.loginUid=result[0].uid;
    console.log(req.session);
    res.send({code:200,msg:'login suc'});
	}else{
	  res.send({code:301,msg:'login err'});
	}
  });
});
//3.用户检索
router.get('/detail',(req,res)=>{
  //获取get请求的数据
  var obj=req.query;
  //console.log(obj);
  //判断是否为空
  var $uid=obj.uid;
  if(!$uid){
    res.send({code:401,msg:'uid required'});
	return;
  }
  //响应查询到的用户对象
  pool.query('SELECT * FROM xz_user WHERE uid=?',[$uid],(err,result)=>{
    if(err) throw err;
	//如何判断是否检索到了用户
	//判断结果（数组）长度是否大于0
	if(result.length>0){
	  res.send(result[0]);
	}else{
	  res.send({code:301,msg:'detail err'});
	}
  });
})
//4.更改用户
//获取数据，验证是否为空
//执行SQL语句，修改用户表中对应的数据
router.post('/update',(req,res)=>{
  var obj=req.body;
  var $uid=obj.uid;
  var $email=obj.email
  var $phone=obj.phone;
  var $gender=obj.gender;
  var $user_name=obj.user_name;
  if(!$uid){
    res.send({code:401,msg:'uid required'});
	return;
  }
  if(!$email){
    res.send({code:402,msg:'email required'});
	return;
  }
  if(!$phone){
    res.send({code:403,msg:'phone required'});
	return;
  }
  if(!$gender){
    res.send({code:404,msg:'gender required'});
	return;
  }
  if(!$user_name){
    res.send({code:405,msg:'user_name required'});
  }
  //执行SQL语句
  pool.query('UPDATE xz_user SET email=?,phone=?,gender=?,user_name=? WHERE uid=?',[$email,$phone,$gender,$user_name,$uid],(err,result)=>{
    if(err) throw err;
	//判断是否更改成功
	if(result.affectedRows>0){
	  res.send({code:200,msg:'update suc'});
	}else{
	  res.send({code:301,msg:'update err'});
	}
  });
});
//5.用户列表
//method:get  url:/list
router.get('/list',(req,res)=>{
  //获取数据
  var obj=req.query;
  var $pno=obj.pno;
  var $pageSize=obj.pageSize;
  var $kw=obj.kw;
  //验证页码
  if(!$pno) 
    $pno=1;
  else
    $pno=parseInt($pno);
  //验证每页大小
  if(!$pageSize)
    $pageSize=9;
  else
    $pageSize=parseInt($pageSize);
  var output={
    recordCount:0,
    pageSize:$pageSize,
    pageCount:0,
    pno:$pno, 
    data:[]
  };
  var sql1='SELECT COUNT(*) AS a FROM xz_user';
  if($kw){
    sql1+=` WHERE uname LIKE '%${$kw}%' OR user_name LIKE '%${$kw}%'`;
  }
  //计算开始查询的值
  var start=($pno-1)*output.pageSize;
  var count=output.pageSize;
  var sql2 = `SELECT uid,uname,email,phone,avatar,user_name,gender FROM xz_user ${$kw ? 'WHERE uname LIKE "%'+$kw+'%" OR user_name LIKE "%'+$kw+'%"':''} ORDER BY uid DESC LIMIT ${start},${count};`;
  //执行SQL语句，响应查询到的数据
  pool.query(`${sql1};${sql2}`,(err,result)=>{
    if(err) throw err;
    output.recordCount=result[0][0].a;
    //计算总页数
    output.pageCount=Math.ceil(output.recordCount/output.pageSize);
    output.data=result[1];
      res.send(output);
  });
});
//6.删除用户
router.get('/delete',(req,res)=>{
  //获取数据
  var obj=req.query;
  console.log(obj);
  var $uid=obj.uid;
  //验证编号是否为空
  if(!$uid){
    res.send({code:401,msg:'uid required'});
	  return;
  }
  //执行SQL语句，删除对应的数据
  pool.query('DELETE FROM xz_user WHERE uid=?',[$uid],(err,result)=>{
    if(err) throw err;
    //判断是否删除成功
    if(result.affectedRows>0){
      res.send({code:200,msg:'delete suc'});
    }else{
      res.send({code:301,msg:'delete err'});
    }
  });
});
//7.检测邮箱是否注册
router.get('/checkemail',(req,res)=>{
  var obj=req.query;
  var $email=obj.email;
  if(!$email){
    res.send({code:401,msg:"email required"});
    return;
  }
  pool.query('SELECT uid FROM xz_user WHERE email=? LIMIT 1',$email,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:201,msg:'exists'});
    }else{
      res.send({code:200,msg:'non-exists'});
    }
  })
});
//8.检测电话是否注册
router.get('/checkphone',(req,res)=>{
  var obj=req.query;
  var $phone=obj.phone;
  if(!$phone){
    res.send({code:401,msg:"phone required"});
    return;
  }
  pool.query('SELECT uid FROM xz_user WHERE phone=? LIMIT 1',$phone,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:201,msg:'exists'});
    }else{
      res.send({code:200,msg:'non-exists'});
    }
  })
});
//9.检测用户名是否注册
router.get('/checkuname',(req,res)=>{
  var obj=req.query;
  var $uname=obj.uname;
  if(!$uname){
    res.send({code:401,msg:"uname required"});
    return;
  }
  pool.query('SELECT uid FROM xz_user WHERE uname=? LIMIT 1',$uname,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:201,msg:'exists'});
    }else{
      res.send({code:200,msg:'non-exists'});
    }
  })
});
//10.退出登录
router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.send({code:200,msg:'logout succ'});
});
//11.返回当前登录用户的信息
router.get('/sessiondata',(req,res)=>{
  res.send({uid:req.session.loginUid,uname:req.session.loginUname});
});
//导出路由器
module.exports=router;