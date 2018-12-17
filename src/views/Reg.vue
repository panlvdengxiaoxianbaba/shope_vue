<template>
    <div>
      <div class="container">
       <div class="panel rt">
         <form id="form-register">
              <div class="txt">
                <p>新用户注册
                    <span>
                    <router-link to='/User'>直接登录</router-link>
                    </span>
                </p>
                </div>
                <div class="form-group">
                <label for="uname">用户名：</label>
                <input minlength="3" maxlength="12" type="text" placeholder="请输入3到8位用户名" autofocus name="uname" id="uname"  v-model='usertest'>
                <span class="msg-info ">{{msg}}</span>
                </div>
                <div class="form-group">
                <label for="upwd">登录密码：</label>
                <input required="" type="password" minlength="3" maxlength="11" placeholder="请输入密码" name="upwd" autofocus="" id="upwd" v-model='upwdtest'>
                <span class="msg-info ">{{msgu}}</span>
                </div>
                <div class="form-group">
                <label for="upwdconfirm">确认密码：</label>
                <input required="" type="password" minlength="6" maxlength="12" placeholder="请确认密码" name="upwdconfirm" @blur="yanzheng" id="upwdconfirm" v-model='yanpwd'>
                <span class="msg-info ">{{msguy}}</span>
                </div>
                <div class="form-group">
                <label for="email">邮箱：</label>
                <input type="email" placeholder="请输入邮箱地址" name="email" id="email" v-model='emm'>
                <span class="msg-info "></span>
                </div>
                <div class="form-group">
                <label for="phone">手机号：</label>
                <input id="phone" name="phone" placeholder="请输入您的手机号" pattern="(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$" required="" type="text" v-model='iponee'>
                <span class="msg-info "></span>
                </div>
                <div class="form-group">
                        <label></label>
                <input type="button" value="提交注册信息" @click='submiit' id='bt-register'>
                </div>
      </form>
       <a href="" id='w1'></a>
		   <a href="" class='content-bottom-right' ></a> 
    </div>
  </div>
    </div>

</template>
<script>
        export default {
            data(){
                return {
                    usertest:'',
                    upwdtest:'',
                    msgu:'',
                    msguy:'',
                    msg:'',
                    yanpwd:'',
                    emm:'',
                    iponee:''
                }
            },
            watch:{
                usertest(){
                    if(/^\w{3,11}$/.test(this.usertest)){this.msg='用户名格式正确'}
                    else{this.msg='格式不正确，请重输入'}
                },
                upwdtest(){
                    if(/^\w{3,11}$/.test(this.upwdtest)){this.msgu='密码格式正确'}
                    else{this.msgu='密码格式不正确'}
                }
            },
            methods:{
                yanzheng(){
                    if(this.yanpwd==this.upwdtest&&this.upwdtest!=''){this.msguy='密码输入一致'}
                    else{this.msguy='密码输入不一致，请重输'}
                },
                submiit(){
                    this.axios.post("http://127.0.0.1:3000/reg",`uname=${this.usertest}&upwd=${this.upwdtest}&uemail=${this.emm}&uphone=${this.iponee}`)
                    .then(result=>{console.log(result)
                    if(result.data.code==1){this.$router.push('/User')}
                    
                    })
                }
            }
        }
</script>
<style >

    .msg-error,.msg-default{
        width:1000px;
    }
    .container {
        width: 100%;
        box-sizing: border-box;
        margin: 0px auto;
        overflow-x: hidden;
        height: 560px;
        background-image: url(../../public/images/images/bg.png);
}
h2 {
    text-align: center;
}
.panel {
    border-radius: 8px;
    width: 420px;
    height: 500px;
    margin:10px 70%;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0.3);
}
.form-group {
    margin-bottom: 20px;
}
#form-register .txt{
    padding: 10px;
}
#form-register.txt p{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f0f0f0;
}
#form-register .txt p,#form-register .txt p span a{
    color:#fff;
}
.container .txt p{
    font-size: 18px;
}
#form-register .txt p span a{
    font-size: 12px;
    color:#fff;
    float:right
}
.form-group{display:inline-block}
.form-group > label {
    display: inline-block;
    width: 100px;
    text-align: right;
    color: #ffffff;
    font-size: 14px;
}
.form-group > input {
    text-align: left;
    height:8px;
    padding:10px 20px;
    width:125px;
    margin-top: 12px;
    border-radius: 2px;
}
.form-group > span {
    display:inline-block;
    text-align:left;
    width: 120px;
    color: #fff;
    padding: 4px;
    border-radius: 2px;;
}
.msg-info{font-size:8px;color:#e10 !important}
.msg-default {
  
    font-size:8px;
}
.msg-error {
  
    font-size:8px;
}
.msg-success {
   
    font-size:8px;
}
.hidden {
    visibility:hidden
}
.true{
	position:relative;
	top:5px;
}
#bt-register{
    margin-top:10px;
    margin-left:-150px;
    text-align:center;
    background: #27b0f6;
    width: 240px;
    height:40px;
    color: #fff;
    border-radius: 4px;
    border:0;
}
#bt-register:hover{cursor:pointer}
 @media screen and (max-width: 1400px){
       .panel  {
        margin:10px auto;
    }
    }
</style>
