import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useOperation } from '~/context/OperationContext';
import CreatePageSchema from '../../create_business/assets/CreatePageSchema';
import Input from '~/components/content/input/Input';
import DateInput from '~/components/content/date/DateInput';
import HoursInput from '~/components/content/time/HoursInput';



const EventForm = () => {
    const [formdata, setFormdata] = useState<any | null>(null)

    const { showOperation, showSuccess, showError, showWarning, showInfo, completeOperation } = useOperation();

    const changeHandler = (e: any) => {
        let value = e.target.value
        let name = e.target.name
        setFormdata((previousValue: any) => {
            return (
                {
                    ...previousValue, [name]: value
                }
            )
        })
    }

    const dateChangeHandler = (val: any, name: string) => {

        setFormdata((previousValue: any) => {
            return (
                {
                    ...previousValue, [name]: val
                }
            )
        })
    }


    const handleAddBusiness = async (datar: any) => { }

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        setValue,
        control,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<any>({
        resolver: zodResolver(CreatePageSchema)
    })

    return (
        <div className={`max-w-[100%] md:max-w-[80%] w-full mx-auto`}>
            <div className={`text-2xl font-bold mt-6`}>
                Create an Event
            </div>

            <div className={`text-md mt-3 text-gray-500`}>
                Answer a few questions about your event and our AI creation tool will use internal data to build an event page. You can still create an event without AI.
            </div>


            <div className={`text-2xl mt-12`}>
                What’s the name of your event?
            </div>

            <div className={`text-md mt-3 text-gray-500`}>
                This will be your event’s title. Your title will be used to help create your event’s summary, description, category, and tags – so be specific!
            </div>

            <div className={`mt-5`}>
                <form onSubmit={handleSubmit(handleAddBusiness)}>
                    <div>
                        <Input
                            controlTitle={"Event Name"}
                            controlPlaceholder={"Enter event name"}
                            controlName={"title"}
                            register={register}
                            changeHandler={changeHandler}
                            error={errors.title}
                            width={80}
                            controlInformation={`Business name is compulsory.`}

                        />
                    </div>


                    <div className={`mt-8 mb-6 text-2xl`}>
                        When does your event start?
                    </div>


                    <div>
                        <DateInput
                            controlTitle={"Start Date"}
                            controlPlaceholder={"Select start date"}
                            controlName={"eventDate"}
                            register={register}
                            changeHandler={changeHandler}
                            error={errors.title}
                            width={80}
                            controlInformation={`Start date is compulsory.`}
                            control={control}
                        />
                    </div>


                    <div>
                        <HoursInput
                            controlTitle={"Start Date"}
                            controlPlaceholder={"Select start date"}
                            controlName={"eventDate"}
                            register={register}
                            changeHandler={changeHandler}
                            error={errors.title}
                            width={80}
                            controlInformation={`Start date is compulsory.`}
                            control={control}
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default EventForm
