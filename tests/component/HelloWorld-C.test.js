import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld Comp', () => {
  it('renders properly Comp', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest Comp' } })
    expect(wrapper.text()).toContain('Hello Vitest Comp')
  })
})
