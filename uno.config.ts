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
    ]
  })