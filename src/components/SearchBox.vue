<template>
    <div class="container">
        <div class="search-options">
            <div class="search-item" @mouseover="hoverItem = 'name'">
                <img v-show="hoverItem === 'name'" :src="mySVG" class="item-selector" />
                <div class="text-selector">{{ fixedText.nameIdLabel }}</div>
            </div>
            <div class="search-item" @mouseover="hoverItem = 'type'">
                <img v-show="hoverItem === 'type'" :src="mySVG" class="item-selector" />
                <div class="text-selector">{{ fixedText.typeLabel }}</div>
            </div>
            <div class="search-item" @mouseover="hoverItem = 'ability'">
                <img v-show="hoverItem === 'ability'" :src="mySVG" class="item-selector" />
                <div class="text-selector">{{ fixedText.abilityLabel }}</div>
            </div>
        </div>
        <div class="search-data">
            <input class="search-input" type="text" v-model="inputText" :placeholder="fixedText.inputPlaceholderText" @keyup.enter="searchInput(hoverItem)" />
            <button class="search-button" @click="searchInput(hoverItem)">
                <font-awesome-icon icon="search" />
            </button>
        </div>
    </div>
</template>

<script>
import { searchBoxText } from '@/consts/fixedText'

export default {
    name: 'SearchBox',
    data() {
        return {
            fixedText: {},
            inputText: '',
            hoverItem: 'name',
            hover: true,
            mySVG: require('@/assets/selector.svg')
        }
    },
    created() {
        this.fixedText = searchBoxText
    },
    methods: {
        searchInput(value) {
            if (this.inputText !== '') {
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
        border-bottom: 3px solid rgb(196, 196, 196);
        padding-bottom: 10px;

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
        }
    }

    @media only screen and (max-width: 750px) {
        .search-options {
            font-size: 15px;
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
        }

        .search-button {
            padding: 0px;
            border: 5px solid #000;
            height: 65px;
            width: 10%;
            cursor: pointer;
            background-color: #5d81b5;
            color: black;
        }
    }

    @media only screen and (max-width: 750px) {
        .search-data {
            font-size: 15px;
        }
    }
}
</style>
