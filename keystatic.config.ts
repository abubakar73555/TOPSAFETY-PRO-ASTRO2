import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'abubakar73555/TOPSAFETY-PRO-ASTRO',
  },
  collections: {
    posts: collection({
      label: 'التدوينات',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'العنوان' } }),
        description: fields.text({ label: 'الوصف' }),
        publishDate: fields.date({ label: 'تاريخ النشر' }),
        category: fields.text({ label: 'التصنيف', validation: { isRequired: false } }),
        tags: fields.array(fields.text({ label: 'وسم' }), { label: 'الوسوم' }),
        draft: fields.checkbox({ label: 'مسودة', defaultValue: false }),
        body: fields.markdoc({ label: 'المحتوى' }),
      },
    }),
    pages: collection({
      label: 'الصفحات',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'العنوان' } }),
        description: fields.text({ label: 'الوصف', validation: { isRequired: false } }),
        body: fields.markdoc({ label: 'المحتوى' }),
      },
    }),
  },
});
