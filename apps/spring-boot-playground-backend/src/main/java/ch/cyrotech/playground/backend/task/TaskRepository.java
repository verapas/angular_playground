package ch.cyrotech.playground.backend.task;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA Repository. Liefert automatisch CRUD-Methoden
 * wie findAll(), findById(id), save(task) usw.
 */
public interface TaskRepository extends JpaRepository<Task, Long> {
}
