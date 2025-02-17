import { suite, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import CTAButton from '@/components/CTAButton.vue';

suite('CTAButton - Component Tests', () => {

  test('CTAButton renders correctly', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl' } });

    // Test that the component renders
    expect(wrapper.find('.cta-button').exists()).toBeTruthy();
    expect(wrapper.find('.cta-button-base').exists()).toBeTruthy();
    expect(wrapper.find('.cta-button-text').exists()).toBeTruthy();
    expect(wrapper.find('.cta-symbol').exists()).toBeTruthy();

    expect(wrapper.find('a').text()).toBe('Read More');
    expect(wrapper.find('a').attributes('href')).toBe('/testurl');

    // test that icon is rendered correctly
    expect(wrapper.find('.cta-symbol').attributes('uk-icon')).toContain('icon: arrow-right');
  });

  test('CTAButton url prop test', () => {
    const wrapper = mount(CTAButton, { props: { url: '/about' } });

    expect(wrapper.find('a').attributes('href')).toBe('/about');

    // url opens in same tab by default
    expect(wrapper.find('a').attributes('target')).toBe('_self');
  });

  test('CTAButton buttonText prop test - default', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl' } });

    expect(wrapper.find('a').text()).toBe('Read More');
  });

  test('CTAButton buttonText prop test - provided', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl', buttonText: 'Foo Bar!' } });

    expect(wrapper.find('a').text()).toBe('Foo Bar!');
  });

  test('CTAButton showOutline prop test', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl', showOutline: true } });

    expect(wrapper.find('.cta-button-base').exists()).toBeFalsy();
    expect(wrapper.find('.cta-button-filled').exists()).toBeFalsy();
    expect(wrapper.find('.cta-button-outline').exists()).toBeTruthy();
  });

  test('CTAButton isFilled prop test', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl', isFilled: true } });

    expect(wrapper.find('.cta-button-base').exists()).toBeFalsy();
    expect(wrapper.find('.cta-button-outline').exists()).toBeFalsy();
    expect(wrapper.find('.cta-button-filled').exists()).toBeTruthy();
  });

  test('CTAButton showSymbol prop test - default', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl' } });

    expect(wrapper.find('.cta-symbol').exists()).toBeTruthy();
    expect(wrapper.find('.cta-button-text').exists()).toBeTruthy();
    expect(wrapper.find('.cta-symbol').attributes('uk-icon')).toContain('icon: arrow-right');
  });

  test('CTAButton showSymbol prop test - disabled', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl', showSymbol: false } });

    expect(wrapper.find('.cta-symbol').exists()).toBeFalsy();
    expect(wrapper.find('.cta-button-text').exists()).toBeTruthy();
  });

  test('CTAButton isNewTab prop test - default', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl' } });

    expect(wrapper.find('a').attributes('target')).toBe('_self');
    expect(wrapper.find('.cta-symbol').attributes('uk-icon')).toContain('icon: arrow-right');
  });

  test('CTAButton isNewTab prop test - enabled', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl', isNewTab: true } });

    expect(wrapper.find('a').attributes('target')).toBe('_blank');
    expect(wrapper.find('.cta-symbol').attributes('uk-icon')).toContain('icon: link-external');
  });

  test('CTAButton isDarkVersion prop test - default', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl' } });

    expect(wrapper.find('.cta-button').classes()).toContain('light');
  });

  test('CTAButton isDarkVersion prop test - enabled', () => {
    const wrapper = mount(CTAButton, { props: { url: '/testurl', isDarkVersion: true } });

    expect(wrapper.find('.cta-button').classes()).toContain('dark');
  });

});
