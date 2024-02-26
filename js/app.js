function usersName(){
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(ref => ref.json())
    .then(data => console.log(data))
}