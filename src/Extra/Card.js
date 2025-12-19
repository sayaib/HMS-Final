import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function Card(props) {
    const IconPerformance = props.iconPerformance;

    return (
        <Paper
            sx={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                position: "relative",
                border: "1px solid #fafafa",
                borderRadius: "1rem",
                padding: "1rem 0.5rem",
                width: "100%",
                margin: 2,
            }}
        >
            <Grid container>
                {/* Equivalent to Hidden only="sm" */}
                <Box sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>
                    <Grid
                        item
                        sx={{
                            height: "80px",
                            width: "80px",
                            display: "flex",
                            padding: "10px",
                            position: "absolute",
                            zIndex: 1,
                            left: 12,
                            color: "#ff0000",
                            borderRadius: "25%",
                            justifyContent: "center",
                            alignItems: "center",
                            background: props.color,
                        }}
                    >
                        <img
                            src={IconPerformance}
                            alt=""
                            srcSet=""
                            style={{
                                minWidth: 40,
                                minHeight: 40,
                                color: "#ffffff",
                            }}
                        />
                    </Grid>
                </Box>
            </Grid>
            <Grid container>
                <Grid
                    container
                    justifyContent="flex-end"
                    sx={{
                        padding: 1,
                        margin: "16px 0 16px 0",
                    }}
                >
                    <Typography
                        variant="h6"
                        align="left"
                        style={{ fontSize: "0.9rem", fontWeight: "550" }}
                    >
                        {props.secondary != null ? props.secondary : "..."}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
