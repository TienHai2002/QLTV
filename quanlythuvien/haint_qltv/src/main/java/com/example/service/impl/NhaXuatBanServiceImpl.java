package com.example.service.impl;

import com.example.entity.NhaXuatBan;
import com.example.repo.NhaXuatBanRepo;
import com.example.service.INhaXuatBanSerVice;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhaXuatBanServiceImpl implements INhaXuatBanSerVice {
    private final NhaXuatBanRepo repo;

    public NhaXuatBanServiceImpl(NhaXuatBanRepo repo) {
        this.repo = repo;
    }


    @Override
    public List<NhaXuatBan> findAll() {
        return repo.findAll();
    }

    @Override
    public NhaXuatBan save(NhaXuatBan nhaXuatBan) {
        return repo.save(nhaXuatBan);
    }

    @Override
    public NhaXuatBan update(NhaXuatBan nhaXuatBan) {
        return repo.save(nhaXuatBan);
    }

    @Override
    public void delete(Integer id) {
        repo.deleteById(id);
    }

    @Override
    public NhaXuatBan findByID(Integer id) {
        return repo.findById(id).get();
    }
}
