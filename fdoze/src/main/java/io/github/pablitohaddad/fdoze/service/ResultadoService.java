package io.github.pablitohaddad.fdoze.service;

import io.github.pablitohaddad.fdoze.dto.ResultadoDTO;
import io.github.pablitohaddad.fdoze.models.Resultado;
import io.github.pablitohaddad.fdoze.repository.ResultadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class ResultadoService {

    private final ResultadoRepository repository;

    @Autowired
    public ResultadoService(ResultadoRepository repository) {
        this.repository = repository;
    }

    public ResultadoDTO create(ResultadoDTO dto) {
        Resultado entity = toEntity(dto);
        Resultado saved = repository.save(entity);
        return toDTO(saved);
    }

    public Page<ResultadoDTO> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(this::toDTO);
    }

    public Optional<ResultadoDTO> findById(UUID id) {
        return repository.findById(id).map(this::toDTO);
    }

    public Optional<ResultadoDTO> update(UUID id, ResultadoDTO dto) {
        return repository.findById(id).map(existing -> {
            existing.setNome(dto.getNome());
            existing.setTempoMs(dto.getTempoMs());
            Resultado updated = repository.save(existing);
            return toDTO(updated);
        });
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }

    // Mappers
    private ResultadoDTO toDTO(Resultado r) {
        if (r == null) return null;
        return new ResultadoDTO(r.getNome(), r.getTempoMs());
    }

    private Resultado toEntity(ResultadoDTO dto) {
        if (dto == null) return null;
        Resultado r = new Resultado();
        r.setNome(dto.getNome());
        r.setTempoMs(dto.getTempoMs());
        // id (UUID) and createdAt are managed by DB / Hibernate
        return r;
    }
}
