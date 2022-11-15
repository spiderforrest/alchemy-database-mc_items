import { getItems } from './lib/supabase.js';
import { renderItemCard } from './lib/render-utils.js';

const listContainer = document.getElementById('dog-list-container');

window.addEventListener('load', async () => {
    const response = await getItems();
    if (response.error) return;
    // haha i usually use item for iterating an array but it's accurate here
    for (const item of response.data) {
        const div = renderItemCard(item);
        listContainer.append(div);
    }
});
