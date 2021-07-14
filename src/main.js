import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Sidebar from 'primevue/sidebar'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('Dialog', Dialog)
app.component('Button', Button)
app.component('Column', Column)
app.component('Sidebar', Sidebar)
app.component('DataTable', DataTable)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)

app.mount('#app')
