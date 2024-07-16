import { Flashcard } from './Flashcard';

export interface Box {
  deck: Flashcard[];
  reviewFrequency: number; // Number of days between reviews
  lastReviewed: Date;
}

export interface BoxApi {
  showAllCards(): Flashcard[];
}

export class LeitnerBox implements BoxApi {
  deck: Flashcard[] = [];
  reviewFrequency: number;
  lastReviewed: Date;

  constructor(reviewFrequency: number) {
    this.reviewFrequency = reviewFrequency;
    this.lastReviewed = new Date(0); // Initialize to the epoch time
  }

  showAllCards(): Flashcard[] {
    return this.deck;
  }
}
