// Add your code here

function submitData(n, e){
    let formData = {
        name: n,
        email: e
    }
    
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
        let el = document.createElement('p')
        el.innerHTML = object.name;
        let li = document.createElement('li')
        li.innerHTML = object.email;
        let li2 = document.createElement('li')
        li2.innerHTML = object.id
        document.body.appendChild(el)
        el.appendChild(li)
        el.appendChild(li2)
        
      })
      .catch(function(error) {
        let el = document.createElement('p')
        el.innerHTML = error.message
        document.body.appendChild(el)
      });
}


// user name
// email