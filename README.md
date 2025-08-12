# Mockzilla Landing Page

> AI-powered mock interview platform landing page built with Next.js, TypeScript, and Tailwind CSS.

![Mockzilla](./public/images/mockzilla-mascot.png)

## 🦕 About Mockzilla

Mockzilla is an AI-powered mock interview platform that helps job seekers practice with realistic, role-specific questions and receive instant feedback. Built for Software Engineers, Data Scientists, Product Managers, and Finance professionals.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode Support** - Toggle between light and dark themes
- **Meta Pixel Integration** - Facebook advertising pixel for conversion tracking
- **Email Capture** - Dual integration with MailerLite and Zapier webhooks
- **SEO Optimized** - Complete meta tags, OpenGraph, and Twitter cards
- **Accessibility** - WCAG compliant with proper ARIA labels
- **TypeScript** - Full type safety throughout the application

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons
- **Analytics**: Meta Pixel (Facebook)
- **Email**: MailerLite + Zapier integration

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/mockzilla-landing.git
   cd mockzilla-landing
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Required Setup

Before deploying, you need to replace the following placeholders in \`app/page.tsx\`:

1. **Meta Pixel ID**
   \`\`\`typescript
   // Replace YOUR_PIXEL_ID with your actual Facebook Pixel ID
   fbq('init','YOUR_PIXEL_ID');
   \`\`\`

2. **MailerLite Integration**
   \`\`\`typescript
   // Replace with your MailerLite form action URL
   fetch("YOUR_MAILERLITE_FORM_ACTION", {
     // Replace GROUP_ID with your MailerLite group ID
     body: JSON.stringify({
       groups: ["GROUP_ID"],
     }),
   })
   \`\`\`

3. **Zapier Webhook**
   \`\`\`typescript
   // Replace with your Zapier webhook URL
   fetch("YOUR_ZAPIER_WEBHOOK_URL", {
   \`\`\`

### Optional Assets

Add these files to the \`public/\` directory:
- \`favicon.ico\` - Website favicon
- \`og.png\` - OpenGraph image (1200x630px recommended)

## 🎨 Customization

### Colors

The primary brand colors are defined in \`tailwind.config.js\`:
- **Primary Green**: \`#32D06D\`
- **Primary Dark**: \`#2AB85A\`
- **Dark Background**: \`#121212\`
- **Text Color**: \`#475569\`

### Sections

The landing page includes these sections:
1. **Navigation** - Sticky header with dark mode toggle
2. **Hero** - Main value proposition with CTA
3. **Features** - Three-column feature grid
4. **Comparison** - Human coach vs Mockzilla
5. **Pricing** - Three-tier pricing cards
6. **Email Capture** - Lead generation form
7. **FAQ** - Expandable accordion
8. **Footer** - Links and copyright

## 📊 Analytics & Tracking

### Meta Pixel Events

The following events are tracked:
- \`PageView\` - Page loads
- \`Lead\` - Email submissions
- \`CompleteRegistration\` - Successful signups
- \`InitiateCheckout\` - CTA button clicks
- \`ViewContent\` - Section interactions

### Email Integration

Email submissions are sent to both:
1. **MailerLite** - For email marketing campaigns
2. **Zapier** - For workflow automation and CRM integration

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Configure environment variables** (if needed)
3. **Deploy** - Automatic deployments on every push to main

### Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Mobile Responsiveness

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG AA)

## 🔧 Development

### Project Structure

\`\`\`
mockzilla-landing/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page component
├── public/
│   └── images/
│       └── mockzilla-mascot.png
├── tailwind.config.js       # Tailwind configuration
├── package.json
└── README.md
\`\`\`

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@mockzilla.io or create an issue in this repository.

## 🙏 Acknowledgments

- Built with [v0.dev](https://v0.dev) - AI-powered React component generator
- Icons by [Heroicons](https://heroicons.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ for job seekers everywhere**
