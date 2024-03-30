import React from "react";

import { GoogleLogin } from "@react-oauth/google";

import { Button, TextBox } from "_components/Form";
import Flex from "_components/Misc/Flex/Flex";
import Typography from "_components/Misc/Typography/Typography";

import useForm from "_hooks/useForm";

import { SignUpSchema } from "../_utils/validation-rules";

const SignUpForm = (props) => {
    const { onSubmit } = props;

    const { register, submit, errors, isSubmitting } = useForm({ schema: SignUpSchema })

    
    return (
        <React.Fragment>
            <TextBox
                type='text'
                labelName='Email'
                placeHolder="Enter email"
                validationMsg={errors.email}
                {...register('email')}
            />

            <TextBox
                type='password'
                labelName="Password"
                placeHolder="Enter password"
                validationMsg={errors.password}
                autoComplete='new-password'
                {...register('password')}
            />

            <Button variant='accent' disabled={isSubmitting} onClick={submit(onSubmit)}>
                {isSubmitting ?
                    (
                        <svg class="lucide lucide-loader-circle mx-2 animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                    )
                    : null}
                Sign Up with Email
            </Button>


            <div className="border-b border-another my-5 text-center leading-1">
                <span className="bg-default text-secondary px-3">or</span>
            </div>


            <Flex direction='column'>

                <GoogleLogin
                    text="signup_with"
                    onSuccess={(credentialResponse) => { console.log(credentialResponse) }}
                    onError={() => { alert('Error') }}
                />

            </Flex>

            <Typography variant='secondary' className='my-2'>
                By clicking continue, you agree to our Terms of Service and Privacy Policy.
            </Typography>

        </React.Fragment>
    )
}

export default SignUpForm