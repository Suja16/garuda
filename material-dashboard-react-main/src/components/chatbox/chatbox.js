import React, { Component } from 'react';
import './chatbox.css';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  // Function to handle user input
  handleInputChange = (event) => {
    this.setState({ newMessage: event.target.value });
  };

  // Function to send a new message
  sendMessage = () => {
    const { newMessage, messages } = this.state;
    if (newMessage.trim() === '') {
      return;
    }

    const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];

    this.setState({
      messages: updatedMessages,
      newMessage: '',
    });

    // You can send the user's message to an API or another function for processing here

    // Simulate a response from a chatbot (you can replace this with actual responses)
    setTimeout(() => {
      const botResponse = 'This is a sample response from the chatbot.';
      const updatedMessages = [...this.state.messages, { text: botResponse, sender: 'bot' }];
      this.setState({ messages: updatedMessages });
    }, 1000);
  };

  render() {
    const { messages, newMessage } = this.state;

    return (
        <DashboardLayout>
        <DashboardNavbar />
        <div className="chat-box">
          <div className="chat-title">Garuda Chatbox</div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={this.handleInputChange}
            />
            <button onClick={this.sendMessage}>Send</button>
          </div>
        </div>
        </DashboardLayout>
    );
  }
}

export default ChatBox;
