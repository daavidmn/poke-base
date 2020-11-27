<template>
    <div class="home-container">
        <div class="banner">
            <img id="logo" alt="PokeBase logo" src="@/assets/logo.png" />
            <h1>{{ fixedText.logoLabel }}</h1>
        </div>
        <div class="search-box">
            <SearchBox />
        </div>
        <div class="result-list">
            <ResultList />
        </div>
    </div>
</template>

<script>
import { homeText } from '@/consts/fixedText'
import SearchBox from '@/components/SearchBox.vue'
import ResultList from '@/components/ResultList.vue'

export default {
    name: 'Home',
    components: {
        SearchBox,
        ResultList
    },
    data() {
        return {
            fixedText: {}
        }
    },
    created() {
        this.fixedText = homeText
    }
}
</script>

<style scoped lang="scss">
.home-container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    .banner {
        height: 50vh;
        max-height: 100%;
        padding: 0px 70px 10vh;

        // background-color: #5d81b5;
        background-color: #5d81b5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        #logo {
            width: 90%;
        }

        @media only screen and (min-width: 750px) {
            #logo {
                width: 70%;
            }
        }

        h1 {
            color: white;
            font-size: 1.8vw;
        }
    }

    .search-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .result-list {
        padding: 0px 70px;
    }
}
</style>
