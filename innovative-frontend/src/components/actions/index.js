

export const getUsers = () => {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(resp => console.log(resp))
}

