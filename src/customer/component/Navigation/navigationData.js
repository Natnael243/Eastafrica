export const navigation = {

  categories: [
    {
      id: 'homeCare',
      name: 'HOME CARE',
      featured: [
        {
          name: 'HOME CARE',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
      ],
      sections: [
        {
          id: 'product',
          name: 'TYPE OF PRODUCT',
          items: [
            { name: 'Detergent', href: '#' , },
            { name: 'Soap', href: '#' },
            { name: 'Liquid Product', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'personalCare',
      name: 'PERSONAL CARE',
      featured: [
        {
          name: 'Personal Care',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
      ],
      sections: [
        {
          id: 'bodyProduct',
          name: 'Body Product',
          items: [
            { name: 'Body Shampoo', href: '#' },
            { name: ' Body Soap', href: '#' },
            { name: 'Lotion', href: '#' },
          ],
        },
        {
          id: 'hairProduct',
          name: 'Hair Product',
          items: [
            { name: 'Hair Shampoo', href: '#' },
            { name: 'Hair Soap', href: '#' },
            { name: 'Hair Moisturizer', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}