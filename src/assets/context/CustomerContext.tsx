import { createContext, useContext, useEffect, useState } from "react";
import { Customer, CustomerContextType } from "../type";

const CustomerContext = createContext<CustomerContextType | undefined>(
  undefined
);

export const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useCustomer must be used within a CustomerProvider");
  }
  return context;
};

export const CustomerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomers] = useState<number | null>(
    null
  );
  const [skip, setSkip] = useState<number>(0);
  const limit = 20;
  const [totalUser, setTotalUsers] = useState<number | null>(null);

  useEffect(() => {
    fetchCustomers();
  }, [skip]);

  const fetchCustomers = async () => {
    if (totalUser === null || skip < totalUser) {
      try {
        const apiResponse = await fetch(
          `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
        );

        if (!apiResponse.ok) {
          throw new Error("Failed to fetch customers");
        }

        const customerList = await apiResponse.json();
        setCustomers((prev) => [...prev, ...customerList.users]);

        if (totalUser === null) {
          setTotalUsers(customerList.total);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    }
  };

  useEffect(() => {
    if (customers.length > 0 && selectedCustomer === null) {
      handleCustomSelect(customers[0].id);
    }
  }, [customers]);

  const handleCustomSelect = (customerId: number) => {
    setSelectedCustomers(customerId);
  };

  const loadMoreCustomers = () => {
    if (skip < 180) {
      setSkip((prev) => prev + limit);
    } else {
      setSkip(0);
    }
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        handleCustomSelect,
        selectedCustomer,
        loadMoreCustomers,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
