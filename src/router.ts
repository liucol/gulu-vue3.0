import {createWebHashHistory, createRouter} from 'vue-router';

import Home from "./views/Home.vue";
import Doc from './views/Doc.vue';
import DocDemo from './components/docDemo.vue';
import SwitchDemo from './components/switchDemo.vue';
import ButtonDemo from './components/buttonDemo.vue';
import DialogDemo from './components/dialogDemo.vue';
import TabsDemo from './components/tabsDemo.vue';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc, children: [
                {path: '', component: DocDemo},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}
            ]
        }
    ]
});

export {router};