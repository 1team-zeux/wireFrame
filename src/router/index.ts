import { createRouter, createWebHistory } from 'vue-router'
import SlaUpload from '../views/SlaUpload.vue'
import SlaWizard from '../views/SlaWizard.vue'
import TopologySelect from '../views/TopologySelect.vue'
import PolicyConfig from '../views/PolicyConfig.vue'
import TerraformApply from '../views/TerraformApply.vue'
import CustomerDashboard from '../views/CustomerDashboard.vue'
import CustomerSlo from '../views/CustomerSlo.vue'
import ServiceMonitor from '../views/ServiceMonitor.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/page1' },
    { path: '/page1', component: SlaUpload },
    { path: '/page2', component: SlaWizard },
    { path: '/page3', component: TopologySelect },
    { path: '/page4', component: PolicyConfig },
    { path: '/page5', component: TerraformApply },
    { path: '/page6', component: CustomerDashboard },
    { path: '/page7', component: CustomerSlo },
    { path: '/page8', component: ServiceMonitor },
  ],
})

export default router
