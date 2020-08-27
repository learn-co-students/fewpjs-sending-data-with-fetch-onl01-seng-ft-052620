// Add your code here


function submitData(username, email){
  const userData = {
    name: username,
    email: email
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch(`http://localhost:3000/users`, configObj)
    .then(response => response.json())
    .then(json => displayId(json))
    .catch((error)=>{
      document.body.innerHTML += `${error.message}`
    });
}

function displayId(json){
  document.body.innerHTML += `${json.id}`
}