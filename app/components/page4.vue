<template>
    <div>
        <h3>page four</h3>
        <div :key="index" v-for="(item,index) in pageData">{{item}}</div>
    </div>
</template>
<script>
    import {mapState, mapActions} from "vuex"
    export default{
        computed: {
            ...mapState({
                pageData: state => state.page4.page4Data
            })
        },
        methods:{

            ...mapActions("page4", {
                getPage4Data: "getPage4DataAction"
            }),
        },

        created(){

            this.getPage4Data({count:30000});
        }
    }
</script>