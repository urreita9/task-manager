import { FC, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';

interface Props {
	children: React.ReactNode;
}

export interface EntriesState {
	entries: [];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	return (
		<EntriesContext.Provider
			value={{
				...state,

				//Methods
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
