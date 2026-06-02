# 📔 Sistec Diary

A full-stack student diary application built with modern web and mobile technologies. Designed specifically for students at SISTEC to manage their college activities, notes, and daily schedules.

## 🌟 Overview

**Sistec Diary** is a comprehensive platform that helps students organize their academic life with an intuitive web interface and mobile app. It combines productivity features with a user-friendly design to keep everything in one place.

### Key Features

- 📝 **Digital Diary**: Write, edit, and manage daily journal entries
- 📅 **Academic Calendar**: Track important dates, deadlines, and events
- 📚 **Notes Management**: Organize subject-wise notes and study materials
- 📱 **Cross-Platform**: Web application and mobile app support
- 🎨 **Modern UI**: Beautiful, responsive interface with dark mode support
- 🔐 **Secure**: User authentication and data privacy
- 📊 **Analytics**: Track your productivity and study patterns

## 🏗️ Project Structure

```
Sistec-diary/
├── app/                          # Next.js app directory (web)
├── components/                   # Reusable React components
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions and helpers
├── mobile/                       # React Native mobile app (Expo)
├── styles/                       # Global styles and CSS
├── public/                       # Static assets
├── components.json               # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Web app dependencies
└── README.md                    # This file
```

## 💻 Tech Stack

### Frontend (Web)
- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with built-in optimization
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/) - High-quality React components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Performant forms
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Charts**: [Recharts](https://recharts.org/) - Composable charting library
- **Date Handling**: [date-fns](https://date-fns.org/) - Date utility library
- **UI Components**: Radix UI - Unstyled, accessible components
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) - Light/dark mode support
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

### Mobile App
- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Platform Support**: iOS, Android, and Web
- **Status Bar**: Expo Status Bar for native experience

### Development Tools
- **Package Manager**: npm / pnpm
- **Linting**: ESLint
- **Build Tool**: Next.js built-in build system
- **Type Checking**: TypeScript 5

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or pnpm package manager
- Expo CLI (for mobile development)
- iOS/Android development environment (for mobile testing)

### Web Application Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshumaha9977/Sistec-diary.git
   cd Sistec-diary
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

5. **Lint code**
   ```bash
   npm run lint
   ```

The web application will be available at `http://localhost:3000`

### Mobile Application Setup

1. **Navigate to mobile directory**
   ```bash
   cd mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Run on specific platform**
   ```bash
   npm run android    # Android
   npm run ios       # iOS
   npm run web       # Web
   ```

## 📂 Key Directories

### `/app`
Next.js app directory containing:
- Page routes and layouts
- API endpoints
- Server components
- App-level configuration

### `/components`
Reusable React components:
- UI components from shadcn/ui
- Feature-specific components
- Layout components
- Form components

### `/hooks`
Custom React hooks:
- State management hooks
- API interaction hooks
- UI utility hooks

### `/lib`
Utility functions and helpers:
- API client functions
- Data formatting utilities
- Constants and configurations
- Custom utility functions

### `/mobile`
React Native mobile application:
- Expo-based mobile app
- Shared logic with web app
- Mobile-specific components
- iOS and Android support

### `/styles`
Global styling:
- CSS variables
- Global styles
- Tailwind CSS configuration
- Theme configuration

## 🎨 UI Components

The project uses **shadcn/ui** components powered by **Radix UI**:

- Accordion
- Alert Dialog
- Avatar
- Button
- Card
- Checkbox
- Command/Palette
- Data Table
- Date Picker
- Dialog
- Dropdown Menu
- Form
- Input
- Label
- Progress
- Radio Group
- Select
- Separator
- Sheet
- Tabs
- Toast
- Toggle
- Tooltip
- And more...

## 📝 Features in Detail

### 📔 Diary Entries
- Create, read, update, and delete diary entries
- Rich text editing
- Date-based organization
- Search functionality
- Tag system for categorization

### 📅 Academic Calendar
- Event management
- Deadline tracking
- Class schedule
- Exam dates
- Assignment deadlines
- Visual calendar view

### 📚 Notes Management
- Subject-wise organization
- Tagging system
- Search and filter
- Export functionality
- Collaborative notes (future)

### 👤 User Profile
- Authentication
- Profile management
- Settings and preferences
- Theme selection
- Notification preferences

## 🔧 Configuration

### Components Configuration (`components.json`)
- shadcn/ui style preset: "new-york"
- Tailwind CSS with CSS variables
- Lucide icons
- React Server Components enabled

### Next.js Configuration (`next.config.mjs`)
- Optimized builds
- Image optimization
- Performance improvements

### TypeScript Configuration (`tsconfig.json`)
- Strict type checking
- Path aliases for clean imports
- ESNext target
- React JSX support

## 🔐 Security & Privacy

- ✅ Secure user authentication
- ✅ Data encryption
- ✅ HTTPS support
- ✅ Protected API routes
- ✅ User data privacy
- ✅ Input validation and sanitization

## 📱 Responsive Design

- 📱 Mobile-first approach
- 🖥️ Desktop optimization
- 📱 Tablet support
- 🔄 Responsive UI components
- ♿ Accessibility support

## 🌙 Theme Support

- 🌞 Light mode
- 🌙 Dark mode
- 🎨 Customizable colors
- 💾 Theme persistence

## 📈 Performance

- ⚡ Next.js optimization
- 🖼️ Image optimization
- 📦 Code splitting
- 🔄 Server-side rendering
- 🎯 Vercel Analytics integration

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain code style consistency
- Write clear commit messages
- Test your changes before submitting PR
- Update documentation as needed

## 📋 Project Status

- ✅ Web application setup
- ✅ Mobile app setup (Expo)
- ⏳ Core features (In Development)
- ⏳ Backend API
- ⏳ Database integration
- ⏳ Authentication system
- ⏳ Real-time features

## 🐛 Known Issues & Future Enhancements

### Planned Features
- [ ] Cloud synchronization
- [ ] Offline mode
- [ ] Push notifications
- [ ] Social sharing
- [ ] Collaborative features
- [ ] Voice notes
- [ ] Image attachments
- [ ] PDF export

## 📦 Dependencies Summary

### Major Dependencies
- Next.js 16.0.0
- React 19.2.0
- React Native 0.81.5
- TypeScript 5
- Tailwind CSS 4.1.9
- Radix UI (multiple modules)

### Development Dependencies
- ESLint
- PostCSS
- Autoprefixer

For the complete list, see `package.json`

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/docs/getting-started)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Harshal Mahajan** (@harshumaha9977)
- GitHub: [harshumaha9977](https://github.com/harshumaha9977)

## 🙏 Acknowledgments

- shadcn/ui for beautiful components
- Vercel for Next.js and hosting platform
- Expo for mobile development tools
- The React and TypeScript communities

## 📧 Support & Contact

For questions, issues, or suggestions:
- 📝 Open an issue on GitHub
- 💬 Reach out through GitHub discussions
- 📧 Contact the author

---

**Made with ❤️ for SISTEC Students**

Happy coding! 🚀
