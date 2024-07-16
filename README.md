# Project: Leitner System Flashcard Application

## Problem Statement

You are required to implement a simple flashcard application using the Leitner system for spaced repetition.
The application should allow users to create flashcards, review them, and categorize them into different boxes based on their knowledge.

You will be evaluated on the test code and on the production code.

## Steps

### Flashcard Creation:

Users should be able to create flashcards with a question and an answer.
Flashcards should be stored in Box 1 initially.

### Review Flashcards:

Users should be able to review flashcards from any box.
After reviewing, users should indicate if they answered correctly or incorrectly.
Correctly answered flashcards should move to the next box.
Incorrectly answered flashcards should move back to Box 1.

### Boxes:

Implement at least 3 boxes.
Flashcards in Box 1 should be reviewed daily, Box 2 every 3 days, and Box 3 every week.

## Code

There is a `example.spec.ts` that show you how to write test with vitest in ts. And some interface are in `src/index.ts`

---

# Example: Leitner System with 3 Boxes

This implementation imply some variables that are not inside the "definition"...

[wikipedia page](https://en.wikipedia.org/wiki/Leitner_system)

## Diagramme

Initial State

Flashcards are created and added to Box 1.
Initial State:

```
+---------+         +---------+         +---------+
| Box 1   |         | Box 2   |         | Box 3   |
|         |         |         |         |         |
| [FC1]   |         |         |         |         |
| [FC2]   |         |         |         |         |
| [FC3]   |         |         |         |         |
+---------+         +---------+         +---------+
```


Review Session 1 (Box 1)

User reviews flashcards from Box 1.

- Flashcard 1 (FC1) is answered correctly.
- Flashcard 2 (FC2) is answered incorrectly.
- Flashcard 3 (FC3) is answered correctly.


After Review Session 1:

```
+---------+         +---------+         +---------+
| Box 1   |         | Box 2   |         | Box 3   |
|         |         |         |         |         |
| [FC2]   |         | [FC1]   |         |         |
|         |         | [FC3]   |         |         |
|         |         |         |         |         |
+---------+         +---------+         +---------+
```


Review Session 2 (Box 1 and Box 2)

User reviews flashcards from Box 1 and Box 2.

- Flashcard 2 (FC2) is answered correctly.
- Flashcard 1 (FC1) is answered correctly.
- Flashcard 3 (FC3) is answered incorrectly.


After Review Session 2:

```
+---------+         +---------+         +---------+
| Box 1   |         | Box 2   |         | Box 3   |
|         |         |         |         |         |
|         |         | [FC2]   |         | [FC1]   |
| [FC3]   |         |         |         |         |
|         |         |         |         |         |
+---------+         +---------+         +---------+
```

....


### Evaluation Criteria

You will be evaluated on the quality of the code and the quality of the test. And of course the validity of the program.

You will have two (2) hours. I have setup a typescript project. Feel free to change the language if you want.
