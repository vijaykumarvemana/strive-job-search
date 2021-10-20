import { initialState } from "../store"



const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_COMPANY_TO_FAVORITE':{

            return {
                ...state,
                favorite: {
                    ...state.favorite,
                    companies:[...state.favorite.companies, action.payload]
                }
            }
        }
        default:
            return state
    }
}

export default reducer