const types = {
    GET_PAGE3_DATA: 'getPage2Data'
}

// you want to init states here
const initState = {

    page3Data: [],

}

// state
const state = {

    ...initState,

    // not to initialize
    page3Title: '',

    initState(){

        return initState
    }
}


// actions
const actions = {
    getPage3DataAction(context, payLoad) {

        setTimeout(x => {

            let data = [],
                count = payLoad.count;

            for (var i = 0; i < count; i++) {

                data.push(` ${i} this is page three! this is page three! this is page three!`)
            }

            context.commit(types.GET_PAGE3_DATA, {data})
        },100)

    }
}


// mutation
const mutations = {
    [types.GET_PAGE3_DATA](state, {data}) {

        state.page3Data = data;
        state.page3Title = 'page3 title';
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