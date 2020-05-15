let url = 'http://localhost/projects/rest/api/post/read';
const fetchData  = fetch(url);

fetchData
    .then(data => data.length ?? console.log(data))
    .catch(error => console.log(error))