const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Shop', url: '/shop' },
  { id: 3, title: 'Panier', url: '/cart' },
];

const tableHeading = [
  { id: 1, title: 'Produit' },
  { id: 2, title: 'Prix' },
  { id: 3, title: 'Quantité' },
  { id: 4, title: 'Total' },
];

const cartList = [
  {
    size: 43,
    quantity: 1,
    salePrice: 45,
    color: 'Noir',
    regularPrice: 55,
    title: 'Nike Air Sneakers',
    image: '/img/photos/sth1.jpg',
    id: '62f3bac114a90b9c05bce066',
  },
  {
    size: 43,
    quantity: 1,
    salePrice: 0,
    color: 'Divers',
    regularPrice: 55,
    title: 'Headphones',
    image: '/img/photos/sth2.jpg',
    id: '62f3bad7afb837063e6e3de6',
  },
  {
    quantity: 1,
    salePrice: 0,
    color: 'Noir',
    regularPrice: 55,
    title: 'Apple Watch',
    image: '/img/photos/sth3.jpg',
    id: '62f3bb3a8ee7c0fd2d072f52',
  },
];

const orderSummeryRow = [
  {
    name: 'Sous-total',
    value: {
      amount: 135.99,
      parentClass: 'pe-0 text-end',
      childClass: 'price',
    },
  },
  {
    name: 'Réduction',
    value: {
      amount: 6.8,
      parentClass: 'pe-0 text-end',
      childClass: 'price text-red',
    },
  },
  {
    name: 'Livraison',
    value: { amount: 10, parentClass: 'pe-0 text-end', childClass: 'price' },
  },
  {
    name: 'Total',
    value: {
      amount: 152.79,
      parentClass: 'pe-0 text-end',
      childClass: 'price text-dark fw-bold',
    },
  },
];

export { breadcrumb, tableHeading, cartList, orderSummeryRow };
