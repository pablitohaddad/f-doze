package io.github.pablitohaddad.fdoze.repository;

import io.github.pablitohaddad.fdoze.models.Resultado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ResultadoRepository extends JpaRepository<Resultado, UUID> {
}
