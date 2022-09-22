package com.example.service.impl;

import com.example.entity.Sach;
import com.example.repo.SachRepository;
import com.example.service.ISachService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SachServiceImpl implements ISachService {
    private final SachRepository repo;

    public SachServiceImpl(SachRepository repo) {
        this.repo = repo;
    }


    @Override
    public List<Sach> findAll() {
        return repo.findAll();
    }

    @Override
    public Sach save(Sach sach) {
        return repo.save(sach);
    }

    @Override
    public Sach update(Sach sach) {
        return repo.save(sach);
    }

    @Override
    public void delete(Integer id) {
        repo.deleteById(id);
    }

    @Override
    public Sach findByID(Integer id) {
        return repo.findById(id).get();
    }
}
