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
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('item-card');

    p.textContent = item.Name;
    img.src = `https://minecraftitemids.com/item/64/${snake_case_string(item.Name)}.png`;
    a.href = `./detail/?id=${item.id}`; // link to the item's detail page here

    div.append(p, img);

    a.append(div);

    return a;
}
