// import axios from 'axios'
// import { API_URL } from '@/services/config'

// export const GetId = id => {
//     return axios
//         .get(API_URL + 'pokemon/' + id)
//         .then(response => response.data)
//         .catch(error => console.log(error))
// }

import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://pokeapi.co/api/v2/',
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
