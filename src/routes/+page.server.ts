import { supabase } from '$lib/db/supabaseClient';
import { locations } from '$lib/utils/dojos.js';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
    dojo: z.string().min(1),
    parentFirstName: z.string().min(3),
    parentLastName: z.string().min(3),
    contactNumber: z.string().min(10),
    childFirstName: z.string().min(3),
    childLastName: z.string().min(2),
    email: z.string().email(),
    utmSource: z.string(),
    utmMedium: z.string(),
    utmCampaign: z.string(),
});

export const load = async () => {
    const form = await superValidate(zod(schema));

    return { form }
};

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(schema));

        if (!form.valid) {
            return fail(400, { form });
        }

        const { data, error } = await supabase
            .from('leads')
            .insert([
                {
                    dojo: `${form.data.dojo}`,
                    parentFirstName: `${form.data.parentFirstName}`,
                    parentLastName: `${form.data.parentLastName}`,
                    contactNumber: `${form.data.contactNumber}`,
                    email: `${form.data.email}`,
                    childFirstName: `${form.data.childFirstName}`,
                    childLastName: `${form.data.childLastName}`,
                    utmSource: `${form.data.utmSource}`,
                    utmMedium: `${form.data.utmMedium}`,
                    utmCampaign: `${form.data.utmCampaign}`,
                },
            ])
            .select()
        
        if (error) {
            return message(form, "You have already made an inquiry, please wait for us to contact you.")
        }

        interface Lead {
            facilitySlug: string,
            ParentFirstName: string,
            ParentLastname: string,
            ChildFirstName: string,
            ChildLastName: string,
            Email: string,
            PhoneNumber: string
        }

        let center = "";

        for (let i = 0; i < locations.length; i++) {
            if (form.data.dojo == locations[i].name) {
                center = locations[i].crm;
                break;
            }
        }

        const lead: Lead = {
            facilitySlug: center,
            ParentFirstName: form.data.parentFirstName,
            ParentLastname: form.data.parentLastName,
            ChildFirstName: form.data.childFirstName,
            ChildLastName: form.data.childLastName,
            Email: form.data.email,
            PhoneNumber: form.data.contactNumber,
        }

        const leadReq = await fetch("https://services.codeninjas.com/api/v1/leads", {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
            method: 'POST',
            body: JSON.stringify(lead),
        })

        if(leadReq.status > 400) {
            return message(form, "An error occured while processing your request, please contact 6046008339 to report this issue.");
        }

        return message(form, "We have received your inquiry. We will contact you shortly.")
    }
};