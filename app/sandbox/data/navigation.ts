// demos links
const demos = [
  { id: 1, url: "/themes/demo-1", title: "Demo I", thumnail: "mi1" },
  { id: 2, url: "/themes/demo-2", title: "Demo II", thumnail: "mi2" },
  { id: 3, url: "/themes/demo-3", title: "Demo III", thumnail: "mi3" },
  { id: 4, url: "/themes/demo-4", title: "Demo VI", thumnail: "mi4" },
  { id: 5, url: "/themes/demo-5", title: "Demo V", thumnail: "mi5" },
  { id: 6, url: "/themes/demo-6", title: "Demo VI", thumnail: "mi6" },
  { id: 7, url: "/themes/demo-7", title: "Demo VII", thumnail: "mi7" },
  { id: 8, url: "/themes/demo-8", title: "Demo VIII", thumnail: "mi8" },
  { id: 9, url: "/themes/demo-9", title: "Demo IX", thumnail: "mi9" },
  { id: 10, url: "/themes/demo-10", title: "Demo X", thumnail: "mi10" },
  { id: 11, url: "/themes/demo-11", title: "Demo XI", thumnail: "mi11" },
  { id: 12, url: "/themes/demo-12", title: "Demo XII", thumnail: "mi12" },
  { id: 13, url: "/themes/demo-13", title: "Demo XIII", thumnail: "mi13" },
  { id: 14, url: "/themes/demo-14", title: "Demo XIV", thumnail: "mi14" },
  { id: 15, url: "/themes/demo-15", title: "Demo XV", thumnail: "mi15" },
  { id: 16, url: "/themes/demo-16", title: "Demo XVI", thumnail: "mi16" },
  { id: 17, url: "/themes/demo-17", title: "Demo XVII", thumnail: "mi17" },
  { id: 18, url: "/themes/demo-18", title: "Demo XVIII", thumnail: "mi18" },
  { id: 19, url: "/themes/demo-19", title: "Demo XIX", thumnail: "mi19" },
  { id: 20, url: "/themes/demo-20", title: "Demo XX", thumnail: "mi20" },
  { id: 21, url: "/themes/demo-21", title: "Demo XXI", thumnail: "mi21" },
  { id: 22, url: "/themes/demo-22", title: "Demo XXI", thumnail: "mi22" },
  { id: 23, url: "/themes/demo-23", title: "Demo XXI", thumnail: "mi23" },
  { id: 24, url: "/themes/demo-24", title: "Demo XXI", thumnail: "mi24" },
  { id: 25, url: "/themes/demo-25", title: "Demo XXI", thumnail: "mi25" },
  { id: 26, url: "/themes/demo-26", title: "Demo XXI", thumnail: "mi26" },
  { id: 27, url: "/themes/demo-27", title: "Demo XXI", thumnail: "mi27" },
  { id: 28, url: "/themes/demo-28", title: "Demo XXI", thumnail: "mi28" },
  { id: 29, url: "/themes/demo-29", title: "Demo XXI", thumnail: "mi29" },
  { id: 30, url: "/themes/demo-30", title: "Demo XXI", thumnail: "mi30" },
  { id: 31, url: "/themes/demo-31", title: "Demo XXI", thumnail: "mi31" },
  { id: 32, url: "/themes/demo-32", title: "Demo XXI", thumnail: "mi32" },
  { id: 33, url: "/themes/demo-33", title: "Demo XXI", thumnail: "mi33" },
  { id: 34, url: "/themes/demo-34", title: "Demo XXI", thumnail: "mi34" }
];


const demosasp = [
  { id: 1, url: "/themes-asp/demo-asp-1", title: "Demo I", thumnail: "mi1" },
  { id: 2, url: "/themes-asp/demo-asp-2", title: "Demo II", thumnail: "mi2" },
  { id: 3, url: "/themes-asp/demo-asp-3", title: "Demo III", thumnail: "mi3" },
  { id: 4, url: "/themes-asp/demo-asp-4", title: "Demo VI", thumnail: "mi4" },
  { id: 5, url: "/themes-asp/demo-asp-5", title: "Demo V", thumnail: "mi5" },
  { id: 6, url: "/themes-asp/demo-asp-6", title: "Demo VI", thumnail: "mi6" },
  { id: 7, url: "/themes-asp/demo-asp-7", title: "Demo VII", thumnail: "mi7" },
  { id: 8, url: "/themes-asp/demo-asp-8", title: "Demo VIII", thumnail: "mi8" },
  { id: 9, url: "/themes-asp/demo-asp-9", title: "Demo IX", thumnail: "mi9" },
  { id: 10, url: "/themes-asp/demo-asp-10", title: "Demo X", thumnail: "mi10" },
  { id: 11, url: "/themes-asp/demo-asp-11", title: "Demo XI", thumnail: "mi11" },
  { id: 12, url: "/themes-asp/demo-asp-12", title: "Demo XII", thumnail: "mi12" },
  { id: 13, url: "/themes-asp/demo-asp-13", title: "Demo XIII", thumnail: "mi13" },
  { id: 14, url: "/themes-asp/demo-asp-14", title: "Demo XIV", thumnail: "mi14" },
  { id: 15, url: "/themes-asp/demo-asp-15", title: "Demo XV", thumnail: "mi15" },
  { id: 16, url: "/themes-asp/demo-asp-16", title: "Demo XVI", thumnail: "mi16" },
  { id: 17, url: "/themes-asp/demo-asp-17", title: "Demo XVII", thumnail: "mi17" },
  { id: 18, url: "/themes-asp/demo-asp-18", title: "Demo XVIII", thumnail: "mi18" },
  { id: 19, url: "/themes-asp/demo-asp-19", title: "Demo XIX", thumnail: "mi19" },
  { id: 20, url: "/themes-asp/demo-asp-20", title: "Demo XX", thumnail: "mi20" },
  { id: 21, url: "/themes-asp/demo-asp-21", title: "Demo XXI", thumnail: "mi21" },
  { id: 22, url: "/themes-asp/demo-asp-22", title: "Demo XXI", thumnail: "mi22" },
  { id: 23, url: "/themes-asp/demo-asp-23", title: "Demo XXI", thumnail: "mi23" },
  { id: 24, url: "/themes-asp/demo-asp-24", title: "Demo XXI", thumnail: "mi24" },
  { id: 25, url: "/themes-asp/demo-asp-25", title: "Demo XXI", thumnail: "mi25" },
  { id: 26, url: "/themes-asp/demo-asp-26", title: "Demo XXI", thumnail: "mi26" },
  { id: 27, url: "/themes-asp/demo-asp-27", title: "Demo XXI", thumnail: "mi27" },
  { id: 28, url: "/themes-asp/demo-asp-28", title: "Demo XXI", thumnail: "mi28" },
  { id: 29, url: "/themes-asp/demo-asp-29", title: "Demo XXI", thumnail: "mi29" },
  { id: 30, url: "/themes-asp/demo-asp-30", title: "Demo XXI", thumnail: "mi30" },
  { id: 31, url: "/themes-asp/demo-asp-31", title: "Demo XXI", thumnail: "mi31" },
  { id: 32, url: "/themes-asp/demo-asp-32", title: "Demo XXI", thumnail: "mi32" },
  { id: 33, url: "/themes-asp/demo-asp-33", title: "Demo XXI", thumnail: "mi33" },
  { id: 34, url: "/themes-asp/demo-asp-34", title: "Demo XXI", thumnail: "mi34" }
];

// pages navigations
const pages = [
  {
    id: 21,
    title: "Services",
    children: [
      { id: 211, title: "Services I", url: "/themes/services-1" },
      { id: 212, title: "Services II", url: "/themes/services-2" }
    ]
  },
  {
    id: 22,
    title: "À propos",
    children: [
      { id: 221, title: "About I", url: "/themes/about-1" },
      { id: 222, title: "About II", url: "/themes/about-2" }
    ]
  },
  {
    id: 23,
    title: "E-Commerce",
    children: [
      { id: 231, title: "Shop I", url: "/themes/shop-1" },
      { id: 232, title: "Shop II", url: "/themes/shop-2" },
      { id: 233, title: "Product Page", url: "/themes/products/1" },
      { id: 234, title: "Shopping Cart", url: "/themes/cart" },
      { id: 235, title: "Checkout", url: "/themes/checkout" }
    ]
  },
  {
    id: 24,
    title: "Contact",
    children: [
      { id: 241, title: "Contact I", url: "/themes/contact-1" },
      { id: 242, title: "Contact II", url: "/themes/contact-2" },
      { id: 243, title: "Contact III", url: "/themes/contact-3" }
    ]
  },
  {
    id: 25,
    title: "Carrière",
    children: [
      { id: 251, title: "Job Listing I", url: "/themes/career-1" },
      { id: 252, title: "Job Listing II", url: "/themes/career-2" },
      { id: 253, title: "Job Description", url: "/themes/jobs/1" }
    ]
  },
  {
    id: 26,
    title: "Module Connexion",
    children: [
      { id: 261, title: "404 Not Found", url: "/asdasdasdasd" },
      { id: 262, title: "Login I", url: "/themes/login-1" },
      { id: 263, title: "Login II", url: "/themes/login-2" },
      { id: 264, title: "Register I", url: "/themes/register-1" },
      { id: 265, title: "Register II", url: "/themes/register-2" },
      { id: 266, title: "Terms & Conditions", url: "/themes/terms" }
    ]
  }
];

// projects pages link
const projectsNavigation = [
  {
    title: "Projets",
    children: [
      { id: 1, title: "Project I", url: "/themes/projects-1" },
      { id: 2, title: "Project II", url: "/themes/projects-2" },
      { id: 3, title: "Project III", url: "/themes/projects-3" },
      { id: 4, title: "Project VI", url: "/themes/projects-4" }
    ]
  },
  {
    title: "Page D'exemple",
    children: [
      { id: 1, title: "Single Project I", url: "/themes/single-project-1" },
      { id: 2, title: "Single Project II", url: "/themes/single-project-2" },
      { id: 3, title: "Single Project III", url: "/themes/single-project-3" },
      { id: 4, title: "Single Project VI", url: "/themes/single-project-4" }
    ]
  }
];

// blog pages links
const blogsNavigation = [
  { id: 1, url: "/themes/blog-1", title: "Blog without Sidebar" },
  { id: 2, url: "/themes/blog-2", title: "Blog with Sidebar" },
  { id: 3, url: "/themes/blog-3", title: "Blog with Left Sidebar" },
  {
    id: 4,
    url: null,
    title: "Blog Posts",
    children: [
      { id: 41, url: "/themes/blog-details-1", title: "Post without Sidebar" },
      { id: 42, url: "/themes/blog-details-2", title: "Post with Sidebar" },
      { id: 43, url: "/themes/blog-details-3", title: "Post with Left Sidebar" }
    ]
  }
];

// documentation pages links
const documentationNavigation = {
  usage: [
    { id: 1, title: "Commencer", url: "/docs" },
    // { id: 2, title: 'Forms', url: '#' },
    { id: 3, title: "FAQ", url: "/docs/faq" },
    { id: 4, title: "Changelog", url: "/docs/changelog" },
    { id: 5, title: "Credits", url: "/docs/credits" }
  ],
  styleguide: [
    { id: 0, title: "Theme", url: "/docs/styleguide/theme" },
    { id: 1, title: "Colors", url: "/docs/styleguide/colors" },
    { id: 2, title: "Fonts", url: "/docs/styleguide/fonts" },
    { id: 3, title: "SVG Icons", url: "/docs/styleguide/svg-icons" },
    { id: 4, title: "Font Icons", url: "/docs/styleguide/font-icons" },
    { id: 5, title: "Illustrations", url: "/docs/styleguide/illustrations" },
    { id: 6, title: "Backgrounds", url: "/docs/styleguide/backgrounds" },
    { id: 7, title: "Misc", url: "/docs/styleguide/misc" }
  ],
  elements: [
    { id: 1, title: "Accordion", url: "/docs/elements/accordions" },
    { id: 2, title: "Alerts", url: "/docs/elements/alerts" },
    { id: 3, title: "Animations", url: "/docs/elements/animations" },
    { id: 4, title: "Avatars", url: "/docs/elements/avatars" },
    { id: 5, title: "Background", url: "/docs/elements/background" },
    { id: 6, title: "Badges", url: "/docs/elements/badges" },
    { id: 7, title: "Buttons", url: "/docs/elements/buttons" },
    { id: 8, title: "Card", url: "/docs/elements/card" },
    { id: 9, title: "Carousel", url: "/docs/elements/carousel" },
    { id: 10, title: "Dividers", url: "/docs/elements/dividers" },
    { id: 11, title: "Form Elements", url: "/docs/elements/form-elements" },
    { id: 12, title: "Image Hover", url: "/docs/elements/image-hover" },
    { id: 13, title: "Image Mask", url: "/docs/elements/image-mask" },
    { id: 14, title: "Lightbox", url: "/docs/elements/lightbox" },
    { id: 15, title: "Media Player", url: "/docs/elements/media-player" },
    { id: 16, title: "Modal", url: "/docs/elements/modal" },
    { id: 17, title: "Pagination", url: "/docs/elements/pagination" },
    { id: 18, title: "Progressbar", url: "/docs/elements/progressbar" },
    { id: 19, title: "Shadows", url: "/docs/elements/shadows" },
    { id: 20, title: "Shapes", url: "/docs/elements/shapes" },
    { id: 21, title: "Tables", url: "/docs/elements/tables" },
    { id: 22, title: "Tabs", url: "/docs/elements/tabs" },
    { id: 23, title: "Text Animations", url: "/docs/elements/text-animation" },
    { id: 24, title: "Text Highlight", url: "/docs/elements/text-highlight" },
    { id: 25, title: "Tiles", url: "/docs/elements/tiles" },
    // { id: 26, title: 'Tooltips & Popovers', url: '/docs/elements/tooltips-popovers' },
    { id: 27, title: "Typography", url: "/docs/elements/typography" }
  ]
};
// blocks pages links
const blocksNavigation = [
  { id: 1, url: "/docs/blocks/about", title: "About", thumnail: "/img/demos/block1.svg" },
  { id: 2, url: "/docs/blocks/blog", title: "Blog", thumnail: "/img/demos/block2.svg" },
  {
    id: 3,
    url: "/docs/blocks/call-to-action",
    title: "Call to Action",
    thumnail: "/img/demos/block3.svg"
  },
  { id: 4, url: "/docs/blocks/clients", title: "Clients", thumnail: "/img/demos/block4.svg" },
  { id: 5, url: "/docs/blocks/contact", title: "Contact", thumnail: "/img/demos/block5.svg" },
  { id: 6, url: "/docs/blocks/facts", title: "Facts", thumnail: "/img/demos/block6.svg" },
  { id: 7, url: "/docs/blocks/faq", title: "FAQ", thumnail: "/img/demos/block7.svg" },
  { id: 8, url: "/docs/blocks/features", title: "Features", thumnail: "/img/demos/block8.svg" },
  { id: 9, url: "/docs/blocks/footer", title: "Footer", thumnail: "/img/demos/block9.svg" },
  { id: 10, url: "/docs/blocks/hero", title: "Hero", thumnail: "/img/demos/block10.svg" },
  { id: 11, url: "/docs/blocks/navbar", title: "Navbar", thumnail: "/img/demos/block11.svg" },
  { id: 12, url: "/docs/blocks/portfolio", title: "Portfolio", thumnail: "/img/demos/block12.svg" },
  { id: 13, url: "/docs/blocks/pricing", title: "Pricing", thumnail: "/img/demos/block13.svg" },
  { id: 14, url: "/docs/blocks/process", title: "Process", thumnail: "/img/demos/block14.svg" },
  { id: 15, url: "/docs/blocks/team", title: "Team", thumnail: "/img/demos/block15.svg" },
  {
    id: 16,
    url: "/docs/blocks/testimonials",
    title: "Testimonials",
    thumnail: "/img/demos/block16.svg"
  }
];

export {
  demos,
  demosasp,
  pages,
  blogsNavigation,
  blocksNavigation,
  projectsNavigation,
  documentationNavigation
};
