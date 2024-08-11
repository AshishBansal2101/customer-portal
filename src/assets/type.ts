export interface Image {
	url: string;
	id: string;
}

export interface CustomerContextType {
	customers: Customer[];
	handleCustomSelect: (customerId: number) => void;
	selectedCustomer: number | null;
	loadMoreCustomers: () => void;
}

export interface Address {
	address: string;
	city: string;
	state: string;
	zip: string;
}

export interface Company {
	title: string;
	description?: string;
}

export interface Customer {
	id: number;
	firstName: string;
	lastName: string;
	company: Company;
	address: Address;
}

export interface CustomerPanelItemProps {
	id: number;
	firstName: string;
	lastName: string;
	details: string;
	isSelected: boolean;
}
