package io.github.pablitohaddad.fdoze.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Permite requisições CORS dos principais ambientes de desenvolvimento
        registry.addMapping("/api/**")
            .allowedOrigins(
                "http://localhost:5173",
                "http://localhost:3000",
                "https://f-doze.vercel.app"
            )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
