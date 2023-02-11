fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById("table");
    data.forEach(user => {
      const row = table.insertRow();
      row.insertCell().innerHTML = user.id;
      row.insertCell().innerHTML = user.name;
      row.insertCell().innerHTML = user.username;
      row.insertCell().innerHTML = user.email;
    });
  })
  .catch(error => console.error(error));
