import React, { useState } from 'react';
import {Grid,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TablePagination,Paper,} from '@mui/material';
import WorkFlowComponent from './WorkFlowComponent';


const TableComponent = ({data}) => {

  if (!data) {
    return <div>Loading...</div>; //Loader
  }

  const { table_headers, table_data, workflow_steps } = data;

  return (
 
  
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {/* Table Start */}
      <Grid item xs={8} id="tableWrapper">
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {table_headers.map((header) => (
                    <TableCell
                      key={header.name}
                      sx={{
                        fontWeight: 'bold',
                        backgroundColor: '#dddd',
                        color: '#282c34',
                        borderBottom: '2px solid #282c34',
                       
                      }}
                    >
                    {header.name}
                     </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {table_data.map((row, rowIndex) => (
                  <TableRow key={rowIndex} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex} sx={{ borderBottom: '1px solid #ddd', borderLeft: '1px solid #dddd', }}>

                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      {/* Table End */}
      {/* WorkFlowComponent Start*/}
        <WorkFlowComponent workflowData = {workflow_steps}/>
      {/* WorkFlowComponent End*/}
    </Grid>
   
    );
};

export default TableComponent;
