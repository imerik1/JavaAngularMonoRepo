package com.Erik.RepoAPI.rest;

import com.Erik.RepoAPI.model.entity.Cliente;
import com.Erik.RepoAPI.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin("*")
public class ClienteController {
    @Autowired
    private ClienteRepository repository;

    @GetMapping
    public List<Cliente> acharTodos() {
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente salvar(@Valid @RequestBody Cliente cliente) {
        return repository.save(cliente);
    }

    @GetMapping("{id}")
    public Cliente acharPorId(@PathVariable Integer id) {
        return repository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado")
        );
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id) {
        repository.findById(id).map(client -> {
            repository.delete(client);
            return Void.TYPE;
        }).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado")
        );
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody @Valid Cliente clienteAtualizado) {
        repository.findById(id).map(client -> {
            clienteAtualizado.setId(client.getId());
            return repository.save(clienteAtualizado);
        }).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    }
}