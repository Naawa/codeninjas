<script>
	import About from "$lib/components/About.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import InquiryForm from "$lib/components/InquiryForm.svelte";
	import LocationMap from "$lib/components/LocationMap.svelte";
	export let data;
</script>

<Hero></Hero>
<About></About>
<LocationMap></LocationMap>
<InquiryForm {data}></InquiryForm>