package ch.cyrotech.playground.backend.task.mapper;

import ch.cyrotech.playground.backend.task.dto.TaskDto;
import ch.cyrotech.playground.backend.task.entity.Task;
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
