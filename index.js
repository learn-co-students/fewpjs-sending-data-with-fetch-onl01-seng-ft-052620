function submitData(username, useremail){
    return fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
            name: username, 
            email: useremail
        })
    })
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        let p = document.createElement('p')
        p.innerHTML = object.id 
        document.body.appendChild(p)
        console.log(object);
    })
    .catch(function(error){
        //alert("nope");
        let errorp = document.createElement('p')
        errorp.innerHTML = error.message 
        document.body.appendChild(errorp)
        //console.log(error.message);
    });
}

