# Contributing Guide

Welcome to the Main Website repository! We appreciate your interest in contributing. Please follow these guidelines to ensure a smooth collaboration.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your machine:

-   [Node.js](https://nodejs.org/) (Minimum version 18)
-   [npm](https://www.npmjs.com/)
-   [pnpm](https://pnpm.io/)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/0xsrmist/Main-Website.git
    ```

2. **Install dependencies:**

    ```bash
    cd Main-Website
    pnpm install # Install `pnpm` using `npm i -g pnpm`
    ```

3. **Create a .env.local file:**

    Create a `.env.local` file using `.env.sample` as a reference. Fill in the required environment variables:

    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=""
    NEXT_PUBLIC_SANITY_DATASET=""
    GMAIL_EMAIL=""
    GMAIL_PASSWORD=""
    ```

For access to NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET, contact the code maintainers or refer to the [Sanity documentation](https://www.sanity.io/docs).

To obtain GMAIL_EMAIL and GMAIL_PASSWORD, follow [Google's instructions](https://support.google.com/mail/answer/185833?hl=en) on how to set up an app password.

## Contribution Process

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/my-feature
    ```

3. **Make your changes and commit:**

    ```bash
    git commit -m "Add new feature"
    ```

4. **Push your changes to your fork:**

    ```bash
    git push origin feature/my-feature
    ```

5. **Open a pull request (PR):**

Open a pull request to the main branch of the original repository.

## Code Style

Follow the existing code style in the project. Ensure your code is well-documented and includes appropriate comments.

## Reporting Issues

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.

### Thank You!

Thank you for contributing to the Main Website project. Your efforts help improve and maintain the application for everyone. If you have any questions, feel free to reach out to the code maintainers. Happy coding!
