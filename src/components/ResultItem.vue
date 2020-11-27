<template>
    <div class="item-container">
        <div class="content">
            <img v-if="pokemonImageSrc != ''" class="pokemon-default-sprite" :alt="`${pokemonName} sprite`" :src="pokemonImageSrc" />
            <div class="text-info">
                <div>Id: {{ pokemonId }}</div>
                <div>Nome: {{ pokemonName }}</div>
                <router-link :to="`/details/${pokemonId}`">Detalhes</router-link>
            </div>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
.item-container {
    width: 300px;
    height: 115px;
    margin: 10px;
    background-color: white;

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
    justify-content: center;
    align-items: center;

    .text-info {
        z-index: 600;
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-family: 'VRC OSD Mono', Times, serif;
    }
}
</style>
