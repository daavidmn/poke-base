import Vue from 'vue'
import Vuex from 'vuex'
import PokeApiService from '@/services/PokeApiService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pokemonIdNameData: [],
        pokemonTypeData: [],
        pokemonAbilityData: [],
        pokemonList: [],
        pokemonFinalList: []
    },
    mutations: {
        SET_ID_NAME_DATA(state, pokemonIdNameData) {
            state.pokemonIdNameData = pokemonIdNameData
        },
        SET_TYPE_DATA(state, pokemonTypeData) {
            state.pokemonTypeData = pokemonTypeData
        },
        SET_ABILITY_DATA(state, pokemonAbilityData) {
            state.pokemonAbilityData = pokemonAbilityData
        },

        SET_LIST(state, pokemonData) {
            state.pokemonList[pokemonData.index] = pokemonData.response
            Vue.set(state, 'pokemonList', [...state.pokemonList])
        },
        CLEAR_POKEMON_LIST(state) {
            state.pokemonList = []
        },

        SET_FINAL_LIST(state, pokemonData) {
            state.pokemonFinalList = pokemonData
        }
    },
    actions: {
        async fetchPokemonByIdOrName(context, value) {
            try {
                const response = await PokeApiService.getPokemonByIdOrName(value)
                context.commit('SET_ID_NAME_DATA', response)
            } catch (error) {
                console.error(error)
            }
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

                context.commit('CLEAR_POKEMON_LIST')

                const pokemonData = []
                pokemonData[0] = context.state.pokemonIdNameData
                context.commit('SET_FINAL_LIST', pokemonData)
            } catch (error) {
                console.error(error)
            }
        },
        async fetchPokemonTypeList(context, value) {
            try {
                const response = await PokeApiService.getPokemonByType(value)
                context.commit('SET_TYPE_DATA', response)

                context.commit('CLEAR_POKEMON_LIST')

                // for (const [index, element] of this.state.pokemonTypeData.pokemon.entries()) {
                //     const response = await PokeApiService.getPokemonByIdOrName(element.pokemon.name)
                //     const pokemonData = { response, index }
                //     context.commit('SET_LIST', pokemonData)
                // }

                // this.state.pokemonTypeData.pokemon.forEach(async (element, index) => {
                //     const response = await PokeApiService.getPokemonByIdOrName(element.pokemon.name)
                //     const pokemonData = { response, index }
                //     context.commit('SET_LIST', pokemonData)
                // })

                const promises = this.state.pokemonTypeData.pokemon.map(async (element, index) => {
                    const response = await PokeApiService.getPokemonByIdOrName(element.pokemon.name)
                    const pokemonData = { response, index }
                    context.commit('SET_LIST', pokemonData)
                })
                await Promise.all(promises)

                context.commit('SET_FINAL_LIST', context.state.pokemonList)
            } catch (error) {
                console.error(error)
            }
        },
        async fetchPokemonAbilityList(context, value) {
            try {
                const response = await PokeApiService.getPokemonByAbility(value)
                context.commit('SET_ABILITY_DATA', response)

                context.commit('CLEAR_POKEMON_LIST')

                // for (const [index, element] of this.state.pokemonAbilityData.pokemon.entries()) {
                //     const response = await PokeApiService.getPokemonByIdOrName(element.pokemon.name)
                //     const pokemonData = { response, index }
                //     context.commit('SET_LIST', pokemonData)
                // }

                const promises = this.state.pokemonAbilityData.pokemon.map(async (element, index) => {
                    const response = await PokeApiService.getPokemonByIdOrName(element.pokemon.name)
                    const pokemonData = { response, index }
                    context.commit('SET_LIST', pokemonData)
                })
                await Promise.all(promises)

                context.commit('SET_FINAL_LIST', context.state.pokemonList)
            } catch (error) {
                console.error(error)
            }
        }
    },
    getters: {
        getPokemonList: state => {
            return state.pokemonList
        },
        getPokemonFinalList: state => {
            return state.pokemonFinalList
        },
        getPokemonByIdOrName: state => {
            return state.pokemonIdNameData
        }
    },
    modules: {}
})
