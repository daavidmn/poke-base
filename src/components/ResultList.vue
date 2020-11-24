<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <button @click="nextId">proximo id</button>
        <button @click="showByType">Próximo tipo de pokemon</button>
        <div>dados: {{ getpokedata.name }}</div>
        <!--<div v-for="(pokemons, index) in getpoketypelist.pokemon" :key="index">Pokemons do tipo {{ getpoketypelist.name }} : {{ pokemons.pokemon.name }}</div> -->
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
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
        nextId() {
            this.pokemonId++
            this.$store.dispatch('fetchPokemonById', this.pokemonId)
        },
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
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
