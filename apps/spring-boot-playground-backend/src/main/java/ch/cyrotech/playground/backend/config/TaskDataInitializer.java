package ch.cyrotech.playground.backend.config;

import ch.cyrotech.playground.backend.task.entity.Task;
import ch.cyrotech.playground.backend.task.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Befuellt die (in-memory) Datenbank beim Start mit ein paar Beispiel-Tasks,
 * damit im Frontend sofort etwas sichtbar ist.
 */
@Configuration
public class TaskDataInitializer {

    @Bean
    CommandLineRunner seedTasks(TaskRepository taskRepository) {
        return args -> {
            if (taskRepository.count() == 0) {
                taskRepository.save(new Task("Spring Boot Backend aufsetzen", true));
                taskRepository.save(new Task("Task als erledigt markieren (Backend-Endpoint)", false));
                taskRepository.save(new Task("Button im Frontend bauen", false));
                taskRepository.save(new Task("Erledigte Tasks durchstreichen", false));
            }
        };
    }
}
