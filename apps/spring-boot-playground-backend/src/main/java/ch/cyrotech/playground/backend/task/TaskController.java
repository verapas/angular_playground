package ch.cyrotech.playground.backend.task;

import ch.cyrotech.playground.backend.task.dto.TaskDto;
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

    // AUFGABE: Einen Endpoint bereitstellen, ueber den ein einzelner Task
    // als erledigt markiert werden kann. Delegiere die Logik an den TaskService.
}
