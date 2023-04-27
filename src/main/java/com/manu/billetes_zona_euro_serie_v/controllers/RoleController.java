package com.manu.billetes_zona_euro_serie_v.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.manu.billetes_zona_euro_serie_v.models.Role;
import com.manu.billetes_zona_euro_serie_v.services.RoleService;

@RestController
@RequestMapping(path = "/api/roles")
public class RoleController {
    private RoleService service;

    public RoleController(RoleService service) {
        this.service = service;
    }

    @GetMapping("")
    public List<Role> listAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Role listOne(@PathVariable Long id) {
        return service.getOne(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PostMapping("")
    @ResponseStatus(value = HttpStatus.CREATED)
    public ResponseEntity<?> store(@RequestBody Role newrole) {

        try {
            return ResponseEntity.ok(service.save(newrole));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("error");
        }
    }

}
