<template>
    <div class="container">
        <div class="search-options">
            <div>Name/Id</div>
            <div>Type</div>
            <div>Ability</div>
        </div>
        <div class="search-data">
            <input class="search-input" type="text" v-model="inputText" placeholder="Escreva um nome ou ID!" />
            <button class="search-button" @click="searchInput">LUPA</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBox',
    data() {
        return {
            inputText: ''
        }
    },
    methods: {
        searchInput() {
            // this.$store.dispatch('fetchPokemonById', this.inputText)
            this.$store.dispatch('fetchPokemonTypeList', this.inputText)
        }
    }
}
</script>

<style scoped lang="scss">
$outline-width: 6px;

.container {
    margin-top: -100px;
    width: 60%;
    height: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 100;

    position: relative;
    padding: 20px;

    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: content-box;
    }

    &:before {
        top: -$outline-width;
        left: 0;
        border-top: $outline-width black solid;
        border-bottom: $outline-width black solid;
    }

    &:after {
        left: -$outline-width;
        top: 0;
        border-left: $outline-width black solid;
        border-right: $outline-width black solid;
    }

    .search-options {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        z-index: 200;
        font-size: 30px;
    }

    .search-data {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        z-index: 200;

        .search-input {
            padding: 2px 5px;
            border: 5px solid #000;
            height: 50px;
            width: 60%;
            font-size: 30px;
        }

        .search-button {
            padding: 0px;
            border: 5px solid #000;
            height: 50px;
            width: 10%;
        }
    }
}
</style>
