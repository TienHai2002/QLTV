package com.example.repo;

import com.example.entity.NhaXuatBan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NhaXuatBanRepo extends JpaRepository<NhaXuatBan,Integer> {
}
