<template>
    <v-app id="inspire">
        <v-app-bar flat>
            <v-container class="fill-height d-flex align-center">
                <Navbar />
            </v-container>
        </v-app-bar>
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>
                    <slot />
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Navbar from "../components/Navbar.vue";

    export default{
        components: {
            Navbar
        }
    }
</script>