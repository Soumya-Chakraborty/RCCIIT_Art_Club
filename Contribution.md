# Contributing to RCCIIT Art Club Project

Thank you for expressing your interest in contributing to the RCCIIT Art Club Project! This initiative strives to create a captivating web app that utilizes innovative technologies to accomplish extraordinary feats. We embrace and appreciate any contributions that align with our mission.

If you have queries or suggestions, please feel free to reach out to us at soumyachakraborty198181@gmail.com.

## Table of Contents
1. [Setting up the development environment](#setting-up-the-development-environment)
2. [Submitting a pull request or an issue](#submitting-a-pull-request-or-an-issue)
3. [Following the code style and conventions](#following-the-code-style-and-conventions)
4. [Testing and debugging your project](#testing-and-debugging-your-project)
5. [Communicating and collaborating with others](#communicating-and-collaborating-with-others)
6. [Acknowledging and rewarding your contributors](#acknowledging-and-rewarding-your-contributors)
7. [License and legal aspects](#license-and-legal-aspects)

## Setting up the development environment

Ensure your system has Node.js and npm installed by downloading them from [here](https://nodejs.org/). Then, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/awesome-project.git
```

2. Navigate to the project folder and install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Visit http://localhost:3000 to access the web app.

## Submitting a pull request or an issue

Follow these steps to contribute to the project:

1. Create a new branch from the main branch:

```bash
git checkout -b your-branch-name
```

2. Make changes in the new branch using your preferred code editor or IDE. Adhere to the code style and conventions outlined in the next section.

3. Test your changes locally using the provided testing tools and methods to ensure code quality.

4. Commit your changes:

```bash
git commit -m "Your commit message"
```

Write a clear and concise commit message, using the imperative mood and present tense (e.g., "Add a new feature" or "Fix a bug"). Optionally, include a reference to the issue number (e.g., "Fix #123").

5. Push your changes to your remote branch:

```bash
git push origin your-branch-name
```

6. Open a pull request or an issue on the GitHub website from your branch to the main branch. Provide a title, description, and any additional details.

7. Wait for feedback and review from the maintainers. Make necessary changes if requested.

8. Once approved and merged, delete your branch and sync your local repository:

```bash
git checkout main
git pull origin main
git branch -d your-branch-name
```

Congratulations on your successful contribution!

## Following the code style and conventions

To maintain codebase quality and consistency, adhere to these rules and standards:

- Utilize JavaScript as the primary programming language, with React as the front-end framework. HTML, CSS, and Bootstrap are used for markup and styling.
- Implement ESLint and Prettier as code linters and formatters, alongside Husky and lint-staged as pre-commit hooks. Install and configure these tools as per instructions [here](#).
- Utilize JSDoc for documentation and meaningful comments to explain logic and functionality. Refer to the guidelines [here](#).
- Use camelCase for variables, functions, and methods, PascalCase for classes and components, and UPPER_CASE for constants and environment variables. Choose descriptive and meaningful names reflecting the purpose and functionality.

For additional details and examples, refer to the code style and conventions guide [here](#).

## Testing and debugging your project

Ensure the quality of your project with the following tools and methods:

- Leverage Jest and React Testing Library for unit and integration tests. Enzyme and React Hooks Testing Library are used for testing React components and hooks. Refer to tutorials [here](#) and [here](#).
- Utilize Cypress for end-to-end testing, simulating user interactions and behaviors. Follow the documentation [here](#).
- Measure code coverage with Codecov, and use Coveralls for code coverage history and statistics. Guides are available [here](#) and [here](#).
- Employ Chrome DevTools as the primary tool for real-time debugging, inspecting, and profiling the web app during development. It offers features for monitoring network activity, analyzing performance, and troubleshooting JavaScript code.
