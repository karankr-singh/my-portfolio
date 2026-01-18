My Personal Portfolio

Welcome! This is the source code for my personal portfolio website. I built this to showcase my projects, share a bit about my background as a developer, and provide a way for people to get in touch with me.

It is designed to be **fast**, **responsive**, and **easy to customize**.

🚀 Live Demo
https://my-portfolio-4jbn.vercel.app/
---
✨ Features

* **Modern Tech Stack:** Built with [Next.js](https://nextjs.org/) (App Router) for speed and SEO.
* **Smooth Animations:** Elements fade in and slide up using **Framer Motion**.
* **Fully Responsive:** Looks great on mobile phones, tablets, and desktops (thanks to **Tailwind CSS**).
* **Working Contact Form:** Sends emails directly to my inbox using **EmailJS** (no backend server required!).
* **Dynamic Projects:** Project data is separated from code, making it easy to add new work without breaking the design.
* **Smart Fallbacks:** If a project image is missing, it automatically shows a default icon so the layout never breaks.

---

🛠️ Tech Stack

* **Framework:** Next.js 15+ & React
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** React Icons
* **Email Service:** EmailJS

---

🏃‍♂️ Getting Started

Want to run this locally? Follow these steps:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/karankr-singh/my-portfolio.git](https://github.com/karankr-singh/my-portfolio.git)
    cd my-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Go to `http://localhost:3000` to see the site live!
    
 ---

📝 How to Customize

I organized the code to make it very easy to update. You don't need to dig through complex components to change your text.

1. Update Projects & Links
Go to `constants/index.js`.
Here you can change the `navLinks` and the `projects` array.
* To add a project, just copy-paste one of the blocks and change the text.
* To change your GitHub/LinkedIn, look inside the `projects` objects.

2. Add Images
* Place your project screenshots in the `public/` folder.
* Make sure the filename in `constants/index.js` matches exactly (e.g., `/my-project.png`).

3. Setup the Contact Form
To make the form work for *you*:
1.  Create a free account at [EmailJS](https://www.emailjs.com/).
2.  Open `components/ContactForm.js`.
3.  Replace the placeholder keys with your own:
    ```javascript
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";
    ```
---

🚀 Deployment

This site is optimized for **Vercel**.

1.  Push your code to GitHub.
2.  Go to Vercel, import your repository, and click **Deploy**.
3.  That's it!

🤝 Contributing

Feel free to fork this repo and use it as a template for your own portfolio! If you find a bug or have a suggestion, open an issue.
