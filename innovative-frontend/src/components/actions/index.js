

export const createUser = (newUser, callback) => {
  
    return (dispatch) => {
        return fetch("http://localhost:3000/users", {
            method: "POST", 
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify( {
                
                user: {
                    id: newUser.id,
                    username: newUser.userName, 
                    first_name: newUser.firstName, 
                    last_name: newUser.lastName, 
                    email: newUser.email,
                    password: newUser.password, 
                    type: newUser.type, 
                    bio: newUser.bio, 
                    pca_id: newUser.pcaId
                }
            }
            ),

        })
        .then(resp => resp.json())
        .then(resp => console.log('create new user resp', resp))
        .then(resp => {
            dispatch({ type: 'LOGIN_USER', user: resp})
            callback()
        })
        //.then(resp => {

         //})   
    }
}

export const getPcas = () => { // need to fetch here to put all salesmen into a dropdown for a grower to sign up
    
    return(dispatch) => {
        return fetch('http://localhost:3000/pcas')
        .then(resp => resp.json()) 
        .then(resp => {
            // console.log(resp)
            dispatch({ type: 'GET_PCAS', pcas: resp})
        })
    }
}

export const getCurrentUser = userInfo => { // add conditional for errors
    return(dispatch) => {
        return fetch('http://localhost:3000/get_current_user', {
            credentials: "include", 
            headers: {
                'Content-Type': 'application/json'
            }    
        })
        .then(resp => resp.json()) 
        .then(resp => {
            if(!resp.error) {
                dispatch({type: 'CURRENT_USER', payload: resp})
            } else {
                alert(resp.error)
            }
        })
    }
}   

export const handleLogin = (userInfo, callback) => {
    return(dispatch) => {
        return fetch('http://localhost:3000/sessions', {
            method: "POST", 
            credentials: "include", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: userInfo.email, 
                    password: userInfo.password

                }
            })
        })
        .then(resp => resp.json())
        .then(resp => {
            if (!resp.error) {
                dispatch({ type: 'LOGIN_USER', user: resp})
                callback()
            } else {
                alert('There was an error logging in, please try again')
            }
        })
    }
}

export const logOutUser = id => {
    return dispatch => {
        return fetch(`http://localhost:3000/sessions/${id}`, {
            method: "DELETE", 
            credentials: "include", 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            dispatch({ type: 'LOGOUT_USER', payload: resp })
        })
    }
}


