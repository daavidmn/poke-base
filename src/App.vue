<template>
    <div id="app">
        <header class="header">
            <div id="header-items">
                <div id="logo">LOGO</div>
                <div id="nav">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link>
                </div>
            </div>
        </header>
        <router-view id="router-view" />
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.header {
    position: fixed;
    top: 60px;
    width: 100%;
    z-index: 2500;
    align-items: center;

    #header-items {
        padding: 0px 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        #nav {
            a {
                font-weight: bold;
                color: #2c3e50;

                &.router-link-exact-active {
                    color: #42b983;
                }
            }
        }
    }
}
</style>
