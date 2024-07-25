import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = {
    status: 'pending',
    value: '',
  };

  const photo = {
    status: 'pending',
    value: '',
  };

  try {
    const signUpPromise = await signUpUser(firstName, lastName);
    user.status = 'fulfilled';
    user.value = signUpPromise;
  } catch (error) {
    user.status = 'rejected';
    user.value = error.toString();
  }

  try {
    const uploadPhotoPromise = await uploadPhoto(fileName);
    photo.status = 'fulfilled';
    photo.value = uploadPhotoPromise;
  } catch (error) {
    photo.status = 'rejected';
    photo.value = error.toString();
  }
  return [user, photo];
}
