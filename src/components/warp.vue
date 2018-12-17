<template>
    <div>
        <div id="wrapa" class="" ></div>
              <div class=" dda">
              <h3> <span>全场热卖单品</span>   </h3>
               <a class='aprev' @click="moveRight()" href='javascript:;'></a>
                <a class="bnext" @click="moveLeft()" href='javascript:;'></a>
                <div class="">
                  <div class="arr">
                            <ul :style="ulImgsStyle" class='slider'>
                                <li v-for='p of swapinfo' ><a href="#" > <img :src="p.smdpic" alt="" /><p>{{p.slname}}</p></a></li>  
                            </ul>
                  </div>
                </div>
                
              </div>

    </div>
</template>
<style>
    .aprev,.bnext{
        display:inline-block;
        width:30px;
        height:30px;
        background:#e44f2b url("../../public/images/arrows.png") no-repeat;
        border-radius:2em;
        -webkit-border-radius:2em;
        -moz-border-radius:2em;
        -o-border-radius:2em;
    }
    .aprev{background-position:0px 2px;}
    .bnext{background-position:-40px 2px;}
    .aprev:hover,.bnext:hover{background-color:#444;}
    .arr{
        overflow: hidden;
        white-space: nowrap;
        /* default size */
        width:100%;
        }
    .arr li{display:inline-block;margin-left:20px;}
    .arr a{color:#111;}
    .arr img{width:200px !impotant;}
    .slider{transition:all .5s linear}
</style>
<script>
export default {
    created(){
			this.getSwapInfo();
             this.dong()
		},
    methods:{
        getSwapInfo(){
			this.$http.get('swapInfo')
			.then(result=>{
				this.swapinfo=result.body
				//console.log(this.swapinfo)
				})
			},
         moveLeft(){
          if(this.moved<6) 
         { this.canLeft=true ; 
          this.moved++;
          this.ulImgsStyle["margin-left"]
           =-380*this.moved+"px";}
          else if(this.moved==6){
           this.ulImgsStyle["margin-left"]
            =0+"px";
            this.moved=0;
            }
            
        },
        moveRight(){
          if(this.moved>0){
          this.canRight=true;
          this.moved--;
          this.ulImgsStyle["margin-left"]
           =-380*this.moved+"px";}
          else if(this.moved==0)
           this.ulImgsStyle["margin-left"]
           =0+"px";
        },
        dong(){
             setInterval(()=>{
           this.moveLeft()
             },3000)
         }
    },
    data(){
        return{
        ulImgsStyle:{"margin-left":0},
        moved:0,
        canLift:false,
        canRight:false,               
        swapinfo:[]             
         }
         }
}        
</script>