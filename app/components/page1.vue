<template>
    <div>
        <h3>page one</h3>
        <div :key="index" v-for="(item,index) in pageData">{{item}}</div>
    </div>
</template>
<script>
    import {mapState, mapActions} from "vuex"
    export default{
        computed: {
            ...mapState({
                pageData: state => state.page1.page1Data
            })
        },
        methods:{

            ...mapActions("page1", {
                getPage1Data: "getPage1DataAction"
            }),
        },

        created(){

            this.getPage1Data({count:30000});
        }
    }
</script>