<template>
	<v-container>
		<v-row justify="center" v-if="!loading && myAds.length!=0">
			<v-col md="6" sm="9">
				<h1 class='text--secondary mb3'>My ads</h1>
				<v-card 
				class="elevation-10 mb-3"
				v-for="ad in myAds"
				:key="ad.id">
					<v-row class="ml-0 mr-0">
						<v-col cols="4" class="pa-0">
							
								<v-img
								:src="ad.imageSrc"
								height="170">
								</v-img>
							
						</v-col>
						<v-col cols="8">
							<v-card-text>
								<h2 class="text--primary">{{ ad.title }}</h2>
								<p>{{ ad.description }}</p>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn 
								class="info"
								:to="'/ad/'+ad.id">Open</v-btn>
							</v-card-actions>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
		<v-row justify="center" v-else-if="!loading && myAds.length==0">
			<v-col md="6" sm="9">
				<h1 class='text--secondary mb3'>You have no ads</h1>
			</v-col>
		</v-row>
		
		<v-row justify="center" v-else>
    		<v-progress-circular
     		 :size="100"
      		 color="primary"
      		 indeterminate
    		></v-progress-circular>
		</v-row>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		computed: {
			myAds(){
				return this.$store.getters.myAds
			},
			loading (){
				return this.$store.getters.loading
			}
		}
	}
</script>