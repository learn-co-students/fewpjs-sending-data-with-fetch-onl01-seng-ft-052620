function submitData(name, email) {
   return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        document.body.textContent = object.id
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        document.body.textContent = error.message
    })
}

/*
let formData = {
    dogName: "Byron2",
    dogBreed: "Poodle2"
}

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
}

fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        console.log(object)
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message)
    })

*/