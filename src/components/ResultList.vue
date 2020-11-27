<template>
    <div class="list-container">
        <!--<div v-for="(pokemons, index) in getpoketypelist.pokemon" :key="index">Pokemons do tipo {{ getpoketypelist.name }} : {{ pokemons.pokemon.name }}</div> -->
        <div class="result-item-box" v-for="(pokemon, index) in getPokemonList" :key="index">
            <ResultItem :pokemon-image-src="pokemon.sprites.front_default" :pokemon-id="pokemon.id" :pokemon-name="pokemon.name" />
        </div>
    </div>
</template>

<script>
import ResultItem from '@/components/ResultItem.vue'

export default {
    name: 'ResultList',
    components: {
        ResultItem
    },

    data() {
        return {
            pokemonData: 'teste'
        }
    },
    mounted() {},
    computed: {
        getPokemonList() {
            return this.$store.getters.getPokemonFinalList
        }
    },
    watch: {
        getPokemonData(newData, oldData) {
            this.pokemonData = newData
        }
    },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list-container {
    min-height: 500px;
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.result-item-box {
    margin: 20px;
}
</style>
