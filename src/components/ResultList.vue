<template>
    <div class="list-container">
        <!--<div v-for="(pokemons, index) in getpoketypelist.pokemon" :key="index">Pokemons do tipo {{ getpoketypelist.name }} : {{ pokemons.pokemon.name }}</div> -->
        <div class="result-item-box" v-for="(pokemons, index) in getPokemonList" :key="index">
            <ResultItem :key-id="index" :pokemon-image-src="pokemons.sprites.front_default" :pokemon-id="pokemons.id" :pokemon-name="pokemons.name" />
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
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            pokemonData: 'teste'
        }
    },
    mounted() {},
    computed: {
        getPokemonList() {
            console.log(this.$store.getters.getPokemonList)
            return this.$store.getters.getPokemonList
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
