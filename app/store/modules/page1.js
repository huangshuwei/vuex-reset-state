const types = {
    GET_PAGE1_DATA: 'getPage1Data'
}

// you want to init states here
const initState = {

    page1Data: [],

}

// state
const state = {

    ...initState,

    // not to initialize
    page1Title: '',

    initState(){

        return initState
    }
}


// actions
const actions = {
    getPage1DataAction(context, payLoad) {

        setTimeout(x => {

            let data = [],
                count = payLoad.count;

            for (var i = 0; i < count; i++) {

                data.push(` ${i} this is page one! this is page one! this is page one!`)
            }

            context.commit(types.GET_PAGE1_DATA, {data})
        })

    }
}


// mutation
const mutations = {
    [types.GET_PAGE1_DATA](state, {data}) {

        state.page1Data = data;
        state.page1Title = 'page1 title';
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