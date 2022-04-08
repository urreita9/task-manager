import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

interface Props {
	children: React.ReactNode;
}

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ratione, voluptate pariatur accusantium doloremque consectetur omnis ea molestias ipsam eveniet!',
			status: 'pending',
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repellat ab tempora recusandae aliquam animi ea unde repudiandae esse! Culpa cum amet repellat pariatur consequuntur natus dolorum porro nobis dignissimos illo. Aliquid!',
			status: 'in-progress',
			createdAt: Date.now() - 1908282,
		},
		{
			_id: uuidv4(),
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto incidunt blanditiis facilis similique sed, temporibus quia! Et, qui nostrum.',
			status: 'completed',
			createdAt: Date.now() - 100004,
		},
	],
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
