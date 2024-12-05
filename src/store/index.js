import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({

    state:{
        departments:[]
    },
    mutations:{
        SET_PROPERTIES(state,departments){
            state.departments = departments
        }
    },
    actions:{
        async fetchProperties ({commit}){

            try {

            const response = await axios.get('https://apimocha.com/api-propiedades/list')
            
            commit('SET_PROPERTIES',response.data.propiedades)


            }catch(e){
                console.log('Error en fech',e)

            }

        }
    },
    modules: {}

})