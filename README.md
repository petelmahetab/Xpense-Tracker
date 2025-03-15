# Expense Tracker App

![Expense Tracker Demo](https://xpense-tracks-with-me.vercel.app/) 

A full-stack **Expense Tracker** application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This app provides users with a powerful tool to manage their finances by tracking income and expenses through an intuitive, responsive interface and a robust backend.

---

## Features

1. **User Authentication**
   - Secure login and sign-up using **JWT (JSON Web Token)** authentication.

2. **Dashboard Overview**
   - Displays a summary of **Total Balance**, **Income**, and **Expenses** in visually appealing summary cards.

3. **Income Management**
   - Add, view, delete, and export income sources to track earnings effortlessly.
   - Export income data in **Excel format** for offline analysis.

4. **Expense Management**
   - Add, view, delete, and export expenses with **category-based tracking** for better organization.
   - Export expense data in **Excel format**.

5. **Interactive Charts**
   - Visualize income and expenses with **Bar**, **Pie**, and **Line charts** for insightful financial analysis.

6. **Recent Transactions**
   - Quick access to the latest income and expense records for easy reference.

7. **Expense & Income Reports**
   - Download comprehensive reports of all income and expense data in **Excel format**.

8. **Mobile Responsive UI**
   - Seamlessly works across **desktops**, **tablets**, and **mobile devices** with a clean, adaptive design.

9. **Intuitive Navigation**
   - **Sidebar menu** provides easy access to **Dashboard**, **Income**, **Expenses**, and **Logout**.

10. **Delete Functionality**
    - Hover over income or expense cards to reveal a **delete button** for quick and easy removal.

---

## Tech Stack

| Layer         | Technology         |
|---------------|--------------------|
| **Frontend**  | React.js           |
| **Backend**   | Node.js, Express.js|
| **Database**  | MongoDB (Atlas)    |
| **Auth**      | JWT                |
| **Deployment**| Render (Backend), Vercel (Frontend) |

---

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20.17.0 recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- [Git](https://git-scm.com/)

---

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/xpense-tracker.git
cd xpense-tracker
```
### 2. 
   npm start


####3. Create a .env file in the backend root:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=3000
JWT_SECRET=<your-secret-key>


Screenshots
![Screenshot (108)](https://github.com/user-attachments/assets/3227f2ab-6db6-469f-b7d8-56a757111899)



![Screenshot (109)](https://github.com/user-attachments/assets/c0988b95-7a3b-4316-aaa7-048317efcfd2)



![Screenshot (110)](https://github.com/user-attachments/assets/975f1f68-c150-48a1-8f12-f90013779ac0)






### Notes
- **Customization**: Replace placeholders like `your-username`, `<username>`, `<password>`, `<dbname>`, and `<your-secret-key>` with your actual values.
- **Screenshots**: I included placeholder image links. Replace them with real screenshots of your app (upload to GitHub or an image host like Imgur).
- **Structure**: Assumes a separate `backend` and `frontend` folder. Adjust if your repo is different.
- **Enhancements**: Added tables, code blocks, and sections for a polished look.

### How to Add to Your Repo
1. Create or edit `README.md` in your GitHub repo’s root.
2. Copy-paste the above content.
3. Commit: `"Add detailed README.md"`.
4. Push to GitHub.

Let me know if you want to refine it further or need help with screenshots! Ready to make your repo shine?

