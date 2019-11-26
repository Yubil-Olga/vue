<template>
	<v-dialog width="400" v-model="modal" persistent>
		<template v-slot:activator="{ on }">
			<v-btn class="warning" v-on="on">Edit</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h1 class="text--primary">Edit ad</h1>
			</v-card-title>
			<v-divider></v-divider>
			<v-card-text class="mt-6">
				<v-text-field
                    label="Title"
                    name="title"
                    type="text"
                    v-model="editedTitle"
                  ></v-text-field>
                  <v-text-field
                    label="Description"
                    name="description"
                    type="text"
                    v-model="editedDescription"
                    multy-line
                  ></v-text-field>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn @click="onCancel" text>Cancel</v-btn>
				<v-btn class="success" text @click="onSave">Save</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: ['ad'],
	data (){
	 return {
		modal: false,
		editedTitle: this.ad.title,
		editedDescription: this.ad.description
		}
	},
	methods: {
		onCancel (){
			this.editedDescription = this.ad.description
      		this.editedTitle = this.ad.title
     		this.modal = false
		},
		onSave (){
		if (this.editedDescription !== '' && this.editedTitle !== ''){
			this.$store.dispatch('updateAd', {
	        title: this.editedTitle,
	        description: this.editedDescription,
	        id: this.ad.id
	        })
			this.modal = false
		}	
		}
	}
}
</script>