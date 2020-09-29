import * as Yup from 'yup';

const requiredMessage = 'This field is required';
const urlMessage = 'Invalid url format';

export const validationNewPerson = Yup.object({
	name: Yup.string().required(requiredMessage),
  category: Yup.string().required(requiredMessage),
  description: Yup.string().required(requiredMessage),
  imageUrl: Yup.string().url(urlMessage).required(requiredMessage),
  startDate: Yup.date().required(requiredMessage).nullable(),
});