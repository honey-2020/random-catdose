var cCat = document.querySelector(".cCat")

fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => obj = data)
        .then(function(data) {

        var cat = document.createElement("img");

        cat.src = obj.file;
        cCat.appendChild(cat);

    })