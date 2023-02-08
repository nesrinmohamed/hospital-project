import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Admin from '../components/Admin.vue';
import PatientRecord from '../components/PatientRecord.vue'
import AddCenterCare from '../components/AddCenterCare'
import AddPatient from '../components/AddPatient'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },

  {
    path: '/patientrecord',
    name: 'patientrecord',
    component: PatientRecord
  },

  {
    path: '/addcentercare',
    name: 'addcentercare',
    component: AddCenterCare
  },
  
  {
    path: '/addpatient',
    name: 'addpatient',
    component: AddPatient
  },
  {
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
