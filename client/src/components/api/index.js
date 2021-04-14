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

export const insertAsignacion = payload => api.post(`/asignacion`, payload)
export const getAllAsignaciones = () => api.get(`/asignaciones`)
export const getAllAsignacionesNotAccepted = () => api.get(`/asignaciones/not-accepted`)
export const deleteAsignacionById = id => api.delete(`/asignacion/${id}`)
export const getAsignacionById = id => api.get(`/asignacion/${id}`)
export const getAsignacionesProfessionalById = professional => api.get(`/asignaciones/${professional}`)
export const acceptAsignacionById = (id, payload) => api.put(`/asignacion/${id}`, payload)

export const insertFicha= payload => api.post(`/ficha`, payload)
export const getAllFichas = () => api.get(`/fichas`)
export const updateFichaById = (id, payload) => api.put(`/ficha/${id}`, payload)
export const deleteFichaById = id => api.delete(`/ficha/${id}`)
export const getFichaById = id => api.get(`/ficha/${id}`)
export const getFichasPacientById = pacient => api.get(`/fichas/${pacient}`)

export const insertRegistron= payload => api.post(`/registron`, payload)
export const getAllRegistrons = () => api.get(`/registrons`)
export const updateRegistronById = (id, payload) => api.put(`/registron/${id}`, payload)
export const deleteRegistronById = id => api.delete(`/registron/${id}`)
export const getRegistronById = id => api.get(`/registron/${id}`)
export const getRegistronsPacientById = pacient => api.get(`/registrons/${pacient}`)

export const insertMenu= payload => api.post(`/menu`, payload)
export const getAllMenus = () => api.get(`/menus`)
export const updateMenuById = (id, payload) => api.put(`/menu/${id}`, payload)
export const deleteMenuById = id => api.delete(`/menu/${id}`)
export const getMenuById = id => api.get(`/menu/${id}`)


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

    insertAsignacion,
    getAllAsignaciones,
    deleteAsignacionById,
    getAsignacionById,
    getAsignacionesProfessionalById,
    getAllAsignacionesNotAccepted,
    acceptAsignacionById,

    insertFicha,
    getAllFichas,
    updateFichaById,
    deleteFichaById,
    getFichaById,
    getFichasPacientById,

    insertRegistron,
    getAllRegistrons,
    updateRegistronById,
    deleteRegistronById,
    getRegistronById,
    getRegistronsPacientById,

    insertMenu,
    getAllMenus,
    updateMenuById,
    deleteMenuById,
    getMenuById,

}

export default apis