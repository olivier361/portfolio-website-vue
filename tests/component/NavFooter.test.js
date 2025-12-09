import { suite, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';

import NavFooter from '@/components/NavFooter.vue';

suite('NavFooter - Component Tests', () => {

  // Mock the RouterLink component used inside NavFooter
  // to avoid Vue Router dependency for testing while preserving
  // the route it was supposed to link to.
  // const routerLinkStub = {
  //   props: ['to'],
  //   template: '<a :href="typeof to === \'string\' ? to : to.path"><slot /></a>',
  // };

  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: { en: {} },
  });

  test('NavFooter renders correctly', () => {
    const wrapper = mount(NavFooter, {
      global: {
        // stubs: {
        //   RouterLink: routerLinkStub,
        // },
      },
    });

    // Test that the component renders
    expect(wrapper.find('.nav-footer').exists()).toBeTruthy();
    expect(wrapper.find('.nav-footer-banner').exists()).toBeTruthy();

    // contains site map heading
    const headers = wrapper.findAll('h4');
    expect(headers).toHaveLength(3);
    expect(headers.find((h) => h.text() === 'Site Map')).toBeTruthy();
    expect(headers.find((h) => h.text() === 'Projects')).toBeTruthy();
    expect(headers.find((h) => h.text() === 'Socials')).toBeTruthy();
    // expect(wrapper.find('h4').text()).toBe('Site Map');
    // expect(wrapper.find('h4').text()).toBe('Projects');

    // find the projects heading based on its text

  });

  // make sure the copywright year is correct
  test('NavFooter copyright year is correct', () => {
    // stub the date function to return a known year

    // create a spy on getCurrentYear and check its return value
    // const getCurrentYearSpy = vi.spyOn(helpers, 'getCurrentYear').mockReturnValue(2025);

    const wrapper = mount(NavFooter, {
      global: {
        // plugins: [i18n],
        // stubs: {
        //   RouterLink: routerLinkStub,
        // },
      },
    });

    // console.log('setup keys:', Object.keys(wrapper.vm.$setup));
    // console.log('getCurrentYear:', wrapper.vm.$setup.getCurrentYear);
    // console.log('t:', wrapper.vm.$setup.t);

    const copyrightText = wrapper.find('.footer-logo > p').text();
    expect(copyrightText).toContain('2025');

    expect(wrapper.find('.nav-footer-banner').text())
      .toContain('View the source code for this website on GitHub.');

    // make sure the spy was called
    // expect(getCurrentYearSpy).toHaveBeenCalled();
  });

  //
  // TODO: Write more tests...
  //

});
