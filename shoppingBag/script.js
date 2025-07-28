



let Imgfolder = [
  {
    img: "https://imgs.search.brave.com/6uTonkzWwGJ50kuUj-Yh4LNPDbYvNot1_DwewaCYY64/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXNwaXJlYXV0b3Bh/cnRzLnVzL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzEwL0JM/VUUtQk1XLVNFREFO/LmpwZw",
    Name: "Blue BMW Sedan",
    Price: " 30000",
    id: "1",
  },

  {
    img: "https://imgs.search.brave.com/eV6Iwi_1pBfVeMf_atqAQBq-4lJt6p4Z9X2A7JOPUj4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2FyZ3VydXMu/Y29tL2ltYWdlcy9m/b3JzYWxlLzIwMjUv/MDYvMTcvMTcvMjYv/MjAxNl9tZXJjZWRl/cy1iZW56X2FtZ19n/dC1waWMtMzYwNTgx/MzQ5MjUwNDk1Mzc5/NC0xMDI0eDc2OC5q/cGVnP2lvPXRydWUm/d2lkdGg9NjQwJmhl/aWdodD00ODAmZml0/PWJvdW5kcyZmb3Jt/YXQ9anBnJmF1dG89/d2VicA",
    Name: "Gray Mercedez Benz AMG",
    Price: " 50000",
    id: "2",
  },

  {
    img: "https://imgs.search.brave.com/k8ISaJ4b9hAvp7_PLs1LcJvPEmKLs9I9jpHs_9RodLU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzg3LzIwLzE5/LzM2MF9GXzExODcy/MDE5MDBfTmlQWDc2/T0FmT3VncmRiNnls/c3BnY1hTMzdrakg4/OUsuanBn",
    Name: "Blue Alpine Car",
    Price: " 40000",
    id: "3",
  },

  {
    img: "https://imgs.search.brave.com/p2kvlAqPI3yYy19imrG79SsOKDltii5lb56u_i4A5Aw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTg3/OTE3OS5qcGc",
    Name: "Black Audi A Series",
    Price: " 60000",
    id: "4",
  },
];

let prodectFolder = [
  {
    img: "https://i.pinimg.com/736x/8b/18/8b/8b188b01c93c5040af4bd5b9b5083c88.jpg",
    Name: "Range Rover",
    id: "1",
    prise: "2000000",
  },
  {
    img: "https://i.pinimg.com/736x/3d/98/fb/3d98fb7161c4b4209f354b144b674aa8.jpg",
    Name: "Bmw black color",
    id: "2",  
    prise: "2500000",
  },
  {
    img: "https://i.pinimg.com/736x/e5/91/ac/e591acebebf3fb99cccec30f5a2121f1.jpg",
    Name: "G-Wagen",
    id: "3",
    prise: "300000000",
  },
  {
    img: "https://i.pinimg.com/1200x/62/8f/99/628f99c63d9ee92504ebccf01059832c.jpg",
    Name: "Mercedez Benz",
    id: "4",
    prise: "500000000",
  },
];

let addTocart = [] 



function displayPicture() {
  let clutter = ``;
  Imgfolder.forEach((element,idx) => {
    clutter += `
    <div class="cart-fill">
         <div class="img-icons">
           <img src="${element.img}" alt="cart image" id="img">
          </div>
          <p>${element.Name}</p>
          <p id="p">${element.id}</p>
          <div class="matrails">
          <h3> Rs ${element.Price}</h3>
          <i data-index="${idx}" class="ri-add-line" id="icons-2"></i>
        </div>
      </div>
    `;
  });
  let display = (document.querySelector(".cart").innerHTML = clutter);
}

function displayProduct() {
  let  clutter = '';
  prodectFolder.forEach( (element) => {
    clutter += `
  <div class="product">
    <div class="product-info1">
         <img src="${element.img}" alt="product image" id="img1">
       </div>
        <div class="product-info">
          <p>${element.Name}</p>
          <p id="p">${element.id}</p>
          <h3>Rs ${element.prise}</h3>
        </div>
      </div>
    `;
  })
  document.querySelector(".product-fill").innerHTML = clutter;
}

function ProductBycart() {
  let cart = document.querySelector(".cart");
  cart.addEventListener("click", function(e) {  
    if (e.target.classList.contains("ri-add-line")) {
        addTocart.push(Imgfolder[e.target.dataset.index]);
    }
  })
}

function displayCart() {

   let boxicons = document.querySelector("#icons12");

   boxicons.addEventListener("click", function(e) {
    e.preventDefault();
      document.querySelector(".boxicons").style.display = "block";

      let clutter = '';
       addTocart.forEach((det) => {
         clutter += `
              <div class="info">
    <div class="icons-info1">
         <img src="${det.img}" id="img3">
    </div>
    <div class="icons-info2">
      <h3>${det.Name}</h3>
      <p>0 items</p>
      <p> total Rs ${det.Price}2000</p>
    </div>
          </div>
         `;
       })
      document.querySelector(".boxicons").innerHTML = clutter;
   })

   boxicons.addEventListener("blur", function() {
      document.querySelector(".boxicons").style.display = "none";
      console.log("clicked");

   })

}


displayCart();
ProductBycart()
displayProduct()
displayPicture();




