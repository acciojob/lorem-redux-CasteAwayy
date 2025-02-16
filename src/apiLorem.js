const URL = "https://jsonplaceholder.typicode.com/posts";

export function getData() {
    return fetch(URL)
        .then((res) => res.json())
        .then((data) => data);
}
