<template>
    <div class="list-container">
        <div class="list-items">
            <div class="result-item-box" v-for="(pokemon, index) in displayedPokemonList" :key="index">
                <ResultItem :pokemon-image-src="pokemon.sprites.front_default" :pokemon-id="pokemon.id" :pokemon-name="pokemon.name" />
            </div>
        </div>
        <div class="pagination">
            <nav aria-label="Page navigation">
                <ul class="page-list">
                    <li class="page-item">
                        <button type="button" class="page-link" v-if="page != 1" @click="page--">Anterior</button>
                    </li>
                    <li class="page-item">
                        <button
                            type="button"
                            class="page-link"
                            v-for="(pageNumber, index) in pages.slice(page - 1, page + 5)"
                            :key="index"
                            @click="page = pageNumber"
                            :class="{ active: page === pageNumber }"
                        >
                            {{ pageNumber }}
                        </button>
                    </li>
                    <li class="page-item">
                        <button type="button" @click="page++" v-if="page < pages.length" class="page-link">Próximo</button>
                    </li>
                </ul>
            </nav>
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
            pokemonList: '',
            page: 1,
            perPage: 12,
            pages: []
        }
    },
    mounted() {},
    computed: {
        getPokemonList() {
            return this.$store.getters.getPokemonFinalList
        },
        displayedPokemonList() {
            return this.paginate(this.pokemonList)
        }
    },
    watch: {
        getPokemonList(newData, oldData) {
            this.pokemonList = newData
        },
        pokemonList() {
            this.setPages()
            console.log(this.pages)
        }
    },
    methods: {
        setPages() {
            this.pages = []
            this.page = 1
            const numberOfPages = Math.ceil(this.pokemonList.length / this.perPage)
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index)
            }
        },
        paginate(pokemonList) {
            const page = this.page
            const perPage = this.perPage
            const from = page * perPage - perPage
            const to = page * perPage
            return pokemonList.slice(from, to)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list-container {
    min-height: 300px;
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .list-items {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        .result-item-box {
            margin: 20px;
        }
    }

    .pagination {
        display: flex;

        .page-list {
            list-style-type: none;
            display: flex;
            flex-direction: row;

            .page-item {
                .page-link {
                    margin: 5px;
                    min-width: 50px;
                    height: 50px;
                    border: 3px solid #000;
                }
                .active {
                    background-color: #5d81b5;
                    border: 3px solid #000;
                }
            }
        }
    }
}
</style>
