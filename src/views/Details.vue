<template>
<div>
	<div class='contenta'>
		
		<ul class="back-links" key='type'>
			<li><router-link to='/Index'>主页</router-link> >></li>
			<li v-if='this.type!="undefined"'><router-link :to="'/products?typeid='+id+'&typename='+type" >{{type}}</router-link> >></li>
			<li v-else><router-link :to="{path:'supplierAllBack',query:{searchone:this.searchone}}" >查询结果</router-link> >></li>
			<li>{{details.lname}}</li>
			<div class="clear"> </div>
		</ul>
		<hover-box></hover-box>
		<div class="product-details">	
					<div class=" images_3_of_2">
							<div id="" class="md" >
								<!--中图显示区-->
								<img  :src="details.mdpic" id='mm1'>
								<!--放大镜-->
          						<div id="mask" style="display: none; left: 235px; top: 67.5px;" ></div>
								<!--平面镜-->
          						<div id="superMask" @mousemove='mousemove($event)' @mouseout='mouseoutt($event)'></div>
								<!--大图显示区-->
         						 <div id="largeDiv" style="display:none;background-repeat: no-repeat;" :style="lgDivStyle"></div>
							</div>
							<div class='alittle'>	
								<ul class='little' :style="ulImgsStyle">
									<li v-for='(p,i) of mdp' class=''><img  :src="p.mdpic" @click='movea(i,$event)' @mouseleave='clear(p,$event)' @mouseenter='enter($event)' ></li>
								</ul>
								<div id='ddd1'>
								<a class="bnext" @click='move()' href='javascript:;'></a>
								</div>
							</div>
							
				     </div>
					 
				   <div class="desc span_3_of_2">
					<h2 style='text-align:left'>{{details.lname}}</h2>
					<p class='artical'>{{details.details}}</p>					
					<div class="price">
						<p>Price: <span>￥{{details.price}}</span></p>
					</div>
					<div class="available">
						<ul>
						  <li><span>规格:</span>最新产品</li>
						  <li><span>尺寸:</span>&nbsp; 15寸</li>
						  <li><span>剩余数量</span>&nbsp; {{details.count}}</li>
					    </ul>
					</div>
				<div class="share-desc">
					<div class="share">
						<p>购买数量 :</p><input type="number" class="text_box" value="1" min="1" v-model='count'>				
					</div>
					<div class="button" @click='addCart'><span><a href="javascript:;">加入购物车</a></span></div>					
					<div class="clear"></div>
				</div>
				 <div class="wish-list">
				 	<ul>
				 		<li class="wish"><a href="#">我已阅读相关法律规定</a></li>
				 	    <li class="wish"><a href="#">商家已通过权威认证</a></li>
				 	</ul>
				 </div>
				 <div class="colors-share">
				 	<div class="color-types">
				 		<h4>选择颜色</h4>
				 		<form class="checkbox-buttons">
							<ul >
								<li><input id="r1" name="r1" type="radio"><label for="r1" class="grey"> </label></li>
								<li><input id="r2" name="r1" type="radio"><label for="r2" class="blue"> </label></li>
								<li><input id="r3" name="r1" type="radio"><label class="white" for="r3"> </label></li>
								<li><input id="r4" name="r1" type="radio"><label class="black" for="r4"> </label></li>
							</ul>
						 </form>
				 	</div>
				 	<div class="social-share">
				 		<h4>Share Product</h4>
				 			  <ul>
									<li><a class="share-face" href="#"> </a></li>
									<li><a class="share-twitter" href="#"> </a></li>
									<li><a class="share-google" href="#"> </a></li>
									<li><a class="share-rss" href="#"> </a></li>
									<div class="clear"> </div>
						    </ul>
				 	</div>
				 	<div class="clear"></div>
				 </div>
			</div>
			<div class="clear"></div>
		  </div>
	</div>
	
	<div class='center-tabs'>
		<ul class='tabs-class' @click='checkedb($event)'>
			<li class='active data'>商品详情</li>
			<li  class='data'>相关说明</li>
			<li class='data'>有关评论</li>
		</ul>
		<div class='tabs-dady'>
			<div class='tabs-1 hiden active'>
				<div class="product-specifications resp-tab-content resp-tab-content-active" style="display:block" aria-labelledby="tab_item-0">
						<ul>
		                  <li><span class="specification-heading">品牌</span> <span>ABBs</span><div class="clear"></div></li>
		                  <li><span class="specification-heading">所属分类</span> <span>0/400/800/1000/1200</span><div class="clear"></div></li>
		                  <li><span class="specification-heading">重量 (kg)</span> <span>75</span><div class="clear"></div></li>
		                  <li><span class="specification-heading">认证通过</span> <span>Tumble wash</span><div class="clear"></div></li>
		                  <li><span class="specification-heading">尺寸大小 (mm)</span> <span>300</span><div class="clear"></div></li>
		                  <li><span class="specification-heading">体积(w*d*h) </span> <span>595x595x850</span><div class="clear"></div></li>
		                  <li><span class="specification-heading">功率</span> <span>230V, 50Hz, 16Amps</span><div class="clear"></div></li>
		                  <li><span class="specification-heading">转速 (Watts)</span> <span>440 for Wash/490 for Spin</span><div class="clear"></div></li>
		                  <li><span class="specification-heading">金属材料</span> <span>镍铝合金</span><div class="clear"></div></li>
		                  <li><span class="specification-heading">适应</span> <span>4 </span><div class="clear"></div></li>
		                </ul>
				 	</div>
			</div >
			<div class='tabs-2 hiden'>
				<div class="product-tags resp-tab-content resp-tab-content-active" aria-labelledby="tab_item-1" style="display:block">
						 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					<h4>相关法律规定:</h4>
					<div class="input-box">
						<span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span>
					</div>
					
			    </div>


			</div>
			<div class='tabs-3 hiden'>
				<div class="review resp-tab-content resp-tab-content-active" aria-labelledby="tab_item-2" style="display:block">
					<h4>Lorem ipsum Review by <a href="#">Finibus Bonorum</a></h4>
					 <ul>
					 	<li>产品平均好评度： <div class="rating-stars"><div class="rating" data-rating-max="5"> </div> </div>
						</li>
					 	<li>商家态度 ：<div class="rating-stars"><div class="rating" data-rating-max="5"> </div> </div></li>
					 	<li>成交指数 ：<div class="rating-stars"><div class="rating" data-rating-max="5"> </div> </div></li>
					 </ul>
					 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					<div class="your-review">
						<h4>请您对此商品做出宝贵的评价</h4>
						<p>感谢您的评价</p>
						<form>			
								<div>
									<span><label>评价内容<span class="red">*</span></label></span>
									<span><textarea> </textarea></span>
								</div>
							<div>
									<span><input type="submit" value="提交评价"></span>
							</div>
							</form>
					</div>			
				  	<div>
						 <a href="" id='w1'></a>
		   <a href="" class='content-bottom-right'></a>  
					</div>  	
				</div>
			</div>
		</div>
	</div>
	


     <!-----------------><-->
  
   
    
 
    <a href="#" id="toTop"> </a>
      
</div>
</template>

<script>
	import hover from '../components/hover.vue';
    export default {
		components:{
			'hover-box':hover
		},
		created(){
			  this.getDetails();
			  this.getPic()
		},
		data(){
			return {
				searchone:this.$route.query.searchone,
				id:this.$route.query.typeid,
				type:this.$route.query.typename,
				count:1,
				bai:'',
				ulImgsStyle:{"margin-left":0},
				moved:1,
				details:{},
				// rightmove:{'margin-left':0},
				 lgDivStyle:{
				 	"background-image":'',
					"background-position":"0 0"
				},
				mdp:[]
			}
		},
		methods:{
			addCart(){
				// var uid=1;
				var pid=this.$route.query.id;
				var c=this.count;
				var url='http://127.0.0.1:3000/addCart?pid='+pid+"&count="+c;
				this.axios.get(url).then(result=>{
					this.$store.commit("increment",c);
					//console.log(result)
					this.$router.push('/Cart')
				})
			},
			checkedb(e){
				var $a=$(e.target)
				if($a.hasClass('data')){
				var index=$a.index();
				$a.addClass('active')
				.siblings().removeClass('active').addClass('hiden')
				$('.tabs-dady').children(":eq("+index+")").addClass('active')
				.siblings().removeClass("active");
				}
			},
			mousemove(e){
				var x=e.offsetX,y=e.offsetY;
				var xMask=parseFloat($("#mask").css("width"))/2;
				$("#largeDiv").show()
					.css("backgroundImage",`url(${this.bai})`)
					.css("backgroundRepeat",'no-repeat');
				$("#mask").show();		
				var mx=x-xMask,my=y-xMask;
				if(x<xMask){
					x=xMask;
				}else if(x>470-xMask){
					x=470-xMask;
				}
				if(y<xMask){
					y=xMask;
				}else if(y>470-xMask){
					y=470-xMask;
				}
				$("#largeDiv").css("backgroundPosition",`${-((x-xMask)*80/47)}px ${-((y-xMask)*80/47)}px`);
				$("#mask").css({
					"left":`${(x-xMask)}px`,
					"top":`${(y-xMask)}px`
				})
			},
			mouseoutt(e){
				$("#largeDiv").hide();
				$("#mask").hide();
			},
			enter(e){
				var el=e.currentTarget;
				$(el).parent().addClass('checked');
				//  var src=$(el).attr('src');
				//  $('#mm1').attr('src',src);
				//console.log($('#mm1').attr('src'))
			},
			clear(p,e){
				var el=e.currentTarget;
				$(el).parent().removeClass('checked')
			},
			getDetails(){
				var id=this.$route.query.id;
				this.$http.get('details?id='+id).then(result=>{
				this.details=result.body[0];
				this.bai=this.lgDivStyle['background-image']=this.details.mdpic;
				console.log(this.searchone)
				})
			},
			getPic(){
				var url='http://127.0.0.1:3000/getpic';
				this.axios.get(url).then(result=>{
					this.mdp=result.data;
					//console.log(this.mdp)
				})
			},
			movea(i,e){
				// if(this.moved<5 ){
						this.moved++;
						this.ulImgsStyle["margin-left"]
						=-172*i+"px";
					//	console.log(this.mdp[i])
					var el=e.currentTarget;
					var src=$(el).attr('src');


					 $('#mm1').attr('src',src);
					this.bai=this.lgDivStyle['background-image']=this.mdp[i].mdpic
				// }
				// else {
				// 		this.ulImgsStyle["margin-left"]
				// 		=0+"px";
				// 		this.moved=0
				// }
			},
			move(){
				if(this.moved>0 ){
						this.moved=0;
						this.ulImgsStyle["margin-left"]
						=172*this.moved+"px";
				}
				
			}

		},

    }
</script>

<style>
	.span_3_of_2{width:39%}
	#ddd1{position:absolute;top:75px}
	.hiden{display:none}
	.active{display:block ; background:#fff  !important}
	.center-tabs{height:1200px;width:80%;margin:20px auto;}
	.tabs-class{width:100%;display:block;}
	.tabs-class li{
		font-size:19px;
		display: inline-block;
		padding: 13px 10px;
		margin: 0;
		list-style: none;
		cursor: pointer;
		float: left;
		margin-right: 5px;
		border-radius: 5px 5px 0 0;
		background:#CBCBCB;
		color:#000;
		text-shadow:0px 1px 0px rgba(255, 255, 255, 0.6);
		font-size:1rem;
		font-family:'宋体';
		font-weight:bold;
	}
	.tabs-class  li:hover{color: #E4292F;}
	.tabs-dady{
		text-align:left;
		border: none;
		float: none;
		width: 100%;
		min-height: initial;
		clear:both;
		position:relative;
		}
	.tabs-dady>div{
		background:#fff;
		height:1000px;
		width:100%;
		position:absolute;
	}


    .bnext{background-position:-40px 2px;}
	.checked{opacity:0.4;}
	#mm1{width:350px;}
	.md{background-color:white;
		position:relative;}
	#superMask{width:300px;
		height:100%;
		position:absolute;
		left:0;
		top:0;
		cursor:crosshair;}
	#largeDiv{
		width:400px;
		height:400px;
		background-color:white;
		background-size: 800px 800px;
		position:absolute;
		top:0;
		left:471px;
		display:none;
		z-index:999;
		}
/*放大镜*/
	#mask{
		width:135px;
		height:135px;
		position:absolute;
		left:0;
		top:0;
		background-color:#A0C5E8;
		opacity:0.3;
		display:none;
}

	.alittle{ 
		height:180px;
		margin-top:20px;
		overflow: hidden;
        white-space: nowrap;
		width:100%;
		position:relative;
		}
	.little{
		background:#fff;
		transition:all .5s linear
	}
	.little li{list-style:none;display:inline-block;padding: 10px}
	.little img{margin-left:10px;}
	.artical{height:100px;}
	.contenta{width:80%;margin:0 auto;}
	.back-links{
		text-align:left;
		background:#23272a !important;
		padding:11px;
		padding-left:30px;
		margin:20px 0px;
		position:relative;
	}
	.back-links li {
	display:inline-block;
	color: #ccc;
	font-size:13px;
	font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;
	}
	.back-links li:first-child a {
		padding-left:0;
	}
	.back-links li a {
		color: #FFF;
		padding-left:5px;
	}
	.back-links  a:hover {
		text-decoration:underline;
		color:#e44f2b;
	}
	.back-links :after{
		content:'';
		position:absolute;
		left:0;
		top:0;
		border-width:22px 0px 20px 15px;
		border-style: solid;
		border-color: rgba(255, 0, 0, 0) rgba(0, 0, 255, 0) rgba(0, 128, 0, 0) #ebebeb;
	}
	.images_3_of_2 {
		width:35.2%;
		float: left;
		text-align: center;
	}
	.images_3_of_2  img {
		max-width: 100%;
		display:block;
		border: 1px solid #DFDFDF;
	}
	.product-details{margin-left:50px}
	.product-details img:hover{cursor:pointer;}
	@media screen and (max-width: 768px){
		.product-details{margin-left:0px;margin:0 auto}
        .center-tabs{width:100%;margin:0 auto}
		.contenta{width:100%;margin:0 auto}
		.span_3_of_2{width:100%;margin:0 auto}
	}
</style>