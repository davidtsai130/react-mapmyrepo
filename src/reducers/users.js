const user = (state = [], action) => {
	switch (action.type) {
		case 'GET_USER':
			return state = state.concat(action.user)
		default:
			return state
	}
}

export default user