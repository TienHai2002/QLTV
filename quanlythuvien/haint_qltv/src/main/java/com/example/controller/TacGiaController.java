package com.example.controller;

import com.example.entity.TacGia;
import com.example.service.ITacGiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/tacgia")
public class TacGiaController {
    @Autowired
    private ITacGiaService tacGiaService;

    @GetMapping("/all")
    public ResponseEntity<List<TacGia>> findAll() {
        List<TacGia> tacGiaList = tacGiaService.findAll();
        if (tacGiaList.isEmpty()) {
            System.out.println("Không có bản ghi nào");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return new ResponseEntity<>(tacGiaList, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<TacGia> create(@RequestBody TacGia tacGia) {
        return new ResponseEntity<>(tacGiaService.save(tacGia), HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<TacGia> update(@RequestBody TacGia tacGia) {
        return new ResponseEntity<TacGia>(tacGiaService.update(tacGia), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<TacGia> delete(@PathVariable Integer id) {
        tacGiaService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<TacGia> findById(@PathVariable Integer id) {
        TacGia tacGia = tacGiaService.findByID(id);
        if (tacGia == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(tacGia, HttpStatus.OK);
    }
}
