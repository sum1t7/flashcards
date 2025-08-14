package com.flashcard.flashcards;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flashcards")
@CrossOrigin(origins = "*") // allow frontend
public class FlashcardController {

    private final FlashcardService service;

    public FlashcardController(FlashcardService service) {
        this.service = service;
    }

    @GetMapping
    public List<Flashcard> getAll() {
        return service.getAllFlashcards();
    }

    @PostMapping
    public Flashcard create(@RequestBody Flashcard flashcard) {
        return service.createFlashcard(flashcard);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteFlashcard(id);
    }
}