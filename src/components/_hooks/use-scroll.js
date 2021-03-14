import { useState, useEffect } from 'react'

export function useScroll() {

    const [scroll, setScroll]  = useState({});
    const onScroll = () => {
        let supportPageOffset = window.pageXOffset !== undefined
        let isCSS1Compat = (document.compatMode || '') === 'CSS1Compat'
        let scroll = {
            x: supportPageOffset
                ? window.pageXOffset
                : isCSS1Compat
                ? document.documentElement.scrollLeft
                : document.body.scrollLeft,
            y: supportPageOffset
                ? window.pageYOffset
                : isCSS1Compat
                ? document.documentElement.scrollTop
                : document.body.scrollTop
        }
        setScroll(scroll);    
    }

    useEffect(() => {
		window.addEventListener('scroll', onScroll, false)
		return () => {
			window.removeEventListener('scroll', onScroll, false)
		}
	}, [])

    return scroll
}
