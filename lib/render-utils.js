// function i found on SO to convert the names to snake case
function snake_case_string(str) {
    return (
        str &&
        str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map((s) => s.toLowerCase())
            .join('_')
    );
}
export function renderItemCard(item) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('item-card');

    h3.textContent = item.Name;
    // i found a website with a decent amount of item images that are organized in like, any way i can automatically get
    img.src = `https://minecraftitemids.com/item/64/${snake_case_string(item.Name)}.png`;
    a.href = `./detail/?id=${item.id}`;
    // this column is an AND of the bools in 1.12, sortable, obtainable. shows if the sorting system should allocate space for the item.
    p.textContent = item.valid ? '✅' : '❎';
    div.append(h3, img, p);
    a.append(div);
    return a;
}
