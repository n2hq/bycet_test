import React, { useEffect, useState } from 'react'
import AccountLayout from '../assets/AccountLayout'
import ProfileContentLayout from '../assets/ProfileContentLayout'
import { IsAuthenticated } from '~/lib/lib'
import { useAuth } from '~/context/AuthContext'
import LoadingMessage from '~/components/content/LoadingMessage'
import EventForm from './assets/EventForm'

const index = () => {




    return (
        <AccountLayout>
            <ProfileContentLayout title={'Create Event'}>
                <EventForm />
            </ProfileContentLayout>
        </AccountLayout>
    )
}

export default index
