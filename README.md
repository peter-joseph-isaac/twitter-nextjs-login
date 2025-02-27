# Next.js Twitter (X) Authentication App

This application demonstrates how to implement Twitter authentication in a Next.js project using NextAuth.js. It provides a seamless login experience and efficient session management for users.

## Live Demo  
https://twitter-nextjs-login.vercel.app  

## Features

- Twitter OAuth 2.0 authentication
- Secure session management
- Built with Next.js for optimal performance

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation
- **NextAuth.js**: Authentication library for Next.js applications
- **Twitter API**: For OAuth 2.0 authentication

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Twitter Developer account and API keys

### Installation

1. Clone the repository:
git clone https://github.com/owpji/twitter-nextjs-login.git
cd twitter-nextjs-login

2. Install dependencies:
 npm install 

3. Set up environment variables:
Create a `.env` file in the root directory and add the following:  
TWITTER_API_KEY=YOUR-TWITTER-API-KEY  
TWITTER_API_SECRET=YOUR-TWITTER-API-SECRET  
NEXTAUTH_SECRET=YOUR-NEXTAUTH-SECRET  

4. Run the development server:
 npm run dev 

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Click on the "Sign in with Twitter" button on the homepage.
2. Authorize the application on Twitter.
3. You will be redirected back to the application, Twitter name will now display along with the Twitter Profile Picture and logout button. Now authenticated.

## Session Management

This application uses NextAuth.js for session management. Sessions are securely stored and can be accessed on both client and server-side.

## License

This project is licensed under the MIT License.

## **Contact**

For questions or feedback, feel free to reach out:

**Peter Isaac**  
- Linkedln: https://www.linkedin.com/in/peter-joseph-isaac
- GitHub: https://github.com/peter-joseph-isaac
