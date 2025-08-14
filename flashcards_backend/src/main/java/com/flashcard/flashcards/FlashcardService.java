package com.flashcard.flashcards;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FlashcardService {

    private final FlashcardRepository repository;

    public FlashcardService(FlashcardRepository repository) {
        this.repository = repository;
    }

    public List<Flashcard> getAllFlashcards() {
        return repository.findAll();
    }

    public Flashcard createFlashcard(Flashcard flashcard) {
        return repository.save(flashcard);
    }

    public void deleteFlashcard(Long id) {
        repository.deleteById(id);
    }
}

