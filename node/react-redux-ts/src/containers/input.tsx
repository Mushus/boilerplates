import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { State } from '@/modules/input';

interface StateProp {

}
interface ActionProps {
	handleSubmit: () => void
}

type Props = StateProp & ActionProps;

const mapStateToProps = (state: State): StateProp => ({

});

const mapDispatchToProps = (dispatch: any): ActionProps => ({
	handleSubmit: () => dispatch({})
})

const component = (props: Props) => {
	const { handleSubmit } = props
	return <div>
		<form onSubmit={handleSubmit}>
		<Field name="todo" component="input" type="text" placeholder="Todo" />
		<button type="submit">Add</button>
		</form>
	</div>
};
const form = reduxForm({ form: 'simple' })(component)
const container = connect(mapStateToProps, mapDispatchToProps)(form);
export default container
