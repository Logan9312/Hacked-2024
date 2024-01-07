interface HouseHold {
	id: number;
	name: string;
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