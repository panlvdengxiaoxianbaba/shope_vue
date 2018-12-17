<template>
    <div>
        <div class="big" >
            <form name="" action="" method="post" v-if='this.$store.state.hasLap!=0'>
                <section id="section">
                <div id="title">
                    <b>购物车</b>
                    <p>
                    已选<span class="totalOne color">{{this.list.length}}</span>件商品<span class="interval"></span>合计(不含运费):</span><span class="unit color">{{getToatlPrice}}元</span>
                    </p>
                </div>
                <div id="box">
                    <div id="content_box">
                    <div class="imfor_top">
                        <div class="check_top">
                        <div class="all">
                                        <span class="normal">
                                            <img src="img/cart/product_normal.png" alt="">
                                        </span> <input type="hidden" name="" value="" class='chee'>全选

                        </div>
                        </div>
                        <div class="pudc_top">商品</div>
                        <div class="pices_top">单价(元)</div>
                        <div class="num_top">数量</div>
                        <div class="totle_top">金额</div>
                        <div class="del_top">操作</div>
                    </div>
                    <div id="content_box_body">
                        <div class="imfor" v-for='(item,index) of list'>
                        <div class="check">
                            <div class="Each">
                                        <span class="normal">
                                            <input type="checkbox" class='chee' :data-id=item.id>
                                        </span>
                            <input type="hidden" name="lid" :value="item.id">
                            </div>
                        </div>
                        <div class="pudc">
                            <div class="pudc_information" :key='item.id'>
                            <router-link :to='"/details?id="+item.product_id'><img :src="item.mdpic" class="lf"></router-link>
                            <input type="hidden" name="" :value="item.id">
                                    <span class="des lf">
                                        <router-link :to='"/details?id="+item.product_id'>{{item.lname}}</router-link>
                                            <input type="hidden" name="" value="">
                                    </span>
                            
                            </div>
                        </div>
                        <div class="pices">
                            <p class="pices_des">心动惊喜价</p>
                            <p class="pices_information"><b>￥</b><span>{{item.price}}  <input type="hidden" name="" value=""></span></p>
                        </div>
                        <div class="num">
                        <span class="reduc" @click='redCart' :data-id='item.id'>&nbsp;-&nbsp;</span>
                                <input type="text" :value="item.count">
                        <span class="add" @click='addCart'   :data-id='item.id'>&nbsp;+&nbsp;</span>
                        </div>
                        <div class="totle">
                            <span>￥</span>
                            <span class="totle_information" >{{item.count*item.price}}</span>
                        </div>
                        <div class="del">
                            <a href="javascript:;" class="del_d"  :data-id='item.id' @click='deleteCart'>删除</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="foot">
                    <div class="foot_check">
                        <div class="all">
                                    <span class="normal">
                                            <img src="img/cart/product_normal.png" alt="">
                                        </span> <input type="hidden" name="" value="">全选
                        </div>
                    </div>
                    <a href="javascript:;" class="foot_del">删除</a>
                    <div class="foot_qk">清空失效商品</div>
                    <div class="foot_cash" id="go-buy">去结算</div>
                    <div class="foot_tol"><span>合计(不含运费):</span><span class="foot_pices susumOne">{{getToatlPrice}}</span><span class="foot_des">元</span></div>
                    <div class="foot_selected">
                        已选<span class="totalOne color">{{this.list.length}}</span>件商品 
                        
                    </div>
                    </div>
                    </div>
                    </section>
                </form>
            <div class="none" v-else>
                <div class="none_content">
                <p class="lf">您的购物车竟然还是空哒( ⊙ o ⊙ )</p>
                <span class="lf">赶快去下单吧！</span>
                <router-link to='/Index' class="lf">去购物&gt;&gt;</router-link>
                </div>
            </div>
            </div>
            <div class='bott'>
            </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods:{
               updateCart(id,count){
                    var url='http://127.0.0.1:3000/updateCart?id='+id+"&count="+count;
                    this.axios.get(url).then(result=>{
                            //console.log(result)
                    })
                },
               getCart(){
                    var url='http://127.0.0.1:3000/getCart';
                    this.axios.get(url).then(result=>{
                        if(result.data.code==-2){
                            // console.log(result.data) 
                             this.$router.push('/User')
                         }
                         this.list=result.data.data;
                         this.$store.commit('shopcount',result.data.data.length)
                         console.log(this.$store.state.hasLap)
                        // console.log(result.data.data.length)
                        })
                },
                redCart(e){
                    var id=e.target.dataset.id;
                     for(var item of this.list){
                         if(item.id==id && item.count>1){
                             item.count--;
                            this.updateCart(id,item.count);
                            break;
                        }
                     }
                },
                addCart(e){
                     var id=e.target.dataset.id;
                     for(var item of this.list){
                         if(item.id==id && item.count<=9999){
                             item.count++;
                            this.updateCart(id,item.count)
                            break;
                        }
                     }
                },
                deleteCart(e){
                    var id=e.target.dataset.id,url='http://127.0.0.1:3000/deletecart?id='+id;
                    this.axios.get(url).then(result=>{console.log(result)
                    this.getCart()
                    })
                }

        },
        computed:{
            getToatlPrice:function(){
                var sum=0
                for(var item of this.list){
                    sum+=item.price*item.count
                }
                return sum
            }
        },
        created(){
                 this.getCart()
        }
    }
</script>
<style >
.bott{height:50px}
 #section,.none{
    width:1000px;
    overflow: hidden;
    margin:0px auto;
    position: relative;
}
.big{
    width:1000px;
    margin:0px auto;
    position: relative;
}
#section{
    min-height:450px;
}
#container{
    width:1000px;
    margin-left:180px;
}
.clearfix { *zoom: 1;}
.clearfix:after{ content: ""; display: block; height: 0; visibility:hidden; clear: both;}
a{
    text-decoration:none;
    color:#808080;
}
.color{
    color:#0aa1ed;
}
#section{
    position: relative;
    z-index: 100;
    margin-top: 30px;
}
/*tltle*/
#title,#information,#informationTitle{
    width:100%;
    height:100%;
    position: relative;
}
#title{
    margin-bottom: 6px;
}
#title>b{
    width:60px;
    font:18px 'microsoft yahei';
    font-weight: bold;
    color:#333;
}
#title>p{
    position: absolute;
    bottom:0px;
    right:0px;
}
.total,.total1{
font-size: 14px;
    padding: 0 3px;
    font-weight: bold;
}
#title>p>.totalPrices{
    padding-left: 8px;
}
#title>p>.totalPrices,#title>p>.unit{
    font-size: 16px;
    font-weight: bold;
}
#title>p>.interval{
    display: inline-block;
    width:20px;
}

.imfor_top>div,.none_top{
    height: 36px;
    line-height: 36px;

    color:#808080;
    border-top: 1px solid #bbb;
}
.imfor>div{
    height: 115px;

}
.num,.totle{
    line-height:115px;
}
.imfor:hover {
    background: RGB(238, 246, 255);
}

.check,
.check_top {
    width: 62px;
    position: relative;
}
.all{
    margin-left: 10px;
    cursor: pointer;
}
.all>span{
    display: inline-block;
    width:12px;
    height:12px;
    margin-right: 5px;
    position: relative;


}
.all img{
    position: absolute;
    top:0px;
    left:0px;
}
.Each{
    position: absolute;
    top:49px;
    left:27px;
}
.Each>span{
    display: inline-block;
    width:12px;
    height:12px;
    cursor: pointer;
}

.pudc,
.pudc_top {
    width: 380px;
}

.pices{
    width: 151px;
}
.pices_top {
    width: 152px;
}
.totle {
    color: #808080;
}

.num,
.num_top {
    width: 149px;
}
.num_top {
    width: 150px;
}
.num>input {
    width: 17px;
    height:22px;
    padding-left:9px;
    font: 12px SimHei;
    border-top: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    float: left;
    margin-top: 43px;
}

.num>span {
    display: inline-block;
    height: 24px;
    width: 24px;
    border: 1px solid #bbb;
    background: #e8e8e8;
    text-align: center;
    line-height: 24px;
    color: #444;
    cursor: pointer;
    float: left;
    margin-top: 43px;
}
.reduc{

    margin-left: 37px;
}

.totle{
    width: 129px;
}
.totle_top {
    width: 130px;
}
.del{
    width: 125px;
    cursor: pointer;
}
.del_top {
    width: 126px;
}
.imfor_top>div,
.imfor>div {
    float: left;
    text-align: center;
}
.imfor>.pudc{
    text-align: left;

}
.imfor>.pudc>.pudc_information{
    height:84px;
    margin-top: 16px;
    margin-left:150px
}
.imfor>.pudc>.pudc_information .des{
    display: inline-block;
    width:270px;
    height:38px;
    text-align: left;
    padding-left:10px;
    color:#959595;
}
.imfor>.pudc>.pudc_information .col{
    width:270px;
    height:22px;
    text-align: left;
    padding-left:10px;
    color:#808080;
}
.pudc_information img{width:50px}
.imfor_top,
.imfor {
    width: 1000px;
}
.imfor{
    height:115px;
    margin-bottom: 10px;
    background: #fff;
    border: 1px solid #e8e8e8;
}
.imfor_top{
    height:36px;
    margin-bottom: 16px;
    background: -moz-linear-gradient(top, #f5f4f5 0%, #e6e6e5 100%);
    background: -webkit-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
    background: -o-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
    background: -ms-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
    box-shadow: 3px 3px 6px #ccc;
}
.pices,.num,.del,.totle{
    border-left: 1px solid #e8e8e8;
}
.pices_des{
    color:#0aa1ed;
    margin-top: 46px;
    font-weight: bold;
}
.del>div{
    float: left;
    position: relative;
    top:34px;
    left:13px;
    z-index: 999;
    width:100px;
    height:24px;
    line-height: 24px;
    border: 1px solid #0aa1ed;
    display:none;
    background: white;
}
.del>.del_d{
    display: block;
    margin-top: 50px;
    margin-bottom: 10px;
    position: relative;
    z-index: 888;

}
.foot {
    float: left;
   
}

#box,
#content_box {
    width: 1000px;
    margin: 0 auto 100px;

}

.foot_add,
.foot_del,.foot_check,.foot_yr{
    float: left;
    cursor: pointer;
    margin-left: 10px;
    margin-top: 14px;
}
.foot_qk{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    cursor: pointer;
    width:84px;
    height:23px;
    background: #ccc;
    line-height: 23px;
    text-align: center;
    color: #fff;
}
.foot {
    width: 1000px;
    background: -moz-linear-gradient(top, #f5f4f5 0%, #e6e6e5 100%);
    background: -webkit-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
    background: -o-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
    background: -ms-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
    box-shadow: 3px 3px 6px #ccc;
    position: absolute;
    bottom:0px;
    left:0px;
    height:42px;

}
.foot_cash{
    float: right;
    cursor: pointer;
    width: 133px;
    height:42px;
    line-height: 42px;
    background:  #0aa1ed ;
    margin-left: 22px;
    text-align: center;
    font-size: 18px;
    color:#fff;
    border-radius: 8px;
}
#go-buy:hover{
    background:#111 ;
    transition:all .5s linear
}
.foot_tol{
    float: right;
    cursor: pointer;
    width: 200px;
    margin-top: 9px;
    margin-left: 18px;
    text-align: left;
}
.foot_pices,.foot_des{
    color:#0aa1ed;
    font-size: 18px;
    font-weight: bold;

    width:100%;
   position: relative;

    left:2px;
}
.foot_selected{
    float: right;
    cursor: pointer;
    width: 100px;
    margin-top: 13px;
    margin-left: 10px;
    text-align: right;
}
.totalOne{
    font-size: 14px;
    font-weight: bold;
}
/****模态框****/
.modal,.modalNo{
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background: rgba(0,0,0,0.3);
    z-index:9999;
}
.modal_dialog{
    width:400px;
    height:200px;
    margin:100px auto;
    background: #fff;
    border-radius: 2px;
}
.modal_header{
    width: 380px;
    height:42px;
    line-height: 42px;
    background: #e8e8e8;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
    font-size: 16px;
    padding-left: 20px;
}
.modal_information{
    width:254px;
    margin:0 auto;
    margin-top:21px;
    font-size: 16px;
}
.modalNo .modal_information{
    width:169px;
    margin:0 auto;
    margin-top:44px;
    font-size: 16px;
}
.modal_information>span{
    position: relative;
    top:-20px;
}
.yes,.no{
    display: inline-block;
    width:124px;
    height:42px;
    line-height: 42px;
    border-radius: 2px;
    font-size: 16px;
    background: #ccc;
    margin-top:17px;
    cursor: pointer;
    color: #fff;
}
.yes>span{
    margin-left: 45px;
}
.no>span{
    margin-left: 38px;
}
.yes{
    margin-left:52px;
    margin-right: 48px;
    background: #0aa1ed;
}

.none{
    text-align: center;
    position: absolute;
    top:0px;
    left:0px;
}
.none_title{
    width:100%;
    font:18px 'microsoft yahei';
    font-weight: bold;
    text-align: left;
    margin-bottom: 6px;
    color: #333;
}
.none_content{
    width:365px;
    height:56px;
    margin: 89px auto;
    color:#bababa;
}
.none_content>p{
    font-size: 18px;

    margin-top: 10px;
    margin-bottom: 3px;
}
.none_content>img{
    margin-right: 10px;
}
.none_content>a{
    color: #0aa1ed;
}
.close{
    position: relative;
    top:16px;
    right:20px;
    cursor: pointer;
}

   
</style>