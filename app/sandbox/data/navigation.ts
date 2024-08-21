// demos links
const demos = [
  { id: 1, url: "/sandbox/themes/demo-1", title: "Demo I", thumnail: "mi1" },
  { id: 2, url: "/sandbox/themes/demo-2", title: "Demo II", thumnail: "mi2" },
  { id: 3, url: "/sandbox/themes/demo-3", title: "Demo III", thumnail: "mi3" },
  { id: 4, url: "/sandbox/themes/demo-4", title: "Demo VI", thumnail: "mi4" },
  { id: 5, url: "/sandbox/themes/demo-5", title: "Demo V", thumnail: "mi5" },
  { id: 6, url: "/sandbox/themes/demo-6", title: "Demo VI", thumnail: "mi6" },
  { id: 7, url: "/sandbox/themes/demo-7", title: "Demo VII", thumnail: "mi7" },
  { id: 8, url: "/sandbox/themes/demo-8", title: "Demo VIII", thumnail: "mi8" },
  { id: 9, url: "/sandbox/themes/demo-9", title: "Demo IX", thumnail: "mi9" },
  { id: 10, url: "/sandbox/themes/demo-10", title: "Demo X", thumnail: "mi10" },
  { id: 11, url: "/sandbox/themes/demo-11", title: "Demo XI", thumnail: "mi11" },
  { id: 12, url: "/sandbox/themes/demo-12", title: "Demo XII", thumnail: "mi12" },
  { id: 13, url: "/sandbox/themes/demo-13", title: "Demo XIII", thumnail: "mi13" },
  { id: 14, url: "/sandbox/themes/demo-14", title: "Demo XIV", thumnail: "mi14" },
  { id: 15, url: "/sandbox/themes/demo-15", title: "Demo XV", thumnail: "mi15" },
  { id: 16, url: "/sandbox/themes/demo-16", title: "Demo XVI", thumnail: "mi16" },
  { id: 17, url: "/sandbox/themes/demo-17", title: "Demo XVII", thumnail: "mi17" },
  { id: 18, url: "/sandbox/themes/demo-18", title: "Demo XVIII", thumnail: "mi18" },
  { id: 19, url: "/sandbox/themes/demo-19", title: "Demo XIX", thumnail: "mi19" },
  { id: 20, url: "/sandbox/themes/demo-20", title: "Demo XX", thumnail: "mi20" },
  { id: 21, url: "/sandbox/themes/demo-21", title: "Demo XXI", thumnail: "mi21" },
  { id: 22, url: "/sandbox/themes/demo-22", title: "Demo XXI", thumnail: "mi22" },
  { id: 23, url: "/sandbox/themes/demo-23", title: "Demo XXI", thumnail: "mi23" },
  { id: 24, url: "/sandbox/themes/demo-24", title: "Demo XXI", thumnail: "mi24" },
  { id: 25, url: "/sandbox/themes/demo-25", title: "Demo XXI", thumnail: "mi25" },
  { id: 26, url: "/sandbox/themes/demo-26", title: "Demo XXI", thumnail: "mi26" },
  { id: 27, url: "/sandbox/themes/demo-27", title: "Demo XXI", thumnail: "mi27" },
  { id: 28, url: "/sandbox/themes/demo-28", title: "Demo XXI", thumnail: "mi28" },
  { id: 29, url: "/sandbox/themes/demo-29", title: "Demo XXI", thumnail: "mi29" },
  { id: 30, url: "/sandbox/themes/demo-30", title: "Demo XXI", thumnail: "mi30" },
  { id: 31, url: "/sandbox/themes/demo-31", title: "Demo XXI", thumnail: "mi31" },
  { id: 32, url: "/sandbox/themes/demo-32", title: "Demo XXI", thumnail: "mi32" },
  { id: 33, url: "/sandbox/themes/demo-33", title: "Demo XXI", thumnail: "mi33" },
  { id: 34, url: "/sandbox/themes/demo-34", title: "Demo XXI", thumnail: "mi34" }
];


const demosasp = [
  { id: 1, url: "/sandbox/themes-asp/demo-asp-1", title: "Demo I", thumnail: "mi1" },
  { id: 2, url: "/sandbox/themes-asp/demo-asp-2", title: "Demo II", thumnail: "mi2" },
  { id: 3, url: "/sandbox/themes-asp/demo-asp-3", title: "Demo III", thumnail: "mi3" },
  { id: 4, url: "/sandbox/themes-asp/demo-asp-4", title: "Demo VI", thumnail: "mi4" },
  { id: 5, url: "/sandbox/themes-asp/demo-asp-5", title: "Demo V", thumnail: "mi5" },
  { id: 6, url: "/sandbox/themes-asp/demo-asp-6", title: "Demo VI", thumnail: "mi6" },
  { id: 7, url: "/sandbox/themes-asp/demo-asp-7", title: "Demo VII", thumnail: "mi7" },
  { id: 8, url: "/sandbox/themes-asp/demo-asp-8", title: "Demo VIII", thumnail: "mi8" },
  { id: 9, url: "/sandbox/themes-asp/demo-asp-9", title: "Demo IX", thumnail: "mi9" },
  { id: 10, url: "/sandbox/themes-asp/demo-asp-10", title: "Demo X", thumnail: "mi10" },
  { id: 11, url: "/sandbox/themes-asp/demo-asp-11", title: "Demo XI", thumnail: "mi11" },
  { id: 12, url: "/sandbox/themes-asp/demo-asp-12", title: "Demo XII", thumnail: "mi12" },
  { id: 13, url: "/sandbox/themes-asp/demo-asp-13", title: "Demo XIII", thumnail: "mi13" },
  { id: 14, url: "/sandbox/themes-asp/demo-asp-14", title: "Demo XIV", thumnail: "mi14" },
  { id: 15, url: "/sandbox/themes-asp/demo-asp-15", title: "Demo XV", thumnail: "mi15" },
  { id: 16, url: "/sandbox/themes-asp/demo-asp-16", title: "Demo XVI", thumnail: "mi16" },
  { id: 17, url: "/sandbox/themes-asp/demo-asp-17", title: "Demo XVII", thumnail: "mi17" },
  { id: 18, url: "/sandbox/themes-asp/demo-asp-18", title: "Demo XVIII", thumnail: "mi18" },
  { id: 19, url: "/sandbox/themes-asp/demo-asp-19", title: "Demo XIX", thumnail: "mi19" },
  { id: 20, url: "/sandbox/themes-asp/demo-asp-20", title: "Demo XX", thumnail: "mi20" },
  { id: 21, url: "/sandbox/themes-asp/demo-asp-21", title: "Demo XXI", thumnail: "mi21" },
  { id: 22, url: "/sandbox/themes-asp/demo-asp-22", title: "Demo XXI", thumnail: "mi22" },
  { id: 23, url: "/sandbox/themes-asp/demo-asp-23", title: "Demo XXI", thumnail: "mi23" },
  { id: 24, url: "/sandbox/themes-asp/demo-asp-24", title: "Demo XXI", thumnail: "mi24" },
  { id: 25, url: "/sandbox/themes-asp/demo-asp-25", title: "Demo XXI", thumnail: "mi25" },
  { id: 26, url: "/sandbox/themes-asp/demo-asp-26", title: "Demo XXI", thumnail: "mi26" },
  { id: 27, url: "/sandbox/themes-asp/demo-asp-27", title: "Demo XXI", thumnail: "mi27" },
  { id: 28, url: "/sandbox/themes-asp/demo-asp-28", title: "Demo XXI", thumnail: "mi28" },
  { id: 29, url: "/sandbox/themes-asp/demo-asp-29", title: "Demo XXI", thumnail: "mi29" },
  { id: 30, url: "/sandbox/themes-asp/demo-asp-30", title: "Demo XXI", thumnail: "mi30" },
  { id: 31, url: "/sandbox/themes-asp/demo-asp-31", title: "Demo XXI", thumnail: "mi31" },
  { id: 32, url: "/sandbox/themes-asp/demo-asp-32", title: "Demo XXI", thumnail: "mi32" },
  { id: 33, url: "/sandbox/themes-asp/demo-asp-33", title: "Demo XXI", thumnail: "mi33" },
  { id: 34, url: "/sandbox/themes-asp/demo-asp-34", title: "Demo XXI", thumnail: "mi34" }
];

// pages navigations
const pages = [
  {
    id: 21,
    title: "Services",
    children: [
      { id: 211, title: "Services I", url: "/sandbox/themes/services-1" },
      { id: 212, title: "Services II", url: "/sandbox/themes/services-2" }
    ]
  },
  {
    id: 22,
    title: "About",
    children: [
      { id: 221, title: "About I", url: "/sandbox/themes/about-1" },
      { id: 222, title: "About II", url: "/sandbox/themes/about-2" }
    ]
  },
  {
    id: 23,
    title: "Shop",
    children: [
      { id: 231, title: "Shop I", url: "/sandbox/themes/shop-1" },
      { id: 232, title: "Shop II", url: "/sandbox/themes/shop-2" },
      { id: 233, title: "Product Page", url: "/sandbox/themes/products/1" },
      { id: 234, title: "Shopping Cart", url: "/sandbox/themes/cart" },
      { id: 235, title: "Checkout", url: "/sandbox/themes/checkout" }
    ]
  },
  {
    id: 24,
    title: "Contact",
    children: [
      { id: 241, title: "Contact I", url: "/sandbox/themes/contact-1" },
      { id: 242, title: "Contact II", url: "/sandbox/themes/contact-2" },
      { id: 243, title: "Contact III", url: "/sandbox/themes/contact-3" }
    ]
  },
  {
    id: 25,
    title: "Career",
    children: [
      { id: 251, title: "Job Listing I", url: "/sandbox/themes/career-1" },
      { id: 252, title: "Job Listing II", url: "/sandbox/themes/career-2" },
      { id: 253, title: "Job Description", url: "/sandbox/themes/jobs/1" }
    ]
  },
  {
    id: 26,
    title: "Utility",
    children: [
      { id: 261, title: "404 Not Found", url: "/asdasdasdasd" },
      { id: 262, title: "Login I", url: "/sandbox/themes/login-1" },
      { id: 263, title: "Login II", url: "/sandbox/themes/login-2" },
      { id: 264, title: "Register I", url: "/sandbox/themes/register-1" },
      { id: 265, title: "Register II", url: "/sandbox/themes/register-2" },
      { id: 266, title: "Terms & Condition", url: "/sandbox/themes/terms" }
    ]
  }
];

// projects pages link
const projectsNavigation = [
  {
    title: "PROJECT PAGES",
    children: [
      { id: 1, title: "Project I", url: "/sandbox/themes/projects-1" },
      { id: 2, title: "Project II", url: "/sandbox/themes/projects-2" },
      { id: 3, title: "Project III", url: "/sandbox/themes/projects-3" },
      { id: 4, title: "Project VI", url: "/sandbox/themes/projects-4" }
    ]
  },
  {
    title: "SINGLE PROJECTS",
    children: [
      { id: 1, title: "Single Project I", url: "/sandbox/themes/single-project-1" },
      { id: 2, title: "Single Project II", url: "/sandbox/themes/single-project-2" },
      { id: 3, title: "Single Project III", url: "/sandbox/themes/single-project-3" },
      { id: 4, title: "Single Project VI", url: "/sandbox/themes/single-project-4" }
    ]
  }
];

// blog pages links
const blogsNavigation = [
  { id: 1, url: "/sandbox/themes/blog-1", title: "Blog without Sidebar" },
  { id: 2, url: "/sandbox/themes/blog-2", title: "Blog with Sidebar" },
  { id: 3, url: "/sandbox/themes/blog-3", title: "Blog with Left Sidebar" },
  {
    id: 4,
    url: null,
    title: "Blog Posts",
    children: [
      { id: 41, url: "/sandbox/themes/blog-details-1", title: "Post without Sidebar" },
      { id: 42, url: "/sandbox/themes/blog-details-2", title: "Post with Sidebar" },
      { id: 43, url: "/sandbox/themes/blog-details-3", title: "Post with Left Sidebar" }
    ]
  }
];

// documentation pages links
const documentationNavigation = {
  usage: [
    { id: 1, title: "Commencer", url: "/sandbox/docs" },
    // { id: 2, title: 'Forms', url: '#' },
    { id: 3, title: "FAQ", url: "/sandbox/docs/faq" },
    { id: 4, title: "Changelog", url: "/sandbox/docs/changelog" },
    { id: 5, title: "Credits", url: "/sandbox/docs/credits" }
  ],
  styleguide: [
    { id: 0, title: "Theme", url: "/sandbox/docs/styleguide/theme" },
    { id: 1, title: "Colors", url: "/sandbox/docs/styleguide/colors" },
    { id: 2, title: "Fonts", url: "/sandbox/docs/styleguide/fonts" },
    { id: 3, title: "SVG Icons", url: "/sandbox/docs/styleguide/svg-icons" },
    { id: 4, title: "Font Icons", url: "/sandbox/docs/styleguide/font-icons" },
    { id: 5, title: "Illustrations", url: "/sandbox/docs/styleguide/illustrations" },
    { id: 6, title: "Backgrounds", url: "/sandbox/docs/styleguide/backgrounds" },
    { id: 7, title: "Misc", url: "/sandbox/docs/styleguide/misc" }
  ],
  elements: [
    { id: 1, title: "Accordion", url: "/sandbox/docs/elements/accordions" },
    { id: 2, title: "Alerts", url: "/sandbox/docs/elements/alerts" },
    { id: 3, title: "Animations", url: "/sandbox/docs/elements/animations" },
    { id: 4, title: "Avatars", url: "/sandbox/docs/elements/avatars" },
    { id: 5, title: "Background", url: "/sandbox/docs/elements/background" },
    { id: 6, title: "Badges", url: "/sandbox/docs/elements/badges" },
    { id: 7, title: "Buttons", url: "/sandbox/docs/elements/buttons" },
    { id: 8, title: "Card", url: "/sandbox/docs/elements/card" },
    { id: 9, title: "Carousel", url: "/sandbox/docs/elements/carousel" },
    { id: 10, title: "Dividers", url: "/sandbox/docs/elements/dividers" },
    { id: 11, title: "Form Elements", url: "/sandbox/docs/elements/form-elements" },
    { id: 12, title: "Image Hover", url: "/sandbox/docs/elements/image-hover" },
    { id: 13, title: "Image Mask", url: "/sandbox/docs/elements/image-mask" },
    { id: 14, title: "Lightbox", url: "/sandbox/docs/elements/lightbox" },
    { id: 15, title: "Media Player", url: "/sandbox/docs/elements/media-player" },
    { id: 16, title: "Modal", url: "/sandbox/docs/elements/modal" },
    { id: 17, title: "Pagination", url: "/sandbox/docs/elements/pagination" },
    { id: 18, title: "Progressbar", url: "/sandbox/docs/elements/progressbar" },
    { id: 19, title: "Shadows", url: "/sandbox/docs/elements/shadows" },
    { id: 20, title: "Shapes", url: "/sandbox/docs/elements/shapes" },
    { id: 21, title: "Tables", url: "/sandbox/docs/elements/tables" },
    { id: 22, title: "Tabs", url: "/sandbox/docs/elements/tabs" },
    { id: 23, title: "Text Animations", url: "/sandbox/docs/elements/text-animation" },
    { id: 24, title: "Text Highlight", url: "/sandbox/docs/elements/text-highlight" },
    { id: 25, title: "Tiles", url: "/sandbox/docs/elements/tiles" },
    // { id: 26, title: 'Tooltips & Popovers', url: '/docs/elements/tooltips-popovers' },
    { id: 27, title: "Typography", url: "/sandbox/docs/elements/typography" }
  ]
};

// blocks pages links
const blocksNavigation = [
  { id: 1, url: "/sandbox/docs/blocks/about", title: "About", thumnail: "/img/sandbox/demos/block1.svg" },
  { id: 2, url: "/sandbox/docs/blocks/blog", title: "Blog", thumnail: "/img/sandbox/demos/block2.svg" },
  {
    id: 3,
    url: "/sandbox/docs/blocks/call-to-action",
    title: "Call to Action",
    thumnail: "/img/sandbox/demos/block3.svg"
  },
  { id: 4, url: "/sandbox/docs/blocks/clients", title: "Clients", thumnail: "/img/sandbox/demos/block4.svg" },
  { id: 5, url: "/sandbox/docs/blocks/contact", title: "Contact", thumnail: "/img/sandbox/demos/block5.svg" },
  { id: 6, url: "/sandbox/docs/blocks/facts", title: "Facts", thumnail: "/img/sandbox/demos/block6.svg" },
  { id: 7, url: "/sandbox/docs/blocks/faq", title: "FAQ", thumnail: "/img/sandbox/demos/block7.svg" },
  { id: 8, url: "/sandbox/docs/blocks/features", title: "Features", thumnail: "/img/sandbox/demos/block8.svg" },
  { id: 9, url: "/sandbox/docs/blocks/footer", title: "Footer", thumnail: "/img/sandbox/demos/block9.svg" },
  { id: 10, url: "/sandbox/docs/blocks/hero", title: "Hero", thumnail: "/img/sandbox/demos/block10.svg" },
  { id: 11, url: "/sandbox/docs/blocks/navbar", title: "Navbar", thumnail: "/img/sandbox/demos/block11.svg" },
  { id: 12, url: "/sandbox/docs/blocks/portfolio", title: "Portfolio", thumnail: "/img/sandbox/demos/block12.svg" },
  { id: 13, url: "/sandbox/docs/blocks/pricing", title: "Pricing", thumnail: "/img/sandbox/demos/block13.svg" },
  { id: 14, url: "/sandbox/docs/blocks/process", title: "Process", thumnail: "/img/sandbox/demos/block14.svg" },
  { id: 15, url: "/sandbox/docs/blocks/team", title: "Team", thumnail: "/img/sandbox/demos/block15.svg" },
  {
    id: 16,
    url: "/sandbox/docs/blocks/testimonials",
    title: "Testimonials",
    thumnail: "/img/sandbox/demos/block16.svg"
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
