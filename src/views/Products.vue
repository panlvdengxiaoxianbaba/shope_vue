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
					<div >
						<h3 class='depot'>所有商品<span></span> 
							<span><a href=""></a></span>
						</h3>
						<p >
						<div class="section group">
							<div class="grid_1_of_4 images_1_of_4" >
								<h4><a href="preview.html">双十八特惠！！</a></h4>
								<a href="preview.html"><img src="../../public/images/images/a03.jpg" alt="" /></a>
								<div class="price-details">
								<div class="price-number">
										<p><span class="rupees">￥1188</span></p>
									</div>
											<div class="add-cart">								
												<h4><a href="javascript:;">查看详情</a></h4>
											</div>
										<div class="clear"></div>
								</div>					 
							</div>
							<div class="grid_1_of_4 images_1_of_4"  v-for='p of info'>
								<h4><router-link :to='"/details?id="+p.id'>{{p.lname}}</router-link></h4>
								<router-link :to='"/details?id="+p.id'><img :src="p.mdpic" alt="" /></router-link>
								<div class="price-details">
								<div class="price-number">
										<p><span class="rupees">￥{{p.price}}</span></p>
									</div>
											<div class="add-cart">								
												<h4><router-link :to='"/details?id="+p.id+"&typename="+type+"&typeid="+id+"&searchone="+searchone'>查看详情</router-link></h4>
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
			      	<p><span>Aenean vitae massa dolor</span></p>
			      	<p>Phasellus in quam dui. Nunc ornare, tellus rutrum porttitor imperdiet, dui leo molestie nisl, sit amet dignissim nibh magna pharetra quam. Nunc ultrices pellentesque massa, ac adipiscing dui rutrum id. In cursus augue non erat faucibus eu condimentum dolor molestie.</p>
			      	<p><a href="#">+ Read Full article</a></p>
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
	 
 
    <a href="#" id="toTop"> </a>
</div>
</template>

<script>
	
	import hover from '../components/hover.vue';
	import swap from '../components/warp.vue';
    export default {
		created(){
			this.getTypeInfo();
			this.getSearchInfo()
		},
		methods:{
			getSearchInfo(){
			var searchone=this.$route.query.searchone;
			var url='http://127.0.0.1:3000/searchif?lname='+searchone+'&details='+searchone;
				if(searchone!=''){
					this.axios.get(url).then(result=>{
					this.searchContent=result.data.result;
					 if(this.info.length==0)
					 {this.info=this.searchContent}
					// console.log(this.searchone)
					 //console.log(this.searchContent)
				})
				}
			},
			getTypeInfo(){
				
				var typeid=this.$route.query.typeid;
				//console.log(typeid)
				this.$http.get('products?typeid='+typeid).then(result=>{
					//console.log(result);
					this.info=result.body;
					
					//console.log(this.isDown)
					//console.log(this.info)
				})
			}
		},
		data(){
			return {
				info:[],
				id:this.$route.query.typeid,
				type:this.$route.query.typename,
				searchContent:[],
				searchone:this.$route.query.searchone
			}
		},
		components:{
			'hover-box':hover,
			'swap-box':swap
		}
		
    }
</script>

<style>
	.depot,.content-bottom-right>h3{display:flex;justify-content:space-between;color:#fff}
	.depot a,.content-bottom-right>h3 a{color:#fff;font-size:15px;}

</style>