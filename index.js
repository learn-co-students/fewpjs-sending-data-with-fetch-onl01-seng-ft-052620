function submitData(name, email){
    let formData = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(function(object){
        document.querySelector("body").append(object.id)
    })
    .catch(function(error){
        document.querySelector("body").append(error.message)
    })
}