<template>
    <h1>Detalle Departamento</h1>

    <div v-if="property">
        <h2>{{ property.nombre }}</h2>
        <img :src="property.imagen" alt="iamgen -propiedad">
        <p >{{ property.descripcion }}</p>
        <router-link to="/">Volver a la lista</router-link> 

    </div>
    <div v-else>
        <p>Propiedad no encontrada</p>
    </div>

</template>

<script>


import {mapState} from 'vuex';

export default {
    name:'DepartmentDetail',
    props :['id'],

    computed: {
        ...mapState({
            property: state => state.departments.find(element => Number(element.id) == Number(this.id))
        })
    }
};

</script>

<style scoped></style>