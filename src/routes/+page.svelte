<script>
	import About from "$lib/components/About.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import InquiryForm from "$lib/components/InquiryForm.svelte";
	import LocationMap from "$lib/components/LocationMap.svelte";
	import ProgramsHeading from "$lib/components/ProgramsHeading.svelte";
	import LocationsHeading from "$lib/components/LocationsHeading.svelte";
	import Create from "$lib/components/Create.svelte";
	import Junior from "$lib/components/Junior.svelte";
	import Camps from "$lib/components/Camps.svelte";
	import OtherPrograms from "$lib/components/OtherPrograms.svelte";
	import Impact from "$lib/components/Impact.svelte";
	export let data;
</script>

<Hero></Hero>
<About></About>
<ProgramsHeading></ProgramsHeading>
<Create></Create>
<Junior></Junior>
<Camps></Camps>
<OtherPrograms></OtherPrograms>
<Impact></Impact>
<LocationsHeading></LocationsHeading>
<LocationMap></LocationMap>
<InquiryForm {data}></InquiryForm>