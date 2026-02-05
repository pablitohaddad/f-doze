package io.github.pablitohaddad.fdoze.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class ResultadoDTO {

    @NotBlank
    @Size(max = 35)
    private String nome;

    @NotNull
    @JsonProperty("tempo_ms")
    private Integer tempoMs;

    public ResultadoDTO() {
    }

    public ResultadoDTO(String nome, Integer tempoMs) {
        this.nome = nome;
        this.tempoMs = tempoMs;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @JsonProperty("tempo_ms")
    public Integer getTempoMs() {
        return tempoMs;
    }

    @JsonProperty("tempo_ms")
    public void setTempoMs(Integer tempoMs) {
        this.tempoMs = tempoMs;
    }
}
