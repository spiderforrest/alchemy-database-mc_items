/* Imports */
import { getItems } from './lib/supabase.js';

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

window.addEventListener('load', async () => {
    console.log(await getItems());
});
