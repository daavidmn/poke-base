<template>
    <div class="details-container">
        <div class="details-box">
            <h1>{{ getPokemonData.name }}</h1>
            <div class="details-content">
                <img class="big-sprite" :alt="`${getPokemonData.name} sprite`" :src="getOfficialSprite().front_default" />
                <table>
                    <tbody>
                        <tr>
                            <th>
                                {{ fixedText.idLabel }}
                            </th>
                            <td>
                                {{ getPokemonData.id }}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                {{ fixedText.nameLabel }}
                            </th>
                            <td>
                                {{ getPokemonData.name }}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                {{ fixedText.statsLabel }}
                            </th>
                            <td>
                                <div v-for="(stat, index) in getPokemonData.stats" :key="index">
                                    <div>{{ stat.stat.name }}: {{ stat.base_stat }}</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                {{ fixedText.typesLabel }}
                            </th>
                            <td>
                                <div v-for="(type, index) in getPokemonData.types" :key="index">
                                    <div>{{ type.type.name }}</div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                {{ fixedText.abilitiesLabel }}
                            </th>
                            <td>
                                <div v-for="(ability, index) in getPokemonData.abilities" :key="index">
                                    <div>{{ ability.ability.name }}</div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                {{ fixedText.movesLabel }}
                            </th>
                            <td>
                                <div class="moves-list">
                                    <div class="move" v-for="(move, index) in getPokemonData.moves" :key="index">
                                        <div>{{ move.move.name }}</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="sprite-box">
                    <div>
                        {{ fixedText.spritesLabel }}
                    </div>
                    <div class="sprite-list">
                        <div class="small-sprite" v-for="(sprite, index) in dataSprites" :key="index">
                            <img :src="sprite" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-link id="link-home" :to="'/'">
            <h2>{{ fixedText.backButton }}</h2>
        </router-link>
    </div>
</template>

<script>
import { pokeDetailsText } from '@/consts/fixedText'

export default {
    props: {
        id: {
            type: String,
            default: '1'
        }
    },
    data() {
        return {
            fixedText: {},
            dataSprites: ''
        }
    },
    created() {
        this.fixedText = pokeDetailsText
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
            const spriteUrl = this.getPokemonData.sprites.other['official-artwork'] // hyphen do not allow to data bind direcly
            return spriteUrl
        }
    }
}
</script>

<style lang="scss" scoped>
.details-container {
    margin: 5% 0px;
    padding: 0px 70px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #cbd8eb;

    .details-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80vw;
        background-color: white;

        position: relative;
        padding: 20px;
        z-index: 100;

        $outline-width: 6px;
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

        .details-content {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
            z-index: 200;

            h1 {
                font-size: 3em;
            }

            .big-sprite {
                margin: 30px;
                display: block;
                max-width: 75vw;
                max-height: 300px;
                width: auto;
                height: auto;
            }

            table {
                margin: 10px;
                width: 80%;
                flex-direction: column;
                justify-content: flex-start;
                border-collapse: collapse;

                tr {
                    border: 0px solid black;
                    border-collapse: collapse;

                    th,
                    td {
                        padding: 4px 0px;
                        border-width: 5px 0;
                        border-style: solid;
                        border-color: black;
                    }

                    th {
                        padding: 8px;
                        background-color: rgb(238, 238, 238);
                        font-weight: 100;
                    }

                    td {
                        padding: 8px;
                        background-color: rgb(248, 248, 248);
                    }
                }
            }

            .moves-list {
                display: flex;
                flex-wrap: wrap;

                .move {
                    border-width: 1px;
                    border-style: solid;
                    border-color: grey;
                    margin: 5px 2px;
                    padding: 3px;
                }
            }

            .sprite-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                max-width: 100vw;
                .sprite-list {
                    display: flex;
                    flex-wrap: wrap;

                    .small-sprite {
                    }
                }
            }
        }
    }

    #link-home {
        margin-top: 50px;
    }
}
</style>
