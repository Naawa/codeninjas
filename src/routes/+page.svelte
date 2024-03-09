<script>
	import Hero from "$lib/components/Hero.svelte";
	import InquiryForm from "$lib/components/InquiryForm.svelte";
	import LocationMap from "$lib/components/LocationMap.svelte";
	export let data;
</script>

<Hero></Hero>
<LocationMap></LocationMap>
<InquiryForm {data}></InquiryForm>