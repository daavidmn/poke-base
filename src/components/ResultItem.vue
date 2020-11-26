<template>
    <div class="item-container">
        <div class="content">
            <img class="pokemon-default-sprite" :id="'sprite' + keyId" alt="PokeBase logo" :src="pokemonImageSrc" />
            <div class="text-info">
                <div>Número: {{ pokemonId }}</div>
                <div>Nome: {{ pokemonName }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultItem',
    props: {
        keyId: {
            type: Number,
            default: 0
        },
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
    background-color: white;
    width: 260px;
    height: 115px;
    max-width: 400px;
    max-height: 200px;

    margin: 10px;

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
    z-index: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    // font-family: 'Press Start 2P', Times, serif;
    font-family: 'VRC OSD Mono', Times, serif;

    .text-info {
        z-index: 600;
        display: flex;
        flex-direction: column;
    }
}
</style>
