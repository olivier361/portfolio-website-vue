import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld Uni', () => {
  it('renders properly Uni', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest Uni' } })
    expect(wrapper.text()).toContain('Hello Vitest Uni')
  })
})
