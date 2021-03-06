const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/beverage', label: 'Beverage' },
      { href: '/coffee-service', label: 'Coffee Service' },
      { href: '/equipment', label: 'Equipment' },
      { href: '/healthy-convenience', label: 'Healthy Convenience' },
      { href: '/management', label: 'Management' },
      { href: '/micro-market', label: 'Micro Market' },
      { href: '/products', label: 'Products' },
      { href: '/technology', label: 'Technology' },
    ],
  },
  secondary: {
    items: [
      { href: '/events', label: 'Events' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/directory', label: 'Product Guide' },
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/video-showcase', label: 'Video Showcase' },
      { href: '/365-retail-markets', label: '365 Retail Markets' },
      { href: '/covid-19', label: 'COVID-19' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/advertise', label: 'Advertise' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/beverage', label: 'Beverage' },
        { href: '/coffee-service', label: 'Coffee Service' },
        { href: '/equipment', label: 'Equipment' },
        { href: '/healthy-convenience', label: 'Healthy Convenience' },
        { href: '/management', label: 'Management' },
        { href: '/micro-market', label: 'Micro Market' },
        { href: '/products', label: 'Products' },
        { href: '/technology', label: 'Technology' },
        { href: '/webinars', label: 'Webcasts' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/events', label: 'Events' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/directory', label: 'Product Guide' },
        { href: '/video-showcase', label: 'Video Showcase' },
        { href: '/365-retail-markets', label: '365 Retail Markets' },
        { href: '/covid-19', label: 'COVID-19' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/advertise', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
