let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: 30,
            image: "images/white-tshirt.png",
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: 49,
            image: "images/beige-skirt.jpg",
        },
        {
            productName: "Sporty Smartwatch",
            category: "Accessories",
            price: 99,
            image: "images/smartwatch.jpeg",
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: 29,
            image: "images/knitted-top.jpeg",
        },
        {
            productName: "Black Leather Jacket",
            category: "Outerwear",
            price: 129,
            image: "images/leather-jacket.jpeg",
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: 89,
            image: "images/pink-trousers.jpeg",
        },
        {
            productName: "Brown Blazer",
            category: "Outerwear",
            price: 60,
            image: "images/brown-blazer.jpeg",
        },
    ],
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("products").appendChild(card);

    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    card.appendChild(container);
    let price = document.createElement("h6");
    price.innerText = i.price + "$";
    container.appendChild(price);
    
}

function filterProducts(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach(element => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});

window.onload = () => {
    filterProducts("all");
};