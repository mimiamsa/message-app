## Description

I achieve the test using RTK query for the store/api part. I used Chackra Ui as to build the components and the layout.

# App Launching :

1. first install package with

`yarn`

2. then run

`yarn build `

3. to launch the app run

`yarn dev `

# Exercise :

- Display a list of all the conversations -> ok
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users. -> ok
  - As a user, you can type and send new messages in this conversation ->
- Accessibility: front visual basic are there, but it would deserve more work (button status are ther)

# Trouble shouting :

- Testing, I started writing the test but I could not mock the data using next and RTK query which caused some frustrations. I don't regret using RTK and digging into it but it was very time consuming and I have to look more into it for sure. I'd defenitly want to spend more time on the tests to make them work properly.
