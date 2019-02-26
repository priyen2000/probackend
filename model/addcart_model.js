var db=require('../dbconnection');
var Addcart={
    getAllCart:function(callback){
        return db.query("select * from  addcart_tbl",callback);
    
    },
    addtoCart:function(item,callback){
        return db.query("insert into addcart_tbl(fk_user_id,fk_pro_id,Qty,tot_price) values(?,?,?,?)",[item.fk_user_id,item.fk_pro_id,item.Qty,item.tot_price],callback);
        },
        getCartByUserId:function(fk_user_id,callback){
            return db.query("select * from addcart_tbl  where fk_user_id=?",[fk_user_id],callback);
        },
        getCartBypro_id:function(fk_user_id,callback){
            return db.query("select p.*,a.*,u.* from product_tbl p,addcart_tbl a,user_tbl u where a.fk_pro_id=p.pro_id And a.fk_user_id=u.user_id And a.fk_user_id=?",[fk_user_id],callback);
        },
        deleteCartOrder:function(id,callback){
   
            return db.query("delete from addcart_tbl where cart_id in (?)",[id],callback);
      }

}
  module.exports=Addcart;