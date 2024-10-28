// const githubDiv = document.getElementById("github");

// fetch("https://api.github.com/users/Miguel-Lopes-Git/repos")
//     .then(response => response.json())
//     .then(data => {
//         repos = data;
//         repos.forEach(repo => {
//             let repoDiv = document.createElement("div");
//             repoDiv.className = "repos";
//             repoDiv.innerHTML = `
//                 <h3>${repo.name}</h3>
//                 <p>${repo.description}</p>
//                 <a href="${repo.html_url}" target="_blank">Visit Repository</a>
//             `;
//             githubDiv.appendChild(repoDiv);
//         });
//         console.log(repos);
//     })
