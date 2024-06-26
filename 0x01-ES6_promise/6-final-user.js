import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((values) => {
    const rslt = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        rslt.push({ status: element.status, value: element.value });
      } else {
        rslt.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return rslt;
  });
}
