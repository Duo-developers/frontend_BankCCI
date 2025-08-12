<div align="center">
  <h1>💰 BankCCI</h1>
  <p><i>A Modern Banking Platform Simulation</i></p>
  
  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </p>
</div>

---

## 📋 Table of Contents
- [📌 About The Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📂 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## 📌 About The Project

**BankCCI** is a comprehensive web application that simulates a modern banking platform. It provides a realistic banking experience with separate functionalities for administrators and customers. This project serves as both a demonstration of full-stack development capabilities and a practical simulation of financial service software.

---

## ✨ Features

### 👥 User Roles
| Role | Capabilities |
|------|-------------|
| **Customer** | Account management, transfers, transaction history, bill payments |
| **Administrator** | User management, transaction oversight, system configuration |

### 🏦 Banking Functionality

#### For Customers
- **💳 Account Management** - View balances, statements, and account details
- **💸 Money Transfers** - Transfer funds between accounts or to other users
- **📊 Transaction History** - Detailed log of all financial activities
- **💼 Bill Payments** - Schedule and manage recurring payments
- **📱 Profile Management** - Update personal information and security settings

#### For Administrators
- **👤 User Administration** - Create, modify, and manage user accounts
- **🔍 Transaction Monitoring** - Review and verify financial transactions
- **⚙️ System Configuration** - Manage application settings and parameters
- **📈 Reporting Tools** - Generate financial and activity reports

### 🔐 Security Features
- Secure authentication system
- Encrypted data transmission
- Session management
- Activity logging

---

## 🛠️ Tech Stack

### Frontend
- [React](https://reactjs.org/) - UI library
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Markup language
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling

### Backend
- [Node.js](https://nodejs.org/) - Runtime environment
- [Express](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database

### Tools & Libraries
- [Axios](https://axios-http.com/) - HTTP client
- [React Router](https://reactrouter.com/) - Navigation
- [JWT](https://jwt.io/) - Authentication
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local instance or Atlas connection)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Duo-developers/frontend_BankCCI.git

# 2. Navigate to the project directory
cd frontend_BankCCI

# 3. Install dependencies
npm install
# or
yarn install
```

### Configuration
Create a `.env` file in the root directory with the following variables:
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

### Running the Application

```bash
# Development mode
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
# or
yarn build
```

---

## 📂 Project Structure

```
src/
 ├── assets/           # Static files (images, fonts)
 ├── components/       # Reusable UI components
 ├── contexts/         # React contexts
 ├── hooks/            # Custom React hooks
 ├── pages/            # Application pages
 │   ├── admin/        # Admin dashboard pages
 │   ├── auth/         # Authentication pages
 │   ├── customer/     # Customer dashboard pages
 │   └── public/       # Public facing pages
 ├── services/         # API and service integrations
 ├── utils/            # Utility functions
 ├── App.js            # Main component
 └── index.js          # Entry point
public/                # Public assets
```

---

## 🤝 Contributing

We welcome contributions to enhance BankCCI. Here's how you can contribute:

1. Fork the project
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 📬 Contact

**Emilio Lux** - [elux-2021572@github.com](mailto:elux-2021572@github.com)

**Project Link:** [https://github.com/Duo-developers/frontend_BankCCI](https://github.com/Duo-developers/frontend_BankCCI)

---

<div align="center">
  <p>
    <i>Developed with ❤️ by Duo Developers</i>
  </p>
</div>
