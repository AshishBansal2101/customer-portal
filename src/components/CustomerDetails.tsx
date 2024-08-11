import { useEffect, useState } from "react";
import styles from "./CustomerDetails.module.css";
import { useCustomer } from "../assets/context/CustomerContext";
import { Customer } from "../assets/type";
import CustomerImages from "./CustomerImages";

const CustomerDetails = () => {
  const { customers, selectedCustomer } = useCustomer();
  const [currentCustomer, setCurrentCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const customer = customers.find(
      (ele: Customer) => ele.id === selectedCustomer
    );
    setCurrentCustomer(customer || null);
  }, [selectedCustomer, customers]);

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.containerbox}>
        <div className={styles.detailsHeading}>
          <h2>
            {currentCustomer
              ? `${currentCustomer.firstName} ${currentCustomer.lastName}`
              : "Loading..."}
          </h2>
        </div>
        <div className={styles.customerDetails}>
          <div>
            Title:{" "}
            {currentCustomer
              ? `${currentCustomer.company.title}`
              : "Loading..."}
          </div>
          <div>
            Address:{" "}
            {currentCustomer
              ? `${currentCustomer.address.address}`
              : "Loading..."}
          </div>
          <p>
            Additional customer information can go here. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium aliquam quisquam, eum fuga
            doloremque est, impedit laboriosam vitae nulla quam ab id mollitia
            provident necessitatibus hic, voluptatum nobis eveniet
            eligendi?Lorem ipsum dolor sit amet.
          </p>
        </div>
        <CustomerImages />
      </div>
    </div>
  );
};

export default CustomerDetails;
