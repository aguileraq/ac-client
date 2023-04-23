<template>
    
    <v-btn
        v-for="link in links" 
        :key="link" 
        :to="{name: link}"
        variant="text"
        :active="link == route.name"
        class="me-2"
    >
        {{ link }}
    </v-btn>
    
    
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