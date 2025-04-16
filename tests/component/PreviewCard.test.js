import { suite, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import PreviewCard from '@/components/PreviewCard.vue';

suite('PreviewCard - Component Tests', () => {

  test('PreviewCard renders correctly', () => {
    const wrapper = mount(PreviewCard, {
      props: {
        heading: 'foo bar!',
        imgPath: 'fake-image-path.png',
        url: '/testurl',
      },
      slots: {
        default: 'Test paragraph content.',
      },
    });

    // Test that the component renders
    expect(wrapper.find('.preview-card').exists()).toBeTruthy();
    expect(wrapper.find('.preview-card > .image-box').exists()).toBeTruthy();
    expect(wrapper.find('.preview-card > .text-box').exists()).toBeTruthy();

    expect(wrapper.find('.text-box > h3').text()).toBe('foo bar!');
    expect(wrapper.find('.preview-paragraph').text()).toBe('Test paragraph content.');
    expect(wrapper.find('img').attributes('alt')).toBe('fake-image-path.png');
    expect(wrapper.find('.read-more-button').attributes('href')).toBe('/testurl');
  });

  test('PreviewCard displays placeholder paragraph when no slot content given', () => {
    const wrapper = mount(PreviewCard, {
      props: {
        heading: 'foo bar!',
        imgPath: 'fake-image-path.png',
        url: '/testurl',
      },
    });

    expect(wrapper.find('.preview-paragraph').text()).toBe('No content available to display.');
  });

  test('PreviewCard heading prop test', () => {
    const wrapper = mount(PreviewCard, {
      props: {
        heading: 'Hello World!',
        imgPath: 'fake-image-path.png',
        url: '/testurl',
      },
    });

    expect(wrapper.find('.text-box > h3').text()).toBe('Hello World!');
  });

  test('PreviewCard imgPath prop test', () => {
    const wrapper = mount(PreviewCard, {
      props: {
        heading: 'foo bar!',
        imgPath: 'someImageFile.png',
        url: '/testurl',
      },
    });

    expect(wrapper.find('img').attributes('alt')).toBe('someImageFile.png');
  });

  test('PreviewCard imgAltText prop test', () => {
    const wrapper = mount(PreviewCard, {
      props: {
        heading: 'foo bar!',
        imgPath: 'someImageFile.png',
        imgAltText: 'This is alt text!',
        url: '/testurl',
      },
    });

    expect(wrapper.find('img').attributes('alt')).toBe('This is alt text!');
  });

  test('PreviewCard url prop test', () => {
    const wrapper = mount(PreviewCard, {
      props: {
        heading: 'foo bar!',
        imgPath: 'fake-image-path.png',
        url: '/someUrl/path',
      },
    });

    expect(wrapper.find('.read-more-button').attributes('href')).toBe('/someUrl/path');
  });

});
