import Vue from 'vue';
import Vuex from 'vuex';
//import firebase from 'firebase';
//import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listOfWords: [],
    }
});
