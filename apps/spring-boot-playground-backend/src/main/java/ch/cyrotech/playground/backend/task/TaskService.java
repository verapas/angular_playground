package ch.cyrotech.playground.backend.task;

import ch.cyrotech.playground.backend.task.dto.TaskDto;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Enthaelt die Geschaeftslogik rund um Tasks.
 */
@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;

    public TaskService(TaskRepository taskRepository, TaskMapper taskMapper) {
        this.taskRepository = taskRepository;
        this.taskMapper = taskMapper;
    }

    /**
     * Liefert alle Tasks als DTOs. (funktioniert bereits)
     */
    public List<TaskDto> getAllTasks() {
        return taskRepository.findAll()
                .stream()
                .map(taskMapper::toDto)
                .toList();
    }

    /**
     * AUFGABE: Den Task mit dieser id als erledigt markieren, speichern und
     * als TaskDto zurueckgeben. Existiert kein Task mit der id, soll die API
     * mit 404 antworten (es gibt bereits eine passende Exception im Package).
     */
    public TaskDto markAsDone(Long id) {
        // TODO: Implementiere diese Methode.
        throw new UnsupportedOperationException("TODO: markAsDone() implementieren");
    }
}
