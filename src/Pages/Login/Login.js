import React , {useState} from 'react';
import useStyle from "../Style";
import Typography from "@material-ui/core/Typography";
import {loginApi} from "../../Api/api-auth";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from "@material-ui/core/Avatar";
import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";


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
            <Box className={classes.container}>
                <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                <Typography className={classes.title} variant={"h5"} component={"h1"}>ورود</Typography>
                <Box component="form" noValidate className={classes.form}>
                    <Input className={classes.input} placeholder={"نام کاربری"} value={username} onChange={e => setUsername(e.target.value)}/>
                    <Input placeholder={"رمز عبور"} value={password} onChange={e => setPassword(e.target.value)}/>
                    <FormControlLabel className={classes.check}
                        control={<Checkbox value="remember" color="primary" />} label="مرا بخاطر بسپار"/>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.button} onClick={handelLogin}>ورود</Button>
                    <Grid container className={classes.item}>
                    <Grid item xs color="primary">
                        <Link href="#"><Typography color="primary" className={classes.link}>فراموشی رمز عبور؟</Typography></Link>
                    </Grid>
                    <Grid item>
                        <Link to={"/register"}>
                            <Typography color="primary" style={{fontSize :"0.85rem"}}>ثبت نام</Typography></Link>
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default Login;
