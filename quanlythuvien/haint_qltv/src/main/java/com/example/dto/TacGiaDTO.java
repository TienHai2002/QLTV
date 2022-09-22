package com.example.dto;

public class TacGiaDTO {
    private Integer id;
    private Integer ma;
    private String ten;
    private Integer sdt;
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

    public Integer getSdt() {
        return this.sdt;
    }

    public void setSdt(Integer sdt) {
        this.sdt = sdt;
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
