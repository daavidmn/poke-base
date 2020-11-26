<template>
    <div class="container">
        <div class="search-options">
            <div @click="selectedOption(1)">Nome/Id</div>
            <div @click="selectedOption(2)">Tipo</div>
            <div @click="selectedOption(3)">Habilidade</div>
        </div>
        <div class="search-data">
            <input class="search-input" type="text" v-model="inputText" placeholder="Escreva um nome ou ID!" />
            <button class="search-button" @click="searchInput(optionSelected)">LUPA</button>
        </div>
        {{ optionSelected }}
    </div>
</template>

<script>
export default {
    name: 'SearchBox',
    data() {
        return {
            inputText: '',
            optionSelected: 1
        }
    },
    methods: {
        searchInput(value) {
            switch (value) {
                case 1:
                    this.$store.dispatch('fetchPokemonIdOrNameList', this.inputText)
                    break
                case 2:
                    this.$store.dispatch('fetchPokemonTypeList', this.inputText)
                    break
                case 3:
                    this.$store.dispatch('fetchPokemonAbilityList', this.inputText)
                    break
                default:
                    break
            }
        },
        selectedOption(value) {
            switch (value) {
                case 1:
                    this.optionSelected = 1
                    break
                case 2:
                    this.optionSelected = 2
                    break
                case 3:
                    this.optionSelected = 3
                    break
                default:
                    this.optionSelected = 1
                    break
            }
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
        font-size: 2vw;
    }

    .search-data {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        z-index: 200;
        font-size: 2vw;

        .search-input {
            padding: 2px 5px;
            border: 5px solid #000;
            height: 50px;
            width: 60%;
            font-size: 2vw;
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
