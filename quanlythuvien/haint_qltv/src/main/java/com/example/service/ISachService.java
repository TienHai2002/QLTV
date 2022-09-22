package com.example.service;

import com.example.entity.BanDoc;
import com.example.entity.Sach;

import java.util.List;

public interface ISachService {
    List<Sach> findAll();

    Sach save(Sach sach);

    Sach update(Sach sach);

    void delete(Integer id);

    Sach findByID(Integer id);

}
