# Meghana G C - Portfolio (React + Vite)

## 1. One-time setup
1. Install Node.js (LTS) from https://nodejs.org
2. Install VS Code from https://code.visualstudio.com
3. Unzip this folder, then in VS Code: File > Open Folder > `meghana-portfolio`.

## 2. Run it
Open the VS Code terminal (Terminal > New Terminal) and type:

    npm install
    npm run dev

Open the link shown (usually http://localhost:5173). Save a file and the page updates by itself. Stop with Ctrl + C.

## 3. Change your information
Everything is in `src/data/portfolioData.js`. Edit the text between quotes and save.

## 4. Add your profile photo
Save your photo as `profile.jpg` inside `public/images/`. (If you use another name, change `photo` in portfolioData.js.) Until then, a "MG" circle shows.

## 5. Add your resume
Name your PDF exactly `Meghana_GC_Resume.pdf` and put it in `public/`.

## 6. Add certificates
Put PDF/images in `public/certificates/`. In portfolioData.js, inside `certs`, fill in:
`file: '/certificates/python.pdf'`, `image: '/certificates/python.png'`, `date: 'March 2025'` (use your real date).

## 7. Add project images and links
In `projects`, set `image: '/images/canvas.png'` (file in public/images), `github: 'https://github.com/...'`, `demo: '...'`. Empty links stay hidden.

## 8. Update your GitHub link
Change `github: 'https://github.com/your-username'` in portfolioData.js.

## 9. Contact form
It needs no backend: "Send Message" opens the visitor's email app with the message ready for meghanagc93@gmail.com. For messages sent straight to your inbox without opening an email app, create a free form at formspree.io and I can help connect it.

## 10. Put it online
Push the folder to GitHub, then:
- Vercel: vercel.com > Add New Project > import the repo > Deploy (settings are detected automatically).
- Netlify: app.netlify.com > Add new site > Import from Git > Build command `npm run build`, Publish directory `dist`.
