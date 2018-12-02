import actionCreatorFactory from 'typescript-fsa';
import { reducerWithoutInitialState } from "typescript-fsa-reducers";

export interface State {
	text: string,
}

const actionCreator = actionCreatorFactory();

export const AddAction = actionCreator<string>('ADD');
export const RemoveAction =  actionCreator<string>('REMOVE');

export const reducer = reducerWithoutInitialState<State>()
	.case(AddAction, (state, add) => ({ ... state }))
	.case(RemoveAction, (state, remove) => ({ ...state }))
	.build()
