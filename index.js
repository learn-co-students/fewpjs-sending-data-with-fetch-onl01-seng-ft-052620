function formData(userName, userEmail) {
  return { name: userName, 
  email: userEmail
  }
};

function submitData(userName, userEmail) {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData(userName, userEmail))
  };
  
  return fetch('http://localhost:3000/users', configObj)
  .then(function(response) {
    console.log(response)
    return response.json();
  })
  .then(function(object) {
    console.log(object)
    console.log(object.id)
    document.body.innerHTML += `<div> ${object.id} </div>`;
  })
  .catch(function(error) {
    document.body.innerHTML += `<div> ${error.message} </div>`;
  });
}
    
submitData('ashley', 'john')