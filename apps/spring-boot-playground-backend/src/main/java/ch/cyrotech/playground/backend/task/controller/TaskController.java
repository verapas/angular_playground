package ch.cyrotech.playground.backend.task.controller;

import ch.cyrotech.playground.backend.task.dto.TaskDto;
import ch.cyrotech.playground.backend.task.service.TaskService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * REST-Controller fuer Tasks unter /api/tasks.
 */
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    /**
     * GET /api/tasks -> Liste aller Tasks. (funktioniert bereits)
     */
    @GetMapping
    public List<TaskDto> getAllTasks() {
        return taskService.getAllTasks();
    }

    /*
     * AUFGABE: Endpoint erstellen, der einen Task als erledigt markiert.
     *
     * Anforderungen:
     *   - Reagiert auf einen Task per id (z.B. PATCH /api/tasks/{id}/complete)
     *   - Liest die id aus dem Pfad (@PathVariable)
     *   - Ruft taskService.markAsDone(id) auf
     *   - Gibt den aktualisierten TaskDto zurueck
     *
     * Tipp - Grundgeruest:
     *   @PatchMapping("/{id}/complete")
     *   public TaskDto completeTask(@PathVariable Long id) {
     *       // ...
     *   }
     */
}
