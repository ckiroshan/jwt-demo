package com.ckiroshan.jwt.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()                             // Disable CSRF for now (only for testing)
            .authorizeHttpRequests((requests) -> requests // Configure request authorization
                .requestMatchers("/messages").permitAll() // Allow unauthenticated access to /messages endpoint
                .anyRequest().authenticated())            // Require authentication for all other requests
            .formLogin().disable();                       // Disable default form login (for APIs)

        return http.build(); // Build and return the configured SecurityFilterChain
    }
}
