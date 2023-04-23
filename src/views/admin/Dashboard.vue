<template>
    <Layout>
        <v-col>
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >
            </v-sheet>
        </v-col>
    </Layout>
    <!-- <v-app id="inspire">
        <v-app-bar flat>
            <v-container class="fill-height d-flex align-center">
                <Navbar />
  
                <v-spacer></v-spacer>
                
                <v-avatar
                    class="me-10-ms-4 d-flex align-end"
                    color="grey-darken-1"
                    size="32"
                ></v-avatar>
                v-responsive max-width="260">
                    <v-text-field
                    density="compact"
                    hide-details
                    variant="solo"
                    ></v-text-field>
                </v-responsive>
            </v-container>
        </v-app-bar>
  
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="2">
                        <v-sheet rounded="lg">
                            <v-list rounded="lg">
                            <v-list-item
                                v-for="n in 5"
                                :key="n"
                                link
                            >
                                <v-list-item-title>
                                List Item {{ n }}
                                </v-list-item-title>
                            </v-list-item>
            
                            <v-divider class="my-2"></v-divider>
            
                            <v-list-item
                                link
                                color="grey-lighten-4"
                            >
                                <v-list-item-title>
                                Refresh
                                </v-list-item-title>
                            </v-list-item>
                            </v-list>
                        </v-sheet>
                    </v-col>
        
                    <v-col>
                    <v-sheet
                        min-height="70vh"
                        rounded="lg"
                    >
                    </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app> -->
  </template>
  
  <script>
    import {onMounted, ref} from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import Layout from '../../components/Layout.vue';

    export default {
    components: { Layout },
        setup(){
            const router = useRouter()
            const route = useRoute()
            const links = ref([
                'Dashboard',
            ]);
            
            onMounted(() => {
                console.info(route.name, route.path)
            })

            return{
                links,
                route
            }
        }
    }
  </script>