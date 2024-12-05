<template>
  <div class="property-card">
    <img :src="propert.imagen" alt="Property Image" class="property-card__image" />
    <div class="property-card__details">
      <h3 class="property-card__title">{{ propert.nombre }}</h3>
      <p class="property-card__description">{{ propert.descripcion }}</p>
      <p class="property-card__location">{{ propert.ubicacion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propert: Object
  }
};
</script>

<style scoped>
.property-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.property-card:hover {
  transform: scale(1.05);
}

.property-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
}

.property-card__details {
  padding: 15px;
}

.property-card__title {
  font-size: 1.2rem;
  font-weight: bold;
}

.property-card__description {
  font-size: 1rem;
  color: #555;
}

.property-card__location {
  font-size: 0.9rem;
  color: #777;
  margin-top: 10px;
}
</style>
