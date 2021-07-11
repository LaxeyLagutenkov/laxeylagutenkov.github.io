import firebase from "firebase/app"

export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            }
            catch (error) {
                // используем метод commit, кот. позволит изменять state в случае ошибки
                commit('setError', error)
                throw error
            }
        },
        async logout() {
            await firebase.auth().signOut()
        },
        async registration({dispatch, commit}, {email, password, name}) {
            try {
                // creating new record
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                // find user id
                const uid = await dispatch('getUserId')
                // and make new record in the database
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name: name,
                    balance: 50000
                })
            }
            catch(error) {
                // используем метод commit, кот. позволит изменять state в случае ошибки
                commit('setError', error)
                throw error
            }
        },
        // method determine user have a unique id or not 
        getUserId() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        }
    }
}