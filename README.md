# 🕹️ Rock, Paper, Scissors - JavaScript Logic

A sleek, logic-focused implementation of the classic game designed to run directly in the **Browser Console**. This project showcases the "engine" of a game—handling user input, AI randomization, and real-time score tracking.

---

## 🎮 How to Play

1. **Download or Clone** this repository.
2. **Open** `index.html` in your web browser.
3. **Open Developer Tools**:
    * Right-click anywhere and select **Inspect**.
    * Click on the **Console** tab.
4. **Follow the Prompts**: Type your choice and try to reach **3 points** before the computer!

---

## 🚀 Project Features

* **AI Opponent**: A randomized computer choice generator using `Math.random()`.
* **State Management**: Tracks and displays the score of both the human and computer players in real-time.
* **Modular Code**: Built with a "separation of concerns" approach for high readability.
* **Victory Condition**: A "Best of 5" format that automatically declares a final winner.

---

## 📂 Code Architecture

The project is built around four primary functions that handle the game loop:

| Function | Purpose |
| :--- | :--- |
| **`getComputerChoice()`** | Generates a random move (Rock, Paper, or Scissors). |
| **`getUsersChoice()`** | Captures and validates the player's input via a prompt. |
| **`playRound()`** | Acts as the referee to determine the winner of a single round. |
| **`playGame()`** | The core engine that runs the rounds and tracks the total score. |

---

## 🧠 Technical Skills Demonstrated

* **Flow Control**: Managing game loops using `while` statements.
* **Conditional Logic**: Complex `if/else` comparisons to evaluate winners.
* **User Interaction**: Bridging the gap between code logic and user input.
* **Data Handling**: Dynamic score updates and string manipulation.

---

## 🔗 Live Demo

> **Play the game here:** (https://luismiguelmiranda92.github.io/rock-paper-scissors-odin-project/)

---

## 📝 To-Do / Future Improvements

- [ ] Add a visual UI with buttons to replace the prompt.
- [ ] Implement CSS animations for round results.
- [ ] Add "Lizard" and "Spock" to the choice pool.
