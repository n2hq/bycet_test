import React, { useEffect, useState } from 'react'
import { MdError } from 'react-icons/md'
import { controlInformationClass, inputClass, inputClassError, inputControlWrapper, inputHeadingClass } from '~/lib/css'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './date.css'
import { Controller } from 'react-hook-form';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const timeOptions = [
    "Closed",
    "08:00", "08:30", "09:00", "09:30",
    "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30",
    "22:00", "22:30", "23:00", "23:30",
    "24:00",
];

const HoursInput = ({
    controlName,
    controlType,
    controlPlaceholder,
    controlTitle,
    controlInformation,
    register,
    changeHandler,
    error,
    width,
    control,
    disabled = false
}: any) => {

    const [wrapperWidth, setWrapperWidth] = useState('')
    const [inputWidth, setInputWidth] = useState(width)
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const [value, onChange] = useState<Value>(new Date());

    const handleTimeChangeStart = () => {

    };

    const handleTimeChangeEnd = () => {

    };


    useEffect(() => {
        if (inputWidth > 0) {
            if (inputWidth === 100) {
                setWrapperWidth(`xl:w-full`)
            } else {
                setWrapperWidth(`xl:w-[${inputWidth}%]`)
            }
        }
    }, [inputWidth])

    const formatDate = (date: Date | null) => {
        if (!date) return ''
        const day = String(date.getDate()).padStart(2, '0')
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()
        return `${day}-${month}-${year}`
    }
    return (
        <>

            <div className={inputControlWrapper}>
                <div className={inputHeadingClass}>
                    <div className={`mb-0 text-xl`}>
                        {controlTitle}
                    </div>
                    {
                        controlInformation?.length > 1 && <div className={controlInformationClass}>
                            {controlInformation}
                        </div>
                    }
                </div>

                <div className={`w-[100%] h-[50px]`}>
                    <div className="flex place-content-between gap-4 w-full ">

                        <select
                            onChange={(e) => handleTimeChangeStart()}
                            className="border p-4 rounded rounded-l-full grow bg-gray-100"
                        >
                            <option value="">From...</option>
                            {timeOptions.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                        <div className=' col-span-2 flex place-items-center place-content-center'>to</div>
                        <select

                            onChange={(e) => handleTimeChangeEnd()}
                            className="border p-4 rounded rounded-r-full grow bg-gray-100"
                        >
                            <option value="">To...</option>
                            {timeOptions.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </div>


                </div>
            </div>
        </>
    )
}

export default HoursInput
