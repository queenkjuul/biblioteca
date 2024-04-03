# La Biblioteca

A feature complete CRUD app written from scratch using React, SASS, Express, Sequelize, and MySQL. Originally written for a class assignment, it is here for posterity and for potential employers.

## Running the code

I intend to get this deployed to DigitalOcean under my own website domain, but I am not sure how quickly this will happen. You can start the local dev server by cloning the repo and running:

    cd server
    npm install
    npm run start:dev

npm scripts in the server directory should start all necessary processes, including `npm i`

## About the code

The project was written in stages, first with `json-server` to simulate a backend, then with Express calling a cloud-based MySQL server. However, my license to access the MySQL instance expired when I finished the class, and I do not want to deal with the headache of self-hosting a MySQL instance nor paying for one from DO, so I am using json-server again as a replacement. The original Sequelize code and MySQL config is left in place (but either commented or no longer imported) for inspection.

[my-json-server.typicode.com](https://my-json-server.typicode.com) provides a read-only (but simulates a read-write) json-server instance, which I'm using to minimize necessary work. The Express backend and React frontend are probably on Render servers. Once upon a time I wanted to self-host this as a learning excercise, which I'm sure I could do without too much headache using Caddy and my remaining free Oracle Cloud credits, but it's not worth it.

The database does not persist changes, though write calls will report as successful. However running locally will persist changes (and modify the db.json on your filesystem)

There are a couple bugs introduced in the migration back to json-server from Sequelize that I do not have time to fix.
