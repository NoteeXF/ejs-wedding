const nameList = document.getElementById('nameList');

// Menggunakan fetch untuk memanggil API
fetch('/users/:id')
    .then(response => response.json())
    .then(names => {
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            nameList.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));