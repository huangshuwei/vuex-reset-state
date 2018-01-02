<template>
    <div>
        <div class="left-bar">
            <div class="left-bar-item">
                <router-link to="/empty">empty page</router-link>
            </div>
            <div class="left-bar-item">
                <router-link to="/page1">page one</router-link>
            </div>
            <div class="left-bar-item">
                <router-link to="/page2">page two</router-link>
            </div>
            <div class="left-bar-item">
                <router-link to="/page3">page three</router-link>
            </div>
            <div class="left-bar-item">
                <router-link to="/page4">page four</router-link>
            </div>
            <div class="left-bar-item">
                <router-link to="/page5">page five</router-link>
            </div>
        </div>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>

    * {
        margin: 0;
        padding: 0;
    }

    .left-bar {
        display: block;
        width: 20%;
        height: calc(100vh);
        float: left;
        padding-top: 50px;
        margin-left: 20px;
        border-right: 1px solid #ddd;
    }

    .left-bar-item {
        padding-top: 15px;
    }

    .left-bar a.active {
        color: red;
    }

    .container {
        height: 500px;
        width: 70%;
        float: left;
        margin-left: 20px;
        margin-top: 50px;
        overflow: auto;
    }


</style>
<script>
    import {mapState, mapActions} from "vuex"
    export default{

        data(){

            return {
                memoryInfo: null
            }
        },
        methods: {

            ...mapActions({
                resetStates: "resetStates"
            })
        },

        watch: {

            $route(to, from) {

                this.resetStates({name: '123'});
            }
        }
    }
</script>