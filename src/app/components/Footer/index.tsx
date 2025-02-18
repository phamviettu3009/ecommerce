import React from "react";
import "./style.scss";

function Footer() {
    return (
        <footer className="container-fluid d-flex flex-column">
            <div className="row ms-0 me-0 global-container align-self-center">
                <div className="col-sm ps-0 pe-0">
                    <h6>Giới thiệu</h6>
                    <p>Cửa hàng: ĐIỆN NƯỚC - KIM KHÍ ĐỨC TÂM</p>
                    <p>Chuyên: THIẾT BỊ ĐIỆN - VẬT TƯ NGÀNH NƯỚC - KIM KHÍ TỔNG HỢP</p>
                </div>
                <div className="col-sm ps-0 pe-0">
                    <h6>Liên hệ</h6>
                    <p>Địa chỉ: Quảng phú, Cưmgar, ĐăkLăk</p>
                    <p>Hotline: 0000.000.000</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
