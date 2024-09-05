import React, { useState, useEffect } from "react";
import {
    Container, ButtonGroup, Button,
} from "@mui/material";
import TableComponent from "./TableComponent";
import DataIcon from '@mui/icons-material/DataUsage';
import SummaryIcon from '@mui/icons-material/InsertChart';
import LogsIcon from '@mui/icons-material/Description';



const TableModule = ({tableData}) => {
    console.log("tableData",tableData)
    return (
        <Container className="container-wrapper">
            <div className="button-container" style={{ display: 'flex' }}>
                <ButtonGroup size="large" aria-label="Large button group">
                    <Button className="data-button">
                        <DataIcon />
                        Data
                    </Button>
                    <Button>
                        <SummaryIcon />
                        Summary
                    </Button>
                    <Button>
                        <LogsIcon />
                        Logs
                    </Button>
                </ButtonGroup>

            </div>
            <TableComponent data={tableData} />
        </Container>
    );
};

export default TableModule;
