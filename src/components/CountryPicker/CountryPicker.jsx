import React,{useState,useEffect} from 'react'; /* Hooks */
import {NativeSelect,FormControl} from '@material-ui/core'

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({handleCountryChange})=>{
    const [countries,setCountries] = useState([]);

    useEffect (()=>{

        const fetchAPI = async () =>{
            //Here it was my error
            setCountries(await fetchCountries());
        };

        fetchAPI();
    },[]);

    return(
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue = "" onChange = {(e)=>handleCountryChange(e.target.value)}>
                <option value = "">Choose a country</option>
                {countries.map((country,i) => <option key = {i} value = {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Countries