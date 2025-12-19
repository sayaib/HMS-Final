import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./Card.css";

export default function Card(props) {
    const IconPerformance = props.iconPerformance;

    return (
        <Paper className="card-paper" elevation={0}>
            <div className="card-content">
                <div 
                    className="card-icon-wrapper" 
                    style={{ background: props.color }}
                >
                    <img
                        src={IconPerformance}
                        alt={props.secondary || "Card Icon"}
                        className="card-icon-img"
                    />
                </div>
                <div className="card-text-wrapper">
                    <Typography
                        variant="h6"
                        className="card-title"
                    >
                        {props.secondary || "..."}
                    </Typography>
                </div>
                <div className="card-action-icon">
                    <ChevronRightIcon />
                </div>
            </div>
        </Paper>
    );
}
