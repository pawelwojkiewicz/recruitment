<template>
<div id="app">
    <header class="header">
        <div class="page-wrap">
            <router-link to="/"><img src="@/assets/logo.png" class="header-logo" alt="Logo" @click="closeModal"></router-link>
            <nav class="header-navigation">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
                <div class="header-search" :class="{active : searchActive}">
                    <font-awesome-icon icon="search" class="header-serach--icon" @click="openSearch" />
                    <input type="text" class="header-search--input" placeholder="Search...">
                </div>
            </nav>
        </div>
    </header>
    <keep-alive>
        <router-view />
    </keep-alive>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import {
    mapMutations
} from 'vuex';
export default {

    computed: {
        ...mapState([
            'searchActive'
        ])
    },
    methods: {
        ...mapMutations([
            'openSearch',
            'closeModal'
        ])
    },
}
</script>

<style lang="scss">
body {
    background: $background;
}

#app {
    font-family: $main-font;
    font-weight: $main-weight;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.header {
    height: 70px;
    width: 100%;
    border-bottom: 1px solid $gray;

    .page-wrap {
        max-width: 1300px;
        margin: 0 auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-logo {
        width: 75px;
        cursor: pointer;
    }

    &-navigation {
        display: flex;
        align-items: center;

        a {
            margin-right: 15px;
            color: $dark-text;
            font-size: 14px;
            font-weight: 500;

            &.router-link-exact-active {
                color: $light-blue;
            }
        }
    }

    &-search {
        background: $search;
        position: relative;
        top: -3px;
        height: 68px;
        width: 56px;
        color: $black;
        transition: width .3s;
        display: flex;
        justify-content: center;
        align-items: center;

        &.active {
            position: absolute;
            top: 0;
            padding-left: 10px;
            justify-content: flex-start;
            right: 0;
            width: 200px;

            input {
                display: block;
            }
        }

        .header-serach--icon {
            &:hover {
                cursor: pointer;
            }
        }

        &--input {
            display: none;
            background: transparent;
            margin: 0 10px;
            width: 100%;
            border: none;
            border-bottom: 1px solid $black;

            &:focus {
                outline: none;
            }
        }
    }
}

@media screen and (min-width: $mobileLandScape) {
    .header {
        &-navigation {
            margin-right: 20px;
        }

        &-search {
            width: 75px;

            &.active {
                right: 20px;
                width: 260px;
            }

            .header-serach--icon {
                font-size: 20px;
            }

            &--input {
                padding: 5px;
            }
        }

    }
}

@media screen and (min-width: $tabletPortrait) {
    .header {
        &-navigation {
            a {
                margin-right: 40px;
            }
        }
    }
}

@media screen and (min-width: $desktop) {
    .header {
        height: 90px;
        &-navigation {
            margin-right: 0;
        }

        &-search {
             height: 93px;
            .header-serach--icon {
                transition: transform .3s;

                &:hover {
                    transform: scale(1.15)
                }
            }

            &.active {
                position: relative;
                top: -3px;
            }
        }
    }
}
</style>
