<template>
    <div class='hover-box'>
        <div class="content-bottom-left " id='w1'>
    	    		<div class="categories">
						   <ul>
						  	   <h3>商品导航</h3>
								 <li><a href="index.html">回到主页</a></li>
							      <li v-for='p of type' :key='p.id' ><router-link :to="{path:'/supplierAllBack',query:{typeid:p.id,typename:p.name}}" >{{p.name}}</router-link></li>
						  	 </ul>
						</div>		
						<div class="buters-guide">
						<h3>购买手册</h3>
						<p><span>本网站商品经权威认证</span></p>	
						<p>绝无假冒伪劣商品，所有商品一律经过审核验证后上线销售，如有问题，请联系网站客服</p>
					  </div>	
					  <div class="add-banner">
					  	<img src="images/images/icon1.png" alt="">
					  	<img src="images/images/kefuf.gif" alt="" />
					  	<div class="banner-desc">
					  		<h4>商家入驻</h4>
					  	    <a href="#">联系我们</a>
					  	</div>
					  	<div class="clear"></div>
					  </div>
					    <div class="add-banner add-banner2">
					  	<img src="images/images/icon2.png" alt="" />
						  <img src="images/images/kefuf.gif" alt="" />
					  	<div class="banner-desc">
					  		<h4>申诉中心</h4>
					  	    <a href="#">联系客服</a>
					  	</div>
					  	<div class="clear"></div>
					  </div>
    	    	</div>
    </div>
</template>

<script>
    export default {
        created(){
			
			this.getType()
		},
		mounted() {
			window.addEventListener('scroll',this.handleScorll)
		},
		methods:{
			handleScorll(){
				var box=document.getElementById('w1');
				
				var right=document.getElementsByClassName('content-bottom-right')[0];
				var t=document.documentElement.scrollTop || document.body.scrollTop;
				var height=parseInt(getComputedStyle(box).height);
				

				var heighta=parseInt(getComputedStyle(right).height);
				if(t>770 && document.body.clientWidth>991 && t<heighta ){
				box.style.marginTop=t-height+'px';}
				else{box.style.marginTop=0+'px';}
			},
			getType(){
				this.$http.get('index').then(result=>{this.type=result.body})
			}
		},
		data(){
			return {
				type:[],
				okchange:true
			}
		}
    }
</script>
<style>
		
</style>

