// Add your code here
function submitData(userName, userEmail){
    const destinationURL = 'http://localhost:3000/users'
    const configrationObj = {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail
        })
    }
    return fetch(destinationURL, configrationObj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        document.body.innerHTML = object.id
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })

}

// function appendToDOM(object){
//     console.log(object);
// }