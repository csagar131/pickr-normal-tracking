// import { ActionFunction } from '@remix-run/node'; // or "@remix-run/cloudflare"
import { redirect } from "@remix-run/node"; // or "@remix-run/cloudflare"

// // Note the "action" export name, this will handle our form POST
// export const ActionFunction = async ({ request }) => {
//   const trackingId = await request.formData();
//   //   const project = await getTrackingDetails(trackingId);
//   return redirect(`/tracking/${id}`);
// };

export const getTrackingDetails = async (id) => {
  const data = await fetch(
    `https://cfapi.pickrr.com/plugins/tracking/?tracking_id=${id}`
  ).then((res) => res.json());

  return data;
};
