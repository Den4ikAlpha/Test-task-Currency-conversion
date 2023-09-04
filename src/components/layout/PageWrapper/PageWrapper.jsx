import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import BasicTable from "../../Table/Table.tsx";
import CurrencyConverter from "../../Converter/Converter.jsx";
import styles from './PageWrapper.module.scss';

function PageWrapper() {
  return (
    <>
      <Header />
      <main className={styles['main-wrapper']}>
        <BasicTable />
        <CurrencyConverter />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M12,14L16,10L20,14H16.9C16.44,18.56 14.42,22 12,22C10.32,22 8.79,20.76 8.42,19H4V17H8.24C8.7,14.39 10.46,12.32 12,12.11V2H14V12.11C15.74,12.31 17.6,13.8 18,16H22V18H18.42C17.95,20.61 16.19,22.68 14.45,23L12,22.45C13.39,22.17 14.57,21.18 15.09,20H12V14Z" />
      </svg>
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
