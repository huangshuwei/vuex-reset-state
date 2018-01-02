const types = {
    GET_PAGE2_DATA: 'getPage2Data'
}

// you want to init states here
const initState = {

    page2Data: [],

}

// state
const state = {

    ...initState,

    // not to initialize
    page2Title: '',

    initState(){

        return initState
    }
}

// actions
const actions = {
    getPage2DataAction(context, payLoad) {

        setTimeout(x => {

            let data = [],
                count = payLoad.count;

            for (var i = 0; i < count; i++) {

                data.push(` ${i} this is page two! this is page two! this is page two!`)
            }

            context.commit(types.GET_PAGE2_DATA, {data})
        })

    }
}


// mutation
const mutations = {
    [types.GET_PAGE2_DATA](state, {data}) {

        state.page2Data = data;
        state.page2Title = 'page2 title';
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