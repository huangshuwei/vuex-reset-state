const types = {
    GET_PAGE5_DATA: 'getPage2Data'
}

// you want to init states here
const initState = {

    page5Data: [],
}

// state
const state = {

    ...initState,

    // not to initialize
    page5Title: '',

    initState(){

        return initState
    }
}

// actions
const actions = {
    getPage5DataAction(context, payLoad) {

        setTimeout(x => {

            let data = [],
                count = payLoad.count;

            for (var i = 0; i < count; i++) {

                data.push(` ${i} this is page five! this is page five! this is page five!`)
            }

            context.commit(types.GET_PAGE5_DATA, {data})
        })

    }
}


// mutation
const mutations = {
    [types.GET_PAGE5_DATA](state, {data}) {

        state.page5Data = data;
        state.page5Title = 'page5 title';
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