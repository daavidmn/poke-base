<template>
    <div class="container">
        <button @click="showByType">Próximo tipo de pokemon</button>
        <div>dados: {{ getpokedata.name }}</div>
        <!--<div v-for="(pokemons, index) in getpoketypelist.pokemon" :key="index">Pokemons do tipo {{ getpoketypelist.name }} : {{ pokemons.pokemon.name }}</div> -->
        <ResultItem />
    </div>
</template>

<script>
import ResultItem from '@/components/ResultItem.vue'

export default {
    name: 'ResultList',
    components: {
        ResultItem
    },
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            pokemonData: '',
            valor: 1,
            pokemonId: '1',
            pokemonType: 1
        }
    },
    beforeCreated() {},
    mounted() {
        this.$store.dispatch('fetchPokemonById', this.pokemonId)
        this.$store.dispatch('fetchPokemonByType', this.pokemonType)
    },
    computed: {
        getpokedata() {
            return this.$store.state.pokemonData
        },
        getpoketypelist() {
            return this.$store.state.pokemonTypeList
        }
    },
    methods: {
        showByType() {
            this.pokemonType++
            if (this.pokemonType >= 19) {
                this.pokemonType = 1
            }
            this.$store.dispatch('fetchPokemonByType', this.pokemonType)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
