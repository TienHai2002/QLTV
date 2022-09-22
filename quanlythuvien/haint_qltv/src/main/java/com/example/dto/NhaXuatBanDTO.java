package com.example.dto;

public class NhaXuatBanDTO {
    private Integer id;
    private Integer ma;
    private String ten;
    private Integer trangThai;
    private String diaChi;
    private String moTa;

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMa() {
        return this.ma;
    }

    public void setMa(Integer ma) {
        this.ma = ma;
    }

    public String getTen() {
        return this.ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public Integer getTrangThai() {
        return this.trangThai;
    }

    public void setTrangThai(Integer trangThai) {
        this.trangThai = trangThai;
    }

    public String getDiaChi() {
        return this.diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getMoTa() {
        return this.moTa;
    }

    public void setMoTa(String moTa) {
        this.moTa = moTa;
    }
}
