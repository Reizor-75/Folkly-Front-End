// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/cultures`

async function getAllCultures() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function getCulture(cultureId) {
  try{
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}/${cultureId}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export{
  getAllCultures,
  getCulture,
}