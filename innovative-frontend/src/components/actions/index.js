

export const createUser = (newUser) => {
  
    return (dispatch) => {
        return fetch("http://localhost:3000/users", {
            method: "POST", 
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
                    bio: newUser.bio
                }
            }
            ),

        })
        .then(resp => resp.json())
        .then(resp => console.log('hello', resp))
        //.then(resp => {

         //})   
    }
}

export const getPcas = (pca) => {
    return(dispatch) => {
        return fetch('http://localhost:3000/pcas')
        .then(resp => resp.json()) 
        .then(resp => console.log(resp))
    }
}

export const getCurrentUser = userInfo => {
    return(dispatch) => {
        return fetch('http://localhost:3000/get_curent_user', {
            credentials: "include", 
            headers: {
                'Content-Type': 'application/json'
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
