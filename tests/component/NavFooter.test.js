import { suite, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import NavFooter from '@/components/NavFooter.vue';

suite('NavFooter - Component Tests', () => {

  // Mock the RouterLink component used inside NavFooter
  // to avoid Vue Router dependency for testing while preserving
  // the route it was supposed to link to.
  const customRouterLinkStub = {
    props: ['to'],
    template: '<a :href="typeof to === \'string\' ? to : to.path"><slot /></a>',
  };

  test('NavFooter renders correctly', () => {
    const wrapper = mount(NavFooter);

    // Test that key component tags render
    expect(wrapper.find('.nav-footer').exists()).toBeTruthy();
    expect(wrapper.find('.nav-footer-banner').exists()).toBeTruthy();

    // Check that all section headings are present
    const headers = wrapper.findAll('h4');
    expect(headers).toHaveLength(3);
    expect(headers.find((h) => h.text() === 'Site Map')).toBeTruthy();
    expect(headers.find((h) => h.text() === 'Projects')).toBeTruthy();
    expect(headers.find((h) => h.text() === 'Socials')).toBeTruthy();

    // Check that the logo is present
    expect(wrapper.find('a > img').attributes('src')).toMatch(/ogg-logo-long.*\.png/);

    // Check that the contact button is present
    const contactButton = wrapper.find('.cta-button');
    expect(contactButton.exists()).toBeTruthy();
    expect(contactButton.text()).toBe('Contact Me');
    expect(contactButton.attributes('href')).toBe('/contact');

    // Check that the copyright text is present
    const copyrightText = wrapper.find('.footer-logo > p').text();
    expect(copyrightText)
      .toMatch(/Copyright © \d{4}\nOlivier Gervais-Gougeon\.\nAll rights reserved\./);
  });

  test('NavFooter copyright year is correct', () => {
    // mock the system date for testing
    const currentYearString = '2123';
    const mockDate = new Date(currentYearString, 2, 14); // March 14, 2123

    vi.useFakeTimers();
    vi.setSystemTime(mockDate);

    // console.log(`getMockedSystemTime(): ${vi.getMockedSystemTime()}`);

    const wrapper = mount(NavFooter);

    const copyrightText = wrapper.find('.footer-logo > p').text();

    const regex = new RegExp(
      `Copyright © ${currentYearString}\\nOlivier Gervais-Gougeon\\.\\nAll rights reserved\\.`,
    );
    expect(copyrightText).toMatch(regex);

    // restore the real system time for other tests
    vi.useRealTimers();
  });

  test('NavFooter Site Map links are correct', () => {
    const wrapper = mount(NavFooter, {
      global: {
        stubs: {
          RouterLink: customRouterLinkStub,
        },
      },
    });

    // Check that the heading is correct
    expect(wrapper.find('.footer-site-map > h4').text()).toBe('Site Map');

    // Check that all links are present
    const links = wrapper.findAll('.footer-site-map > a');

    expect(links).toHaveLength(4);

    expect(links.find((l) => l.text() === 'Home').attributes('href')).toBe('/');
    expect(links.find((l) => l.text() === 'Projects').attributes('href')).toBe('/projects');
    expect(links.find((l) => l.text() === 'About').attributes('href')).toBe('/about-me');
    expect(links.find((l) => l.text() === 'Contact').attributes('href')).toBe('/contact');
  });

  test('NavFooter Projects links are correct', () => {
    const wrapper = mount(NavFooter, {
      global: {
        stubs: {
          RouterLink: customRouterLinkStub,
        },
      },
    });

    // Check that the heading is correct
    expect(wrapper.find('.footer-key-sections > h4').text()).toBe('Projects');

    // Check that all links are present
    const links = wrapper.findAll('.footer-key-sections > a');

    expect(links).toHaveLength(4);

    expect(links.find((l) => l.text() === 'Game Development').attributes('href'))
      .toBe('/projects#game-development');
    expect(links.find((l) => l.text() === 'Software & App Development').attributes('href'))
      .toBe('/projects#software-development');
    expect(links.find((l) => l.text() === 'Video Editing & Production').attributes('href'))
      .toBe('/projects#video-editing');
    expect(links.find((l) => l.text() === 'Graphic Design').attributes('href'))
      .toBe('/projects#graphic-design');
  });

  test('NavFooter Socials links are correct', () => {
    const expectedSocials = [
      { textRegex: /^LinkedIn$/, icon: 'linkedin', href: 'https://www.linkedin.com/in/olivier-gg/' },
      { textRegex: /^Twitter\u00A0\/\u00A0X$/, icon: 'x', href: 'https://twitter.com/oliviergg' }, // \u00A0 is a non-breaking space
      { textRegex: /^GitHub$/, icon: 'github', href: 'https://github.com/olivier361' },
      { textRegex: /^YouTube$/, icon: 'youtube', href: 'https://youtube.com/@skullkid_gaming' },
    ];

    const wrapper = mount(NavFooter);

    // Check that the heading is correct
    expect(wrapper.find('.footer-social-links > h4').text()).toBe('Socials');

    // Check that all links are present
    const socialLinks = wrapper.findAll('.footer-social-links li');

    expect(socialLinks).toHaveLength(expectedSocials.length);

    expectedSocials.forEach((expected) => {
      // regex match to find the linkItem
      const linkItem = socialLinks.find((l) => expected.textRegex.test(l.text()));

      if (!linkItem) {
        throw new Error(`Could not find a matching social link for: "${expected.textRegex}"`);
      }

      // make sure a link with the correct text, href, and icon was found
      expect(linkItem).toBeTruthy(); // make sure a link with the expected text was found
      expect(linkItem.find('a').attributes('href')).toBe(expected.href);
      expect(linkItem.find('span').attributes('uk-icon')).toContain(`icon: ${expected.icon}`);
      expect(linkItem.find('.sl-icon-external').exists()).toBeFalsy(); // no external link icon
    });
  });

  test('NavFooter banner text and link is correct', () => {
    const wrapper = mount(NavFooter);

    const banner = wrapper.find('.nav-footer-banner');

    expect(banner.exists()).toBeTruthy();
    expect(banner.text()).toBe('View the source code for this website on GitHub.');
    expect(banner.find('a > span').text()).toBe('GitHub');
    expect(banner.find('a').attributes('href')).toBe('https://github.com/olivier361/portfolio-website-vue');
    expect(banner.find('a').attributes('target')).toBe('_blank'); // opens in new tab
  });

});
