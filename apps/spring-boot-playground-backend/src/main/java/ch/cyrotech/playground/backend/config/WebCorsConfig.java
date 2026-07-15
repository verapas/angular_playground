package ch.cyrotech.playground.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Erlaubt dem Angular-Frontend (Dev-Server auf Port 4420) den Zugriff
 * auf die REST-API. Ohne CORS-Konfiguration wuerde der Browser die
 * Requests aus dem Frontend blockieren.
 */
@Configuration
public class WebCorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:4420")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE");
    }
}
