import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { EmailButton } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Email button',
  component: EmailButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof EmailButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EmailButton> = args => (
  <EmailButton {...args}>This is the content inside</EmailButton>
)

export const Default = Template.bind({})

Default.args = {
  href: '#',
}
