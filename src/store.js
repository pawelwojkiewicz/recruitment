import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      searchActive : false,
      products: [],
      modal: false,
      product: [],
      modalId : '',
      taskId: '',
      cartQunatity: 0,
      loading: false,
  },
  mutations: {
      openSearch: (state) => {
        state.searchActive = !state.searchActive;
      },
      setProducts: ( state, products) => {
        state.products = products
      },
      openModal: (state,product) => {
        state.modal = true;
        state.product = product;
      },
      closeModal: (state) => {
        state.modal = false;
      },
      buyProduct: (state) => {
        state.product.bought = true;
        state.cartQunatity++
        Vue.set(state.products, state.modalId , state.products[state.modalId])
      },
      deleteProduct:(state,index) => {
        state.products[index].bought = false;
        state.cartQunatity--
      },
      isLoading:(state) => {
        state.loading = true;
      },
      loadingEnd:(state) => {
        state.loading = false;
      }
  },
  actions: {
    getProducts: (context) => {
      context.commit('isLoading');
      Vue.http.get(`https://recruitment-task-30c3e.firebaseio.com/products.json`).then(data => data.json()).then(function (data) {
      const products = data
      context.commit('loadingEnd')
      console.log(data);
      context.commit('setProducts', products);
    });
    },
  },
});
