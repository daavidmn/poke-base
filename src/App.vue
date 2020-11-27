<template>
    <div id="app">
        <header class="header">
            <div id="header-items">
                <router-link to="/">
                    <img id="logo" alt="Minimized PokeBase logo" :src="getLogoImage()" />
                </router-link>

                <div id="nav">
                    <router-link to="/">{{ fixedText.headerHomeLabel }}</router-link>
                    <!-- <router-link to="/about">{{ fixedText.headerAboutLabel }}</router-link> -->
                </div>
            </div>
        </header>
        <router-view id="router-view" />
        <footer class="footer">
            {{ fixedText.footerLabel }}
            <a class="icon" href="https://github.com/daavidmn">
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a class="icon" href="https://www.linkedin.com/in/daavidmn/">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
        </footer>
    </div>
</template>

<script>
import { appText } from '@/consts/fixedText'
import logoMin from '@/assets/logo-min.png'

export default {
    data() {
        return {
            fixedText: {}
        }
    },
    created() {
        this.fixedText = appText
    },
    methods: {
        getLogoImage() {
            return logoMin
        }
    }
}
</script>

<style lang="scss">
$font-title: 'Press Start 2P', Times, serif;
$font-default: 'VRC OSD Mono', Times, serif;

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #cbd8eb;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'VRC OSD Mono', Times, serif;
}

.header {
    padding: 30px 0;
    background-color: #5d81b5;
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
                color: white;
                text-decoration-line: none;

                &:hover,
                &:focus {
                    color: #bb4343;
                }

                &.router-link-exact-active {
                    color: white;
                }
            }
        }
    }
}

.footer {
    background-color: #5d81b5;
    width: 100%;
    height: 40px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;

    .icon {
        margin-left: 15px;
        color: white;
    }
}
</style>
