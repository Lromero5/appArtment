export default (state, action) => {
    switch(action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload,...state.transactions]
            }
        // case "GET_TRANSACTION":
        //     return {
        //         ...state,
        //         transactions:
        //     }
        default: return state;
    }
}