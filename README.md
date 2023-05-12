# WikiMap Project

WikiMap is a user-friendly web application that allows you to create, customize, and share interactive maps.

With WikiMap, you can add, edit, and delete pins on maps to mark points of interest and share information with other users. WikiMap is the perfect tool for planning trips, finding great restauraunts, or simply identifying places that are important to you.

You can see snippets of the application in the screenshots below.


## Getting Started

1. Install dependencies: `npm i`
2. Fix to binaries for sass: `npm rebuild node-sass`
3. Create and connect your psql database
4. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
4. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
5. Visit `http://localhost:8080/`

## Screenshots

!['Screenshot of home page.](https://github.com/hoomili/wikiMap/blob/master/public/Homepage.png?raw=true)
!['Screenshot of map page.](https://github.com/hoomili/wikiMap/blob/master/public/Map%20page.png?raw=true)
!['Screenshot of create new map page.'](https://github.com/hoomili/wikiMap/blob/master/public/Create%20new%20map%20page.png)


## Dependencies
Built with the following dependencies:
- Node 
- NPM 
- PG 
- Morgan 
- Sass 
- EJS 
- Cookie parser 
- Chalk
- Nodemon
- Dotenv
 