class Product {
  //   title = 'Default';
  //   imageUrl;
  //   description;
  //   price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
    this.render();
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
    this.totalOutput = cartEl.querySelector('h2');
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
              <div>
                <img src="${this.product.imageUrl}" alt=${this.product.title}">
                <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
                </div>
              </div>
              `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  products = [
    new Product(
      'Pillow',
      'https://res.cloudinary.com/teepublic/image/private/s--fZ96Pv8a--/c_crop,x_10,y_10/c_fit,h_946/c_crop,g_north_west,h_1051,w_1051,x_-25,y_-86/l_upload:v1507037314:production:blanks:gbajnunp66ec7xftnpq1/fl_layer_apply,g_north_west,x_-130,y_-185/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1570669335/production/designs/6269689_0.jpg',
      'Itachi Uchiha pillow',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://www.giftcartoon.com/wp-content/uploads/2019/12/Demon-Slayer-Ultra-Soft-Indoor-Modern-Area-Rugs-Fluffy-Living-Room-Carpets-Suitable-for-Children-Bedroom-1.jpg',
      'Demon Slayer carpet',
      89.99
    )
  ];

  constructor(renderHookId) {
    super(renderHookId);
    this.render();
  }

  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list')
    ]);
    for (const prod of this.products) {
      new ProductItem(prod, 'prod-list');
    }
  }
}

class Shop extends Component {
    constructor() {
        super();
    }

  render() {
    this.cart = new ShoppingCart('app');
    
    new ProductList('app');
    
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
