import React, { PureComponent } from 'react';
import { Avatar } from 'react-toolbox/lib/avatar';
import { Input } from 'react-toolbox/lib/input';
import User from './containers/User'
import Repos from './containers/Repos'

class App extends PureComponent {

	render() {
		return (
			<div>
				<Avatar title="Javier" image="https://placeimg.com/80/80/animals"/>
				<Input type='text' hint='With Hint, no label' name='name' />
				<User />
				<Repos />
			</div>
		)
	}
}

export default App
