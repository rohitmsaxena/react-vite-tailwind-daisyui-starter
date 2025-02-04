# React + Vite + Tailwind + DaisyUI Template

<div style="display: flex; align-items: center; gap: 10px;">
  <img src="public/daisyui.svg" alt="daisyui" width="50" height="50"> 
  <img src="public/vite.svg" alt="vite" width="50" height="50">
  <img src="src/assets/react.svg" alt="react" width="50" height="50">
</div>

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/rohitmsaxena/react-vite-tailwind-daisyui-starter.svg)](https://github.com/rohitmsaxena/react-vite-tailwind-daisyui-starter/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/rohitmsaxena/react-vite-tailwind-daisyui-starter.svg)](https://github.com/rohitmsaxena/react-vite-tailwind-daisyui-starter/network)

🚀 **A modern starter template for building React applications** with **Vite**, **Tailwind CSS**, and **Daisy UI**. This template is lightweight, fast, and highly customizable, making it perfect for your next project.

It also includes a **GitHub Action** that automatically updates the `package.json` name based on the repository name.

---

## 🌟 Features

- **⚡ Fast Development** – Powered by Vite for lightning-fast builds and hot module replacement (HMR).
- **🎨 Beautiful UI** – Pre-configured with Tailwind CSS and Daisy UI for stunning, responsive designs.
- **🤖 Auto-Renaming** – GitHub Action updates `package.json` with the repository name automatically.
- **🚀 Minimal Setup** – Just clone, install dependencies, and start coding.
- **📦 Optimized Builds** – Vite's build process ensures small bundle sizes and fast load times.
- **🛠️ Customizable** – Easily extend or modify Tailwind and Daisy UI configurations to suit your needs.

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/rohitmsaxena/react-vite-tailwind-daisyui-starter.git
cd react-vite-tailwind-daisyui-starter
```

### **2️⃣   Install Dependencies**

```sh
npm install
```

### **3️⃣ Start the Development Server**
```sh
npm run dev
```
Open your browser and navigate to http://localhost:3000 to see your app running.

## 🛠️ Customization

### **Tailwind CSS Configuration**
You can customize Tailwind CSS by editing the `tailwind.config.js` file. Add or modify themes, plugins, and more to suit your project's needs.

### **Daisy UI Themes**
Daisy UI comes with multiple themes out of the box. To change the theme, modify the `daisyui` section in `tailwind.config.js`:

```js
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Add or remove themes as needed
  },
};
```

### GitHub Action for Auto-Renaming
The included GitHub Action automatically updates the package.json name field to match your repository name. No manual configuration is required.

## 📂 Project Structure
```
react-vite-tailwind-daisyui-starter/
├── public/            # Static assets
├── src/               # Source code
│   ├── assets/        # Images, icons, etc.
│   ├── components/    # React components
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Entry point
├── .github/           # GitHub Actions and workflows
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js     # Vite configuration
├── package.json       # Project dependencies and scripts
└── README.md          # You're here!
```

## 🤝 Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeatureName).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeatureName).
5. Open a pull request.

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](https://chat.deepseek.com/a/chat/s/LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the blazing-fast build tool.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [Daisy UI](https://daisyui.com/) for the beautiful component library.
- [React](https://reactjs.org/) for the amazing UI library.