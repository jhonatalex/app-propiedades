import { createRouter, createWebHistory} from "vue-router";
import  DepartmentsList  from '../views/DepartmentsList.vue'
import  DepartmentDetail  from '../views/DepartmentDetail.vue'

const routes = [
    {
        path:'/',
        name:'DepartmentsList',
        component:DepartmentsList
    },
    {
        path:'/list',
        name:'DepartmentsList',
        component:DepartmentsList
    },
    {
        path:'/departament/:id',
        name:'DepartmentDetail',
        component:DepartmentDetail,
        props:true
    }, 
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound404',
        component: () => import('../views/DepartmentsList.vue')
    }

];

    const router = createRouter({
        history: createWebHistory(),
        routes
    });
  
  export default router;