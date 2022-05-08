//TODO edit items and bar items

<template>
        <div class="my_toolbar">
            <PrimeVueMenubar :model="items"></PrimeVueMenubar>
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