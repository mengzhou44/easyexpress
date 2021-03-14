import cryptoJS from 'crypto-js'

export const decrypt = encryted => {
	const bytes = cryptoJS.AES.decrypt(encryted, process.env.REACT_APP_SECRECT_KEY)

	return bytes.toString(cryptoJS.enc.Utf8)
}
