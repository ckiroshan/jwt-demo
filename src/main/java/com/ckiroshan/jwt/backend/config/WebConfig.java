package com.ckiroshan.jwt.backend.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.Arrays;

@Configuration // Marks this class as a config class
@EnableWebMvc  // Enables Spring MVC
public class WebConfig {
    @Bean      // Produces a bean to be managed by the Spring container
    public FilterRegistrationBean corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource(); // Create a new source for CORS configurations
        CorsConfiguration config = new CorsConfiguration(); // Instantiate CORS configuration object

        config.setAllowCredentials(true);                 // Allow credentials (cookies & HTTP authentication)
        config.addAllowedOrigin("http://localhost:3000"); // Allow requests from this origin

        config.setAllowedHeaders(Arrays.asList( // Specify which headers are allowed in CORS requests
                HttpHeaders.AUTHORIZATION,      // Allow Authorization header
                HttpHeaders.CONTENT_TYPE,       // Allow Content-Type header
                HttpHeaders.ACCEPT              // Allow Accept header
        ));

        config.setAllowedMethods(Arrays.asList( // Specify which HTTP methods are allowed in CORS requests
                HttpMethod.GET.name(),          // Allow GET requests
                HttpMethod.POST.name(),         // Allow POST requests
                HttpMethod.PUT.name(),          // Allow PUT requests
                HttpMethod.DELETE.name()        // Allow DELETE requests
        ));

        config.setMaxAge(3600L);                // Set the max time for CORS preflight requests (in seconds)

        source.registerCorsConfiguration("/**", config); // Register CORS configuration for all paths
        FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source)); // Create a new filter registration bean with the CORS filter

        bean.setOrder(-102);    // Set the order of the filter (lower values have higher precedence)
        return bean;            // Return the configured filter registration bean
    }
}
