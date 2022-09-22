package com.example.service.impl;

import com.example.entity.TacGia;
import com.example.repo.TacGiaRepository;
import com.example.service.ITacGiaService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TacGiaServiceImpl implements ITacGiaService {
    private final TacGiaRepository repo;

    public TacGiaServiceImpl(TacGiaRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<TacGia> findAll() {
        return repo.findAll();
    }

    @Override
    public TacGia save(TacGia tacGia) {
        return repo.save(tacGia);
    }

    @Override
    public TacGia update(TacGia tacGia) {
        return repo.save(tacGia);
    }

    @Override
    public void delete(Integer id) {
        repo.deleteById(id);
    }

    @Override
    public TacGia findByID(Integer id) {
        return findByID(id);
    }
}
