// Add your code here
function submitData(name, email){
    let data = {
        name: name,
        email: email
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        body: JSON.stringify(data)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(function(obj){
        document.querySelector("body").append(obj.id);
    })
    .catch(function(error){
        document.querySelector("body").append(error.message);
    })
}
