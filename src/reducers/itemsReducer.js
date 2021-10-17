import { types } from '../types/types'

const initialState = {
    item: [],
    active: {
        title: '',
        responsible: '',
        description: '',
        priority: ''
    }
}
export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.itemAddNew:
            return {
                ...state,
                item: [action.payload, ...state.item]
            }

        case types.itemLoad:
            return {
                ...state,
                item: [...action.payload]
            }

        case types.itemActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.itemUpdate:
            console.log(action.payload.id)
            return {
                ...state,
                item: state.item.map(
                    item => item.id === action.payload.id
                        ? action.payload.item
                        : item
                )
            }

        case types.itemLogoutClean:
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