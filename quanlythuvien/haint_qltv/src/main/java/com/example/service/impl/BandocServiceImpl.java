package com.example.service.impl;

import com.example.entity.BanDoc;
import com.example.repo.BanDocRepo;
import com.example.service.IBandocService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BandocServiceImpl implements IBandocService {
    private final BanDocRepo repo;

    public BandocServiceImpl(BanDocRepo repo) {
        this.repo = repo;
    }


    @Override
    public List<BanDoc> findAll() {
        return repo.findAll();
    }

    @Override
    public BanDoc save(BanDoc banDoc) {
        return repo.save(banDoc);
    }

    @Override
    public BanDoc update(BanDoc banDoc) {
        return repo.save(banDoc);
    }

    @Override
    public void delete(Integer id) {
        repo.deleteById(id);
    }

    @Override
    public BanDoc findByID(Integer id) {
        return repo.findById(id).get();
    }
}
