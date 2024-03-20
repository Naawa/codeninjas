import { supabase } from '$lib/db/supabaseClient';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';


const schema = z.object({
    dojo: z.string().default('Select A Location'),
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

    interface Lead {
        facilitySlug: string,
        ParentFirstName: string,
        ParentLastname: string,
        ChildFirstName: string,
        ChildLastName: string,
        Email: string,
        PhoneNumber: string
    }

    const lead: Lead = {
        facilitySlug: "cn-vancouver-south-bc-ca",
        ParentFirstName: "Naous",
        ParentLastname: "Islam",
        ChildFirstName: "Jelly",
        ChildLastName: "Bean",
        Email: "naous.islam@outlook.com",
        PhoneNumber: "16046008339",
    }

    /**
     * const leadReq = await fetch("https://services.codeninjas.com/api/v1/leads", {
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
        method: 'POST',
        body: JSON.stringify(lead),
    })
    console.log(await leadReq.status);
    let result = await leadReq.json();
     */

    if(error) {
        return message(form, "You have already made an inquiry, please wait for us to contact you.")
    }
    return message(form, "We have received your inquiry. We will contact you shortly.")
    }
};