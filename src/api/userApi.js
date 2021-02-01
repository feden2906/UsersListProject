


export const userApi = () =>{
    return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
}
