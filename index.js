
function submitData(usernameInput, useremailInput) {

    let formData = {
        name: usernameInput,
        email: useremailInput
      };
       

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

   fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
        document.body.innerHTML = object.id;
    })
    .catch(function(error) {
        alert("Bad things! Ragnarok!");
        let target = document.body.appendChild('h1')
        document.body.innerHTML = error.message;
    })

}