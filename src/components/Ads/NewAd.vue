<template>
	<v-container>
		<v-row justify="center" align="center" class="flex-column">
			<v-col sm="9" md="6" mb="3">
			<h1 class="text--secondary mb-3 text-center">Create new ad</h1>
			<v-form
                ref="form"
      			v-model="valid">
                  <v-text-field
                    label="Ad title"
                    name="title"
                    type="text"
                    v-model="title"
                    required
                    :rules="[v => !!v || 'Title is required']"
                    required
                  ></v-text-field>

                  <v-textarea
                    label="Ad description"
                    name="description"
                    type="text"
                    multy-line
                    v-model="description"
                    :rules="[v => !!v || 'Description is required']"
                  ></v-textarea>
                </v-form>
            </v-col sm="9" md="6">
				<v-col class="mb-3" sm="9" md="6">
                <v-btn
      			      color="blue-grey"
      			      class="ma-2 warning"
                  @click="triggerUpload"
      			      >
      			      Upload
      			      <v-icon right dark>mdi-cloud-upload</v-icon>
      			    </v-btn>
                <input 
                  ref="fileInput" 
                  type="file" 
                  style="display: none" 
                  accept="image/*"
                  @change="onFileChange"
                >
				</v-col>
    	<v-col class="mb-3" sm="9" md="6">
        <img :src="imageSrc" v-if="imageSrc" height="100">
      </v-col>
    <v-col sm="9" md="6">
    	<v-switch
      v-model="promo"
      label="Ad to promo?"
      color="primary"
    ></v-switch>
    </v-col>
    <v-col sm="9" md="6">
    	<v-btn 
    	class="success"
    	@click="createAd"
      :loading="loading"
    	:disabled="!valid || !image || loading"
      >Create ad</v-btn>
    </v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data(){
			return{
				title:"",
				description:"",
				valid: false,
				promo: false,
        image: null,
        imageSrc: ""
			}
		},
    computed: {
        loading (){
          return this.$store.getters.loading
        }
    },
		methods: {
			createAd(){
				if (this.$refs.form.validate() && this.image) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            image: this.image
          }
      this.$store.dispatch('createAd',ad)
      .then(() => {
        this.$router.push('list')
      })
      .catch(() => {})
		}
	},
      triggerUpload (){
        this.$refs.fileInput.click()
      },
      onFileChange (event){
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
          this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
}
}
</script>