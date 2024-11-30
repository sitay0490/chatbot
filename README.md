# 🤖 AI Chat Application

A modern, responsive chat application built with React, TypeScript, and Material UI that supports multiple AI providers (OpenAI and Anthropic).

## ✨ Features

- 💬 Chat with multiple AI models
- 🌓 Light/Dark mode support
- 📱 Fully responsive design
- 💾 Chat history persistence
- 🔄 Easy switching between AI providers
- ⚡ Real-time streaming responses

### 🧱 React & Design Principles

1. **💫 SOLID Principles**

   - Single Responsibility: Each component has a single, well-defined purpose
   - Open/Closed: Services are extensible for new AI providers
   - Interface Segregation: Clean component props interfaces
   - Dependency Inversion: Abstract ChatService base class

2. **🏛️ Component Patterns**

   - Container/Presentational pattern
   - Composition over inheritance
   - Hooks for reusable logic
   - Memo for performance optimization

3. **🔄 State Management**
   - React's useReducer for complex state
   - Centralized state management
   - Immutable state updates
   - Action-based state modifications

### 🌐 API Service Architecture

1. **🏭 Factory Pattern**

   - APIService factory for creating provider instances
   - Abstract ChatService base class
   - Provider-specific implementations

2. **🎯 Singleton Pattern**

   - Single instance of each service provider
   - Efficient API key management

3. **🔄 Strategy Pattern**
   - Swappable AI providers
   - Consistent interface across providers

### 🎨 Styling Approach

1. **💅 Material UI**

   - Chosen for:
     - Comprehensive component library
     - Built-in theming system
     - Responsive design utilities
     - TypeScript support
     - Consistent styling API

2. **🎭 Styling Structure**

   - Theme-based styling
   - Responsive breakpoints
   - CSS-in-JS with emotion
   - Centralized style definitions

3. **📱 Responsive Design**
   - Mobile-first approach
   - Breakpoint-based layouts
   - Flexible component sizing
   - Drawer navigation for mobile

## 🚀 Getting Started

### ⚙️ Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- API keys for OpenAI and/or Anthropic

### 🛠️ Installation

1. Clone the repository:

bash
git clone [repository-url]
cd ai-chat-app

2. Install dependencies:

bash
npm install

env
VITE_OPENAI_API_KEY=your_openai_key
VITE_ANTHROPIC_API_KEY=your_anthropic_key

### 📝 Usage

- 🔄 Select AI provider from the dropdown
- ➕ Start a new chat or continue existing ones
- 💬 Type messages and receive AI responses
- 🌓 Toggle between light/dark themes
- 📱 Use mobile-friendly interface on smaller screens

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
