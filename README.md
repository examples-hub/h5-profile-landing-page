# profile-landing-page

A Pen created on CodePen.io. Original URL: [https://codepen.io/uptonking/pen/QWdqEmr](https://codepen.io/uptonking/pen/QWdqEmr).

first pass at an avatar animation for my personal portfolio

## Development Environment Setup

### Prerequisites
- Node.js
- npm (Node Package Manager)
- Git
- Text Editor (e.g., VSCode, Sublime Text)

### Step-by-Step Instructions

1. **Install Node.js and npm:**
   - Download and install Node.js from the official website: [https://nodejs.org/](https://nodejs.org/)
   - Verify the installations:
     ```bash
     node -v
     npm -v
     ```

2. **Install Git:**
   - Download and install Git from the official website: [https://git-scm.com/](https://git-scm.com/)
   - Verify the installation:
     ```bash
     git --version
     ```

3. **Clone the Repository:**
   ```bash
   git clone https://github.com/username/profile-landing-page.git
   cd profile-landing-page
   ```

4. **Install Project Dependencies:**
   ```bash
   npm install
   ```

### .1024 Configuration File

Create a `.1024` configuration file in the root directory of your project. This file will store configuration details for the development environment. Below is an example of what the file might contain:

Example `.1024` file:
```
{
  "env": "development",
  "port": 3000,
  "apiBaseUrl": "https://api.example.com"
}
```

### Troubleshooting Tips

- **Issue:** `npm install` fails.
  - **Solution:** Ensure that you have the correct version of Node.js and npm installed. Sometimes, deleting the `node_modules` directory and running `npm install` again can resolve the issue.

- **Issue:** `git clone` fails.
  - **Solution:** Check your internet connection and make sure the URL of the repository is correct.

- **Issue:** Application does not start.
  - **Solution:** Verify that the `.1024` configuration file is set up correctly and that all necessary fields are filled.

- **Issue:** Port conflicts.
  - **Solution:** Ensure that the port specified in the `.1024` configuration file is not being used by another application. You can change the port number if necessary.