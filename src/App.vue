<template>
    <div id="app">
        <header class="header">
            <div id="header-items">
                <router-link to="/">
                    <img id="logo" alt="Minimized PokeBase logo" src="@/assets/logo-min.png" />
                </router-link>

                <div id="nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                </div>
            </div>
        </header>
        <router-view id="router-view" />
        <footer class="footer">Developer: David Macedo</footer>
    </div>
</template>

<style lang="scss">
$font-title: 'Press Start 2P', Times, serif;
$font-default: 'VRC OSD Mono', Times, serif;

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'VRC OSD Mono', Times, serif;
}

.header {
    position: fixed;
    top: 60px;
    width: 100%;
    z-index: 2500;
    align-items: center;

    #logo {
        width: 30px;
    }

    #header-items {
        padding: 0px 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        #nav {
            width: 200px;
            display: flex;
            justify-content: space-around;

            a {
                font-weight: bold;
                color: #000;
                text-decoration-line: none;

                &:hover,
                &:focus {
                    color: #bb4343;
                }

                &.router-link-exact-active {
                    color: #000;
                }
            }
        }
    }
}

.footer {
    background-color: black;
    width: 100%;
    height: 30px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
}
</style>
