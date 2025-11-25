const key = "YOUR_UNSPLASH_API_KEY";
const gallery = document.getElementById("gallery");

async function loadImages() {
    let res = await fetch(`https://api.unsplash.com/photos/random?count=6&client_id=${key}`);
    let images = await res.json();

    images.forEach(img => {
        let image = document.createElement("img");
        image.src = img.urls.small;
        image.onload = () => image.classList.add("loaded");
        gallery.appendChild(image);
    });
}

document.getElementById("loadMore").onclick = loadImages;

loadImages();
