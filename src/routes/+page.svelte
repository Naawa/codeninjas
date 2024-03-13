<script>
	import About from "$lib/components/About.svelte";
	import ProgramsCarousel from "$lib/components/ProgramsCarousel.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import InquiryForm from "$lib/components/InquiryForm.svelte";
	import LocationMap from "$lib/components/LocationMap.svelte";
	import ProgramsHeading from "$lib/components/ProgramsHeading.svelte";
	export let data;
</script>

<Hero></Hero>
<About></About>
<ProgramsHeading></ProgramsHeading>
<ProgramsCarousel></ProgramsCarousel>
<LocationMap></LocationMap>
<InquiryForm {data}></InquiryForm>