import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashcardService, Flashcard } from '../flashcard.service';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  flashcards: Flashcard[] = [];
  newFlashcard: Flashcard = { question: '', answer: '', flipped: false };
  

  flip(card: Flashcard) {
    card.flipped = !card.flipped;
  }

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit(): void {
    this.loadFlashcards();
  }

  loadFlashcards() {
    this.flashcardService.getFlashcards().subscribe(data => this.flashcards = data);
  }

  addFlashcard() {
    if (!this.newFlashcard.question || !this.newFlashcard.answer) return;
    this.flashcardService.addFlashcard(this.newFlashcard).subscribe(() => {
      this.newFlashcard = { question: '', answer: '' };
      this.loadFlashcards();
    });
  }

  deleteFlashcard(id: number) {
    this.flashcardService.deleteFlashcard(id).subscribe(() => this.loadFlashcards());
  }
}
