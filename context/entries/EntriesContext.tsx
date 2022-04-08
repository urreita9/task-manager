import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface ContextProps {
	entries: Entry[]; //Todo Data Type

	//Methods
}

export const EntriesContext = createContext({} as ContextProps);
