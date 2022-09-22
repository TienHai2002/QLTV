package com.example.repo;

import com.example.entity.MuonSach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MuonSachRepo extends JpaRepository<MuonSach,Integer> {
}
