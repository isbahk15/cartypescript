# Vehicle Interface Project (TypeScript)

This project demonstrates the core principles of TypeScript, specifically the use of **Interfaces** to enforce object shapes and **Classes** to implement those blueprints.

## 🛠️ Tech Stack
* **Language:** TypeScript
* **Runtime:** Node.js (v24.11.1)
* **Compiler:** TSC (TypeScript Compiler)

## 📋 Features
* **Vehicle Interface:** Defines a contract with properties for `make`, `model`, and `year`, plus a `start()` method.
* **Car Class:** Implements the `Vehicle` interface and uses a constructor to initialize data.
* **Type Safety:** Ensures that all objects following the interface contain the required properties and methods.

## 🚀 How to Run
1. **Compile the TypeScript file:**
   ```bash
   tsc vehicle.ts --skipLibCheck
