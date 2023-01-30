export type Navigation = {
  type: string;
  name: string;
  key: string;
  route: string;
  component?: any;
  collapse?: Navigation[];
};

const navigations: Navigation[] = [
  {
    type: "collapse",
    name: "Marketplace",
    key: "marketplace",
    route: "/marketplace",
  },
  {
    type: "collapse",
    name: "Blog & News",
    key: "blog_news",
    route: "/blog_news",
  },
  {
    type: "collapse",
    name: "FAQ",
    key: "faq",
    route: "/faq",
  },
  {
    type: "collapse",
    name: "Contact us",
    key: "contact_us",
    route: "/contact_us",
  },
];

export default navigations;
