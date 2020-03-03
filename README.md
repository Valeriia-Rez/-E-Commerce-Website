# E-Commerce-Shop Project For EPAM Program

## Setup the project
This project requires npm to run.
By default all html files will use already compiled in Babel js scripts.
For development you need to uncomment all js scripts within html files.

```
git clone git@github.com:Valeriia-Rez/-E-Commerce-Website.git
cd -E-Commerce-Website
npm install 
npm run dev

```

To rebuild all js files in babel cli use similar command

```
npx babel js/pages/catalog.js --out-file dist/pages/catalog-compiled.js

```



