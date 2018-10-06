import React, { Component } from 'react';
import { toast } from 'react-toastify';
export default function success(){
    return toast.success("Successfully updated!", {
        position: toast.POSITION.BOTTOM_RIGHT
    });
}