const tableBody = document.querySelector("tbody");
const loader = document.getElementById("loader");

async function loadUsers() {
    loader.style.display = "block";
    tableBody.innerHTML = "";

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    loader.style.display = "none";

    users.forEach(u => {
        let row = `<tr>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.address.city}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

document.getElementById("refreshBtn").onclick = loadUsers;

loadUsers();
