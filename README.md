# gitdetails

### About
***

A webapp to get the details of a github user's repostories and commits

### Tech-Stack
***
* ReactJS
* NodeJS
* MongoDB

### Setting up the Project for Development
***

Open git bash, and clone this repository by running the following command

##### `git clone https://github.com/abhineetpandey10/gitdetails.git`

Now, open the command terminal, navigate into the directory where you cloned this repository using the **`cd`** command, and then hop into the **ExpenseBuddy** directory by using the command **`cd ExpenseBuddy`**
* Navigate into the **client** folder by using the command **`cd gitdetails/client`**, and run the command **`npm install`**. This would install all the required dependencies for the client side of the project.
* Now, navigate into the **server** folder by using the command **`cd ../server`**, and run the command **`npm install`**. 

Now, go to [**MongoDB Atlas**](https://www.mongodb.com/cloud/atlas) and create a free-tier cluster here. From here, you need the ***MongoDB Connection String***. You may look [here](https://docs.mongodb.com/guides/cloud/connectionstring/) to know more on how to get the ***MongoDB Connection String***. Copy the connection string, and then on your local machine inside the **gitdetails** folder, navigate to the **server** folder and create a
**.env** file with the following ***environment variables***

##### **`URI=MongoDB_Connection_String`**
\
***Congratulations! You've setup the project on your local machine for development.***

### Running and Testing the Project
***
* Open the command terminal, navigate into the **gitdetails/client** directory, and run the **`npm start`** command to start the React Development server on PORT 3000.
* Open the command terminal, navigate into the **gitdetails/server** directory, and run the **`npm start`** command to start the NodeJS Development server on default PORT 3001. The default port can be changed by adding an environment variable named `PORT` in the **.env** file present within the **server** folder of the project
