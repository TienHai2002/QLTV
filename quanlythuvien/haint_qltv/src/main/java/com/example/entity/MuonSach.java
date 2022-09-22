package com.example.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "muon_sach")
public class MuonSach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "ID_BAN_DOC")
    private Integer idBanDoc;

    @Column(name = "ID_SACH")
    private Integer idSach;

    @Column(name = "SO_LUONG")
    private Integer soLuong;

    @Column(name = "NGAY_MUON")
    private java.sql.Date ngayMuon;

    @Column(name = "NGAY_TRA")
    private java.sql.Date ngayTra;

    @Column(name = "TRANG_THAI")
    private String trangThai;

    @Column(name = "GHI_CHU")
    private String ghiChu;


}
