const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//1.添加购物车
router.get('/add',(req,res)=>{
    var obj=req.query;
    var $lid=obj.lid;
    var $buyCount=obj.buyCount;
    if(!obj.lid){
        res.send({code:401,msg:'lid required'});
        return;
    }
    if(!obj.buyCount){
        res.send({code:402,msg:'buyCount required'});
        return;
    }
    if(!req.session.loginUid){
        req.session.pageToJump='cart.html';
        req.session.toBuyLid=obj.lid;
        req.session.toBuyCount=obj.buyCount;
        res.send({code:300,msg:'login required'});
        return;
    }
    var sql=`SELECT iid FROM xz_shoppingcart_item WHERE user_id=? AND product_id=?`;
    pool.query(sql,[req.session.loginUid,$lid],(err,result)=>{
        if(err) throw err;
        var sql2;
        if(result.length>0){
            sql2=`UPDATE xz_shoppingcart_item SET count=count+1 WHERE user_id=${req.session.loginUid} AND product_id=${$lid}`;

        }else{
            sql2=`INSERT INTO xz_shoppingcart_item VALUES(NULL, ${req.session.loginUid}, ${$lid}, ${$buyCount}, false)`;
        }
        pool.query(sql2,(err,result2)=>{
            if(err) throw err;
            if(result2.affectedRows>0){
                res.send({code:200,msg:'add suc'});
            }else{
                res.send({code:500,msg:'add err'});
            }
        });
    });
});
//2.购物车列表
router.get('/list',(req,res)=>{
    var output={};
    if(!req.session.loginUid){
        req.session.pageToJump='cart.html';
        res.send({code:300,msg:'login required'});
        return;
    }
    var sql='SELECT iid,lid,title,spec,price,count FROM xz_laptop l, xz_shoppingcart_item s WHERE l.lid=s.product_id AND user_id=?';
    pool.query(sql,[req.session.loginUid],(err,result)=>{
        if(err) throw err;
        output.code=200;
        output.data=result;
        for(var i=0;i<output.data.length;i++){
            var lid=output.data[i].lid;
            (function(lid,i){
              pool.query('SELECT sm FROM xz_laptop_pic WHERE laptop_id=? LIMIT 1',[lid],(err,result)=>{
                output.data[i].pic=result[0].sm;
              });
            })(lid,i);
        }
        setTimeout(() => {
            res.send(output);
        }, 100);
    });
});
//3.删除购物车
router.get('/del',(req,res)=>{
    var obj=req.query;
    if(!obj.iid){
        res.send({code:401,msg:'iid required'});
        return;
    }
    if(!req.session.loginUid){
        res.send({code:300,msg:'login required'});
        return;
    }
    pool.query('DELETE FROM xz_shoppingcart_item WHERE iid=?',[obj.iid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:200,msg:'delete succ'});
        }else{
            res.send({code:500,msg:'delete err'});
        }
    });
});
//4.修改购物车条目中的购买数量
router.get('/updatecount',(req,res)=>{
    var obj=req.query;
    if(!obj.iid){
        res.send({code:401,msg:'iid required'});
        return;
    }
    if(!obj.count){
        res.send({code:402,msg:'count required'});
        return;
    }
    if(!req.session.loginUid){
        res.send({code:300,msg:'login required'});
        return;
    }
    pool.query('UPDATE xz_shoppingcart_item SET count=? WHERE iid=?',[obj.count,obj.iid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:200,msg:'update succ'});
        }else{
            res.send({code:500,msg:'update err'});
        }
    });
});
//5.修改购物车条目中的是否勾选
router.get('/updatechecked',(req,res)=>{
    var obj=req.query;
    if(!obj.iid){
        res.send({code:401,msg:'iid required'});
        return;
    }
    if(!obj.checked!==0 && !obj.checked){
        res.send({code:402,msg:'checked required'});
        return;
    }
    if(!req.session.loginUid){
        res.send({code:300,msg:'login required'});
        return;
    }
    pool.query('UPDATE xz_shoppingcart_item SET is_checked=? WHERE iid=?',[obj.checked,obj.iid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:200,msg:'update succ'});
        }else{
            res.send({code:500,msg:'update err'});
        }
    });
});
//6.获取当前登录用户的购物车内容(已勾选条目)
router.get('/listchecked',(req,res)=>{
    var output={};
    if(!req.session.loginUid){
        res.send({code:300,msg:'login required'});
        return;
    }
    var sql = "SELECT iid,lid,title,spec,price,count FROM xz_laptop l, xz_shoppingcart_item s WHERE l.lid=s.product_id AND user_id=? AND is_checked=1";
    pool.query(sql,[req.session.loginUid],(err,result)=>{
        if(err) throw err;
        output.code=200;
        output.data=result[0];
        for(var i=0;i<output.data.length;i++){
            var lid=output.data[i].lid;
            (function(lid,i){
              pool.query('SELECT sm FROM xz_laptop_pic WHERE laptop_id=? LIMIT 1',[lid],(err,result)=>{
                output.data[i].pic=result[0].sm;
              });
            })(lid,i);
        }
        setTimeout(() => {
            res.send(output);
          }, 100);
    });
});

module.exports=router;