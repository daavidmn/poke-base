<template>
    <div>
        <div class="banner">
            <img id="logo" alt="PokeBase logo" src="@/assets/logo.png" />
            <h1>O seu database Pokémon!</h1>
        </div>
        <section class="search-box">
            <SearchBox />
        </section>
        <section class="result-list">
            <ResultList />
        </section>
    </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import ResultList from '@/components/ResultList.vue'

export default {
    name: 'Home',
    components: {
        SearchBox,
        ResultList
    }
}
</script>

<style scoped lang="scss">
.banner {
    height: 60vh;
    max-height: 100%;
    padding: 0px 70px;
    // background-color: #5d81b5;
    background-color: #5d81b5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #logo {
        width: 80%;
    }

    h1 {
        color: white;
        font-size: 2vw;
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
</style>
