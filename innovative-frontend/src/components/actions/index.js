

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
        .then(resp => {
            dispatch({ type: 'LOGIN_USER', user: resp})
            callback()
        })
      
    }
}

export const getPcas = () => { 
    
    return(dispatch) => {
        return fetch('http://localhost:3000/pcas')
        .then(resp => resp.json()) 
        .then(resp => {
            dispatch({ type: 'GET_PCAS', pcas: resp})
        })
    }
}

export const getCurrentUser = () => { 
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
                dispatch({type: 'CURRENT_USER', user: resp})
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
                return callback()
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

export const createCropInfo = (newCrop, callback) => {
    return(dispatch) => {
        return fetch('http://localhost:3000/crop_infos', {
            method: "POST", 
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({ 
                    id: newCrop.id,
                    name: newCrop.name, 
                    description: newCrop.description, 
                    amount_of_acres: newCrop.amountOfAcres, 
                    grower_id: newCrop.growerId    
            })
        })
        .then(resp => resp.json())
        .then(resp => {
            dispatch({ type: 'ADD_CROP', crop: resp})
            callback()
        })
        
    }
}

export const getAllCrops = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/crop_infos', {
            credentials: 'include', 
                headers: {
                    'Content-Type': 'application/json',
                }
        })
        .then(resp => resp.json())
        .then(resp => {
            dispatch({ type: 'GET_CROPS', crops: resp})
        })
    }
}

export const getPcaToAccessGrowersCrops = (id) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/pcas/${id}`, {
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            if (!resp.error) {
                dispatch({ type: 'GET_PCAS_GROWERS_CROPS', payload: resp})

            } else {
                alert('You need your growers to sign up and add some crops')
            }
        })
    
    }
}


