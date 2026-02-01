import { suite, test, beforeEach, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import SectionButton from '@/components/SectionButton.vue';

suite('SectionButton - Component Tests', () => {

  beforeEach(() => {
    // mock vue-router so router.replace() calls inside SectionButton
    // do not cause errors during testing.
    vi.mock('vue-router', () => {
      return {
        useRouter: () => ({
          push: vi.fn(),
          replace: vi.fn(),
        }),
        useRoute: () => ({
          params: {},
          query: {},
        }),
      };
    });
  });

  test('SectionButton renders correctly', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'file-document-outline',
      buttonText: 'Test Title',
    } });

    // Test that the component renders
    expect(wrapper.find('a.section-button').exists()).toBeTruthy();
    expect(wrapper.find('.section-button-text').exists()).toBeTruthy();
    expect(wrapper.find('.section-button-description').exists()).toBeFalsy();
    expect(wrapper.find('.svg-icon-wrapper').exists()).toBeTruthy();

    expect(wrapper.find('.section-button-text').text()).toBe('Test Title');
    expect(wrapper.find('a').attributes('href')).toBe('/testurl');
  });

  test('SectionButton icon is rendered correctly', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'gamepad-variant-outline',
      buttonText: 'Test Title',
    } });

    expect(wrapper.find('.svg-icon-wrapper > svg').attributes('id'))
      .toBe('mdi-gamepad-variant-outline');

    expect(wrapper.find('.svg-icon-wrapper > svg > path').exists()).toBeTruthy();
    expect(wrapper.find('.svg-icon-wrapper > svg > path').attributes('d')).not.toBeUndefined();
  });

  test('SectionButton url prop test', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/anotherUrl',
      iconId: 'file-document-outline',
      buttonText: 'Test Title',
    } });

    expect(wrapper.find('a').attributes('href')).toBe('/anotherUrl');

    // url opens in same tab by default
    expect(wrapper.find('a').attributes('target')).toBe('_self');
  });

  test('SectionButton buttonText prop test', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'file-document-outline',
      buttonText: 'Foo Bar!',
    } });

    expect(wrapper.find('.section-button-text').text()).toBe('Foo Bar!');
  });

  test('SectionButton descriptionText prop test - not provided', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'file-document-outline',
      buttonText: 'Test Title',
    } });

    expect(wrapper.find('.section-button-description').exists()).toBeFalsy();
  });

  test('SectionButton descriptionText prop test - provided', () => {
    const description = 'This is a test description';

    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'file-document-outline',
      buttonText: 'Test Title',
      descriptionText: description,
    } });

    expect(wrapper.find('.section-button-description').exists()).toBeTruthy();
    expect(wrapper.find('.section-button-description').text()).toBe(description);
  });

  test('SectionButton isNewTab prop test - default', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'file-document-outline',
      buttonText: 'Test Title',
    } });

    // url opens in same tab by default
    expect(wrapper.find('a').attributes('target')).toBe('_self');
  });

  test('SectionButton isNewTab prop test - true', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'file-document-outline',
      buttonText: 'Test Title',
      isNewTab: true,
    } });

    // url opens in new tab
    expect(wrapper.find('a').attributes('target')).toBe('_blank');
  });

  test('SectionButton isDarkVersion prop test - default', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'file-document-outline',
      buttonText: 'Test Title',
    } });

    // the SectionButton component uses the dark version by default
    expect(wrapper.find('a.section-button').classes('dark')).toBeTruthy();
    expect(wrapper.find('a.section-button').classes('light')).toBeFalsy();
  });

  test('SectionButton isDarkVersion prop test - false', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'file-document-outline',
      buttonText: 'Test Title',
      isDarkVersion: false,
    } });

    // the SectionButton component uses the light version
    expect(wrapper.find('a.section-button').classes('light')).toBeTruthy();
    expect(wrapper.find('a.section-button').classes('dark')).toBeFalsy();
  });

  test('SectionButton isFitToContent prop test - default', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'file-document-outline',
      buttonText: 'Test Title',
    } });

    // the SectionButton component takes up available width by default
    expect(wrapper.find('a.section-button').classes('fit-content')).toBeFalsy();
  });

  test('SectionButton isFitToContent prop test - true', () => {
    const wrapper = mount(SectionButton, { props: {
      url: '/testurl',
      iconId: 'file-document-outline',
      buttonText: 'Test Title',
      isFitToContent: true,
    } });

    // the SectionButton component takes up only width needed by content inside
    expect(wrapper.find('a.section-button').classes('fit-content')).toBeTruthy();
  });

});
