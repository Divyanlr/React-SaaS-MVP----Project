# Pre Launch SaaS MVP

This is a functional MVP(Minimum Viable Product) focused on sustainability. The goal of this application is to facilitate early user acquisition through a high converting landing page, a frictionless onboarding flow, and a modular user dashboard.

The project is architected as a decoupled system featuring a **React frontend** and a **NestJS backend API**, prioritizing clean code and GDPR compliance.


## Tech Stack

### **Frontend**
- **React & TypeScript:** For type safe, component based UI development.
- **Tailwind CSS:** For a modern, responsive, and maintainable design system.
- **React Router:** Handling seamless client side navigation.
- **Axios:** For clean and reliable API communication.

### **Backend**
- **Node.js & NestJS:** A modular framework chosen for scalability and structured architecture.
- **REST APIs:**
- **Validation:** Built in server side validation
- **MVP Storage:** Lightweight/In memory data management for quick prototyping.


## Features Implemented

### **Landing Page**
- **Conversion-Focused:** Clear product value proposition and high visibility CTAs.
- **Responsive Design:** Optimized layout for desktop, tablet, and mobile.
- **Modern UI:** Minimalist aesthetic aligned with green tech values.

### **User Onboarding**
- **Lifecycle Management:** Complete registration and login flows.
- **User Feedback:** Comprehensive error handling and validation states.
- **UX-First:** Minimal friction to ensure high sign up completion rates.

### **User Dashboard**
- **Scalable Layout:** Sidebar based architecture ready for future SaaS modules.
- **Data Integration:** API driven statistics and placeholder sections for future analytics.

### **GDPR & Privacy**
Built with privacy by design to meet B2B compliance standards
- **Data Access:** Transparency feature allowing users to view their stored personal data.
- **Right to Erasure:** Functionality for users to request account and data deletion.


## Design & Development Approach

* **Sustainability-Driven Design:** A calm visual language was chosen, focusing on clarity, trust, and simplicity to align with the green tech mission.
* **Accessibility:** Focused on readable contrast, clear focus states, and predictable user flows.
* **Modular Backend:** The API layer is strictly separated (Controllers vs. Services), making it easy to swap the in memory storage for a production database (PostgreSQL/MongoDB) in the future.


## Installation & Setup

### **Frontend**

```bash
cd frontend
npm install
npm run dev

```

*Accessible via http://localhost:5173*

### **Backend**

```bash
cd backend
npm install
npm run start:dev
.\venv\Scripts\activate
uvicorn app.main:app --reload

```

*Accessible via http://127.0.0.1:8000/*


## Design Reference

**Figma Prototype:** https://www.figma.com/design/Xfjv4PAxAUKhIZl6SuKZ7f/React-SaaS-MVP?node-id=0-1&t=sVJmnoDSOPNB5iCN-1



## Author

**Divya Angthayal**
