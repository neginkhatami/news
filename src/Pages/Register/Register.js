import React , {useState} from 'react';
import useStyle from "../Style";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {registerApi} from "../../Api/api-auth";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from "react-router-dom";

const Register = () => {

    const classes = useStyle();

    const [fullNameRegister, setFullNameRegister] = useState();
    const [usernameRegister, setUsernameRegister] = useState();
    const [emailRegister, setEmailRegister] = useState();
    const [passwordRegister, setPasswordRegister] = useState();

    const data = {
        name : fullNameRegister,
        username : usernameRegister,
        email : emailRegister,
        password : passwordRegister,
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
        <div>
            <Box className={classes.container}>
                <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                <Typography className={classes.title} variant={"h5"} component={"h1"}>ثبت نام</Typography>
                <Box component="form" noValidate className={classes.form}>
                    <Input className={classes.input} placeholder={"نام و نام خانوادگی"} value={fullNameRegister} onChange={e => setFullNameRegister(e.target.value)}/>
                    <Input className={classes.input} placeholder={"نام کاربری"} value={usernameRegister} onChange={e => setUsernameRegister(e.target.value)}/>
                    <Input className={classes.input} placeholder={"ایمیل"} value={emailRegister} onChange={e => setEmailRegister(e.target.value)}/>
                    <Input className={classes.input} placeholder={"رمز عبور"} value={passwordRegister} onChange={e => setPasswordRegister(e.target.value)}/>
                    <FormControlLabel className={classes.check}
                        control={<Checkbox value="remember" color="primary" />} label="با ورود در سایت شما شرایط و قوانین سایت را می‌پذیرم"/>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.button} onClick={handelRegister}>ثبت نام</Button>
                    <Grid container className={classes.item}>
                        <Grid item xs color="primary">
                            <Link to="/login"><Typography color="primary" className={classes.link1}>ورود</Typography></Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default Register;
