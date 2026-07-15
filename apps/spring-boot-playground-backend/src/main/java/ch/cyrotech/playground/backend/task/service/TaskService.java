package ch.cyrotech.playground.backend.task.service;

import ch.cyrotech.playground.backend.task.dto.TaskDto;
import ch.cyrotech.playground.backend.task.mapper.TaskMapper;
import ch.cyrotech.playground.backend.task.repository.TaskRepository;
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
     * AUFGABE: Markiert den Task mit der uebergebenen id als erledigt (done = true).
     *
     * Vorgehen (Tipps):
     *   1. Task per id aus dem taskRepository laden.
     *      Bei nicht gefunden: throw new TaskNotFoundException(id)
     *   2. task.setDone(true)
     *   3. Task mit taskRepository.save(...) speichern
     *   4. Gespeicherten Task via taskMapper.toDto(...) zurueckgeben
     */
    public TaskDto markAsDone(Long id) {
        // TODO: Implementiere die Logik gemaess der Beschreibung oben.
        throw new UnsupportedOperationException("TODO: markAsDone() implementieren");
    }
}
