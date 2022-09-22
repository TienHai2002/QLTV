package com.example.controller;


import com.example.entity.MuonSach;
import com.example.service.IMuonSachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/muonsach")
public class MuonSachController {
    @Autowired
    private IMuonSachService muonSachService;

    @GetMapping("/all")
    public ResponseEntity<List<MuonSach>> findAll() {
        List<MuonSach> muonSachList = muonSachService.findAll();
        if (muonSachList.isEmpty()) {
            System.out.println("Không có bản ghi nào");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return new ResponseEntity<>(muonSachList, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<MuonSach> create(@RequestBody MuonSach muonSach) {
        return new ResponseEntity<MuonSach>(muonSachService.save(muonSach), HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<MuonSach> update(@RequestBody MuonSach muonSach) {
        return new ResponseEntity<MuonSach>(muonSachService.update(muonSach), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<MuonSach> delete(@PathVariable Integer id) {
        muonSachService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<MuonSach> findById(@PathVariable Integer id) {
        MuonSach muonSach = muonSachService.findByID(id);
        if (muonSach == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(muonSach, HttpStatus.OK);
    }
}
