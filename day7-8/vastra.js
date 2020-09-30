let products = [
  {
    id: 1,
    name: "Grey Tshirt",
    size: "L",
    color: "grey",
    price: 800,
    image: "product1.jpeg",
    description: "Good looking grey tshirt",
  },
  {
    id: 2,
    name: "Blue Top",
    size: "M",
    color: "Blue",
    price: 1500,
    image: "product2.jpeg",
    description: "Good looking blue top",
  },
  {
    id: 3,
    name: "Yellow Dress ",
    size: "S",
    color: "Yellow",
    price: 300,
    image: "product3.jpeg",
    description: "Good looking yellow dress",
  },
  {
    id: 4,
    name: "Kids Orange Shirt",
    size: "M",
    color: "Orange",
    price: 1000,
    image: "product4.jpeg",
    description: "Beautiful Checked shirt",
  },
  {
    id: 5,
    name: "Traditonal Wear",
    size: "M",
    color: "Green and Pink",
    price: 1300,
    image: "product5.jpeg",
    description: "Good looking Traditional Wear",
  },
  {
    id: 6,
    name: "Western Dress",
    size: "M",
    color: "Light Pink and Grey",
    price: 2500,
    image: "product6.jpeg",
    description: "Good looking Western Dress",
  },
  {
    id: 7,
    name: "Brown Pant",
    size: "M",
    color: "Brown",
    price: 3000,
    image: "product7.jpeg",
    description: "Jeans Pant",
  },
  {
    id: 8,
    name: "Kid Female Dress",
    size: "M",
    color: "Pink and Brown",
    price: 3000,
    image: "product8.jpeg",
    description: "Beautiful Kids Dress",
  },
  {
    id: 9,
    name: "Blue Male Blazer",
    size: "M",
    color: "Blue",
    price: 3000,
    image: "product9.jpeg",
    description: "Stylish Blazer",
  },
  {
    id: 10,
    name: "Black Hoodie  ",
    size: "M",
    color: "Black",
    price: 3000,
    image: "product10.jpeg",
    description: "Beautiful Hoodie",
  },
  {
    id: 11,
    name: "Grey Female Sweater",
    size: "M",
    color: "Grey",
    price: 3000,
    image: "product11.jpeg",
    description: "Beautiful Winter Wear",
  },
  {
    id: 12,
    name: "Green  Men Shirt",
    size: "M",
    color: "Green",
    price: 3000,
    image: "product12.jpeg",
    description: "Beautiful Green Shirt",
  }
];

let cart = [];
let count = 0;

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" height="350px" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}
let p =false;
function addToCart(id) {
  // getting the product
  p = false;
    let pro = getProductByID(products, id);
    cart.forEach(function(element){
      if (element.id== pro.id){
        p=true;
      }
    })
  
  //   putting in cart
if(p){
  alert("Cant add same product twice in cart");
  return 0;
}
  cart.push(pro);
  count += 1;
  document.getElementById("count").innerText = count;
  displayProducts(cart, "cart");
};

// price filter

function pricefilter(){
  let min=document.getElementById("mini").value;
  let max = document.getElementById("max").value;
  let items= products.filter(function(product){
      return product.price>=min && product.price<=max;
  })
   displayProducts(items);
  document.getElementById("mini").value="";
    document.getElementById("max").value="";
};


function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  count -= 1;
  document.getElementById("count").innerText = count;
  displayProducts(cart, "cart");
};

