# tandem-trivia-extravaganza
A trivia app in application for a coding apprenticeship at Tandem.

Created by [Clayton Christenson](github.com/clayp0)

## Requirements & Acceptance Criteria
- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- Trivia data is provided in JSON file.
- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round.

## How to spin it up
- Fork the repo
- Clone to your local machine
- Install dependencies by running
```npm install``` from within the project directory
- Run the build script:
```npm run build```
- In another terminal, run the start script:
```npm start```
- Open any browser and navigate to localhost:3000, or click [here](http://localhost:3000)

## Known Issues and Complexity
- There is a known bug with the timer which causes a React console error:
  - ```"Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application."```
  - This bug originates from the useEffect within the Timer component. It is being forced to re-render in "sub-optimal" way when the user moves on to a new question.
  - Because it does not effect the functionality of the app, I decided to devote my time to other more pressing issues.

## Additional Features/Wishes
- I had plans to implement Tailwind in order to style the app, but then hurricane Zeta hit New Orleans on Thursday evening and disrupted my plans.
- A user can choose a username.
- A user's scores are persisted for later perusal.
- Additional points are awarded for answering a question more quickly.

## Dependencies
  ```
  "react": "^16.13.0",
  "react-dom": "^16.13.0"
  ```

## Development Dependencies
    "@babel/cli": "^7.1.0",
    "@babel/core": "^7.1.0",
    "@babel/preset-env": "^7.1.0",
    "@babel/preset-react": "^7.0.0",
    "@webpack-cli/serve": "^1.0.1",
    "babel-loader": "^8.0.2",
    "css-loader": "^1.0.0",
    "style-loader": "^0.23.0",
    "webpack": "^4.19.1",
    "webpack-cli": "^3.1.1",
    "webpack-dev-server": "^3.1.8"


