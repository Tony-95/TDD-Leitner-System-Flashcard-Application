import { assert, describe, it, beforeEach } from 'vitest';
import { FlashcardApp } from '../src/App';
import { Flashcard } from '../src/Flashcard';

describe('FlashcardApp Tests', () => {
  let app: FlashcardApp;

  beforeEach(() => {
    app = new FlashcardApp();
  });

  it('Review Session 1 (Box 1)', () => {
    const fc1: Flashcard = { question: 'Que fait 2+2 ?', answer: '4' };
    const fc2: Flashcard = { question: 'Quelle est la capitale de la France ?', answer: 'Paris' };
    const fc3: Flashcard = { question: 'Le soleil tourne-t-il autour de la terre ?', answer: 'Non' };

    app.createFlashcard(fc1);
    app.createFlashcard(fc2);
    app.createFlashcard(fc3);

    app.handleReview(fc1, true);  // Réponse correcte
    app.handleReview(fc2, false); // Réponse incorrecte
    app.handleReview(fc3, true);  // Réponse correcte

    assert.equal(app.boxes[0].deck.length, 1);
    assert.equal(app.boxes[1].deck.length, 2);
    assert.deepEqual(app.boxes[0].deck[0], fc2);
    assert.deepEqual(app.boxes[1].deck[0], fc1);
    assert.deepEqual(app.boxes[1].deck[1], fc3);
  });

  it('Review Session 2 (Box 1 and Box 2)', () => {
    const fc1: Flashcard = { question: 'Que fait 2+2 ?', answer: '4' };
    const fc2: Flashcard = { question: 'Quelle est la capitale de la France ?', answer: 'Paris' };
    const fc3: Flashcard = { question: 'Le soleil tourne-t-il autour de la terre ?', answer: 'Non' };

    app.createFlashcard(fc1);
    app.createFlashcard(fc2);
    app.createFlashcard(fc3);

    // Simuler la première session de révision
    app.handleReview(fc1, true);
    app.handleReview(fc2, false);
    app.handleReview(fc3, true);

    // Simuler la deuxième session de révision
    app.handleReview(fc2, true);  // Réponse correcte
    app.handleReview(fc1, true);  // Réponse correcte
    app.handleReview(fc3, false); // Réponse incorrecte

    assert.equal(app.boxes[0].deck.length, 1);
    assert.equal(app.boxes[1].deck.length, 1);
    assert.equal(app.boxes[2].deck.length, 1);
    assert.deepEqual(app.boxes[0].deck[0], fc3);
    assert.deepEqual(app.boxes[1].deck[0], fc2);
    assert.deepEqual(app.boxes[2].deck[0], fc1);
  });
});
