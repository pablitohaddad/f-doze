package io.github.pablitohaddad.fdoze.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "resultados")
public class Resultado {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "resultado", updatable = false, nullable = false)
    private UUID resultado;

    @Column(name = "nome", length = 35)
    private String nome;

    @Column(name = "tempo_ms")
    private Integer tempoMs;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public Resultado() {
    }

    public UUID getResultado() {
        return resultado;
    }

    public void setResultado(UUID resultado) {
        this.resultado = resultado;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getTempoMs() {
        return tempoMs;
    }

    public void setTempoMs(Integer tempoMs) {
        this.tempoMs = tempoMs;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    // equals/hashCode based on primary key
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Resultado)) return false;
        Resultado that = (Resultado) o;
        return Objects.equals(resultado, that.resultado);
    }

    @Override
    public int hashCode() {
        return Objects.hash(resultado);
    }

    @Override
    public String toString() {
        return "Resultado{" +
                "resultado=" + resultado +
                ", nome='" + nome + '\'' +
                ", tempoMs=" + tempoMs +
                ", createdAt=" + createdAt +
                '}';
    }
}
