package com.example.service;

import com.example.entity.TacGia;

import java.util.List;

public interface ITacGiaService {
    List<TacGia> findAll();

    TacGia save(TacGia tacGia);

    TacGia update(TacGia tacGia);

    void delete(Integer id);

    TacGia findByID(Integer id);
}
