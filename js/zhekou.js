
$(function () {
    var manmanbuy = new Manmanbuy();
    id=getQueryString('id');
    manmanbuy.getDiscountData();
})
var id=0;
function Manmanbuy() {

};

Manmanbuy.prototype = {
    getDiscountData: function () {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getdiscountproduct",
            data:{
                'productid':id
            },
            success: function (backData) {
                // console.log(backData);
                var result = template('productDetailTmp', backData);
                $('#product-detail').html(result);
                $('.title').html(backData.result[0].productName);
                var tip = backData.result[0].productName;
                var result=tip.split(' ');
                tip=[];
                // console.log(tip);
                for(var i=1;i<result.length;i++){
                    tip.push(result[i]);
                }
                tip=tip.join(' , ');
                $('.tip').html(tip);
                
            }
        })
    }
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    } else {
        return null;
    }
}