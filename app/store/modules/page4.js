const types = {
    GET_PAGE4_DATA: 'getPage2Data'
}

// you want to init states here
const initState = {

    page4Data: [],

}

// state
const state = {

    ...initState,

    // not to initialize
    page4Title: '',

    initState(){

        return initState
    }
}


// actions
const actions = {
    getPage4DataAction(context, payLoad) {

        setTimeout(x => {

            let data = [],
                count = payLoad.count;

            for (var i = 0; i < count; i++) {

                data.push(` ${i} this is page four! this is page four! this is page four!`)
            }

            context.commit(types.GET_PAGE4_DATA, {data})
        })

    }
}


// mutation
const mutations = {
    [types.GET_PAGE4_DATA](state, {data}) {

        state.page4Data = data;
        state.page4Title = 'page4 title';
    }
}


// getters
const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}