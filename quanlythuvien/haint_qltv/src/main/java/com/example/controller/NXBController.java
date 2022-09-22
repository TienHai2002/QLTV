package com.example.controller;

import com.example.entity.NhaXuatBan;
import com.example.service.INhaXuatBanSerVice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/nhaxuatban")
public class NXBController {
    @Autowired
    private INhaXuatBanSerVice nhaXuatBanSerVice;

    @GetMapping("/all")
    public ResponseEntity<List<NhaXuatBan>> findAll() {
        List<NhaXuatBan> nhaXuatBanList = nhaXuatBanSerVice.findAll();
        if (nhaXuatBanList.isEmpty()) {
            System.out.println("Không có bản ghi nào");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return new ResponseEntity<>(nhaXuatBanList, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<NhaXuatBan> create(@RequestBody NhaXuatBan nhaXuatBan) {
        return new ResponseEntity<>(nhaXuatBanSerVice.save(nhaXuatBan), HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<NhaXuatBan> update(@RequestBody NhaXuatBan nhaXuatBan) {
        return new ResponseEntity<NhaXuatBan>(nhaXuatBanSerVice.update(nhaXuatBan), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<NhaXuatBan> delete(@PathVariable Integer id) {
        nhaXuatBanSerVice.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<NhaXuatBan> findById(@PathVariable Integer id) {
        NhaXuatBan nhaXuatBan = nhaXuatBanSerVice.findByID(id);
        if (nhaXuatBan == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(nhaXuatBan, HttpStatus.OK);
    }
}
