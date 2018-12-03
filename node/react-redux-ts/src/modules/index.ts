import { combineReducers } from 'redux';
import { reducer as todoReducer, State as todoState } from "@/modules/todo";

export interface State {
	todo: todoState,
}

export const reducer = combineReducers<State>({
	todo: todoReducer,
});
