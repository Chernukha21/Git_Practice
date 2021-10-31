const form = document.querySelector('#ajax_form');
const ul = document.querySelector('.list-users');
form.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.open('post', 'https://jsonplaceholder.typicode.com/users');
    xhr.setRequestHeader('content-type','application/json; charset=UTF-8');
    const newPost = {
        name: form[0].value,
        email: form[1].value,
        phone: form[2].value,
        website: form[3].value,
    };
    xhr.send(JSON.stringify(newPost));
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        console.log(typeof xhr.response);
        addUser(xhr.response);
    }
});

function addUser(response){
    response = JSON.parse(response);
    ul.insertAdjacentHTML('beforeend', `<li>${response.name}</li>`);
    console.log(response);
}