package ch.cyrotech.playground.backend.task;

import ch.cyrotech.playground.backend.task.dto.TaskDto;
import org.springframework.stereotype.Component;

/**
 * Wandelt zwischen Entity und DTO um.
 */
@Component
public class TaskMapper {

    public TaskDto toDto(Task task) {
        return new TaskDto(task.getId(), task.getTitle(), task.isDone());
    }
}
