import intl from 'react-intl-universal'
import enUS from '../_locales/en-us-locale.json'
import zhCN from '../_locales/zh-cn-locale.json'

import * as Types from './types'

export const setLocale = (locale, callback) => {
	return function(dispatch) {
		intl
			.init({
				currentLocale: locale,
				locales: {
					'en-US': enUS,
					'zh-CN': zhCN
				}
			})
			.then(() => {
				dispatch({ type: Types.SET_LOCALE, payload: locale })
				if (callback !== undefined) {
					callback()
				}
			})
	}
}
