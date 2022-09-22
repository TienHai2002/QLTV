package com.example.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ban_doc")
public class BanDoc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "MA")
    private Integer ma;

    @Column(name = "TEN")
    private String ten;

    @Column(name = "SDT")
    private Integer sdt;

    @Column(name = "DIA_CHI")
    private String diaChi;

    @Column(name = "NGAY_SINH")
    private java.sql.Date ngaySinh;

    @Column(name = "TAO_TK")
    private java.sql.Date taoTk;

    @Column(name = "HANG")
    private Integer hang;

}