import { addUser, addRepos } from '../actions'

export function retrieveUserAndRepos() {
	return dispatch => {
		fetch('https://api.github.com/users/davidtsai130').then((response) => {
			return response.json()
		}).then((userData) => {
			dispatch(addUser(userData))
			fetch(userData.repos_url).then((response) => {
				return response.json()
			}).then((repos) => {
				dispatch(addRepos(repos))
			})
		})
	}
}

export function retrieveContributors() {
	return dispatch => {
		// something
	}
}
