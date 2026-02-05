package io.github.pablitohaddad.fdoze.controller;

import io.github.pablitohaddad.fdoze.dto.ResultadoDTO;
import io.github.pablitohaddad.fdoze.service.ResultadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/api/resultados")
@Validated
public class ResultadoController {

    private final ResultadoService service;

    @Autowired
    public ResultadoController(ResultadoService service) {
        this.service = service;
    }

    @GetMapping
    public Page<ResultadoDTO> list(Pageable pageable) {
        return service.findAll(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResultadoDTO> getById(@PathVariable("id") UUID id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ResultadoDTO> create(@Valid @RequestBody ResultadoDTO dto) {
        ResultadoDTO created = service.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResultadoDTO> update(@PathVariable("id") UUID id, @Valid @RequestBody ResultadoDTO dto) {
        return service.update(id, dto)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
