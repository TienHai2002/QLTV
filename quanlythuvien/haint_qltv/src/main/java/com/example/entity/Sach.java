package com.example.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "sach")
public class Sach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "MA")
    private Integer ma;

    @Column(name = "TEN")
    private String ten;




    @Column(name = "ID_NXB")
    private Integer idNxb;

    @Column(name = "ID_TG")
    private Integer idTg;

    @Column(name = "CHU_DE")
    private String chuDe;

    @Column(name = "NXB")
    private Integer nxb;

    @Column(name = "MO_TA")
    private String moTa;

    @Column(name = "SLCL")
    private Integer slcl;

    @Column(name = "SLDM")
    private Integer sldm;

    @Column(name = "TONG_SACH")
    private Integer tongSach;


}
