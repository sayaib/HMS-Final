import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./Card.css";

export default function Card(props) {
    const IconPerformance = props.iconPerformance;

    return (
        <Paper className="card-paper">
            <Grid container>
                {/* Equivalent to Hidden only="sm" */}
                <Box sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>
                    <Grid
                        item
                        className="card-icon-container"
                        style={{ background: props.color }}
                    >
                        <img
                            src={IconPerformance}
                            alt={props.secondary || "Card Icon"}
                            className="card-icon-img"
                        />
                    </Grid>
                </Box>
            </Grid>
            <Grid container>
                <Grid
                    container
                    justifyContent="flex-end"
                    className="card-text-container"
                >
                    <Typography
                        variant="h6"
                        align="left"
                        className="card-title"
                    >
                        {props.secondary != null ? props.secondary : "..."}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
