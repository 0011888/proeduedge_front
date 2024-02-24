import {all, fork} from 'redux-saga/effects';
import {watchLoginUser, watchRegisterUser} from './features/users/saga';
import { watchGetCategories, watchUploadCourseBanner, watchCreateCourse, watchUploadCourseMedia, watchCreateOrUpdateCourseSection, watchGetAllCourses } from './features/course/saga';
const rootSaga = function* rootSaga() {
	yield all([fork(watchLoginUser), 
		fork(watchRegisterUser), 
		fork(watchGetAllCourses),
		fork(watchGetCategories), fork(watchUploadCourseBanner), fork(watchCreateCourse), fork(watchUploadCourseMedia), fork(watchCreateOrUpdateCourseSection)]);
};
export default rootSaga;
