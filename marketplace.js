document.addEventListener("DOMContentLoaded", () => {
    const marketplaceContainer = document.getElementById("marketplace-container");
    const postButton = document.getElementById("post-button");

    // Sample data for demonstration
    const posts = [
        {
            image: "path/to/image1.jpg",
            title: "Math Textbook",
            description: "A comprehensive guide to algebra and calculus.",
            price: "$50"
        },
        {
            image: "path/to/image2.jpg",
            title: "Physics Notes",
            description: "Detailed notes on classical mechanics.",
            price: "$30"
        }
    ];

    // Function to create a marketplace item
    function createMarketplaceItem(post) {
        const item = document.createElement("div");
        item.className = "marketplace-item";

        const img = document.createElement("img");
        img.src = post.image;
        item.appendChild(img);

        const title = document.createElement("h2");
        title.textContent = post.title;
        item.appendChild(title);

        const description = document.createElement("p");
        description.textContent = post.description;
        item.appendChild(description);

        const price = document.createElement("p");
        price.textContent = post.price;
        item.appendChild(price);

        const purchaseButton = document.createElement("button");
        purchaseButton.textContent = "Purchase";
        item.appendChild(purchaseButton);

        const rentButton = document.createElement("button");
        rentButton.textContent = "Rent";
        item.appendChild(rentButton);

        return item;
    }

    // Function to render posts
    function renderPosts() {
        marketplaceContainer.innerHTML = "";
        posts.forEach(post => {
            const item = createMarketplaceItem(post);
            marketplaceContainer.appendChild(item);
        });
    }

    // Event listener for the post button
    postButton.addEventListener("click", () => {
        // Logic to open a form for posting new material
        alert("Open form to post new material");
    });

    // Initial render
    renderPosts();
});