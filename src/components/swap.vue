<template>
    <div>
        <div class="wrap">
		          	   <h3>热卖单品</h3>
		          	</div>
		          	<div class="line"> </div>
		          	<div class="wrap">
		          	 <div class="ocarousel_slider">  
	      				<div class="ocarousel example_photos" data-ocarousel-perscroll="3">
			                <div class="ocarousel_window">
			                   <a href="#" :title="p.title" v-for='p of swapinfo'> 
							   <img :src="p.smdpic" alt="" />
							   <p>p.slname</p>
							   </a>
			                   
			                </div>
			               <span>           
			                <a href="#" data-ocarousel-link="left" style="float: left;" class="prev"> </a>
			                <a href="#" data-ocarousel-link="right" style="float: right;" class="next"> </a>
			               </span>
					   </div>
				     </div>  
				   </div>   
    </div>
</template>
<script>
    export default {
        created(){
			this.getSwapInfo()
		},
		methods:{
			getSwapInfo(){
				this.$http.get('swapInfo')
				.then(result=>{
						this.swapinfo=result.body
						console.log(this.swapinfo)
				})
			}
		},
		data(){
			return{
				swapinfo:[]
			}
		}
    }
</script>




