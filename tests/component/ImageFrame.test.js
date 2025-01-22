import { suite, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import ImageFrame from '@/components/ImageFrame.vue'
// import testImage from '../__testAssets__/test-image.png'

suite('ImageFrame - Component Tests', () => {

  test('ImageFrame renders correctly', () => {
    const fileName = 'test-image.png';
    const wrapper = mount(ImageFrame, { props: { imgPath: fileName } });

    // console.log(wrapper.html());

    // Test that the component renders
    expect(wrapper.find('figure').exists()).toBeTruthy();
    expect(wrapper.find('figure').find('img').exists()).toBeTruthy();
    expect(wrapper.find('img').attributes('src')).toBe('file:///src/assets/' + fileName);

    // Test that the caption is not rendered when none is provided
    expect(wrapper.find('figcaption').exists()).toBeFalsy();

    // Test that default alt text is correct
    expect(wrapper.find('img').attributes('alt')).toBe(fileName);

    // Test that auto width and height set
    expect(wrapper.find('img').attributes('style')).toContain('height: auto;');
    expect(wrapper.find('img').attributes('style')).toContain('width: 100%;');
  });

  test('ImageFrame renders correctly with caption', () => {
    const fileName = 'test-image.png';
    const caption = 'This is a cool caption!';

    const wrapper = mount(ImageFrame, { props: { imgPath: fileName, captionText: caption } });

    // Test that the component renders
    expect(wrapper.find('figure').exists()).toBeTruthy();
    expect(wrapper.find('figure').find('img').exists()).toBeTruthy();

    // Test that the caption is rendered when provided
    expect(wrapper.find('figcaption').exists()).toBeTruthy();
    expect(wrapper.find('figcaption').text()).toBe(caption);
  });

  test('ImageFrame uses altText prop correctly', () => {
    const fileName = 'test-image.png';
    const altText = 'This is alt text for the image!';

    const wrapper = mount(ImageFrame, { props: { imgPath: fileName, altText: altText } });

    // Test that the component renders
    expect(wrapper.find('figure').exists()).toBeTruthy();
    expect(wrapper.find('figure').find('img').exists()).toBeTruthy();

    // Test that the alt text is set correctly
    expect(wrapper.find('img').attributes('alt')).toBe(altText);
  });

  test('ImageFrame uses width and height props correctly - percentages', () => {
    const fileName = 'test-image.png';
    const width = '80%';
    const height = '50%';

    const wrapper = mount(ImageFrame, { props: { imgPath: fileName, widthPercent: width, height: height } });

    // console.log(wrapper.html());

    // Test that the component renders
    expect(wrapper.find('figure').exists()).toBeTruthy();
    expect(wrapper.find('figure').find('img').exists()).toBeTruthy();

    // Test that the width and height are set correctly
    expect(wrapper.find('img').attributes('style')).toContain('height: ' + height + ';');
    expect(wrapper.find('img').attributes('style')).toContain('width: 100%;');
    expect(wrapper.find('figure').attributes('style')).toContain('width: ' + width + ';');
  });

  test('ImageFrame uses width and height props correctly - pixels', () => {
    const fileName = 'test-image.png';
    const width = '300px';
    const height = '200px';

    const wrapper = mount(ImageFrame, { props: { imgPath: fileName, widthPx: width, height: height } });

    // console.log(wrapper.html());

    // Test that the component renders
    expect(wrapper.find('figure').exists()).toBeTruthy();
    expect(wrapper.find('figure').find('img').exists()).toBeTruthy();

    // Test that the width and height are set correctly
    expect(wrapper.find('img').attributes('style')).toContain('height: ' + height + ';');
    expect(wrapper.find('img').attributes('style')).toContain('width: ' + width + ';');
    expect(wrapper.find('figure').attributes('style')).toBeUndefined();
  });

  test('ImageFrame uses isUrlPath prop correctly', () => {
    const url = 'https://picsum.photos/id/11/200/300';
    const wrapper = mount(ImageFrame, { props: { imgPath: url, isUrlPath: true } });

    // console.log(wrapper.html());

    // Test that the component renders
    expect(wrapper.find('figure').exists()).toBeTruthy();
    expect(wrapper.find('figure').find('img').exists()).toBeTruthy();

    // Test that the prop is set correctly
    expect(wrapper.getComponent({name: 'ImageFrame'}).props('isUrlPath')).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(url);
    expect(wrapper.find('img').attributes('src')).not.toBe('file:///src/assets/' + url);

    // Test that default alt text is correct
    expect(wrapper.find('img').attributes('alt')).toBe(url);
  });

  // NOTE: This test is moreso to illustrate how we can use snapshot tests
  // for component testing if needed. I would recommend avoiding snapshot tests
  // for component testing unless absolutely necessary at this point.
  test('ImageFrame content matches snapshot', () => {
    const fileName = 'test-image.png';
    const wrapper = mount(ImageFrame, { props: { imgPath: fileName } });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
