const SUPABASE_URL = 'https://njqdydcjmajdjmyztzov.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qcWR5ZGNqbWFqZGpteXp0em92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMjAsImV4cCI6MTk4MzY4NDAyMH0.r6bSNSp-6Ts4GRV3-pnwjFMUWdUGlWU4EiIWbDqrTXU';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// get a list of items
export async function getItems(col, expect) {
    // assemble query for signs
    let query = client.from('mc_items').select('*').order('id').limit(100);
    // check if a filter should be applied
    if (col && expect) {
        query = query.eq(col, expect);
    }
    // fetch and return
    const response = await query;
    return response;
}

// get a single item
export async function getItem(id) {
    return await client.from('mc_items').select().match({ id: id }).single();
}
