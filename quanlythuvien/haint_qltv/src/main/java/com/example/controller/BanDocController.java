package com.example.controller;


import com.example.entity.BanDoc;
import com.example.service.IBandocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/bandoc")
public class BanDocController {
    @Autowired
    private IBandocService banDocService;

    @GetMapping("/all")
    public ResponseEntity<List<BanDoc>> findAll() {
        List<BanDoc> banDocList = banDocService.findAll();
        if (banDocList.isEmpty()) {
            System.out.println("Không có bản ghi nào");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return new ResponseEntity<>(banDocList, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<BanDoc> create(@RequestBody BanDoc banDoc) {
        return new ResponseEntity<>(banDocService.save(banDoc), HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<BanDoc> update(@RequestBody BanDoc banDoc) {
        return new ResponseEntity<BanDoc>(banDocService.update(banDoc), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<BanDoc> delete(@PathVariable Integer id) {
        banDocService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<BanDoc> findById(@PathVariable Integer id) {
        BanDoc banDoc = banDocService.findByID(id);
        if (banDoc == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(banDoc, HttpStatus.OK);
    }
}
