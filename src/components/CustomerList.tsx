import styles from "./CustomerList.module.css";
import CustomerPanelItem from "./CustomerPanelItem";
import { useCustomer } from "../assets/context/CustomerContext";
import { Customer, CustomerContextType } from "../assets/type";

const CustomerList = () => {
  const { customers, selectedCustomer, loadMoreCustomers } =
    useCustomer() as CustomerContextType;

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      loadMoreCustomers();
    }
  };

  const generateUniqueKey = (customerId: number) => {
    return `${customerId}-${Math.random()}`;
  };

  return (
    <div className={styles.listItems} onScroll={handleScroll}>
      {customers.map((customer: Customer) => (
        <CustomerPanelItem
          key={generateUniqueKey(customer.id)}
          id={customer.id}
          firstName={customer.firstName}
          lastName={customer.lastName}
          details={customer.company.title}
          isSelected={selectedCustomer === customer.id}
        />
      ))}
    </div>
  );
};

export default CustomerList;
