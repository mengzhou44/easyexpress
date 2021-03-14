import { useState, useEffect } from 'react'

export function useDevice() {

    const [device, setDevice]  = useState("desktop");
    const onResize = () => {
        if (window.innerWidth < 576) {
            setDevice("mobile")
        }else {
            setDevice("desktop")
        } 
    }

    useEffect(() => {
		window.addEventListener('resize', onResize, false)
		return () => {
			window.removeEventListener('resize', onResize, false)
		}
	}, [])

    return  device;
}
