const URL = "https://fakerapi.it/api/v2/texts?_quantity=10&_characters=250";

export function getData() {
    return fetch(URL)
        .then((res) => res.json())
        .then((data) => data.data);
}
