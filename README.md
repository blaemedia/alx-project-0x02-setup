here’s the short and clean step-by-step for pushing your Next.js Project Setup and Basics project to GitHub:

1. Go to your project folder
cd "C:\Users\USER\Documents\ALX\alx-project-0x02-setup"

2. Initialize Git (if not already)
git init

3. Add all files and commit
git add .
git commit -m "Initial commit - Next.js Project Setup and Basics"

4. Add GitHub repository as remote

👉 Replace <repo-name> with the exact repo name you created on GitHub (for example: nextjs-setup-basics).

git remote add origin git@github.com:Usytech01/<repo-name>.git

5. Push to GitHub
git branch -M main
git push -u origin main




alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
