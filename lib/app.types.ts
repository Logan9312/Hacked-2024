interface HouseHold {
	id: number;
	name: string;
}

interface List {
	id: number;
	household_id: number;
	name: string;
	description: string;
}

interface Message {
	id: number;
	household_id: number;
	content: string;
	author_id: number;
	timestamp: string;
}

interface AppUser {
	id: number;
	household_id: number;
	username: string;
	email: string;
}
