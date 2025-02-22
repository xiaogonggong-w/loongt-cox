import { defineConfig } from 'unocss'

export default defineConfig({
    content: {
      pipeline: {
        include: [
          // the default
          /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
          // include js/ts files
          'src/**/*.{js,ts}',
        ],
        // exclude files
        // exclude: []
      },
    },
    shortcuts:[
      {
        'flex-center': 'flex justify-center items-center',
      }
    ],
    theme: {
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
      }
    },
    rules:[
      [/^w-(\d+)$/, ([, d]) => ({ width: `${d}px` })],
      [/^h-(\d+)$/, ([, d]) => ({ height: `${d}px` })],
      [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
      [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}px` })],
      [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${d}px` })],
      [/^pb-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}px` })],
      [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}px` })],
      [/^px-(\d+)$/, ([, d]) => ({ 
          'padding-left': `${d}px`,
          'padding-right': `${d}px`
      })],
      [/^py-(\d+)$/, ([, d]) => ({ 
          'padding-top': `${d}px`,
          'padding-bottom': `${d}px`
      })],

      // margin - all directions
      [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
      [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}px` })],
      [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${d}px` })],
      [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}px` })],
      [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}px` })],
      [/^mx-(\d+)$/, ([, d]) => ({ 
          'margin-left': `${d}px`,
          'margin-right': `${d}px`
      })],
      [/^my-(\d+)$/, ([, d]) => ({ 
          'margin-top': `${d}px`,
          'margin-bottom': `${d}px`
      })],
       // margin auto
       ['m-auto', { margin: 'auto' }],
       ['mt-auto', { 'margin-top': 'auto' }],
       ['mr-auto', { 'margin-right': 'auto' }],
       ['mb-auto', { 'margin-bottom': 'auto' }],
       ['ml-auto', { 'margin-left': 'auto' }],
       ['mx-auto', { 
           'margin-left': 'auto',
           'margin-right': 'auto'
       }],
       ['my-auto', { 
           'margin-top': 'auto',
           'margin-bottom': 'auto'
       }],

       // dynamic font size
       [/^text-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
    ]
  })