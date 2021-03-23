import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

export const insertCita = payload => api.post(`/cita`, payload)
export const getAllCitas = () => api.get(`/citas`)
export const updateCitaById = (id, payload) => api.put(`/cita/${id}`, payload)
export const deleteCitaById = id => api.delete(`/cita/${id}`)
export const getCitaById = id => api.get(`/cita/${id}`)
export const getCitasProfessionalById = professional => api.get(`/citas/${professional}`)


export const getAllUsers = () => api.get(`/users`)
export const getUserById = id => api.get(`/user/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,

    insertCita,
    getAllCitas,
    updateCitaById,
    deleteCitaById,
    getCitaById,
    getCitasProfessionalById,

    getAllUsers,
    getUserById,
}

export default apis