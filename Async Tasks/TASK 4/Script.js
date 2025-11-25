function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve(["Post One", "Post Two", "Post Three"]);
            } else {
                reject("Failed to load posts");
            }
        }, 2000);
    });
}

document.getElementById("loadBtn").onclick = async () => {
    let status = document.getElementById("status");
    let ul = document.getElementById("postList");

    status.textContent = "Loading posts...";
    ul.innerHTML = "";

    try {
        let posts = await loadPosts();
        status.textContent = "";

        posts.forEach(p => {
            let li = document.createElement("li");
            li.textContent = p;
            ul.appendChild(li);
        });
    } catch (err) {
        status.textContent = err + " — Click Retry";
    }
};
