import Vue from 'vue'
import Vuex from 'vuex'
import PokeApiService from '@/services/PokeApiService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pokemonIdNameData: [],
        pokemonTypeData: [],
        pokemonAbilityData: [],
        pokemonList: []
    },
    mutations: {
        SET_ID_NAME_DATA(state, pokemonIdData) {
            state.pokemonIdData = pokemonIdData
        },
        SET_TYPE_DATA(state, pokemonTypeData) {
            state.pokemonTypeData = pokemonTypeData
        },
        SET_ABILITY_DATA(state, pokemonAbilityData) {
            state.pokemonAbilityData = pokemonAbilityData
        },

        SET_LIST(state, pokemonData) {
            // console.log(payload.index)
            // console.log(payload.pokemonList)
            state.pokemonList[pokemonData.index] = pokemonData.response
            Vue.set(state, 'pokemonList', [...state.pokemonList])
            // console.log(state.pokemonList)
        },
        CLEAN_POKEMON_LIST(state) {
            state.pokemonList = []
        }
    },
    actions: {
        async fetchPokemonById(context, value) {
            try {
                const response = await PokeApiService.getPokemonByIdOrName(value)
                context.commit('SET_ID_NAME_DATA', response)
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
                context.commit('SET_TYPE_DATA', response)
            } catch (error) {
                console.error(error)
            }
        },
        async fetchPokemonByAbility(context, value) {
            try {
                const response = await PokeApiService.getPokemonByAbility(value)
                context.commit('SET_ABILITY_DATA', response)
            } catch (error) {
                console.error(error)
            }
        },

        async fetchPokemonIdOrNameList(context, value) {
            try {
                const response = await PokeApiService.getPokemonByIdOrName(value)
                context.commit('SET_ID_NAME_DATA', response)

                context.commit('CLEAN_POKEMON_LIST')

                const pokemonData = { response, index: '0' }
                context.commit('SET_LIST', pokemonData)
            } catch (error) {
                console.error(error)
            }
        },
        async fetchPokemonTypeList(context, value) {
            try {
                const response = await PokeApiService.getPokemonByType(value)
                context.commit('SET_TYPE_DATA', response)

                context.commit('CLEAN_POKEMON_LIST')

                this.state.pokemonTypeData.pokemon.forEach(async (element, index) => {
                    const response = await PokeApiService.getPokemonByIdOrName(element.pokemon.name)
                    const pokemonData = { response, index }
                    context.commit('SET_LIST', pokemonData)
                })
            } catch (error) {
                console.error(error)
            }
        },
        async fetchPokemonAbilityList(context, value) {
            try {
                const response = await PokeApiService.getPokemonByAbility(value)
                context.commit('SET_ABILITY_DATA', response)

                context.commit('CLEAN_POKEMON_LIST')

                this.state.pokemonAbilityData.pokemon.forEach(async (element, index) => {
                    const response = await PokeApiService.getPokemonByIdOrName(element.pokemon.name)
                    const pokemonData = { response, index }
                    context.commit('SET_LIST', pokemonData)
                })
            } catch (error) {
                console.error(error)
            }
        }
    },
    getters: {
        // getIdNameData: state => {
        //     return state.pokemonIdNameData
        // },
        // getTypeData: state => {},
        getPokemonList: state => {
            return state.pokemonList
        }
    },
    modules: {}
})
