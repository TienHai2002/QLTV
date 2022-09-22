package com.example.repo;

import com.example.dto.BanDocDTO;
import com.example.entity.BanDoc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BanDocRepo extends JpaRepository<BanDoc,Integer> {


    BanDocDTO findById(String id);
}
