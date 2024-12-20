import { suite, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import ImageFrame from '@/components/ImageFrame.vue'
// import testImage from '../__testAssets__/test-image.png'


suite('ImageFrame - Component Tests', () => {

  test('ImageFrame renders correctly', () => {
    const wrapper = mount(ImageFrame, { props: { imgPath: 'test-image.png' } })

    // console.log(wrapper.html());

    expect(wrapper.find('figure').exists()).toBeTruthy();
    expect(wrapper.find('figure').find('img').exists()).toBeTruthy();
    expect(wrapper.find('figcaption').exists()).toBeFalsy();

    expect(wrapper.find('img').attributes('src')).toBe('file:///src/assets/test-image.png');

    // TODO: Add more checks for image dimensions and alt text
  });

  // TODO: Add more tests
  
});
