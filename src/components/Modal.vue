<template>
    <div class="modal">
        <font-awesome-icon icon="times" class="modal-close" @click="closeModal" />
        <img src="@/assets/modal-img.png" class="modal-img" alt="Modal Picture">
        <span class="modal-title">{{product.productname}}</span>
        <span class="modal-description">{{product.longdesc}} </span>
        <button class="modal-btn" @click="buyProduct" :class="{'modal-btn--added': product.bought}">
            <span class="modal-btn-buy">Add To Cart</span>
            <span class="modal-btn-bought">Added</span>
        </button>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
    name: 'Modal',

      computed: {
        ...mapState([
            'product',
            'productBought',
        ])
    },
    methods: {
        ...mapMutations([
            'closeModal',
            'buyProduct'
        ]),
        buyProduct() {
            const modalBtn = document.querySelector('.modal-btn')
            if(modalBtn.classList.contains('modal-btn--added')) {
                return;
            } else {
                this.$store.commit('buyProduct');
            }
        }
    },
  
}
</script>

<style lang="scss" scoped>



.modal {
    position: fixed;
    top: 50%; 
    left: 50%;
    background: $light-blue;
    width: 100%;
    color: $white;
    height: 100%;
    z-index: 100;
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
    flex-direction: column; 
    &-close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 40px;
        &:hover {
            cursor: pointer;
        }
    }
    &-img {
        width: 100%;
        transition: .3s;
        height: auto;
        min-height: 175px;
    }
    &-title {
        font-weight: 500;
        font-size: 20px;
        margin: 20px 0 15px 0;
    }
    &-description {
        padding: 0 10px;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
    }
    &-btn {
        border: 1px solid $accent;
        background: $accent;
        font-size: 18px;
        font-weight: 700;
        color: $white;
        width: 250px;
        height: 50px;
        margin: 30px 0 30px 0;
        overflow: hidden;
        position: relative;
        &:hover {
            cursor: pointer;
        }
        &-bought {
            position: absolute;
            transform: translate(-50%,-50%);
            left: 50%;
            top: 150%;  
            transition: .3s;
        }
        &-buy {
            transition: .3s;
            position: absolute;
            transform: translate(-50%,-50%);
            left: 50%;
            top: 50%;
        }
        &--added {
            background: $bought;
            border: 1px solid $bought;
            .modal-btn-buy {
               top: -100%;
            }
            .modal-btn-bought {
                top: 50%;
            }
        }
        &:focus {
            outline: none;
        }
    }
}

@media screen and (min-width: $mobileLandScape) {
    .modal {
        height: 100%;
            &-img {
                width: 48%;
            }
    }
}


@media screen and (min-width: $tabletPortrait) {
  .modal {
      position: absolute;
      top: -1px;
      left: 0;
      transform: none;
      height: 100%;
      justify-content: flex-start;
      &-img {
          width: 100%;
      }
     
  }
}

@media screen and (min-width: $desktop) {
   .modal {
       height: 95%;
       flex-wrap: wrap;
       align-items: flex-start;
       flex-direction: row;
       justify-content: space-between;
       &-title {
           margin: 0 0 0 30px;
           width: 60%;

       }
       &-description {
           width: 60%;
           text-align: left;
           margin-left: 30px;
           padding: 0;
       }
       &-btn {
           margin: 0 30px 0 0;
       }
      
       
   }
}
</style>