<template>
  <div>
     	<div class="header">
  	  		<div class="wrap">
				<div class="header_top">
					<div class="logo">
						<a href="index.html"><img src="images/images/back1.png" alt="" /></a>
					</div>
						<div class="header_top_right">
							<div class="search_box" key='login'>
							  <span v-if='!this.$store.state.islogin'>	
									<span class='user'><router-link to="/user">登录</router-link></span>
									<span>|</span>
									<span class='user'><router-link to="/reg">注册</router-link></span>
							  </span>
							  <span  v-else>	
									<span><a href="javascript:;" ><img class="care" src="../../public/images/care.png" alt="" title="我的收藏"></a><b> |</b></span>	
									<span><a href="javascript:;" ><img class="order" src="../../public/images/order.png" alt="" title="用户中心"></a><b> |</b></span>
									<span><router-link to='/Cart' ><img class="shopcar" src="../../public/images/shop_car.png" alt="" title="我的购物车"></router-link><b> |</b></a></span>
									<span class='user'>&nbsp;欢迎&nbsp;{{this.$store.state.uname}}  | <a href="javascript:;" title="退出登录" @click='signout'>退出</a><b> | </b><a href="uc_basic.html" title="用户中心">用户中心</a></span>
							  </span>
									<span>查找商品</span>
									<form>
										<input type="text" value="" v-model='searchone' @keyup='getKey($event)'><input type="button" @click='searchif' >
									</form>
					     		<div class="clear"></div>
					     	</div>
					</div>
			     <div class="clear"></div>
  		    </div>     
  		    <div class="navigation">
  		    	<a class="toggleMenu" href="#">菜单</a>
					<ul class="nav">
						<li>
							<router-link to="Index">主页</router-link>
						</li>
						<li v-for='(p,index) of type' :key='p.id' @mouseenter='showbb(index,$event)' @mouseleave='hidebb(index,$event)'>
						<router-link :to="'/products?typeid='+p.id" >{{p.name}}</router-link>
							<ul>
								<li @mouseenter='showbb(index,$event)' @mouseleave='hidebb(index,$event)'>
									<a href="#">橘子产品</a>
									<ul>
										<li><a href="#">iohone</a></li>
										<li><a href="#">macobook</a></li>
									</ul>
								</li >
								<li @mouseenter='showbb(index,$event)' @mouseleave='hidebb(index,$event)'>
									<a href="#">华为</a>
									<ul>
										<li><a href="#">华为手机</a></li>
										<li><a href="#">华为平板</a></li>
									</ul>
								</li>
								<li @mouseenter='showbb(index,$event)' @mouseleave='hidebb(index,$event)'>
									<a href="#">大米</a>
									<ul>
										<li><a href="#">大米手机</a></li>
										<li><a href="#">大米平板</a></li>
									</ul>
								</li>
								<li @mouseenter='showbb(index,$event)' @mouseleave='hidebb(index,$event)'>
									<a href="#">榔头</a>
									<ul>
										<li><a href="#">榔头手机</a></li>
										<li><a href="#">榔头平板s</a></li>
									</ul>
								</li>
							</ul>
						</li>
						
						<li>
							<a href="contact.html">联系我们</a>
						</li>
					</ul>
					 <span class="left-ribbon"> </span> 
      				 <span class="right-ribbon"> </span>    
  		    </div>
  		     <div class="header_bottom">
			   <div class="slider-text">
			   	<h2>我们不生产电器<br/>我们只是电器的搬运工</h2>
			   	<p>在智能化的新时代<br/>让生活更加愉悦 </p>
			   	<a href="#">开启智能生活	</a>
	  	      </div>
	  	      <div class="slider-img">
	  	      	<img src="images/images/backb.png" alt="" />
	  	      </div>
	  	     <div class="clear"></div>
	      </div>
   		</div>
   </div>
  </div>
</template>

<script>
  export default {
	data(){
			return {
				type:[],
				searchone:'',
				searchContent:[]

			}
		},
	created(){
			this.getType();
			
		},
	methods:{
			getKey(ev){
				if(ev.keyCode==13)
				this.searchif()
				
			},
			searchif(){
				if(this.searchone!=''){
					this.$router.push({path:'supplierAllBack',query:{searchone:this.searchone}})
					this.searchone=""
				}
				
				
			},
			hidebb(i,e){
				var el=e.currentTarget
				//console.log(i)
				for(var p in this.type){
					if(p==i){
						$(el).removeClass('hover')
					}
				}
			},
			showbb(i,e){
				var el=e.currentTarget
				//console.log(i)
				for(var p in this.type){
					if(p==i){
						$(el).addClass('hover')
					}
				}
				

			},
			getType(){
				this.$http.get('index').then(result=>{this.type=result.body})
			},
		 	 signout(){
			  this.axios.get('http://127.0.0.1:3000/signout').then(result=>{
				  this.$store.commit('signout')
			  })
		  }
	  }
  }
</script>

<style scoped>
/*.eye{display:none}*/
.user a{color:#fff}
.search_box span{
   color:#5b5b5b;
   margin-right:10px;
}
.search_box form{
	 background:#151719;
	 position: relative;
	 display:inline-block;
	 padding-left:18px;
}
.search_box form:after{
	content:'';
	position:absolute;
	left:0;
	border-width:18px 0px 18px 18px;
	border-style:solid;
	border-color:rgba(255, 0, 0, 0) rgba(0, 0, 255, 0) rgba(0, 128, 0, 0) #23272a;
}
.search_box form input[type="text"] {
	border: none;
	outline: none;
	background: none;
	font-size:0.85em;
	color: #acacac;
	font-family: 'Ubuntu Condensed', sans-serif;
	width:75%;
	padding:10px;
	-webkit-apperance:none;
	margin:0;
}
.search_box form input[type="submit"] {
	border: none;
	cursor: pointer;
	background: url(../../public/images/search.png) no-repeat center;
	display:inline-block;
	width:24px;
	height:24px;
	vertical-align:middle;
	outline:none;
	padding:0;
}
</style>