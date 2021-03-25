package com.Erik.RepoAPI.rest;

import com.Erik.RepoAPI.model.entity.Cliente;
import com.Erik.RepoAPI.model.entity.ServicoPrestado;
import com.Erik.RepoAPI.model.repository.ClienteRepository;
import com.Erik.RepoAPI.model.repository.ServicoPrestadoRepository;
import com.Erik.RepoAPI.rest.dto.ServicoPrestadoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/servicos-prestados")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ServicoPrestadoController {

    private final ClienteRepository clienteRepository;
    private final ServicoPrestadoRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServicoPrestado salvar(@Valid @RequestBody ServicoPrestadoDTO dto) {
        ServicoPrestado sp = new ServicoPrestado();

        LocalDate data = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        Integer idCliente = dto.getIdCliente();

        Cliente cliente = clienteRepository.findById(idCliente).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente não encontrado"));

        if (dto.getPreco() != null) {
            String valor = dto.getPreco().replace(".", "").replace(",", ".");
            sp.setValor(new BigDecimal(valor));
        } else {
            sp.setValor(null);
        }

        sp.setDescricao(dto.getDescricao());
        sp.setData(data);
        sp.setCliente(cliente);

        return repository.save(sp);
    }

    @GetMapping
    public List<ServicoPrestado> pesquisar(
            @RequestParam(required = false, value = "nome", defaultValue = "") String nome,
            @RequestParam(required = false, value = "mes") Integer mes
    ) {
        return repository.findByNomeClienteAndMes("%" + nome + "%", mes);
    }
}
