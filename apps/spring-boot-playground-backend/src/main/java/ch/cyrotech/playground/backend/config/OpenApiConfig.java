package ch.cyrotech.playground.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Metadaten fuer die automatisch generierte OpenAPI-Spezifikation.
 * Swagger-UI:  http://localhost:8080/swagger-ui.html
 * OpenAPI-JSON: http://localhost:8080/v3/api-docs
 */
@Configuration
public class OpenApiConfig {

    @Bean
    OpenAPI playgroundOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Playground Task API")
                        .description("REST-API fuer die Task-Verwaltung des Playground-Backends")
                        .version("v1"));
    }
}
