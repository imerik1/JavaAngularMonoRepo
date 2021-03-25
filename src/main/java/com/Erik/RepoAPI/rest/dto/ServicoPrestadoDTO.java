package com.Erik.RepoAPI.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;

@Data
@NoArgsConstructor
public class ServicoPrestadoDTO {
    @NotEmpty(message = "O campo descrição é obrigatório.")
    private String descricao;
    @NotEmpty(message = "O campo preço é obrigatório.")
    private String preco;
    @NotEmpty(message = "O campo data é obrigatório.")
    private String data;
    private Integer idCliente;
}
