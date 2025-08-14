# Flashcards Backend

A RESTful backend for a flashcard application built with Java Spring Boot. 
A PostreSQL database is set up for storage along with an angular frontend for user interaction.

## Features

- CRUD operations for flashcards and decks
- RESTful API endpoints 

## Technologies

- Java 17+
- Spring Boot
- Spring Data JPA
- Spring Security

## Getting Started


1. **Clone the repository:**
    ```bash
    git clone https://github.com/sum1t7/flashcards
    cd flashcards
    cd flashcards_backend
    ```

2. **Configure the database:**
    - Edit `src/main/resources/application.properties` with your DB settings.
    ```java
    Sample DB Settings:
    spring.application.name=flashcards
    spring.datasource.url=jdbc:postgresql://localhost:5432/flashcardsql
    spring.datasource.username=postgres
    spring.datasource.password=password
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
    server.port=9090
    ```

3. **Build and run:**
    ```bash
    ./mvnw spring-boot:run
    ```
  
## API Endpoints
 
- `GET /api/flashcards` — List all flashcards
- `POST /api/flashcards` — Create a flashcard 
- `DELETE /api/flashcards/{id}` — Delete a flashcard
- `GET /hello` — Alive test 


## Contributing

Pull requests are welcome! Please open an issue first to discuss changes.
 