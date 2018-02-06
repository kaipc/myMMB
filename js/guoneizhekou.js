$(function () {
    var manmanbuy = new Manmanbuy();
    manmanbuy.getDiscountData();
})

function Manmanbuy() {
    
};

Manmanbuy.prototype={
    getDiscountData:function () {
        $.ajax({
            url:"http://127.0.0.1:9090/api/getinlanddiscount",
            success:function (backData) {
                // console.log(backData);
                var result=template('productTmp',backData);
                $('#product').html(result);
            }
        })
    }
}