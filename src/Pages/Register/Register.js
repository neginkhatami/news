import React , {useState} from 'react';
import useStyle from "../Style";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {registerApi} from "../../Api/api-auth";

const Register = () => {

    const classes = useStyle();

    const [fullNameRegister, setFullNameRegister] = useState();
    const [usernameRegister, setUsernameRegister] = useState();
    const [emailRegister, setEmailRegister] = useState();
    const [passwordRegister, setPasswordRegister] = useState();
    const [confPasswordRegister, setConfPasswordRegister] = useState();

    const data = {
        name : fullNameRegister,
        username : usernameRegister,
        email : emailRegister,
        password : passwordRegister,
        confPassword : confPasswordRegister
    };

    const handelRegister = () => {
        if(!fullNameRegister || !usernameRegister|| !emailRegister || !passwordRegister)
            return alert("اطلاعات خود را تکمیل کنید");
        if(data.password !== data.confPassword)
            return alert("رمزها مشابه نیستند");
            data.confPassword = undefined;
        registerApi(data,(isOk,data)=>{
            if(!isOk)
                return alert(data);
            return alert("شما با موفقیت ثبت نام شدید");
        })
    };

    return (
        <>
            <Typography className={classes.title} variant={"h5"}>ثبت نام سایت</Typography>
            <Paper elevation={5} className={classes.paper}>
                <Grid contaner direction={"column"}>
                    <Typography color="primary" className={classes.label}>نام کامل</Typography>
                    <Input className={classes.input} value={fullNameRegister} onChange={e => setFullNameRegister(e.target.value)}/>
                    <Typography color="primary" className={classes.label}>نام کاربری</Typography>
                    <Input className={classes.input} value={usernameRegister} onChange={e => setUsernameRegister(e.target.value)}/>
                    <Typography color="primary" className={classes.label}>ایمیل</Typography>
                    <Input className={classes.input} value={emailRegister} onChange={e => setEmailRegister(e.target.value)}/>
                    <Typography color="primary" className={classes.label}>رمز عبور</Typography>
                    <Input className={classes.input} value={passwordRegister} onChange={e => setPasswordRegister(e.target.value)}/>
                    <Typography color="primary" className={classes.label}>تکرار رمز عبور</Typography>
                    <Input className={classes.input} value={confPasswordRegister} onChange={e => setConfPasswordRegister(e.target.value)}/>
                    <Button className={classes.button} color="primary" onClick={handelRegister}>ثبت نام</Button>
                </Grid>
            </Paper>
        </>
    );
};

export default Register;