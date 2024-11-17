# TaskMate

A simple yet effective **Task Management** application built with **React** to help you organize, prioritize, and track your daily tasks. The app allows users to create tasks, add subtasks, mark them as completed, and delete tasks when no longer needed—all within a clean and user-friendly interface.

## Features

- **Create Tasks**: Easily add tasks and organize them by categories.
- **Create Subtasks**: Break down tasks into manageable steps with subtasks.
- **Mark Tasks as Complete**: Track your progress by marking tasks or subtasks as completed.
- **Delete Tasks/Subtasks**: Remove tasks or subtasks when done or if no longer needed.
- **User-friendly Interface**: A sleek and minimalistic UI designed to make task management quick and easy.

## Live Demo

[[Demo Link](https://tsk-mate.netlify.app/)]

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Hooks**: Used for managing state and lifecycle in functional components.
- **CSS**: Custom styles for a responsive and sleek UI.

## Project Structure

Here's a brief overview of the directory structure of the project:

```
task-mate/
│
├── public/               # Public assets (index.html, icons, etc.)
│
├── src/                  # Source code for the application
│   ├── components/       # Reusable UI components (e.g., Task, TaskList)
│   ├── App.js            # Main app component
│   ├── App.css           # Global styles
│   ├── styles            # local styles
│   └── index.js          # Entry point of the app
│
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Contributing

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## Acknowledgements

- Inspiration from other task management apps.
- React Documentation for the setup and learning resources.

## Setup and Launch Process

1. **Clone the Repository**  
   Clone this repository to your local machine using:  
   ```bash
   git clone https://github.com/your-username/taskmate.git
   cd taskmate
   ```

2. **Install Dependencies**  
   Install all the required packages using `npm` or `yarn`:  
   ```bash
   npm install
   ```

3. **Start the Development Server**  
   Launch the application in development mode:  
   ```bash
   npm start
   ```  
   This will start the app and make it available at `http://localhost:3000`.

4. **Build for Production**  
   To create an optimized production build:  
   ```bash
   npm run build
   ```  
   The output will be available in the `build` folder, ready for deployment.

---

## Assumptions Made During Development

1. **Local Storage for Persistence**  
   - User tasks and subtasks are stored in the browser's `localStorage` to retain data across sessions.  
   - Assumes that the user has local storage enabled in their browser.

2. **No Authentication**  
   - The app does not include user authentication, assuming a single-user environment for task management.

3. **Minimal Input Validation**  
   - Basic checks are implemented to ensure task and subtask fields are not empty. Additional validation (e.g., due date formats) is not enforced.

4. **Mobile Responsiveness**  
   - The design assumes standard screen sizes and has been optimized for devices with widths of 480px and above.

5. **Browser Compatibility**  
   - The app is developed and tested in modern browsers such as Chrome and Firefox. Legacy browser support is not guaranteed.

