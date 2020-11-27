<template>
    <div class="container">
        <div class="search-options">
            <div class="search-item" @mouseover="hoverItem = 'name'">
                <img v-show="hoverItem === 'name'" :src="mySVG" class="item-selector" />
                <div class="text-selector">Nome/Id</div>
            </div>
            <div class="search-item" @mouseover="hoverItem = 'type'">
                <img v-show="hoverItem === 'type'" :src="mySVG" class="item-selector" />
                <div class="text-selector">Tipo</div>
            </div>
            <div class="search-item" @mouseover="hoverItem = 'ability'">
                <img v-show="hoverItem === 'ability'" :src="mySVG" class="item-selector" />
                <div class="text-selector">Habilidade</div>
            </div>
        </div>
        <div class="search-data">
            <input class="search-input" type="text" v-model="inputText" placeholder="Escreva um nome ou ID!" @keyup.enter="searchInput(hoverItem)" />
            <button class="search-button" type="submit" @click="searchInput(hoverItem)">LUPA</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBox',
    data() {
        return {
            inputText: '',
            hoverItem: 'name',
            hover: true,
            mySVG: require('@/assets/selector.svg')
        }
    },
    methods: {
        searchInput(value) {
            switch (value) {
                case 'name':
                    this.$store.dispatch('fetchPokemonIdOrNameList', this.inputText)
                    break
                case 'type':
                    this.$store.dispatch('fetchPokemonTypeList', this.inputText)
                    break
                case 'ability':
                    this.$store.dispatch('fetchPokemonAbilityList', this.inputText)
                    break
                default:
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
        font-size: 2.5vw;

        .search-item {
            width: 30%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;
            cursor: pointer;

            .item-selector {
                width: 10%;
                margin-right: 5%;
            }

            .text-selector {
            }
        }
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
