import Vue from 'vue'
import Vuex from 'vuex'
import PokeApiService from '@/services/PokeApiService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pokemonData: [],
        pokemonTypeList: []
    },
    mutations: {
        SET_POKEDATA(state, pokemonData) {
            state.pokemonData = pokemonData
        },
        SET_POKETYPE(state, pokemonTypeList) {
            state.pokemonTypeList = pokemonTypeList
        }
    },
    actions: {
        async fetchPokemonById(context, value) {
            try {
                const response = await PokeApiService.getPokemonById(value)
                context.commit('SET_POKEDATA', response)
            } catch (error) {
                console.error(error)
            }

            // await axios
            //     .get('https://pokeapi.co/api/v2/' + 'pokemon/1')
            //     .then(response => context.commit('SET_POKEID', response.data))
            //     .catch(error => console.log(error))

            // const response = await axios.get('https://pokeapi.co/api/v2/' + 'pokemon/1')
            // context.commit('SET_POKEID', response.data)
        },
        async fetchPokemonByType(context, value) {
            try {
                const response = await PokeApiService.getPokemonByType(value)
                context.commit('SET_POKETYPE', response)
            } catch (error) {
                console.error(error)
            }
        }
    },
    modules: {}
})
