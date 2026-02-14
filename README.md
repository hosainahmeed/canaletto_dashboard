# Canaletto Dashboard

A modern, responsive admin dashboard built with React, TypeScript, and Vite. Features role-based access control, dynamic routing, and a beautiful UI built with Tailwind CSS and shadcn/ui components.

## ✨ Features

- **🔐 Role-Based Access Control** - Multi-role system with Admin, Property Admin, Content Admin, and Support Member roles
- **🎨 Modern UI/UX** - Built with Tailwind CSS, shadcn/ui components, and smooth animations with Framer Motion
- **📱 Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **⚡ Fast Development** - Powered by Vite for lightning-fast development and builds
- **🛡️ Type-Safe** - Written entirely in TypeScript for better code quality and developer experience
- **🎯 Component-Based** - Modular architecture with reusable components
- **🚀 Dynamic Routing** - React Router-based navigation with role-specific routes

## 🏗️ Tech Stack

### Core Technologies
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **React Router** - Declarative routing for React

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Icon library
- **Hugeicons** - Additional icon set
- **Framer Motion** - Animation library

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hosainahmeed/canaletto_dashboard.git
   cd canaletto_dashboard_vite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Application header
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── menu.tsx        # Navigation menu configuration
├── lib/                # Utility libraries
│   ├── roles.ts        # Role definitions and types
│   ├── utils.ts        # Utility functions
│   └── redirects.ts    # Route redirection logic
├── pages/              # Page components
│   └── Dashboard.tsx   # Main dashboard page
├── routers/            # Route definitions
│   ├── MainLayOut.tsx  # Main layout component
│   ├── BrowserRouter.tsx # Router configuration
│   └── *Routes.tsx     # Role-specific route definitions
├── assets/             # Static assets
├── App.tsx             # Root application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 👥 User Roles

The dashboard supports four distinct user roles:

### 🛡️ Admin
- **Access**: Full system administration
- **Routes**: `/admin/dashboard`
- **Permissions**: Manage all aspects of the system

### 🏢 Property Admin
- **Access**: Property management features
- **Routes**: `/property-admin/dashboard`
- **Permissions**: Manage properties, listings, and related content

### 📝 Content Admin
- **Access**: Content management system
- **Routes**: `/content-admin/dashboard`
- **Permissions**: Manage website content, articles, and media

### 💬 Support Member
- **Access**: Customer support tools
- **Routes**: `/support-manager/dashboard`
- **Permissions**: Handle customer inquiries, chat support, and profile management

## 🎯 Key Components

### Header Component
- Responsive navigation header
- Sidebar toggle functionality
- User profile section

### Sidebar Component
- Dynamic menu based on user role
- Collapsible design
- Icon-based navigation items

### Role-Based Routing
- Automatic navigation based on user role
- Protected routes with role validation
- Fallback navigation for unauthorized access

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Canaletto Dashboard
```

### Role Configuration
Roles are defined in `src/lib/roles.ts`:

```typescript
export const ROLES = {
  ADMIN: 'admin',
  PROPERTY_ADMIN: 'property_admin',
  CONTENT_ADMIN: 'content_admin',
  SUPPORT_MEMBER: 'support_member',
} as const
```

## 🎨 Customization

### Adding New Roles
1. Update `ROLES` object in `src/lib/roles.ts`
2. Add role-specific routes in the appropriate `*Routes.tsx` file
3. Update menu items in `src/components/menu.tsx`
4. Add navigation logic in `src/routers/MainLayOut.tsx`

### Theme Customization
The project uses Tailwind CSS for styling. Customize the theme by modifying:
- `tailwind.config.js` (if present)
- CSS custom properties in `src/index.css`

### Component Styling
Components use shadcn/ui with Tailwind CSS classes. Modify styles by:
- Updating Tailwind classes directly
- Using CSS custom properties for consistent theming
- Leveraging shadcn/ui theming system

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Static Hosting
The built application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Lucide](https://lucide.dev/) - Icon library

---

**Built with ❤️ by [Your Name]**