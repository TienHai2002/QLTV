package com.example.service;

import com.example.entity.NhaXuatBan;

import java.util.List;

public interface INhaXuatBanSerVice {
    List<NhaXuatBan> findAll();

    NhaXuatBan save(NhaXuatBan nhaXuatBan);

    NhaXuatBan update(NhaXuatBan nhaXuatBan);

    void delete(Integer id);

    NhaXuatBan findByID(Integer id);
}
