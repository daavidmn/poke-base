<template>
    <div class="item-container">
        <div class="content">
            <img v-if="pokemonImageSrc != ''" class="pokemon-default-sprite" :alt="`${pokemonName} sprite`" :src="getImageSrc(pokemonImageSrc)" />
            <div class="text-info">
                <div>{{ fixedText.idLabel }} {{ pokemonId }}</div>
                <div>{{ fixedText.nameLabel }} {{ pokemonName }}</div>
                <router-link :to="`/details/${pokemonId}`">{{ fixedText.detailsLabel }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { resultItemText } from '@/consts/fixedText'
import spriteMissing from '@/assets/sprite-missing.png'

export default {
    name: 'ResultItem',
    props: {
        pokemonImageSrc: {
            type: String,
            default: ''
        },
        pokemonId: {
            type: Number,
            default: 0
        },
        pokemonName: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            fixedText: {}
        }
    },
    created() {
        this.fixedText = resultItemText
    },
    methods: {
        getImageSrc(src) {
            return src === null ? spriteMissing : src
        }
    }
}
</script>

<style lang="scss" scoped>
.item-container {
    width: 300px;
    height: 115px;
    margin: 10px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    $outline-width: 6px;
    position: relative;
    padding: 10px;
    z-index: 50;

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
}

.content {
    display: flex;
    align-items: center;
    z-index: 600;

    .pokemon-default-sprite {
        padding-right: 10px;
        margin: 10px;
        border-right: 1px solid black;
    }

    .text-info {
        margin: 10px;

        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-family: 'VRC OSD Mono', Times, serif;
    }
}
</style>
