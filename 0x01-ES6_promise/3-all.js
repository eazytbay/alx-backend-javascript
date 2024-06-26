import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const x1 = uploadPhoto();
  const x2 = createUser();

  return Promise.all([x1, x2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
