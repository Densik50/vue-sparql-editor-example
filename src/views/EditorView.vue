<template>
	<div>
		<PrimeVueToolbar>
			<template #start>
				<PrimeVueInputText
					placeholder="Sparql endpoint"
					type="text"
					v-model="endpoint"
					style="margin-right: 10px; width: 400px"
				/>
				<PrimeVueButton @click="sendQuery()">RUN</PrimeVueButton>
			</template>
		</PrimeVueToolbar>

		<SparqlEditor ref="editor" style="height: 100%"/>

		<DataPreview ref="dataPreview"/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show_querry_panel: true,
			endpoint: "https://dbpedia.org/sparql",
		}
	},
	name: 'EditorView',
	methods: {
		update_query_var: function(e){
			this.show_querry_panel = e;
		},
		sendQuery(){
			const query = this.$refs.editor.getCode();
			console.log(query)
			this.$refs.dataPreview.sendQuery(this.endpoint, query)
		},
	}
}
</script>