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
			endpoint: "https://dbpedia.org/sparql",
		}
	},
	name: 'EditorView',
	methods: {
		sendQuery(){
			const query = this.$refs.editor.getCode();
			this.$refs.dataPreview.sendQuery(this.endpoint, query)
		},
	}
}
</script>