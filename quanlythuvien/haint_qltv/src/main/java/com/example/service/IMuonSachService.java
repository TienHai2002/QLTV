package com.example.service;

import com.example.entity.MuonSach;

import java.util.List;

public interface IMuonSachService {
    List<MuonSach> findAll();

    MuonSach save(MuonSach muonSach);

    MuonSach update(MuonSach muonSach);

    void delete(Integer id);

    MuonSach findByID(Integer id);
}
