# Lit Web Components Challenges

This repository contains a set of small projects built using [Lit](https://lit.dev/), a modern web components library. The goal is to reinforce my knowledge of Lit 3 and get comfortable building modular, maintainable components — useful both for modern development and understanding legacy Polymer codebases.

## 🚀 Challenges

### 1. HelloUser
A simple component that greets the user with a customizable name using reactive properties.

> `<hello-user name="Will"></hello-user>`

### 2. SimpleCounter
A basic counter component with increment and reset functionality.

> Features:
> - Reactive property (`count`)
> - Event handlers for buttons
> - Styling with scoped CSS

### 3. CounterApp (Component Composition)
A more advanced example demonstrating parent-child communication using custom events and property binding.

> Components:
> - `<counter-app>` (parent)
> - `<counter-app-display>` (displays the counter)
> - `<counter-app-buttons>` (emits increment/decrement events)

## 📦 Tech Stack

- **Lit 3**
- Vanilla JavaScript (ES Modules)
- Web Components
- HTML & CSS
- No frameworks, no build tools

## 🎯 Learning Goals

- Understand Lit's component model
- Master reactive properties and lifecycle
- Implement custom events for child → parent communication
- Build UI logic with separation of concerns

## 🧠 Notes

These challenges are part of my personal learning journey to grow as a web developer and contribute to real-world projects using Lit and Polymer-based stacks.

---

Made with ❤️ by [victorwcv]
