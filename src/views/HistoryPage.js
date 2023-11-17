import React, { useState } from 'react';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Grid from '@mui/material/Grid';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Constants from '../components/Constants';

const StyledTableCell = Constants.BW_TABLE_CELL;
const StyledTableRow = Constants.BW_TABLE_ROW;

// main page section
function HistoryPage({ historyArray, onParamPass }) {
  const [param, setParam] = useState('');
  var array = [];
  if (historyArray){
    array = [...historyArray];
  } 

  const handleSearchInputChange = (event) => {
    setParam(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter'){
      onParamPass(param);
    }
  }

  return (
    <div>
      <Grid container direction="row" justifyContent="center" spacing={6}>
        <Grid item>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <h2>Audit history</h2>
            <Box sx={{ display: 'flex',  alignItems: 'center', p: 2 }}>
              <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="search_filename" label="Search filename" variant="filled" value={param} 
                onChange={handleSearchInputChange} 
                onKeyDown={handleSearch}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>File Name</StyledTableCell>
            <StyledTableCell>Upload Date</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Vulnerabilities</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((historyItem, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{historyItem.file_name}</StyledTableCell>
              <StyledTableCell>{historyItem.date_uploaded}</StyledTableCell>
              <StyledTableCell style={Constants.GetNotifStatus(historyItem.status)}>
                {historyItem.status}
              </StyledTableCell>
              <StyledTableCell>
              {historyItem.vulnerabilities.map((vulnerability, idx) => (
                <span key={idx}>
                  <p><b><span style={Constants.ISSUE_COLOR}>- Issue: </span></b>{vulnerability.issue}</p>
                  <p><b><span style={Constants.SUGGESTION_COLOR}>+ Suggestion: </span></b>{vulnerability.suggestion}</p>
                  <br></br>
                </span>
              ))}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default HistoryPage;