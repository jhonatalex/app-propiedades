<template>
    <div class="property-list-container">
      <h2>Lista de Propiedades</h2>
      <div v-if="departments.length" class="property-grid">
        <PropertyCard
          v-for="property in departments"
          :key="property.id"
          :property="property"
          class="property-card"
        />
      </div>
      <div v-else>
        <p>No hay propiedades disponibles.</p>
      </div>
    </div>

</template>

<script>
 import { mapState } from 'vuex'
 
  import PropertyCard from '../components/PropertyCard.vue';
  
  export default {
    name: 'DepartmentsList',
    components: {
      PropertyCard
    },
    computed: {
      ...mapState(['departments'])
    },
    created() {
      this.$store.dispatch('fetchProperties');
    }
  };


</script>

<style scoped>

/* Fondo degradado y contenedor centralizado */
.property-list-container {
    text-align: center;
    padding: 20px;
    background: linear-gradient(45deg, #ff6b6b, #f7b7b7); /* Fondo degradado */
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  /* Cuadrícula de propiedades */
  .property-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Cuadrícula con columnas adaptativas */
    gap: 20px; /* Espacio entre las tarjetas */
    margin-top: 20px;
  }
  
  /* Estilo para cada tarjeta de propiedad */
  .property-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.3s ease-in-out;
  }
  
  /* Efecto hover al pasar el mouse sobre las tarjetas */
  .property-card:hover {
    transform: translateY(-5px);
  }
</style>