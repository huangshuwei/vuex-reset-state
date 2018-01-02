<template>
    <div>
        <h3>page two</h3>
        <div :key="index" v-for="(item,index) in pageData">{{item}}</div>
    </div>
</template>
<script>
    import {mapState, mapActions} from "vuex"
    export default{
        computed: {
            ...mapState({
                pageData: state => state.page2.page2Data
            })
        },
        methods:{

            ...mapActions("page2", {
                getPage2Data: "getPage2DataAction"
            }),
        },

        created(){

            this.getPage2Data({count:30000});
        }
    }
</script>