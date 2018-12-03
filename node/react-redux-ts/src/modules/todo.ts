import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from "typescript-fsa-reducers";

export interface State {
	text: string,
	inProgress: string[],
	finished: string[],
}

const initalState: State = {
	text: "",
	inProgress: [],
	finished: [],
}

const actionCreator = actionCreatorFactory();

export const InputAction = actionCreator<string>('Input');
export const AddAction = actionCreator<void>('ADD');
export const FinishAction =  actionCreator<number>('FINISH');

export const reducer = reducerWithInitialState<State>(initalState)
	.case(InputAction, (state, text) => ({
		...state,
		text
	}))
	.case(AddAction, (state) => ({
		 ...state,
		 text: "",
		 inProgress: [ ...state.inProgress, state.text ]
	}))
	.case(FinishAction, (state, index) => {
		const inProgress = [ ...state.inProgress ];
		const finished =  [ ...state.finished, state.inProgress[index] ];
		inProgress.splice(index, 1);
		return {
			...state,
			inProgress,
			finished
		};
	})
	.default((state) => state)


