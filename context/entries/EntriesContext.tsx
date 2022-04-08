import { createContext } from 'react';

interface ContextProps {
	entries: []; //Todo Data Type

	//Methods
}

export const EntriesContext = createContext({} as ContextProps);
