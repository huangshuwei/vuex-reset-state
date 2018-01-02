// 公共 action
import * as types from './types'

export default {
    // rest state
    resetStates:function (context, payLoad) {

        console.log(context)
        context.commit(types.RESET_STATES, payLoad);
    }


}