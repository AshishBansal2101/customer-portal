import { useCustomer } from "../assets/context/CustomerContext";
import styles from "./CustomerPanelItem.module.css";
import { CustomerPanelItemProps } from "../assets/type";


const CustomerPanelItem = ({
  id,
  firstName,
  lastName,
  details,
  isSelected,
}: CustomerPanelItemProps) => {
  const { handleCustomSelect } = useCustomer();

  const selectCustomer = () => {
    handleCustomSelect(id);
  };
  return (
    <div
      className={`${styles.item} ${isSelected ? styles.selected : ""}`}
      onClick={selectCustomer}
    >
      <div className={styles.name}>
        {firstName} {lastName}
      </div>
      <div className={styles.detail}>
        <div>Title: {details}</div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sed at
        eum maxime maiores, quaerat autem dolorum. Id eum rerum voluptatibus
        sequi harum ex sit! Lore
      </div>
    </div>
  );
};

export default CustomerPanelItem;
