import * as types from './types'

// rest state
function resetState(state, moduleState) {

    const mState = state[moduleState];

    if (mState.initState && typeof mState.initState === 'function') {

        const initState = mState.initState();

        for (const key in initState) {

            mState[key] = initState[key];
        }
    }

}

export default {

    [types.RESET_STATES](state, payload) {

        console.time('reset_states_time')
        for (const moduleState in state) {

            resetState(state, moduleState);
        }
        console.timeEnd('reset_states_time')
    },

}