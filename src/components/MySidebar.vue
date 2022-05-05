<template>
    <PrimeVueMenu :model="items"/>
</template>

<script>
    export default {
    name: "SidebarMenu",
	data() {
		return {
			items: [
				{
                    label: 'Editor',
                    icon: 'pi pi-forward',
                    to: '/'
                },
                {
                    label: 'About',
                    icon: 'pi pi-info',
                    to: '/about'
                }
			]
		}
	}
}
</script>