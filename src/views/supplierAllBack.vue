<template>
    <div>
    </div>
</template>
<script>
    export default {
        methods:{
            moTo(){
               //console.log(this.typename)
                 this.$router.push({path:'Products',query:{typeid:this.typeida,typename:this.typename}})
            },
            
            search(){
                 this.$router.push({path:'Products',query:{searchone:this.searchone}})
            }

        },
        mounted(){
           this.moTo();
           if(this.typeida==undefined)
           this.search()
        },
        data(){
            return {
                typeida:this.$route.query.typeid,
                typename:this.$route.query.typename,
                searchone:this.$route.query.searchone
            }
        }
        
    } 
</script>