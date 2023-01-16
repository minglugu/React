import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolver/yup';
import * as yup from 'yup'

import {
    Button,
    Paper,
    TextField,
    Typpgraphy
} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import SubmitButton from '../helper/SubmitButton';
import {CUSTOMER_VALIDATOR} from '../helper/constants';
import {useStyles} from "./useStyles";


// regex document: https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285
// regex 也可以尝试用这个网站：https://regexr.com/
// 还可以Google搜索 regex auto generator，会找到很多相关网站，找一个自己用起来顺手的

const schema = yup.object().shape(CUSTOMER_VALIDATOR)

const HookForm = props => {
    console.log(props)
    const classes = useStyles()


/*  This option allows you to configure when inputs with errors get re-validated after submit. 
    By default, validation is only triggered during an input change. 
    onChange | onBlur | onSubmit

    https://github.com/react-hook-form/resolvers

    npm install @hookform.resolvers
*/
    const [isSaving, setIsSaving] = React.useState(false)
    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm({
        resolver: yupResolver(schema),
        reValidateMode: "onChange"
    })

    const handleSaveSubmit = formValues => {
        console.log(formValues)
    }

    return (
        <Grid container>
            <Grid className={classes.root} item xs={12} sm={12}>
                <Paper className={classes.paper__form}>
                    <Typography className={classes.form_title} variant="h5" align="center">
                        Creating a New Customer
                    </Typography>

                    <form noValidate onSubmit={handleSubmit(handleSaveSubmit)}>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" margin="normal" name="name" id="name"
                                       label="name *" size="small" 
                                       autoFocus {...register("name")}
                                       errors={Boolean(errors.name?.message)}
                                       helperText={errors.name?.message}
                                       InputLabelProps={{
                                            shrink: true
                                       }}
                            />                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" margin="normal" name="age" id="age"
                                       label="age *" size="small"
                                       {...register("age")}
                                       errors={Boolean(errors.age?.message)}
                                       helperText={errors.age?.message}
                                       InputLabelProps={{
                                            shrink: true
                                       }}
                            
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" margin="normal" name="email" id="email"
                                       label="email" size="email"
                                       {...register("email")}
                                       errors={Boolean(errors.email?.message)}
                                       helperText={errors.email?.message}
                                       InputLabelProps={{
                                            shrink: true
                                       }}
                            
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" margin="normal" name="wechat" id="wechat"
                                       label="wechat" size="wechat"
                                       {...register("wechat")}
                                       errors={Boolean(errors.wechat?.message)}
                                       helperText={errors.wechat?.message}
                                       InputLabelProps={{
                                            shrink: true
                                       }}
                            
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" margin="normal" name="password" id="password"
                                       label="password *" size="password"
                                       {...register("password")}
                                       errors={Boolean(errors.password?.message)}
                                       helperText={errors.password?.message}
                                       InputLabelProps={{
                                            shrink: true
                                       }}
                            />
                        </Grid>
                    </form>
                </Paper>

            </Grid>
        </Grid>
    )


}


export default HookForm;