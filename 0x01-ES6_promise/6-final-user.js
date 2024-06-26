import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const x = signUpUser(firstName, lastName);
  const y = uploadPhoto(fileName);

  return Promise.allSettled([s, u]).then((vals) => {
    const rslt = [];
    vals.forEach((val) => {
      if (val.status === 'fulfilled') {
        rslt.push({ status: val.status, value: val.value });
      } else {
        rslt.push({
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
      }
    });
    return rslt;
  });
}
