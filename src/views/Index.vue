<template>
    <div>
        <div class="main">
      <div class="content">
    	        <div class="content_top">
    	        	<swap-box></swap-box> 		
    	       </div>
    	  <div class="content_bottom">
    	    <div class="wrap" >
    	    	<hover-box></hover-box>
    	    	
    	    	<div class="content-bottom-right">
    	    	
				<h3><span> 限时折扣抢购</span>
					<span>距离双十八大促还有：
					<span id="time_d"></span>天 
					<span ></span>小时	
					<span ></span>分 
					<span ></span>秒 
					</span>	
				</h3>
	            <div class="section group">
				  <div class="grid_1_of_4 images_1_of_4" v-for='p of com' v-if='p.arecom==1'>
					 <h4><a href="preview.html">{{p.alname}}</a></h4>
					  <a href="preview.html"><img :src="p.amdpic" alt="" /></a>
					  <div class="price-details">
				       <div class="price-number">
							<p><span class="rupees">￥{{p.aprice}} </span></p>
					    </div>
					       		<div class="add-cart">								
									<h4><a href="preview.html">查看详情</a></h4>
							     </div>
							 <div class="clear"></div>
					</div>					 
				</div>
				<div class="grid_1_of_4 images_1_of_4" v-for='p of com' v-if='p.arecom==0'>
					<h4><a href="javascript:;">{{p.alname}} </a></h4>
					 <a href="preview.html"><img :src="p.amdpic" alt="" /></a>
					<div class="price-details">
				       <div class="price-number">
							<p><span class="rupees">￥{{p.aprice}}</span></p>
					    </div>
					       		<div class="add-cart">								
									<h4><a href="preview.html">查看详情</a></h4>
							     </div>
							 <div class="clear"></div>
					</div>
					 
				</div>
			
			  
			  
			  
			   </div>
			<div v-for='p of type' :key='p.id'>
				<h3 class='depot'><span> {{p.name}}</span> 
					<span><router-link :to="'/products?typeid='+p.id+'&typename='+p.name">查看更多>></router-link></span>
				</h3>
				<p >
	           <div class="section group">
				  <div class="grid_1_of_4 images_1_of_4" v-for='p of com' v-if='p.arecom==1'>
					 <h4><a href="javascript:;">双十八特惠！！</a></h4>
					  <a href="javascript:;"><img :src="p.amdpic" alt="" /></a>
					  <div class="price-details">
				       <div class="price-number">
							<p><span class="rupees">￥{{p.aprice}}</span></p>
					    </div>
					       		<div class="add-cart">								
									<h4><a href="javascript:;">查看详情</a></h4>
							     </div>
							 <div class="clear"></div>
					</div>					 
				</div>
				<div class="grid_1_of_4 images_1_of_4" v-for='(item,index) of info' v-if='item.typeid==p.id' :key='item.id'>
					<h4><router-link :to='"/details?id="+item.id'>{{item.lname}}</router-link></h4>
					 <router-link :to='"/details?id="+item.id'><img :src="item.mdpic" alt="" /></router-link>
					<div class="price-details">
				       <div class="price-number">
							<p><span class="rupees">￥{{item.price}}</span></p>
					    </div>
					       		<div class="add-cart">								
									<h4><router-link :to='"/details?id="+item.id+"&typename="+p.name+"&typeid="+p.id'>查看详情</router-link></h4>
							     </div>
							 <div class="clear"></div>
					</div>
					 
				</div>
				
			  
			  
			  
			   </div>
			   </p>
			</div>


			   
			    <div class="product-articles">
			      
			      <ul>
			      	<li>
			      <div class="article">
			      	<p><span>It is the haha bottom</span></p>
			      	<p> Lorem Cras aliquam, odio ac consectetur tincidunt, eros nunc fermentum augue, quis rutrum ante lectus ac lectus. Fusce sed tellus orci, et feugiat urna. Integer et dictum leo. Nulla consectetur tempus orci sed consequat. Mauris cursus est a sapien venenatis faucibus. Etiam sagittis convallis volutpat.</p>
			      	<p><a href="javascript:;">+ Read Full article</a></p>
			      </div>
			      </li>
			      <li>
			       <div class="article">
			      	<p><span>Phasellus sollicitudin consectetur</span></p>
			      	<p>Cras aliquam, odio ac consectetur tincidunt, eros nunc fermentum augue, quis rutrum ante lectus ac lectus. Fusce sed tellus orci, et feugiat urna. Integer et dictum leo. Nulla consectetur tempus orci sed consequat. Mauris cursus est a sapien venenatis faucibus. Etiam sagittis convallis volutpat.</p>
			      	<p><a href="#">+ 回到顶部</a></p>
			      </div>
			      </li>
			      </ul>
			    </div>
		      </div>
		      <div class="clear"></div>
		   </div>
         </div>
      </div>
    </div>
	
 
    <a href="#" id="toTop"></a>
	<div class='aad' :style='showis'>
			
			<div @click='downn'>x</div>
			<hr>
			<h3>贪玩蓝月亮<span></span></h3>
			<p>
				大家好，我叫宋小宝。<br>
				是兄弟，就来砍我，一刀满级，装备爆满地！你还在等什么
			</p>
	</div>
</div>
</template>

<script>
	import hover from '../components/hover.vue';
	import swap from '../components/warp.vue';
    export default {
		created(){
			this.getType()
			this.getCom()
			this.getInfo()
			this.showii() 
		},
		methods:{
			downn(){
				this.showis.bottom=-250+'px'
			},
			showii(){
				this.showis.bottom=0
			},
			getType(){
				this.$http.get('index')
				.then(result=>{//console.log(result);
						this.type=result.body
				})
			},
		 	getInfo(){
		 		this.$http.get('indexInfo')
		 		.then(result=>{
					 this.info=result.body;
					// console.log(this.info);
						
				})
		 	},
			 getCom(){
		 		this.$http.get('indexCom')
		 		.then(result=>{
					 this.com=result.body;
					 //console.log(this.com);
						
				})
		 	}
		 },
		data(){
			return {
				x:10,
				type:[],
				info:[],
				com:[],
				showis:{bottom:'-250px'}

			}
		},
		components:{
			'hover-box':hover,
			'swap-box':swap
		},
		watch:{

		}
	}
	$(function(){
		setInterval(show_time,1000);
	}) 
	function show_time(){
		var time_now=new Date().getTime();
		var time_target=new Date('2019/11/11 18:18:18').getTime();
		var time=time_target-time_now;
		var day=Math.floor(time/86400000);
		time-=day*86400000;
		var hour=Math.floor(time/3600000);
		time-=hour*3600000;
		var minute=Math.floor(time/60000);
		time-=minute*60000;
		var second=Math.floor(time/1000);
		if(day < 10){
			day = "0" + day;
			}
		if(hour < 10){
			hour = "0" + hour;
			}
		if(minute < 10){
			minute = "0" + minute;
			}
		if(second < 10){
			second = "0" + second;
			}
		$('#time_d').html(day).next().html(hour).next().html(minute).next().html(second);
		
	}
	
</script>

<style>

	.aad{display:block;width:350px;height:250px;background:#4a95af;position:fixed;right:30px;transition:all .5s linear;}
	.aad div{
		text-align:right;
		padding:5px 10px;
		border:1px solid black;
		cursor:pointer;}
	.depot,.content-bottom-right>h3{display:flex;justify-content:space-between;color:#fff}
	.depot a,.content-bottom-right>h3 a{color:#fff;font-size:15px;}

</style>