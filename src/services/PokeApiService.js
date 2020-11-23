import Api from '@/services/Api'

export default {
    getPokemonById(id) {
        return Api()
            .get('pokemon/' + id)
            .then(response => {
                // console.log(response.data)
                return response.data
            })
            .catch(error => {
                return console.log(error)
            })
    },
    getPokemonByType(typeId) {
        return Api()
            .get('type/' + typeId)
            .then(response => {
                // console.log(response.data)
                return response.data
            })
            .catch(error => {
                return console.log(error)
            })
    }
}
