<template>
    <header class="p-3 mb-3 border-bottom">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                </a>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li
                        v-for="link in links" 
                        :key="link" 
                    >
                        <router-link :to="{name: link}" :class="['nav-link px-2', { 'link-secondary': route.name == link }, { 'link-dark' : route.name != link}]">
                            {{ link }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    
    
    
</template>

<script>
import {onMounted, ref} from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
    setup(){
        const route = useRoute()
        const links = ref([
            'Dashboard',
            'Users',
            'Associates'
        ]);

        return{
            links,
            route
        }
    }
}
</script>