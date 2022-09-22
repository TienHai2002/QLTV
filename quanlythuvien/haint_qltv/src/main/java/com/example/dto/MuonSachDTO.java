package com.example.dto;

public class MuonSachDTO {
    private Integer id;
    private Integer idBanDoc;
    private Integer idSach;
    private Integer soLuong;
    private java.sql.Timestamp ngayMuon;
    private java.sql.Timestamp ngayTra;
    private String trangThai;
    private String ghiChu;

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdBanDoc() {
        return this.idBanDoc;
    }

    public void setIdBanDoc(Integer idBanDoc) {
        this.idBanDoc = idBanDoc;
    }

    public Integer getIdSach() {
        return this.idSach;
    }

    public void setIdSach(Integer idSach) {
        this.idSach = idSach;
    }

    public Integer getSoLuong() {
        return this.soLuong;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }

    public java.sql.Timestamp getNgayMuon() {
        return this.ngayMuon;
    }

    public void setNgayMuon(java.sql.Timestamp ngayMuon) {
        this.ngayMuon = ngayMuon;
    }

    public java.sql.Timestamp getNgayTra() {
        return this.ngayTra;
    }

    public void setNgayTra(java.sql.Timestamp ngayTra) {
        this.ngayTra = ngayTra;
    }

    public String getTrangThai() {
        return this.trangThai;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }

    public String getGhiChu() {
        return this.ghiChu;
    }

    public void setGhiChu(String ghiChu) {
        this.ghiChu = ghiChu;
    }
}
