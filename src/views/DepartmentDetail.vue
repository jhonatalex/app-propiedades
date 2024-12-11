<template>
    <div v-if="property" class="property-detail">
      <h2>{{ property.nombre }}</h2>
      <img :src="property.imagen" alt="Imagen de la propiedad" />
      <p>{{ property.descripcion }}</p>
      <p>{{ property.ubicacion }}</p>
    </div>
    <div v-else>
      <p>Propiedad no encontrada.</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'DepartmentDetail',
    props: ['id'],
    data() {
      return {
        property: null // Inicia la propiedad como null
      };
    },
    created() {
      console.log('Component Created with ID:', this.id);
  
      // Convierte el id a un número
      const propId = Number(this.id);
      console.log('Searching for property with ID:', propId);
  
      // Encuentra la propiedad en el estado de Vuex
      this.property = this.$store.state.departments.find(p => p.id === propId);
      
      console.log('Found Property:', this.property);
    }
  };
  </script>
  
  <style scoped>
  .property-detail {
    text-align: center;
    padding: 20px;
  }
  </style>
  