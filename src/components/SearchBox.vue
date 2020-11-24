<template>
    <div class="container">
        <div class="search-options">
            <div>Name/Id</div>
            <div>Type</div>
            <div>Ability</div>
        </div>
        <div class="search-input">
            <input type="text" v-model="inputText" />
            <button @click="searchInput">search</button>
        </div>
        {{ inputText }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: ''
        }
    },
    methods: {
        searchInput() {
            this.$store.dispatch('fetchPokemonById', this.inputText)
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    width: 350px;
    height: 100px;
    background-color: red;

    .search-options {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .search-input {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
}
</style>
