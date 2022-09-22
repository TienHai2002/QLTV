package com.example.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "nha_xuat_ban")
public class NhaXuatBan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "MA")
    private Integer ma;

    @Column(name = "TEN")
    private String ten;

    @Column(name = "TRANG_THAI")
    private Integer trangThai;

    @Column(name = "DIA_CHI")
    private String diaChi;

    @Column(name = "MO_TA")
    private String moTa;


}
