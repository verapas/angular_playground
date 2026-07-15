# Assignment: Task als erledigt markieren

Du bekommst eine funktionierende Task-App (Spring-Boot-Backend + Angular-Frontend).
Es gibt Tasks mit `id`, `title` und `done`.

**Feature, das du fertigstellst:** Ein User soll einen Task als erledigt markieren koennen.

- **Backend:** Ein Endpoint, der einen Task auf `done = true` setzt.
- **Frontend:** Ein Button pro Task, der diesen Endpoint aufruft und die Liste aktualisiert.
- Erledigte Tasks sollen **durchgestrichen** dargestellt werden.

Alles rundherum (Projektstruktur, Liste laden & anzeigen, Routing, Navigation, CORS,
Seed-Daten) ist bereits vorbereitet. Du musst nur die mit `TODO` markierten Stellen fuellen.

---

## Was schon funktioniert

- **Backend** `spring-boot-playground-backend` (Java 21, Spring Boot, Spring Data JPA + H2 in-memory)
  - `GET /api/tasks` liefert alle Tasks (mit Seed-Daten beim Start)
  - Architektur: `entity` -> `repository` -> `mapper` -> `service` -> `controller` (+ `dto`, `exception`)
- **Frontend** neue Seite **Task Manager** (`/task-manager`), erreichbar ueber Side-Nav & Dashboard
  - laedt die Liste vom Backend und zeigt sie an

---

## Deine Aufgaben (die TODOs)

### 1. Backend – Service
Datei: `apps/spring-boot-playground-backend/.../task/service/TaskService.java`
- `markAsDone(Long id)` implementieren:
  1. Task per `id` laden (bei nicht gefunden `throw new TaskNotFoundException(id)`)
  2. `setDone(true)`
  3. speichern (`taskRepository.save(...)`)
  4. als `TaskDto` zurueckgeben (`taskMapper.toDto(...)`)

### 2. Backend – Controller
Datei: `apps/spring-boot-playground-backend/.../task/controller/TaskController.java`
- Endpoint erstellen, z.B. `PATCH /api/tasks/{id}/complete`
- `id` per `@PathVariable` lesen, `taskService.markAsDone(id)` aufrufen, `TaskDto` zurueckgeben

### 3. Frontend – Service
Datei: `apps/angular-playground/src/app/task-manager/task.service.ts`
- `completeTask(id)` implementieren: HTTP-Aufruf auf den neuen Endpoint
  (z.B. `this.http.patch<Task>(\`${this.baseUrl}/${id}/complete\`, {})`)

### 4. Frontend – Komponente
Datei: `apps/angular-playground/src/app/task-manager/task-manager.ts`
- `completeTask(id)` implementieren: Service aufrufen, subscriben und nach
  Erfolg die Liste neu laden (`this.loadTasks()`)

### 5. Frontend – Template & Style
Dateien: `task-manager.html` + `task-manager.scss`
- Button pro offenem Task einfuegen, der `completeTask(task.id)` aufruft
- Erledigte Tasks durchstreichen (`[class.done]="task.done"` + `.done { text-decoration: line-through }`)

---

## Starten

**Backend** (Port 8080):
```
cd apps/spring-boot-playground-backend
.\gradlew.bat bootRun
```
oder in IntelliJ die Klasse `DemoApplication` starten.

**Frontend** (Dev-Server Port 4420):
```
nx serve angular_playground
```

Danach im Browser: `http://localhost:4420/task-manager`

Hilfreich zum Debuggen:
- API direkt testen: `http://localhost:8080/api/tasks`
- H2-Konsole: `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:tasksdb`)

> Hinweis CORS: Das Backend erlaubt bereits Requests vom Frontend (`http://localhost:4420`).
> Falls du den Frontend-Port aenderst, in `WebCorsConfig.java` anpassen.
