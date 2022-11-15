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
// generate small item cards for the list
export function renderItemCard(item) {
    // make elements
    const div = document.createElement('div');
    const a = document.createElement('a');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const p = document.createElement('p');

    // add a class to the surrounding link
    div.classList.add('item-card');

    // set attributes
    h3.textContent = item.Name;
    // i found a website with a decent amount of item images that are organized in like, any way i can automatically get
    img.src = `https://minecraftitemids.com/item/64/${snake_case_string(item.Name)}.png`;
    a.href = `./detail/?id=${item.id}`;
    // this column is an AND of the bools in 1.12, sortable, obtainable. shows if the sorting system should allocate space for the item.
    p.textContent = item.Valid
        ? `Valid: ✅ Stack: ${item.Stackability}`
        : `Valid: ❎ Stack: ${item.Stackability}`;
    // assemble the thing
    div.append(h3, img, p);
    a.append(div);
    return a;
}

// generate the item detail page
export function renderItemDetail(item) {
    // generate elements
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameH = document.createElement('h2');
    const boolsP = document.createElement('p');
    const stackP = document.createElement('p');
    const binaryP = document.createElement('p');

    // set details
    img.src = `https://minecraftitemids.com/item/64/${snake_case_string(item.Name)}.png`;
    nameH.textContent = item.Name;
    // dynamically generate a paragraph of data
    // prettier i will gut you like a fish 'an opinionated formatter' well you have wrong opinions i just want consistency
    const version = item['In 1.12?']
        ? 'This item is present in 1.12, '
        : 'This item is not present in 1.12, ';
    const obtain = item['Obtainable?'] ? 'obtainable(by 1.12 standards), ' : 'unobtainable, ';
    const sort = item['Sortable?'] ? 'and sortable. ' : 'and is not sortable. ';
    const valid = item.Valid
        ? 'Therefore, the item is valid for a 1.12 system, and should be allocated binary slots.'
        : 'Therefore, the item is not valid, and should not take up a code on a 1.12 system';
    const stack = item.Stackability
        ? `This item stacks to ${item.Stackability}.`
        : 'This item does not stack.';
    boolsP.textContent = version + obtain + sort + valid;
    stackP.textContent = stack;
    // generate a fancy looking display for the binary
    // ignore the fact that the database has no codes yet oops
    binaryP.textContent = 'The binary code is: ';
    for (let i = 1; i <= 10; i++) {
        binaryP.textContent = item[`Bit ${i}`]
            ? `${binaryP.textContent}✅`
            : `${binaryP.textContent}❎`;
    }

    // set classes
    div.classList.add('detail');
    if (item.valid) div.classList.add('valid');

    div.append(img, nameH, boolsP, stackP, binaryP);

    return div;
}
