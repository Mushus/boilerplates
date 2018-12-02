import { combineReducers } from 'redux';
import { reducer as inputReducer, State as InputState } from "@/modules/input";

export interface State {
	input: InputState,
}

export const InitialState: State = {
	input: {
		text: "",
	}
};

export const reducer = combineReducers<State>({
	input: inputReducer,
});
