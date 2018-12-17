<template>
    <div>
      <div id="containera">
          <div id="cover" class="rt">
            <form id="form-login">
              <div class="txt">
                <p>欢迎登陆
                    <span>
                        <router-link to='/Reg'>新用户注册</router-link>
                    </span>
                </p>
                <div class="text">
                  <input type="text" placeholder="请输入您的用户名"  id="uname" required="" autofocus="" v-model='uname' >
                  <div id="showResult">{{showResult}}</div>
                </div>
                <div class="text">
                  <input type="password" id="password" placeholder="请输入您的密码"  required="" minlength="6" maxlength="15" v-model='upwd'>
                 
                </div>
                <div class="chose">
                  <input type="checkbox" class="checkbox" id="ck_rmbUser" value="0">自动登录
                  <span><a href="javascript:;" style='color:#fff'>忘记密码？</a></span>
                </div>
                <input class="button_login" type="button" value="登录" id="bt-login" @click='asubmit' :disabled='!know' :class='spanClassa'>
                <div class="chose">
                    <a href="javascript:;">守则内容</a>
                  <input type="checkbox" class="checkbox"  id='a1' v-model='know'><label for="a1">我承诺遵守本网站守则</label><br>
                        
                </div>
              </div>
            </form>
             <a href="" id='w1'></a>
		   <a href="" class='content-bottom-right'></a>
          </div>
        </div>
    </div>

</template>
<script>
   export default {
       data(){
          return {
            uname:'',
            upwd:'',
            know:false,
            showResult:'',
            spanClassa:{backk:false}
          }
       },
       methods:{
           asubmit(){
               var u=this.uname
               var p=this.upwd;
               var url='http://127.0.0.1:3000/login?uname='+u+"&upwd="+p;
               this.axios.get(url).then(result=>{
                   //console.log(result)
                 if(result.data.code == 1){
                        this.$store.commit('signin',result.data.user);
                        this.$router.push("/Index");
                       }else{
                           this.showResult="用户名或密码有误,请重新输入"
                            //console.log("用户名或密码有误")
                          }
               }) 
           }
       },
       watch:{
           know(){
               if(this.know)
               this.spanClassa.backk=true
               else{this.spanClassa.backk=false}
           }
       }
   } 
</script>
<style >
    .backk{ background: #27b0f6;}
    .errora{color:red !important;}
    #containera {
        width: 100%;
        box-sizing: border-box;
        margin: 0px auto;
        overflow-x: hidden;
        height: 560px;
        background-image: url(../../public/images/images/bg.png);
    }
    #cover{
        width: 320px;
        height: 296px;
        margin:10px 70%;
        box-sizing: border-box;
        background-color: rgba(0,0,0,0.3);
    }
    #cover .txt{
        float: left;
        width: 253px;
        height: 277px;
        padding: 10px;
    }

    #cover .txt p{
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f0f0f0;
    }
    #cover .txt p,#cover .txt p span a{
        color:#fff;
    }
    #cover .txt p,.container .txt p{
        font-size: 18px;
    }

    #cover .txt p span a{
        font-size: 12px;
        color:#fff;
        position: relative;
        right: -84px;
    }
    /*#cover .txt .text{*/
        /*margin:25px 0 -15px 0;*/
    /*}*/
    #cover .txt .text input{
        border:1px solid #ddd;
        padding:10px 20px;
        width:253px;
        margin-top: 16px;
        /*box-shadow: inset 0 1px 1px rgba(0, 0, 0, .75);*/
    }
    #cover .txt .chose,.chose_login{
        margin-bottom:10px;
        color: #ffffff;
    }
    #cover .txt .chose span{
        float:right;
    }
    #cover .txt .chose .checkbox{
        position: relative;
        top: 2px;
    }
    .button_login{
        background: -moz-linear-gradient(top, #27b0f6 0%, #0aa1ed 100%);
        background: -webkit-linear-gradient(top, #27b0f6 0%, #0aa1ed 100%);
        background: -o-linear-gradient(top, #27b0f6 0%, #0aa1ed 100%);
        background: -ms-linear-gradient(top, #27b0f6 0%, #0aa1ed 100%);
        border-radius: 2px;
        color:#fff;
        text-align:center;
        width:263px;
        line-height:35px;
        font-weight:bold;
        border-radius:2px;
        border:0;
        margin:0 auto;
    }
    .button_login:hover{ cursor:pointer }
    #showResult{
        width: 258px;
        height: 30px;
        top: 330px;
        right: 135px;
        line-height: 30px;
        font-size: 15px;
        color: red;
        padding-left: 8px;
    }
    @media screen and (max-width: 768px){
        #cover{
        margin:10px auto;
    }
    }
</style>
