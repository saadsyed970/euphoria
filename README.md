## Requirements

- Users: Support Team, Business Owners, Business Customers
- App Features:
  * Owners: Manage e-commerce B2B via Panel + Dashboard
  * Customers: Manage + Order products from businesses  
  * Support: Handle all operations
- Registration: GSTIN-based for Owners + Customers
- Payments: Online UPI + Offline Credit Ledger (approval-based)
- Owner Web Panel: Dashboard, Employees, Users, Categories, Subcategories, Products, Discounts, Returns, Orders, Courses, Tests
- Customer Mobile App: Shop approved businesses, Manage employees, Courses+Tests, Profile
- Support Web Panel: Fix app failures, Resolve owner/customer issues


## Overview of App

### Panel App
![Panel](<misc/Overview of Panel.jpg>)

User Types:
- Super: Full business management access
- Super registers business → SaaS team approves
- Admin/Employee: Register with credentials + Business ID → Approved by business
- Admin: More access than Employee, less than Super
- Employee: Least access

### Mobile App
![Mobile](<misc/Overview of Mobile.jpg>)

User Types:
- Dealer: Registers with GSTIN + Email/Password (JWT) → Panel Admin approves
- Backoffice/Technician: Register with Dealer Business ID → Approved by Dealer or Panel Admin
- Dealer: Manages everything
- Backoffice: Orders, Courses, Exams, RMA, Discounts
- Technician: View all + Manage RMA, Exams, Courses only

## API Design

### Panel App Modules
 - User Module (Super, Admin, Employee) -> **[CRUD + JWT]**
 - Manage Team Members (Admin, Employee) -> **[CRUD + JWT]**
 - Manage Users Module (Dealer, Backoffice, Technician) -> **[CRUD + JWT]**
 - Manage Products Module (Categories, Subcategories, Products) -> **[CRUD + JWT]**
 - Manage Orders Module (Online, Ledger) -> **[CRUD + JWT]**
 - Discount Module -> **[CRUD + JWT]**
 - RMA (Return Product) Module -> **[RUD + JWT]**
 - Manage Course and Exam Module -> **[CRUD + JWT]**
 - Manage Profile Module -> **[RUD + JWT]**
 - Dashboard -> **[Frontend Only]**
