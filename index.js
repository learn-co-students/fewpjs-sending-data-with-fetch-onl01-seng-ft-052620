
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

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
        let target = document.body.createElement('h1')
        target.innerHTML = (object.id);
    })
    .catch(function(error) {
        alert("Bad things! Ragnarok!");
        let target = document.body.appendChild('h1')
        target.innerHTML = (error.message);
    })

}