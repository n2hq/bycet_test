import React, { useEffect, useState } from 'react'
import { MdError } from 'react-icons/md'
import { controlInformationClass, inputClass, inputClassError, inputControlWrapper, inputHeadingClass } from '~/lib/css'

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './date.css'
import { Controller } from 'react-hook-form';

import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;




type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DateInput = ({
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

    const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
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

    function onChangeRange(date: any, dateString: any) {

        console.log(date, dateString);

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



                    {/* <RangePicker
                        {...register(controlName, {
                            onChange: (e: any) => {
                                alert(e.target.value)
                                changeHandler(e)
                                //onChangeRange(dates, dateStrings)
                            }
                        })}
                        onChange={onChangeRange}
                        className={`${inputClass} text-[17px] tracking-wider ${disabled && 'bg-gray-200/80'}`}
                    /> */}

                    <Controller
                        name={controlName}
                        control={control}
                        defaultValue={[null, null]}
                        render={({ field }) => (
                            <RangePicker

                                {...field} // connects value and onChange automatically
                                onChange={(dates, dateStrings) => {
                                    // Update RHF form state
                                    field.onChange(dates);
                                    console.log(dates)
                                    // Optional: call your custom changeHandler
                                    /* changeHandler({
                                        target: { name: controlName, value: dateStrings }
                                    }); */
                                }}
                                className={`${inputClass} text-[17px] tracking-wider ${disabled && 'bg-gray-200/80'}`}
                            />
                        )}
                    />


                    {/* <input
                        {...register(controlName, {
                            onChange: (e: any) => {

                                changeHandler(e)
                                const isoDate = e.target.value; // "2025-10-07"
                                const formatted = new Date(isoDate).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric'
                                }).replace(/ /g, '-'); // "07-Oct-2025"
                                return formatted
                            }
                        })}
                        type='date'
                        min={new Date().toISOString().split('T')[0]}
                        className={`${inputClass} text-[17px] tracking-wider ${disabled && 'bg-gray-200/80'}`}
                        disabled={disabled}
                        defaultValue={new Date().toISOString().split('T')[0]}

                    /> */}


                </div>
            </div>
        </>
    )
}

export default DateInput
