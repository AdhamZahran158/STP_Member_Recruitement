/**
 * Questions for the application step.
 *
 * Supported types:
 * - text
 * - textarea
 * - select
 * - radio
 */

export const step2Questions = [
  {
    id: 'briefAboutExperience',
    type: 'textarea',
    label:
      'Briefly share any past experience in student activities, events, or team coordination.',
    required: true,
    placeholder:
      'Briefly describe your experience, role, or contribution...',
  },

  {
    id: 'keyAchievement',
    type: 'textarea',
    label: 'What was your key achievement?',
    required: true,
    placeholder: 'Tell us about an achievement you are proud of...',
  },

  {
    id: 'whyInterested',
    type: 'textarea',
    label: 'Why did you apply for your chosen committee?',
    required: true,
    placeholder: 'Tell us what interests you about this committee...',
  },

  {
    id: 'skillsAimToGain',
    type: 'textarea',
    label: 'What skills do you aim to gain this season?',
    required: true,
    placeholder: 'Tell us what you would like to learn or improve...',
  },
]