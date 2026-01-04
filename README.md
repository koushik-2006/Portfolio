# 🚀 Koushik S – Portfolio

A **simple, clean, and responsive personal portfolio website** built using **Next.js** and **Shadcn UI**.  
This portfolio highlights my **skills, projects, education, and contact information** in a clear and professional manner.

---

## 🌐 Live Demo

👉 **https://koushik-2006.github.io/Portfolio/**

---

## 📌 About This Portfolio

This portfolio is created to:

- 👋 **Introduce myself** and my background  
- 💻 **Showcase my technical skills and projects**  
- 🎓 **Present my education details**  
- 📄 **Provide easy access to my resume**  
- 🔗 **Share my social media profiles**

The design is **minimal**, **easy to navigate**, and **well-suited for students and beginners**.

---

## 🛠️ Technologies Used

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**

---

## ▶️ Getting Started

To run this project locally, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Then open your browser and visit:

arduino
Copy code
http://localhost:3000
You can edit the main page by modifying:

bash
Copy code
app/page.tsx
All changes will be reflected automatically.

This project uses next/font to optimize and load the Inter Google Font.

⚙️ Configuration
All personal details used in this portfolio are managed through a single configuration file:

arduino
Copy code
src/config/portfolio.config.ts
This approach keeps the project clean, organized, and easy to update.

📁 Configuration Structure
The configuration file contains the following sections:

Basic Information
Name, role, short description, and location

Contact Information
Email address and other contact details

Social Media Links
Links to GitHub, LinkedIn, and other platforms

SEO Information
Keywords and metadata for better search visibility

About Information
A short introduction, interests, and personal details

Skills
Programming languages, tools, and technologies

Education
Academic background and current studies

Projects
Project list with descriptions and live/demo links

More Links
Resume, certifications, achievements, and useful resources

✏️ Customizing the Portfolio
To personalize this portfolio, simply update the values inside:

arduino
Copy code
src/config/portfolio.config.ts
All changes will automatically reflect across the website without modifying multiple files.

Example Usage in a Component
ts
Copy code
import { portfolioConfig } from "@/config/portfolio.config";

// Access configuration values
const { name, title } = portfolioConfig;
📄 Resume
My resume is available on the website and can be downloaded using the
⬇️ Download Resume button.

👤 Author
Koushik S
🎓 Computer Science Engineering Student
💡 Aspiring Software Developer

⭐ Feedback
If you find this portfolio useful or have suggestions for improvement,
feel free to share feedback or star ⭐ the repository.
