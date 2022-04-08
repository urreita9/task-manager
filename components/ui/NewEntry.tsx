import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
export const NewEntry = () => {
	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			<Button startIcon={<AddIcon />} fullWidth variant='outlined'>
				Add Task
			</Button>
			<TextField
				fullWidth
				sx={{ marginTop: 2, marginBottom: 1 }}
				placeholder='New Entry'
				autoFocus
				multiline
				label='New Entry'
				helperText='Type in a new Task'
			/>
			<Box display='flex' justifyContent='space-between'>
				<Button variant='text'>Cancel</Button>
				<Button
					variant='outlined'
					color='secondary'
					endIcon={<SaveOutlinedIcon />}
				>
					Save
				</Button>
			</Box>
		</Box>
	);
};
