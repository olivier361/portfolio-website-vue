import { suite, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import MaterialIcons from '@/components/MaterialIcons.vue';

suite('MaterialIcons - Component Tests', () => {

  test('MaterialIcons renders correctly', () => {
    const wrapper = mount(MaterialIcons, { props: {
      iconId: 'image-edit-outline',
    } });

    // Test that the component renders only one svg icon
    expect(wrapper.findAll('.svg-icon-wrapper')).toHaveLength(1);
    expect(wrapper.findAll('svg')).toHaveLength(1);
    expect(wrapper.find('.svg-icon-wrapper > svg').attributes('id'))
      .toBe('mdi-image-edit-outline');

    // Test that the icon path is rendered correctly
    expect(wrapper.find('.svg-icon-wrapper > svg > path').exists()).toBeTruthy();
    expect(wrapper.find('.svg-icon-wrapper > svg > path').attributes('d')).not.toBeUndefined();
  });

  test('MaterialIcons renders empty wrapper if iconId is not a valid icon', () => {
    const wrapper = mount(MaterialIcons, { props: { iconId: 'invalid-icon' } });

    expect(wrapper.findAll('.svg-icon-wrapper')).toHaveLength(1);
    expect(wrapper.find('svg').exists()).toBeFalsy();
    expect(wrapper.find('.svg-icon-wrapper > svg > path').exists()).toBeFalsy();
  });

  test('MaterialIcons warns if iconId is not provided', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => { return; });

    mount(MaterialIcons);

    expect(spy).toHaveBeenCalledOnce();
  });

  test('MaterialIcons warns if iconId is not a string', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => { return; });

    mount(MaterialIcons, { props: { iconId: 123 } });

    expect(spy).toHaveBeenCalledOnce();
  });

});
