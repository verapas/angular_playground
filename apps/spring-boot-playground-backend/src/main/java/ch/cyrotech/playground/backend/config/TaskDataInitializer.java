package ch.cyrotech.playground.backend.config;

import ch.cyrotech.playground.backend.task.Task;
import ch.cyrotech.playground.backend.task.TaskRepository;
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
                taskRepository.save(Task.builder().title("Spring Boot Backend aufsetzen").done(true).build());
                taskRepository.save(Task.builder().title("Task als erledigt markieren (Backend-Endpoint)").done(false).build());
                taskRepository.save(Task.builder().title("Button im Frontend bauen").done(false).build());
                taskRepository.save(Task.builder().title("Erledigte Tasks durchstreichen").done(false).build());
            }
        };
    }
}
