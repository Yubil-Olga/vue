<template>
	<v-container fluid>
		<v-row 
        justify="center"
        v-if="!loading && orders.length !== 0"
        >
			<v-col md="6" sm="9">
        <h1 class="text--secondary mb-3">Orders</h1>
				<v-list
      			subheader
      			two-line
      			v-for="order in orders"
      			:key="order.key"
    			>

        <v-list-item>
            
            <v-list-item-action>
              <v-checkbox 
              color="success"
              :readonly="order.done"
              @change="markDone(order)"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ order.name}}</v-list-item-title>
              <v-list-item-subtitle>{{ order.phone}}</v-list-item-subtitle>
            </v-list-item-content>
         	
         	<v-list-item-action>
              <v-btn class="primary"
              :to="'/ad/'+order.adId">Open</v-btn>
            </v-list-item-action>
        </v-list-item>

    </v-list>
			</v-col>
		</v-row>
    <v-row v-else-if="loading" justify="center">
            <v-progress-circular
             :size="100"
               color="primary"
               indeterminate
            ></v-progress-circular>
    </v-row>
    <v-row v-else justify="center">
      <h1 class="text--secondary">You have no orders</h1>
    </v-row>
	</v-container>
</template>

<script>
	export default {
    computed: {
      loading (){
        return this.$store.getters.loading
      },
      orders (){
        return this.$store.getters.orders
      }
    }, 
		methods: {
			markDone(order){
        this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
        .catch(() => {})
				
			}
		},
    created (){
      this.$store.dispatch('fetchOrders')
    }
	}
</script>