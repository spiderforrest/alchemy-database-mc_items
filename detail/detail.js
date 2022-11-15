import { getItem } from '../lib/supabase.js';
import { renderItemDetail } from '../lib/render-utils.js';

const detailContainer = document.getElementById('detail-container');

// on load
window.addEventListener('load', async () => {
    // get the id from URL
    const filter = new URLSearchParams(window.location.search);
    const id = filter.get('id');

    // use the id to fetch the item
    const item = await getItem(id);

    // render and append this item's details to the container
    const itemDetailEl = renderItemDetail(item.data);
    detailContainer.append(itemDetailEl);
});
