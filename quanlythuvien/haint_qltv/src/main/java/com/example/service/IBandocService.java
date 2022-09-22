package com.example.service;

import com.example.entity.BanDoc;
import org.springframework.stereotype.Service;

import java.util.List;


public interface IBandocService {
    List<BanDoc> findAll();

    BanDoc save(BanDoc banDoc);

    BanDoc update(BanDoc banDoc);

    void delete(Integer id);

    BanDoc findByID(Integer id);
}
