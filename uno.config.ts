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
        'flex-between': 'flex justify-between',
        'flex-around': 'flex justify-around',
        'flex-evenly': 'flex justify-evenly',
        'flex-start': 'flex justify-start',
        'flex-col-center': 'flex  items-center',
        'flex-1': 'flex-1',
      },
      {
        'c-pointer': 'cursor-pointer',
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
      },
      width: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'full': '100%',
        'half': '50%',
        'screen': '100vw',
      },
      height:{
        'full': '100%',
        'half': '50%',
        'screen': '100vh',
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

      // 基础边框线 - 使用 --border-color 作为默认颜色
      [/^border$/, () => ({ 'border': '1px solid var(--border-color, #e5e7eb)' })],
      [/^border-(t|r|b|l)$/, ([, d]) => {
        const directions = {
          t: 'top',
          r: 'right',
          b: 'bottom',
          l: 'left'
        }
        return { [`border-${directions[d]}`]: '1px solid var(--border-color, #e5e7eb)' }
      }],

      // 边框宽度
      [/^border-(\d+)$/, ([, d]) => ({ 'border-width': `${d}px` })],

      // 边框颜色 - 使用更具体的匹配模式
      [/^border-(primary|success|warning|danger|info|light|dark)$/, ([, c]) => ({ 'border-color': `var(--${c})` })],
    ]
  })