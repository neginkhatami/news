import React , {useState} from 'react';
import useStyle from "../Style";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {loginApi} from "../../Api/api-auth";


const Login = () => {

    const classes = useStyle();

    const [username , setUsername] = useState();
    const [password , setPassword] = useState();

    const data ={
        username : username,
        password : password
    };

    const handelLogin = () =>{
        if(!username || !password)
            return alert("اطلاعات خود را وارد کنید");
        loginApi(data,(isOk,data)=>{
            if(!isOk)
                return alert("نام کاربری یا رمز عبور اشتباه است");
            return alert("شما با موفقیت وارد شدید");
        })
    };
    return (
        <div>
            <Typography className={classes.title} variant={"h5"}>ورود به سایت</Typography>
            <Paper elevation={5} className={classes.paper}>
                <Grid contaner direction={"column"}>
                    <Typography color="primary" className={classes.label}> نام کاربری :</Typography>
                    <Input className={classes.input} value={username} onChange={e => setUsername(e.target.value)}/>
                    <Typography color="primary" className={classes.label}>رمز عبور :</Typography>
                    <Input className={classes.input} value={password} onChange={e => setPassword(e.target.value)}/>
                    <Button className={classes.button} color="primary" onClick={handelLogin}>ورود</Button>
                </Grid>
            </Paper>
        </div>
    );
};

export default Login;