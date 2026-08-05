# E-Portfolio (3.0)

A modern, highly interactive personal portfolio website built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and smooth animations powered by **GSAP** and **Lenis Scroll**.

---

## Features

- **Smooth Scrolling**: Implemented using `lenis` for an ultra-fluid user experience.
- **Dynamic Micro-Animations**: Interactive cursor tracking, hover effects, and section reveal transitions powered by **GSAP**.
- **Interactive UI**: Built with reusable React components and styled using modern **Tailwind CSS v4**.
- **Responsive Layout**: Designed for seamless viewing across mobile, tablet, and desktop devices.
- **Preloader & Smooth Transitions**: Polished entry screen and animated components.

---

## Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## Getting Started

### Prerequisites

Make sure you have Node.js installed (v18 or higher recommended).

### 1. Installation

Install the dependencies:

```bash
npm install
```

### 2. Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio live.

### 3. Building for Production

To create an optimized production build:

```bash
npm run build
```

To run the production server:

```bash
npm run start
```

---

## Project Structure

```text
3.0/
├── public/              # Static assets
└── src/
    ├── app/             # Next.js App Router pages & global styles
    └── components/      # UI components & section layouts
        ├── sections/    # Individual page sections (About, Activities, etc.)
        ├── Cursor.tsx   # Custom dynamic cursor
        ├── Header.tsx   # Navigation bar
        └── SmoothScroll.tsx # Lenis scroll integration
```
