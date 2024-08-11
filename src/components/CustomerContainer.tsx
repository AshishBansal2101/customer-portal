import { useState } from "react";
import { CustomerProvider } from "../assets/context/CustomerContext";
import CustomerDetails from "./CustomerDetails";
import CustomerList from "./CustomerList";
import styles from "./CustomerContainer.module.css";

const CustomerContainer = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList((prev) => !prev);
  };

  return (
    <CustomerProvider>
      <div className={styles.mobileMenu}>
        <button onClick={toggleList} className={styles.toggleButton}>
          {showList ? "Hide List" : "Show List"}
        </button>
      </div>

      <div className={styles.mobileMenu}>
        {showList ? (
          <div onClick={toggleList}>
            <CustomerList />{" "}
          </div>
        ) : (
          <CustomerDetails />
        )}
      </div>

      <div className={styles.desktopView}>
        <CustomerList />
        <CustomerDetails />
      </div>
    </CustomerProvider>
  );
};

export default CustomerContainer;
