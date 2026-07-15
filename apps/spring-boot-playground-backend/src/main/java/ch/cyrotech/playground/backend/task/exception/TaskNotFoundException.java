package ch.cyrotech.playground.backend.task.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Wird geworfen, wenn ein Task mit einer bestimmten id nicht existiert.
 * Dank @ResponseStatus antwortet die API automatisch mit HTTP 404.
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class TaskNotFoundException extends RuntimeException {

    public TaskNotFoundException(Long id) {
        super("Task mit id " + id + " wurde nicht gefunden");
    }
}
