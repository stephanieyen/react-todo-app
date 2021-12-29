# Basic React todo app
Based on Jacky and Anson's [React tutorial](https://jzhao.xyz/posts/react/)!
Uses the [`min-react`](https://github.com/jackyzha0/min-react) template.

## Contents
```
src
├── App.js          # main React app
├── index.css       # root-level styling
└── index.js        # React entrypoint (where React gets inserted into the page)
```

## Config
### Styling
Root page styling is done in `src/index.css`. All component styling is done through [`styled-components`](https://styled-components.com/docs/basics#getting-started) (example in `src/App.js`).

### Page Metadata
To customize the font, page title, page icon, etc. you can customize the page skeleton over in `public/index.html`. 

All fonts are served through [Google Fonts](https://fonts.google.com/), you can pick and choose your own over there!

### Deployment
[Vercel](https://vercel.com/) is the recommended way to deploy this site to the internet. 