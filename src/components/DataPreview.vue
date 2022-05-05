<template>
    <div>
        
        <PrimeVueDialog position="bottom" v-model:visible="hasData" :draggable="false" :maximizable="true" header="Results" style="height: 50vh; width: 100vw">
            <PrimeVueDataTable :value="response['data']['results']['bindings']" stripedRows class="p-datatable-sm">
                <PrimeVueColumn v-for="col of response['data']['head']['vars']" :field="col" :header="col" :key="col" frozen>
                    <template #body="slotProps">
                        {{ slotProps.data[slotProps.field].value }}
                    </template>
                </PrimeVueColumn>
            </PrimeVueDataTable>
        </PrimeVueDialog>
        <!-- <PrimeVueScrollPanel style="width: 100%; height: 500px">
            <pre> {{ response.data.results }} </pre>
        </PrimeVueScrollPanel> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            hasData: false,
            response: {
                data: {
                    results: {
                        
                    }
                }
            },
        }
    },
    mouted() {
        
    },
    methods: {
        sendQuery(endpoint, query) {
            //select distinct ?Concept where {[] a ?Concept} LIMIT 100
            //SELECT DISTINCT * WHERE {  ?s ?p ?o}LIMIT 100
            console.log("START")
            this.axios.get(endpoint, { 
                params: { 
                    'query': query,
                    'default-graph-uri': '',
                    'named-graph-uri': '',
                    'format': 'application/json',
                    }   
            }).then((response) =>{
                this.response = response
                this.hasData = true
                console.log(response)
                // const result = response.data.results.bindings;
                // console.log(result)
            })
        }
    },
}
</script>

<style>
    .p-dialog{
        margin: 0 !important;
    }

    .p-toolbar{
        padding: 0;
        border-radius: 0;
    }
</style>