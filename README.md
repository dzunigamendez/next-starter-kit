# NextJS Application

Basic concepts

## Create `package.json` file

```sh
npm init
```

## Setup nextjs app

[Here](https://nextjs.org/docs/#setup) more information

```sh
npm install --save next react react-dom
```

## Add scripts to `package.json` file

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

## Create index page

- Create `pages` directory
- Create `pages/index.js` file
- Create Home react component

```jsx
function Home() {
  return <div>Welcome to next.js!</div>;
}

export default Home;
```

## Start up the application

```sh
npm run dev
```

## Next.js + CSS/SASS

- Install dev dependencies

```sh
npm install --save-dev @zeit/next-css @zeit/next-sass node-sass
```

- Create `next.config.js` file

```javascript
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCss(withSass());
```

## Sample pages

- `pages/index.js` - Link examples
- `pages/mavel.js` - Marvel CSS grid example
- `pages/veggies.js` - Veggies CSS grid example
