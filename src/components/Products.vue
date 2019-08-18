<template>
<div class="products">
    <ul class="products-list">
        <li v-for="(product,index) in products" :key="index" class="product" @click="openModal(product,index)">
            <img src="@/assets/product-box-image.png" class="product-image" alt="Product Image">
            <span class="product-title">{{product.productname}}</span>
            <span class="product-short-text"> {{product.shortdesc}}</span>
        </li>
    </ul>
    <transition name="slide-fade">
        <Modal v-if="modal"></Modal>
        <div class="lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
    </transition>
</div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import {
    mapState,
    mapMutations
} from 'vuex';
import {
    mapActions
} from 'vuex';

export default {
    name: 'Products',
    components: {
        Modal
    },
    computed: {
        ...mapState([
            'products',
            'modal',
            'modalId',
            'loading'
        ])
    },
    methods: {
        ...mapActions([
            'getProducts',
        ]),
        openModal(product, index) {
            this.$store.commit('openModal', product);
            this.$store.state.modalId = index;
        }
    },

    created() {
        this.getProducts();
    },
}
</script>

<style lang="scss" scoped>



.products {
    overflow: hidden;
    padding: 10px 0;
    position: relative;
    bottom: 10px;
  
    &-list {
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .product {
            background: $white;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 30px;
            -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.44);
            -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.44);
            box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.44);
            transition: .2s ease-in;

            &:hover {
                cursor: pointer;
                transform: translateY(-2%)
                    
            }

            &-image {
                max-width: 100%;
                max-height: 100%;
                position: relative;
                bottom: 3px;
            }

            &-title {
                font-weight: 400;
                font-size: 18px;
                margin: 15px 10px 10px 10px;
                color: $dark-text;
            }

            &-short-text {
                margin: 10px 10px 20px 10px;
                color: $light-text;
                text-transform: capitalize;
                font-size: 12px;
            }

        }
    }
}

@media screen and (min-width: $mobileLandScape) {
    .products {
        &-list {
            .product {
                margin: 10px;
            }
        }
    }
}

@media screen and (min-width: $tabletPortrait) {
    .products {
        min-height: 705px;
        position: relative;
        width: 70%;

        &-list {
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .product {
                width: 200px;
            }
        }
    }
}

@media screen and (min-width: $desktop) {
    .products {
        width: 75%;

        &-list {
            justify-content: space-between;
            margin: 0;

            .product {
                width: 214px;
                margin: 0;
                margin-bottom: 50px;
            }
        }
    }
}
</style>
