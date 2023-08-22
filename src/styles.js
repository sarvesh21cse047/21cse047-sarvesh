
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    minWidth: 275,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
