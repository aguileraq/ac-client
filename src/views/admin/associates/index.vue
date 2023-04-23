<template>
    <Layout>
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
                class="pa-2"
            >
                <h5 class="text-h5 mb-1">Associates</h5>
                <v-divider class="border-opacity-50" ></v-divider>

                <v-table>
                    <thead>
                    <tr>
                        <th class="text-left">
                        Name
                        </th>
                        <th class="text-left">
                        Calories
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in desserts"
                        :key="item.name"
                    >
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                    </tr>
                    </tbody>
                </v-table>
            </v-sheet>
        </v-col>
    </Layout>
</template>

<script>
    
    import Layout from '../../../components/Layout.vue';
    import { ref } from 'vue';
    
    export default{
        components: { Layout },

        setup(){
        const desserts =  ref([
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ]);
            return {
                desserts    
            }
        }
    }
</script>
