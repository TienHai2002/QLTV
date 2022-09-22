package com.example.service.impl;


import com.example.entity.BanDoc;
import com.example.entity.MuonSach;

import com.example.repo.MuonSachRepo;
import com.example.service.IMuonSachService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MuonSachServiceImpl implements IMuonSachService {
    private final MuonSachRepo repo;

    public MuonSachServiceImpl(MuonSachRepo repo) {
        this.repo = repo;
    }

    @Override
    public List<MuonSach> findAll() {
        return repo.findAll();
    }

    @Override
    public MuonSach save(MuonSach muonSach) {
        return repo.save(muonSach);
    }

    @Override
    public MuonSach update(MuonSach muonSach) {
        return repo.save(muonSach);
    }

    @Override
    public void delete(Integer id) {
        repo.deleteById(id);
    }

    @Override
    public MuonSach findByID(Integer id) {
        return repo.findById(id).get();
    }
}
