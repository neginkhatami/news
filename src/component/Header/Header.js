import React from 'react';
import useStyle from "./Styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = () => {
    const classes = useStyle();

    return (
        <div>
            <AppBar>
                <Toolbar className={classes.bar}>
                    <Typography className={classes.title} variant="h6">سایت خبری</Typography>
                    <Grid container direction={"row-reverse"}>
                        <Link to={"/"}><Button color={"secondary"} className={classes.text}>صفحه اصلی</Button></Link>
                        <Link to={"/register"}><Button color={"secondary"}>ثبت نام</Button></Link>
                        <Link to={"/login"}><Button color={"secondary"}>ورود</Button></Link>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;