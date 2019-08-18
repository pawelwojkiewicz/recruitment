<template>

<div class="home">
    <Cart></Cart>
    <Products></Products>
</div>

</template>

<script>
import Cart from '@/components/Cart.vue';
import Products from '@/components/Products.vue';

export default {
    name: 'home',
    components: {
        Cart,
        Products,
    },

};
</script>

<style lang="scss" scoped>

@media screen and (min-width: $tabletPortrait) {
    .home {
        display: flex;
    }
}

@media screen and (min-width: $desktop) {
    .home {
        padding: 80px ;
        max-width: 1300px;
        margin: 0 auto;
        align-items: flex-start;
        justify-content: space-between;
    }
}

</style>
