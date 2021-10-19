import { types } from '../types/types'

const initialState = {
    product: [],
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.productAddNew:
            return {
                ...state,
                product: [action.payload, ...state.product]
            }

        case types.productLoad:
            return {
                ...state,
                product: [...action.payload]
            }

        case types.productUpdate:
            console.log(action.payload.id)
            return {
                ...state,
                product: state.product.map(
                    product => product.id === action.payload.id
                        ? action.payload.product
                        : product
                )
            }

        case types.productLogoutClean:
            return {
                ...state,
                active: {
                    title: '',
                    responsible: '',
                    description: '',
                    priority: ''
                }
            }

        default:
            return state;
    }
}