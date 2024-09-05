import React from 'react';
import {Grid,Typography,Box,Accordion,AccordionSummary,AccordionDetails,
} from '@mui/material';
import {AddCircle} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WorkFlowComponent = ({ workflowData }) => {

    return (

        <Grid item xs={4}>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#282c34', marginBottom: "15px" }}>
                    Workflow
                </Typography>
                {workflowData.map((step, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AddCircle sx={{ color: '#4caf50', marginRight: 1 }} />
                                <Typography sx={{ fontWeight: 'bold', marginLeft: 1 }}>{step.name_title}</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ padding: 1 }}>
                                <Typography variant="body1">
                                    <strong>Name:</strong> {step.name}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Status:</strong> {step.status}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Extra Params:</strong>
                                </Typography>
                                <Box sx={{ paddingLeft: 2 }}>
                                    <Typography variant="body2">
                                        {Object.keys(step.params_extra).map((key) => (
                                            <div key={key}>
                                                <strong>{key}:</strong> {JSON.stringify(step.params_extra[key])}
                                            </div>
                                        ))}
                                    </Typography>
                                </Box>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Grid>
    );
};

export default WorkFlowComponent;
