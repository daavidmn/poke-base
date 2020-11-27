<template>
    <div class="details-container">
        <button @click="checkJson()" />
        <img class="artwork-sprite" :alt="`${getPokemonData.name} sprite`" :src="getOfficialSprite().front_default" />
        <ul>
            <li>ID: {{ getPokemonData.id }}</li>
            <li>NOME: {{ getPokemonData.name }}</li>
            <li>
                STATS:
                <ul v-for="(stat, index) in getPokemonData.stats" :key="index">
                    <li>{{ stat.stat.name }}: {{ stat.base_stat }}</li>
                </ul>
            </li>
            <li>
                TIPOS:
                <ul v-for="(type, index) in getPokemonData.types" :key="index">
                    <li>{{ type.type.name }}</li>
                </ul>
            </li>

            <li>
                HABILIDADES:
                <ul v-for="(ability, index) in getPokemonData.abilities" :key="index">
                    <li>{{ ability.ability.name }}</li>
                </ul>
            </li>

            <li>
                GOLPES:
                <ul v-for="(move, index) in getPokemonData.moves" :key="index">
                    <li>{{ move.move.name }}</li>
                </ul>
            </li>

            <div v-for="(sprite, index) in dataSprites" :key="index">
                <img :src="sprite" />
            </div>
            <!--<li>{{ getPokemonData.sprites }}</li>
            <li>{{ getPokemonData.abilities }}</li>
            <li>{{ getPokemonData.moves }}</li>-->
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: '1'
        }
    },
    data() {
        return {
            dataSprites: ''
        }
    },
    created() {
        this.$store.dispatch('fetchPokemonByIdOrName', this.id)
    },
    computed: {
        getPokemonData() {
            return this.$store.getters.getPokemonByIdOrName
        }
    },
    watch: {
        getPokemonData(newData, oldData) {
            this.dataSprites = JSON.parse(JSON.stringify(newData.sprites))
            delete this.dataSprites.other
            delete this.dataSprites.versions
        }
    },
    methods: {
        getOfficialSprite() {
            const spriteUrl = this.getPokemonData.sprites.other['official-artwork']
            return spriteUrl
        },
        checkJson() {
            console.log(this.getPokemonData)
            console.log(this.dataSprites)
        }
    }
}
</script>

<style lang="scss" scoped>
.details-container {
    padding: 0px 70px;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .artwork-sprite {
        max-height: 200px;
    }
}
</style>
