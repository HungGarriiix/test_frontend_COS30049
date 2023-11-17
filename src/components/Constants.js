import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

class Constants {
    // Domain name URL to use
    static DOMAIN_URL = "http://14.225.211.42";
    // static DOMAIN_URL = "http://localhost:5000";
    // Styling elements
    // Black-and-white table
    static BW_TABLE_CELL = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    static BW_TABLE_ROW = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    // Notification style properties
    static ISSUE_COLOR = { color: 'red' };
    static SUGGESTION_COLOR = { color: 'green' };
    static SAFE_NOTIF_COLOR = {
        color: 'green'
        , fontWeight: 'bold'
        , textTransform: 'capitalize'
    };
    static RISKY_NOTIF_COLOR = {
        color: 'red'
        , fontWeight: 'bold'
        , textTransform: 'capitalize'
    };

    // Choosing approriate status ('safe' / 'risky')
    static GetNotifStatus = (status) => (status === 'safe') ? this.SAFE_NOTIF_COLOR : this.RISKY_NOTIF_COLOR;
}

export default Constants;