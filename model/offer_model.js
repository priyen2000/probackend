var db=require('../dbconnection');
var offer={
    getAllProductOfHighRate:function(callback){
        return db.query("select * from  product_tbl where pro_price>500",callback);
    },
   
};
module.exports=offer;