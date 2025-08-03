# Vue Chat Application

A modern chat application built with Nuxt 3, Vue.js, Pinia, and Tailwind CSS.

## Features

- 🏠 **Home Page**: Welcome page with navigation to chat
- 💬 **Chat Interface**: Real-time chat with bot responses
- 🤖 **Bot Integration**: Automatic bot replies with random delays
- 💾 **State Management**: Message persistence using Pinia
- 🎨 **Modern UI**: Responsive design with Tailwind CSS
- ⚡ **TypeScript Support**: Full TypeScript integration
- 📱 **Mobile Friendly**: Responsive design for all devices

## Technologies Used

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **Frontend**: [Vue.js 3](https://vuejs.org/) with Composition API
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: JavaScript

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Usage

1. **Home Page**: Visit the root URL to see the welcome page
2. **Start Chatting**: Click "Start Chatting →" to navigate to the chat interface
3. **Send Messages**: Type your message and press Enter or click Send
4. **Bot Responses**: The bot will automatically respond to your messages
5. **Clear Chat**: Use the "Clear Chat" button to reset the conversation

## Project Structure

```
app/
├── pages/
│   ├── index.vue          # Home page
│   └── chat.vue           # Chat interface
├── stores/
│   └── chat.ts            # Pinia store for chat state
└── app.vue                # Main app component

.github/
└── copilot-instructions.md # GitHub Copilot instructions

nuxt.config.ts              # Nuxt configuration
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm  
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
