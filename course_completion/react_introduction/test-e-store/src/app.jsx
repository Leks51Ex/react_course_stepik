import React from "react";

const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

function Header() {
  const hour = new Date().getHours();
  const openHours = 9;
  const closeHours = 21;

  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <header>
      <h1>Electroinc Store</h1>
      <nav>
        <ul>
          <li>
            Home
            <a href="#home"></a>
          </li>
          <li>
            Catalog
            <a href="#catalog"></a>
          </li>
          <li>
            About us
            <a href="#about"></a>
          </li>
          <li>
            Contacts
            <a href="#contacts"></a>
          </li>
        </ul>
      </nav>
      <div>
        {isOpen ? (
          <p>
            We are curently open. Hours: {openHours}:00 - {closeHours}:00
          </p>
        ) : (
          <p>
            We are curently closed. Hours:{openHours}:00 - {closeHours}:00
          </p>
        )}
      </div>
    </header>
  );
}

// function HeaderFromElement() {
//   return React.createElement(
//     "header",
//     null,
//     React.createElement("h1", null, "Electronic")
//   );
// }

function Catalog() {
  return (
    <main>
      <ul>
        <Product />
      </ul>
    </main>
  );
}

function Product() {
  const products = [...productData];

  return (
    <li>
      <img src={products[1].photoName} alt="" />
      <div>
        <h3>{products[1].name}</h3>
        <p>{products[1].description}</p>
        <span>{products[1].price}</span>
      </div>
    </li>
  );
}

function Footer() {
  return <footer>Footer</footer>;
}

export default App;
