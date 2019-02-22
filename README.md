# NextJS Starter Kit

## Setup

```sh
git clone https://github.com/dzunigamendez/next-starter-kit
cd next-starter-kit
npm install
```

## Run dev server

```sh
npm run dev
```

## Run prod server

```sh
npm run build
npm start
```

## Create Next.js app from scratch

### Create `package.json` file

```sh
mkdir next-starter-kit
cd next-starter-kit
npm init
```

### Setup nextjs app

[Here](https://nextjs.org/docs/#setup) more information

```sh
npm install --save next react react-dom
```

### Add scripts to `package.json` file

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

### Create index page

- Create `pages` directory
- Create `pages/index.js` file
- Create Home react component

```jsx
function Home() {
  return <div>Welcome to next.js!</div>;
}

export default Home;
```

### Start up the application

```sh
npm run dev
```

### Next.js + CSS/SASS/POSTCSS

- Install dev dependencies

```sh
npm install --save-dev @zeit/next-css @zeit/next-sass node-sass
npm install --save-dev postcss-loader autoprefixer
```

- Create `next.config.js` file

```javascript
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCss(withSass());
```

- Create `postcss.config.js` file

```javascript
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [autoprefixer],
};
```

### Sample structure

- `components` - React components
- `sass` - SASS code
- `static` - Images

### Sample pages

- `pages/index.js` - Link examples
- `pages/mavel.js` - Marvel CSS grid example
- `pages/veggies.js` - Veggies CSS grid example
- `pages/scrollmagic.js` - ScrollMagic example
