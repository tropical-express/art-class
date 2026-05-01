<div align="center">

  <img src="public/assets/images/icon.png" width="120" />

  <h1> Art Class Reimagined</h1>

  <p>
    A <b>desktop application</b> built with Electron featuring games, apps, tools, and a built-in proxy system.
  </p>

  <!-- BADGES -->
  <img src="https://img.shields.io/github/repo-size/tropical-express/art-class?style=for-the-badge" />
  <img src="https://img.shields.io/github/stars/tropical-express/art-class?style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/tropical-express/art-class?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/tropical-express/art-class?style=for-the-badge" />

</div>

---

## 🖥️ What This Is

**Art Class Reimagined is a desktop application (NOT just a website).**

It runs as a standalone app on Windows using Electron and includes:

- 🎮 Built-in game library
- 🌐 Proxy browsing system
- 🧩 Emulator support
- ⚡ Fast local UI (no browser required)
- 🖥️ Native desktop window experience

---

## 🚀 Key Features

- 🖥️ Fully packaged desktop app (.exe build available)
- ⚡ Instant startup loading screen
- 🎮 Integrated games and tools hub
- 🌐 Built-in proxy system (for browsing inside the app)
- 🧩 Emulator / legacy app support
- 🎨 Custom UI designed for desktop use

---

## 📦 Desktop Application (Important)

This project is designed to be used as a **desktop app**, not a traditional website.

You can:

- Run it locally with Electron
- Build it into a Windows executable (.exe)
- Distribute it as a standalone application

---

## 📁 Project Structure

```text
art-class/
│
├── electron.cjs          # Electron desktop runtime
├── package.json
├── LICENSE
│
├── public/
│   ├── index.html        # Main app UI (loaded inside Electron)
│   ├── loading.html      # Startup loading screen
│   └── assets/
│       └── images/
│           └── icon.png
│
└── dist/                 # Built desktop app output
```
---
## ⚙️ Installation
1. Clone the repository

   ```git clone https://github.com/YOUR_USERNAME/art-class.git
cd art-class```

2. Install dependencies

   ```pnpm install```

  
  ## ▶️ Run the Desktop App

   ```npm start```

This will launch the Electron desktop application window.
---
## 📦 Build Windows App (.exe)

To package it as a real desktop application:

npm run dist

Output:

dist/
 ├── ArtClass.exe
 ├── win-unpacked/
---
## 🧠 How It Works
Electron launches a native desktop window
Loads the app UI locally
Shows a loading screen during startup
Runs entirely inside a desktop environment (not a browser tab)
---
🎯 Tech Stack


Electron (Desktop framework)


Node.js


HTML / CSS / JavaScript


electron-builder (packaging)
---


##⚠️ Important Notice
This is a desktop application project.
It is not intended to be used as a hosted web service.
---
## 📜 License
This project is licensed under the GNU General Public License v3.0 (GPL-3.0).
You are free to:


Use


Modify


Distribute


But any modified versions must remain open-source under the same license.
👉 See LICENSE
---
## ⭐ Support
If you like this project:


⭐ Star the repo


🍴 Fork it


📢 Share it
