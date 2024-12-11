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
    actions: {
        async fetchProperties ({ commit }) {
          try {
            const response = await axios.get('https://apimocha.com/api-propiedades/list');
            console.log('Datos recibidos:', response.data); // Verificar los datos
      
            // Asegurarnos de que las propiedades tengan la estructura esperada
            if (response.data && response.data.propiedades) {
              commit('SET_PROPERTIES', response.data.propiedades);
            } else {
              console.error('No se encontraron propiedades en la respuesta.');
            }
          } catch (e) {
            console.log('Error en fetch:', e);
          }
        }
      },
      
    modules: {}

})