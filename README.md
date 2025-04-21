
# TalkSmart Chatbot – Real Estate Assistant

This is a lightweight GPT-powered chatbot built for real estate agents using Node.js and OpenAI's gpt-3.5-turbo.

## Features
- Simple chat UI
- GPT-3.5-turbo backend
- Hosted on Azure App Service

## Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/intikhabkhan/talksmart-chatbot.git
cd talksmart-chatbot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Environment Variables
Create a `.env` file:
```
OPENAI_API_KEY=your-key-here
```

### 4. Run Locally
```bash
npm start
```

### 5. Deploy to Azure
- Create an Azure App Service
- Deploy code
- Set your `OPENAI_API_KEY` in Azure App Service > Configuration > Application settings

You're live!
