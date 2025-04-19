SPS-Project
Welcome to the backend of our application!

Please follow the instructions below to get the server up and running locally. If you follow these steps carefully, you should be able to run the backend without encountering any errors.

📦 Step 1: Install Dependencies
Navigate to the server folder and install all dependencies:

bash
Copy
Edit
npm install
🛠️ Step 2: Install DynamoDB Locally
Before installing DynamoDB, make sure that Java Runtime Environment (JRE) is already installed on your machine.

👉 Download DynamoDB Local
Visit the official AWS page to download DynamoDB Local:
DynamoDB Local - Official AWS Documentation

Download the ZIP file and extract it to a location of your choice.

▶️ Step 3: Start DynamoDB
To start DynamoDB on your machine:

Open Command Prompt (CMD).

Run the following command (replace the path accordingly):

bash
Copy
Edit
java -Djava.library.path="path_to_folder"/DynamoDBLocal_lib -jar "path_to_folder"/DynamoDBLocal.jar -sharedDb
✅ Example:
bash
Copy
Edit
java -Djava.library.path=C:\Users\Deon\Documents\SPS-Project\client\dynamodb_local\DynamoDBLocal_lib -jar C:\Users\Deon\Documents\SPS-Project\client\dynamodb_local\DynamoDBLocal.jar -sharedDb
This will start the local DynamoDB server.
