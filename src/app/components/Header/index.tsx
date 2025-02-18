import "./style.scss";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
import Category from "./Category";
import SearchForm from "./SearchForm";
import { Customer } from "@/app/types/customer";
import customerService from "@/app/services/server/customer";
import { getAccessToken } from "@/app/utils/cookies";

async function Header() {
    const accessToken: string | null = (await getAccessToken()) ?? "";
    const customer: Customer | null = await customerService.getCustomer(accessToken);

    return (
        <header className="header d-flex flex-column mb-3">
            <div className="header-background d-flex flex-column">
                <div className="header-top global-container align-self-center">
                    <div className="logo">
                        <h1>ECOMMERCE</h1>
                    </div>
                    <SearchForm />
                    <ul>
                        <Link className="me-3" href={"/cart"}>
                            <LocalGroceryStoreIcon color="inherit" />
                        </Link>
                        {customer ? (
                            <Link className="customer-btn" href={"/customer"}>
                                {customer.displayName}
                            </Link>
                        ) : (
                            <Link href={"/auth/sign-in"}>
                                <PersonIcon color="inherit" />
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
            <nav className="header-bottom global-container align-self-center">
                <ul>
                    <Category />
                    <li>
                        <Link href={"/home"}>Trang chủ</Link>
                    </li>
                    <li>Liên hệ</li>
                </ul>
                <div className="hotline">
                    <PhoneIcon />
                    <span>Hotline:</span>
                    <span>0000.000.000</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
