package ch.cyrotech.playground.backend.task.dto;

/**
 * DTO, das ueber die REST-API nach aussen gegeben wird.
 * Bewusst getrennt von der Entity, damit die interne Datenbank-Struktur
 * nicht direkt nach aussen durchschlaegt.
 */
public record TaskDto(Long id, String title, boolean done) {
}
