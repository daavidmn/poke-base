import Api from '@/services/Api'

export default {
    getPokemonByIdOrName(idOrName) {
        return Api()
            .get('pokemon/' + idOrName)
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
    },
    getPokemonByAbility(abilityId) {
        return Api()
            .get('ability/' + abilityId)
            .then(response => {
                // console.log(response.data)
                return response.data
            })
            .catch(error => {
                return console.log(error)
            })
    }
}
