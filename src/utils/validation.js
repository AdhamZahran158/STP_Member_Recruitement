import * as Yup from 'yup'

export const PHONE_REGEX = /^(0\d{10}|\+20\d{10})$/

export const LINKEDIN_REGEX =
  /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/

export const section1Schema = Yup.object({
  fullName: Yup.string()
    .trim()
    .required('Full Name is required'),

  phone: Yup.string()
    .trim()
    .required('Phone Number is required')
    .matches(
      PHONE_REGEX,
      'Phone number must start with 0 (11 digits e.g. 01012345678) or +20 (e.g. +201012345678)',
    ),

  email: Yup.string()
    .trim()
    .required('Email address is required')
    .email('Please enter a valid email address'),

  gender: Yup.string()
    .required('Please select your gender'),

  university: Yup.string()
    .trim()
    .required('University name is required'),

  faculty: Yup.string()
    .trim()
    .required('Faculty name is required'),

  academicYear: Yup.string()
    .required('Please select your academic year'),

  linkedin: Yup.string()
    .trim(),

  beenInStpBefore: Yup.string()
    .required('Please select Yes or No'),

  previousCommitteeIfApplicable: Yup.string()
    .trim()
    .when('beenInStpBefore', {
      is: 'Yes',
      then: (schema) =>
        schema.required(
          'Please enter your previous committee or team',
        ),
      otherwise: (schema) => schema.notRequired(),
    }),

  previousRoleIfApplicable: Yup.string()
    .trim()
    .when('beenInStpBefore', {
      is: 'Yes',
      then: (schema) =>
        schema.required(
          'Please enter your previous position or role',
        ),
      otherwise: (schema) => schema.notRequired(),
    }),

  appliedCommittee: Yup.string()
    .required(
      'Please select the committee you are applying for',
    ),
})

export const section2Schema = Yup.object({
  briefAboutExperience: Yup.string()
    .trim()
    .required('This is a required question'),

  keyAchievement: Yup.string()
    .trim()
    .required('This is a required question'),

  whyInterested: Yup.string()
    .trim()
    .required('This is a required question'),

  skillsAimToGain: Yup.string()
    .trim()
    .required('This is a required question'),
})

export const schemas = [
  section1Schema,
  section2Schema,
]

export async function validateStep(schema, data) {
  try {
    await schema.validate(data, {
      abortEarly: false,
    })

    return {}
  } catch (error) {
    const errors = {}

    if (error.inner) {
      error.inner.forEach((validationError) => {
        if (
          validationError.path &&
          !errors[validationError.path]
        ) {
          errors[validationError.path] =
            validationError.message
        }
      })
    }

    return errors
  }
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0
}