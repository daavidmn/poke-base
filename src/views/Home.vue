<template>
    <div>
        <div class="banner">
            <img alt="Vue logo" src="../assets/logo.png" />
            <div>Seu database de pokemons</div>
        </div>
        <section class="search-box">
            <SearchBox />
        </section>
        <ResultList msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
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
    height: 100vh;
    max-height: 100%;
    padding: 0px 100px;
    // background-color: #5d81b5;
    background-color: #5d81b5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.search-box {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
