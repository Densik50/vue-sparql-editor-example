//TODO edit items and bar items

<template>
        <div class="my_toolbar">
            <PrimeVueMenubar :model="items">
            </PrimeVueMenubar>
            <!-- <PrimeVueButton id="settings_button" icon="pi pi-cog" @click="visibleRight = true" class="p-mr-2"  />
            <PrimeVueSidebar v-model:visible="visibleRight" :baseZIndex="1000" position="right">
            <h3>Right Sidebar</h3>
            </PrimeVueSidebar> -->
        </div>
</template>

<script>


export default {
    name: "ToolbarMenu",
    data() {
        return {
        items: [
            {
                label: 'SparqlEditorApp',
                icon: '',
                to: '/'
            },
        ],
        visibleRight: false,
        };
    },
};
</script>

<style>
.my_toolbar{
    border-bottom: 1px solid gray;
}
</style>