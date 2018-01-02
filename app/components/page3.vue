<template>
    <div>
        <h3>page three</h3>
        <div :key="index" v-for="(item,index) in pageData">{{item}}</div>
    </div>
</template>
<script>
    import {mapState, mapActions} from "vuex"
    export default{
        computed: {
            ...mapState({
                pageData: state => state.page3.page3Data
            })
        },
        methods:{

            ...mapActions("page3", {
                getPage3Data: "getPage3DataAction"
            }),
        },

        created(){

            this.getPage3Data({count:30000});
        }
    }
</script>