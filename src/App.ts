import { Flashcard } from './Flashcard';
import { Box, LeitnerBox } from './Box';

export interface App {
  createFlashcard(flashcard: Flashcard): void;
  moveFlashcard(flashcard: Flashcard, fromBox: Box, toBox: Box): void;
  reviewFlashcards(): void;
  handleReview(flashcard: Flashcard, correct: boolean): void;
}

export class FlashcardApp implements App {
  boxes: LeitnerBox[] = [];

  constructor() {
    this.boxes.push(new LeitnerBox(1)); // Box 1: daily
    this.boxes.push(new LeitnerBox(3)); // Box 2: every 3 days
    this.boxes.push(new LeitnerBox(7)); // Box 3: every week
  }

  createFlashcard(flashcard: Flashcard): void {
    this.boxes[0].deck.push(flashcard);
  }

  moveFlashcard(flashcard: Flashcard, fromBox: Box, toBox: Box): void {
    const index = fromBox.deck.indexOf(flashcard);
    if (index !== -1) {
      fromBox.deck.splice(index, 1);
      toBox.deck.push(flashcard);
    }
  }

  reviewFlashcards(): void {
    const now = new Date();
    for (const box of this.boxes) {
      const diffDays = Math.floor((now.getTime() - box.lastReviewed.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays >= box.reviewFrequency) {
        box.lastReviewed = now;
        for (const flashcard of box.deck) {
          console.log(`Review: ${flashcard.question}`);
        }
      }
    }
  }

  handleReview(flashcard: Flashcard, correct: boolean): void {
    for (let i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].deck.includes(flashcard)) {
        if (correct) {
          if (i < this.boxes.length - 1) {
            this.moveFlashcard(flashcard, this.boxes[i], this.boxes[i + 1]);
          }
        } else {
          this.moveFlashcard(flashcard, this.boxes[i], this.boxes[0]);
        }
        break;
      }
    }
  }
}
