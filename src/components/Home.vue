<template>


  <div>
	<v-container fluid>
		<v-layout>
			<v-flex>
				<v-carousel delimiters>
    <v-carousel-item
      v-for="ad in promoAds"
      :key="ad.id"
      :src="ad.imageSrc"
    >
    	<div class="car-link">
    		<v-btn class="error" :to="'/ad/'+ad.id">{{ ad.title }}</v-btn>
    	</div>
    </v-carousel-item>
  </v-carousel>
			</v-flex>
		</v-layout>
	</v-container>
	<v-container>
		<v-row>
			<v-col
	        v-for="ad in ads"
	        :key="ad.id"
	        cols="12"
	        md="6"
	        lg="4"
	        >
	        <v-card>
    <v-img
      height="200px"
      :src="ad.imageSrc"
    >
    </v-img>
	<v-card-title>
		<div>
			<h3> {{ ad.title }}</h3>
			<p>{{ ad.description }}</p>
	    </div>
	</v-card-title>
    <v-card-actions>
    	<v-spacer></v-spacer>
      <v-btn
        text
        :to="'/ad/'+ad.id"
      >
        Open
      </v-btn>
      <app-buy-modal :ad="ad"></app-buy-modal>
    </v-card-actions>
  </v-card>
	        </v-col>
		</v-row>
	</v-container>
	</div>
</template>

<script>
	export default {
		computed: {
			promoAds(){
				return this.$store.getters.promoAds
			},
			ads(){
				return this.$store.getters.ads
			}
		}
	}
</script>
<style scoped>
	.car-link {
		position: absolute;
		bottom: 50px;
		left: 50%;
		background: rgba(0,0,0,0.5);
		transform: translate(-50%,0);
		padding: 5px 15px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
	}
</style>