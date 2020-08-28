// Add your code here
const dogs_path = "http://localhost:3000/dogs"
const cats_path = "http://localhost:3000/cats"
const users_path = "http://localhost:3000/users"
const robots_path = "http://localhost:3000/robots"






function submitData(name, email){

  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch(users_path, configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let id = object.id;
      let p = document.createElement("p")
      p.textContent = id
      document.body.appendChild(p)
    })
    .catch(function(object){
      console.log(object.message)
      let p = document.createElement("p")
      p.textContent = object.message
      document.body.appendChild(p)

    });

}
