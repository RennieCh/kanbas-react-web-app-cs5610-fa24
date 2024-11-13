import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const USERS_API = `${REMOTE_SERVER}/api/users`;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`;

export const fetchAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    return data;
};

export const fetchAllEnrollments = async () => {
    const {data} = await axios.get(ENROLLMENT_API);
    return data;
}

export const deleteCourse = async (id: string) => {
    const { data } = await axios.delete(`${COURSES_API}/${id}`);
    return data;
};

export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

export const findModulesForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/modules`,
        module);
    return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};

export const fetchAssignments = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

// Enroll a user in a course
export const enrollUser = async (userId: string, courseId: string) => {
    const response = await axios.post(`${USERS_API}/${userId}/courses/${courseId}/enroll`);
    return response.data;
};

// Unenroll a user from a course
export const unenrollUser = async (userId: string, courseId: string) => {
    await axios.delete(`${USERS_API}/${userId}/courses/${courseId}/unenroll`);
};
