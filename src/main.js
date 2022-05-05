import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/mdc-dark-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import MyToolbar from '@/components/MyToolbar.vue';
import MySidebarmenu from '@/components/MySidebar.vue';
import DataPreview from '@/components/DataPreview.vue';

import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Menubar from "primevue/menubar";
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import Menu from 'primevue/menu';
import InputText from 'primevue/inputtext';
import Toolbar from 'primevue/toolbar';
import ScrollPanel from 'primevue/scrollpanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';

import 'vue-sparql-editor/dist/style.css'
import VueSparqlEditor from 'vue-sparql-editor';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(VueAxios, axios)

app.component('MyToolbar', MyToolbar)
app.component('MySidebarmenu', MySidebarmenu)
app.component('DataPreview', DataPreview)

app.component('PrimeVueSplitter', Splitter)
app.component('PrimeVueSplitterPanel', SplitterPanel)
app.component('PrimeVueMenubar', Menubar)
app.component('PrimeVueButton', Button)
app.component('PrimeVueSidebar', Sidebar)
app.component('PrimeVueMenu', Menu)
app.component('PrimeVueInputText', InputText)
app.component('PrimeVueToolbar', Toolbar)
app.component('PrimeVueScrollPanel', ScrollPanel)
app.component('PrimeVueDataTable', DataTable)
app.component('PrimeVueColumn', Column)
app.component('PrimeVueDialog', Dialog)
app.use(VueSparqlEditor)

app.mount('#app')

