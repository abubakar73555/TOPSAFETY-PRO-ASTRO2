import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'الرئيسية',
      links: [
        {
          text: 'تجديد رخصة البلدية',
          href: getPermalink('تجديد-رخصة-البلدية'),
        },
        {
          text: 'تجديد رخصة الدفاع المدني',
          href: getPermalink('تجديد-ترخيص-الدفاع-المدني'),
        },
        {
          text: 'تقرير فني بلدي',
          href: getPermalink('تقرير-فني-بلدي'),
        },
        {
          text: 'شهادة تركيبات ادوات السلامة ',
          href: getPermalink('شهاده-سلامه'),
        },
      ],
    },
    {
      text: 'الخدمات',
      links: [
        {
          text: 'الخدمات',
          href: getPermalink('/#features'),
        },
        {
          text: 'خدماتنا',
          href: getPermalink('/services'),
        },
      ],
    },

    {
      text: 'المدونة',
      links: [
        {
          text: 'قائمة المقالات',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
  actions: [{ text: 'تواصل واتس اب ', href: 'https://wa.me/966572140531', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: 'جميع الخدمات', href: getPermalink('/جميع-الخدمات') }],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://topsafetypro.com/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://topsafetypro.com/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://topsafetypro.com/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://topsafetypro.com/"> topsafetypro</a> · All rights reserved.
  `,
};
