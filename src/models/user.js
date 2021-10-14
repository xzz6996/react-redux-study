const initState = {
    name: 'xzz',
    count: 0
}

const ADD = 'counter/ADD'
const REMOVE = 'counter/REMOVE'



/**
 * 决定每个 action 如何改变应用的 state，这个函数被叫做 reducer。
 */

// 这就是一个reducer
export default (state = initState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                count: state.count + 1
            }
        case REMOVE:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

