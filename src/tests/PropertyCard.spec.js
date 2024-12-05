import { shallowMount } from '@vue/test-utils';
import PropertyCard from '@/components/PropertyCard.vue';
import { describe, it, expect } from 'vitest';

describe('PropertyCard.vue', () => {
  it('renders property details correctly', async () => {
    const propert = {
      id: 1,
      nombre: 'Apartamento Girasol',
      tipo: 'depto',
      ubicacion: 'Santiago, Chile',
      descripcion: 'Un hermoso departamento ubicado en el centro de la ciudad.',
      imagen: 'https://img.holidu.com/images/58eb6d27-9f73-4a9f-a8aa-3e0f57facd40/l.jpg',
      estado: 'disponible'
    };

    const wrapper = shallowMount(PropertyCard, {
      propsData: { propert }
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.find('h2').text()).toBe('Apartamento Girasol');
    expect(wrapper.find('p').text()).toBe('Un hermoso departamento ubicado en el centro de la ciudad.');
    expect(wrapper.find('img').attributes('src')).toBe('https://img.holidu.com/images/58eb6d27-9f73-4a9f-a8aa-3e0f57facd40/l.jpg');
  });

});
