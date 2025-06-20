# DCodeDashboard 🧩

A modern, responsive admin dashboard built with **React**, **TypeScript**, and **Tailwind CSS**, designed to display and manage user data from a mock API.

This project was developed as part of a frontend developer evaluation task, focusing on clean architecture, reusable components, state management, and user interactivity.

---

## ✨ Features

- 📋 **User Table View**  
  Display users in a table format with the following fields:

  - Name
  - Email
  - Phone
  - Company Name

- 🔍 **Search Users**  
  Real-time search functionality to filter users by name.

- 🏢 **Filter by Company**  
  Dropdown filter to show users based on their company name.

- 👤 **User Details Modal**  
  Click on a user to open a modal displaying full user details (including address and geo location).

- ⚙️ **State Management**  
  Uses [Zustand](https://github.com/pmndrs/zustand) for lightweight and efficient state handling.

- 📱 **Responsive Design**  
  Optimized for mobile and desktop views.

- 🎨 **Smooth Transitions**  
  Tailwind-powered animations for modals and UI transitions.

- 🧱 **Reusable Components**  
  Modular component design for scalability and maintainability.

---

## 🛠 Tech Stack

- **Framework:** [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **API:** [JSONPlaceholder Users Endpoint](https://jsonplaceholder.typicode.com/users)

---

## 🚀 Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/dcodehub-test-dashboard.git
   cd DCodeDashboard
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

3. **Run the Application**

   ```
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

## Project Structure

```
  DCodeDashboard/
├── components/         // Reusable UI components
├── pages/              // Main dashboard and modal logic
├── hooks/              // Custom hooks (e.g., fetch users)
├── App.tsx             // Main app component
├── main.tsx            // ReactDOM entry point
```

## 📬 Contact

David Dappa
📧 Email: daviddappa760@gmail.com
🔗 [LinkedIn](https://linkedin.com/in/daviddappa)
