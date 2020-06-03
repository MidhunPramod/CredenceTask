# CredenceTask

To run the server , after cloning the repo run the command in the
main directory of the project
-> npm install (will download all the dependencies)

-> npm start (will start the server)

To run the server on custom port , add a .env file in the
main directory and add a PORT = <YourPort> in the file,
otherwise by default the server will run on port 3000.

Ex: PORT = 1234

Routes

get('/') -> will show all the data in the database
post('/add) -> will add a new entry in the database