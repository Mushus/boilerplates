import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '@/modules'
import { FinishAction } from '@/modules/todo';

interface StateProp {
	inProgress: string[]
	finished: string[]
}

interface ActionProps {
	finish: (text: number) => void
}

type Props = StateProp & ActionProps;

const mapStateToProps = ({ todo: { inProgress, finished } }: State): StateProp => ({
	inProgress,
	finished,
});

const mapDispatchToProps = (dispatch: any): ActionProps => ({
	finish: index => dispatch(FinishAction(index))
})

const component = ({ finish, finished, inProgress }: Props) => {
	console.log(inProgress);
	return <div>
		<ul>
			{ inProgress.map( (row, index) => <li key={index}>
				{ row } <button type="button" onClick={ e => finish(index) }>x</button>
			</li>) }
		</ul>
		<ul>
			{ finished.map( (row, index) => <li key={index}>
				{ row }
			</li>) }
		</ul>
	</div>
};

const container = connect(mapStateToProps, mapDispatchToProps)(component);
export default container
