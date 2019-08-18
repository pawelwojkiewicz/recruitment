<template>
<div class="basket-panel">
    <div class="contact">
        <font-awesome-icon icon="address-book" class="contact-icon" />
        <span class="contact-text">Contact</span>
        <span class="contact-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum arcu vitae nisi pharetra.</span>
    </div>
    <div class="cart">
        <font-awesome-icon icon="shopping-cart" class="cart-icon" />
        <span class="cart-text">Cart ({{this.cartQunatity}})</span>
        <ul class="cart-items">

            <transition-group name="slide-fade">
                <li class="cart-items-element" v-for="(product,index) in products" :key="index" v-show="product.bought">
                    {{product.productname}}
                    <font-awesome-icon icon="times" class="delete-element" @click="deleteProduct(index)" />
                </li>
            </transition-group>
        </ul>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations
} from 'vuex';
export default {
    name: 'Cart',
    computed: {
        ...mapState([
            'products',
            'cartQunatity',
            'taskId'
        ])
    },
    methods: {
        ...mapActions([
            'getProducts'
        ]),
        deleteProduct(index) {
            this.$store.commit('deleteProduct', index);
        }
    },
}
</script>

<style lang="scss" scoped>
.basket-panel {
    color: $white;
    background: $light-blue;
    padding: 30px;

    .contact {
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        &-icon {
            order: 0;
            margin-right: 20px;
            font-size: 25px;
        }

        &-text {
            font-weight: 500;
        }

        &-paragraph {
            font-size: 13px;
            width: 100%;
            line-height: 20px;
            margin-top: 20px;
        }

    }

    .cart {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        &-icon {
            order: 0;
            margin-right: 20px;
            font-size: 25px;
        }

        &-text {
            font-weight: 500;
        }

        &-items {
            padding: 0;
            margin: 20px 0px 0;
            width: 100%;
            min-height: 150px;
            border: 1px dashed #fff;

            &-element {
                margin: 10px;
                background: $dark-blue;
                padding: 10px;
                display: flex;
                justify-content: space-between;

                .delete-element {
                    &:hover {
                        cursor: pointer;
                    }

                }
            }
        }
    }
}

@media screen and (min-width: $tabletPortrait) {
    .basket-panel {
        width: 30%;
    }
}

@media screen and (min-width: $desktop) {
    .basket-panel {
        width: 17%;
    }
}
</style>
