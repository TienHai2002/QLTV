package com.example.controller;

import com.example.entity.Sach;
import com.example.service.ISachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/sach")
public class SachController {
    @Autowired
    private ISachService sachService;

    @GetMapping("/all")
    public ResponseEntity<List<Sach>> findAll() {
        List<Sach> sachList = sachService.findAll();
        if (sachList.isEmpty()) {
            System.out.println("Không có bản ghi nào");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return new ResponseEntity<>(sachList, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<Sach> create(@RequestBody Sach sach) {
        return new ResponseEntity<>(sachService.save(sach), HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Sach> update(@RequestBody Sach sach) {
        return new ResponseEntity<Sach>(sachService.update(sach), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Sach> delete(@PathVariable Integer id) {
        sachService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Sach> findById(@PathVariable Integer id) {
        Sach sach = sachService.findByID(id);
        if (sach == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(sach, HttpStatus.OK);
    }
}
