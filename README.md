# JavaScript Learning Platform

Welcome to the JavaScript Learning Platform! This platform is designed to help you grasp the basics of JavaScript and Git through hands-on exercises and automated tests to verify your solutions.

## Getting Started with Git

### Setting Up:

1. **Install Git**:
- If you don’t have Git installed on your machine, download and install it from [here](https://git-scm.com/downloads).

2. **Set up your Git**:
- Open your terminal or command prompt.
- Set your name with: `git config --global user.name "Your Name"`
- Set your email with: `git config --global user.email "youremail@example.com"`

### Fork and Clone the Repository:

1. **Forking the Repository**:
- At the top-right of this repository, you'll see a button labeled 'Fork'. Click it.
- This creates a copy of the project in your GitHub account.

2. **Cloning your Forked Repository**:
- Go to your GitHub repositories and select this project (it should appear after you've forked it).
- Click on the green 'Code' button and copy the URL provided.
- Open your terminal or command prompt and navigate to where you want to store this project.
- Enter: `git clone URL_YOU_COPIED` (replace `URL_YOU_COPIED` with the URL you copied from GitHub).

## Setting Up the Project

1. **Navigate to the Project**:
- In your terminal or command prompt, navigate to the project: `cd NAME_OF_THE_DIRECTORY` (replace `NAME_OF_THE_DIRECTORY` with the project's name, which is likely `JavaScript-Learning-Platform` unless you changed it).

2. **Install Dependencies**:
- Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
- In the project directory, run the command `npm install`.

## How To Use

Each chapter is structured as a folder named with a format like `01-ChapterName`. Inside, you'll encounter two primary files:

- `01-ChapterName.js`: Contains the assignment details and where you'll write your code.
- `01-ChapterName.test.js`: Contains the tests that will check your solutions.

To test a specific chapter:

```bash
npm test -- 01-ChapterName/01-ChapterName.test.js
```

Remember to replace `01-ChapterName` with the actual chapter's folder and file names.

## Submitting Your Solutions

1. **Committing Your Changes**:
    - After you've made changes to the code and are satisfied with your solutions, you'll need to commit them.
    - In your terminal or command prompt, enter:
      ```bash
      git add .
      git commit -m "My solutions for chapter 01"
      ```

2. **Pushing Your Commit to GitHub**:
    - Enter: `git push origin main` (if you're using the default branch name 'main').

3. **Creating a Pull Request**:
    - Go back to your GitHub repository.
    - Click on 'Pull requests'.
    - Click on 'New pull request'.
    - Ensure the base repository is the original one you forked from and the head repository is your fork.
    - Click on 'Create pull request'.
    - Add any comments (optional) and confirm your pull request.

## Tips for Success

- **Patience**: Don't rush. Understand each step, especially if you're new to Git and JavaScript.
- **Practice**: Repetition will help reinforce what you learn.
- **Seek Feedback**: Use the automated tests and pull requests to get feedback on your solutions.

## Need Help?

If you're stuck or have questions, please raise an issue on the original repository, and someone will assist you.
