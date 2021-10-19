import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Email, EmailRow, EmailCol } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Email',
  component: Email,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Email>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Email> = args => (
  <Email {...args}>This is the content inside</Email>
)

export const Default = Template.bind({})
export const WithHeader = Template.bind({})
WithHeader.args = {
  header: (
    <EmailRow>
      <EmailCol width={300}>Hello!</EmailCol>
      <EmailCol right>world!</EmailCol>
    </EmailRow>
  ),
}

export const WithFooter = Template.bind({})
WithFooter.args = {
  footer: <div className="text-sm">This is the footer</div>,
}
