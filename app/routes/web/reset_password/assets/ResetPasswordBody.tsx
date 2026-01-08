import React from 'react'
import SigninForm from './ResetPasswordForm'
import ResetPasswordForm from './ResetPasswordForm'
import ResetPasswordFormAlt from './ResetPasswordFormAlt'
import AuthHeader from '~/components/content/AuthHeader'

const ResetPasswordBody = () => {
    return (
        <div className={`bg-white w-full 
        min-h-screen flex place-content-center `}>
            <AuthHeader />
            <ResetPasswordFormAlt />
        </div>
    )
}

export default ResetPasswordBody
