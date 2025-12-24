# ClassLedger - Coaching Institute Platform Landing Page

A modern, responsive landing page for a teacher-first coaching institute platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with education-focused color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **TypeScript**: Type-safe codebase
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Smooth Scrolling**: Enhanced user experience with smooth scroll navigation
- **Sticky Header**: Navigation header that adapts on scroll

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd classLedger
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
classLedger/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About the platform
│   ├── OfflineFirst.tsx # Offline-first features
│   ├── HybridReady.tsx # Hybrid features
│   ├── TeacherFirst.tsx # Teacher-first design
│   ├── ParentCommunication.tsx # Parent communication
│   ├── WhyChoose.tsx   # Why choose section
│   ├── WhoIsItFor.tsx  # Target audience
│   ├── ClosingCTA.tsx  # Final call-to-action
│   ├── Footer.tsx      # Footer component
│   ├── Section.tsx     # Reusable section wrapper
│   └── Button.tsx      # Reusable button component
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Customization

- **Colors**: Modify Tailwind color classes in components or extend the theme in `tailwind.config.ts`
- **Content**: Update text content directly in component files
- **Styling**: All styling uses Tailwind utility classes for easy customization

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://react.dev/) - UI library

## License

This project is private and proprietary.

