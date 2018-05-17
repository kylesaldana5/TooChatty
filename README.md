# Too Chatty 

A chat app that uses Twilio SMS service and watson to respond to text messages for you.

The backend is a Node server using Sequelize to interact with PostgreSQL data and serves it up via express.  The express server is also handling the signaling / listener from socket-io via a web socket.

The client side is built in React JS

To see it in action:

You will need react, ngrok, npm, yarn, postgresql and sequelize installed.

Clone the project to a local folder.

You will need to generate a secure key/certificate for ibm watson and twilio  ( named 'twilioNumber', 'twilioSID', 'twilioAuthToken','watsonUsername', 'watsonPassword', 'workspace_id' ) Which can be found in the server/controllers/sms-ctrl.js 

Then run the following commands:

```npm install```

```yarn dev```

Then point your browser at https://localhost:3000

***
### Here are some additional resources to help you get started

[Node Watson Setup](https://www.ibm.com/watson/developercloud/assistant/api/v1/node.html?node#introduction)

[Node Twilio Setup](https://www.twilio.com/docs/quickstart?filter-product=sms)

[Using ngrok to tunnel your local host](https://www.twilio.com/docs/usage/tutorials/how-use-ngrok-windows-and-visual-studio-test-webhooks)

