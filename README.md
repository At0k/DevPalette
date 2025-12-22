# DevPalette

A curated UI component gallery with live previews, copy-ready code, and essential dev tools for building modern websites.

## ✨ Features

- 🎨 **UI Component Gallery** - Browse and preview beautiful, modern UI components
- 📋 **Copy-Ready Code** - Instantly copy component code with syntax highlighting
- 🎨 **Color Palette Generator** - Create and export beautiful color schemes
- 📐 **Layout Generator** - Build responsive layouts visually
- 📱 **Responsive Tester** - Test your designs across different device sizes
- 📚 **Component Library** - Comprehensive documentation for all components
- 🎮 **Bonus: Unreal Engine Docs** - Guides for game development

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library
- **React Syntax Highlighter** - Code syntax highlighting

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/DevPalette.git

# Navigate to project directory
cd DevPalette

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The project includes a `vercel.json` configuration file that ensures:
- Proper SPA routing (all routes redirect to index.html)
- Optimized asset caching
- Correct build settings

## 📚 Documentation

- **[UI Components Quick Start](./QUICK_START.md)** - How to add and organize UI components
- **[Unreal Engine Documentation](./docs/unreal-engine/)** - Guides for Unreal Engine development
  - [Project Organization](./docs/unreal-engine/project-organization.md) - **Start here!** Best practices for organizing projects
  - [Orbit Camera Setup](./docs/unreal-engine/orbit-camera-setup.md) - Complete Orbit Camera setup guide
  - [UI & HUD Guide](./docs/unreal-engine/ui-hud-guide.md) - Build showroom-ready widgets and HUD
  - [Materials and Lighting](./docs/unreal-engine/materials-and-lighting.md) - Create materials and set up lighting
  - [Camera Implementation](./docs/unreal-engine/camera-implementation.md) - Technical explanation of camera system

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Built with ❤️ using React, TypeScript, and Vite**
