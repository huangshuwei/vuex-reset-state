<template>
    <div>
        <h3>page five</h3>
        <div :key="index" v-for="(item,index) in pageData">{{item}}</div>
    </div>
</template>
<script>
    import {mapState, mapActions} from "vuex"
    export default{
        computed: {
            ...mapState({
                pageData: state => state.page5.page5Data
            })
        },
        methods:{

            ...mapActions("page5", {
                getPage5Data: "getPage5DataAction"
            }),
        },

        created(){

            this.getPage5Data({count:30000});
        }
    }
</script>