import { suite, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import RelatedLinks from '@/components/RelatedLinks.vue';

suite('RelatedLinks - Component Tests', () => {

  test('RelatedLinks renders correctly', () => {
    const wrapper = mount(RelatedLinks, {
      props: {
        linkObjectsList: [
          {
            url: '/my-url',
            teaserText: 'Amazing thing here',
          },
          {
            url: '/anotherLink',
            teaserText: 'Cool!',
          },
        ],
      },
    });

    // Test that the component renders
    expect(wrapper.find('div.related-links').exists()).toBeTruthy();
    expect(wrapper.find('p').text()).toBe('Related Links:');
    expect(wrapper.findAll('.rl-text').length).toBe(2);
    expect(wrapper.findAll('.rl-url').length).toBe(2);

    // Test that all the links are rendered
    const links = wrapper.findAll('a');
    expect(links.length).toBe(2);

    expect(links[0].text()).toMatch(/^Amazing thing here\s+\(\/my-url\)$/);
    expect(links[0].attributes('href')).toBe('/my-url');
    expect(links[0].attributes('target')).toBe('_blank');
    expect(links[0].find('.rl-icon').attributes('uk-icon')).toContain('icon: link-external');

    expect(links[1].text()).toMatch(/^Cool!\s+\(\/anotherLink\)$/);
    expect(links[1].attributes('href')).toBe('/anotherLink');
    expect(links[0].attributes('target')).toBe('_blank');
    expect(links[1].find('.rl-icon').attributes('uk-icon')).toContain('icon: link-external');
  });

  test('RelatedLinks opens links in a new tab by default', () => {
    const wrapper = mount(RelatedLinks, {
      props: {
        linkObjectsList: [
          {
            url: '/my-url',
            teaserText: 'Amazing thing here',
          },
          {
            url: '/anotherLink',
            teaserText: 'Cool!',
          },
        ],
      },
    });

    const links = wrapper.findAll('a');
    expect(links[0].attributes('target')).toBe('_blank');
    expect(links[1].attributes('target')).toBe('_blank');

    expect(links[0].find('.rl-icon').exists()).toBeTruthy();
    expect(links[1].find('.rl-icon').exists()).toBeTruthy();
  });

  test('RelatedLinks opens links in a new tab - true', () => {
    const wrapper = mount(RelatedLinks, {
      props: {
        linkObjectsList: [
          {
            url: '/my-url',
            teaserText: 'Amazing thing here',
          },
          {
            url: '/anotherLink',
            teaserText: 'Cool!',
            isNewTab: true,
          },
        ],
      },
    });

    const links = wrapper.findAll('a');
    expect(links[0].attributes('target')).toBe('_blank');
    expect(links[1].attributes('target')).toBe('_blank');

    expect(links[0].find('.rl-icon').exists()).toBeTruthy();
    expect(links[1].find('.rl-icon').exists()).toBeTruthy();
  });

  test('RelatedLinks opens links in a new tab - false', () => {
    const wrapper = mount(RelatedLinks, {
      props: {
        linkObjectsList: [
          {
            url: '/my-url',
            teaserText: 'Amazing thing here',
          },
          {
            url: '/anotherLink',
            teaserText: 'Cool!',
            isNewTab: false,
          },
        ],
      },
    });

    const links = wrapper.findAll('a');
    expect(links[0].attributes('target')).toBe('_blank');
    expect(links[1].attributes('target')).toBe('_self');

    expect(links[0].find('.rl-icon').exists()).toBeTruthy();
    expect(links[1].find('.rl-icon').exists()).toBeFalsy();
  });

  test('RelatedLinks with no teaserText should not have parentheses around url', () => {
    const wrapper = mount(RelatedLinks, {
      props: {
        linkObjectsList: [
          {
            url: '/my-url',
          },
          {
            url: '/anotherLink',
            teaserText: 'Cool!',
          },
        ],
      },
    });

    const links = wrapper.findAll('a');
    expect(links[0].text()).toBe('/my-url');
    expect(links[0].text()).not.toMatch(/\(|\)/);

    expect(links[1].text()).toMatch(/^Cool!\s+\(\/anotherLink\)$/);

    expect(wrapper.findAll('.rl-icon').length).toBe(2);
  });

  test('RelatedLinks with long URLs should be truncated', () => {
    const wrapper = mount(RelatedLinks, {
      props: {
        linkObjectsList: [
          {
            url: '/my-really-long-url-that-could-really-use-some-truncation-for-readability',
            teaserText: 'Amazing thing here',
          },
          {
            url: '/nonTruncatedLink',
            teaserText: 'Cool!',
          },
          {
            url: '/anotherLinkThatShouldBeTruncatedButThisTimeItHasNoTeaserText',
          },
        ],
      },
    });

    // verify that display text for url is truncated
    const links = wrapper.findAll('.rl-url');
    expect(links[0].text()).toBe('/my-really-long-url-that-could-really-use-some-tru...');
    expect(links[1].text()).toBe('/nonTruncatedLink');
    expect(links[2].text()).toBe('/anotherLinkThatShouldBeTruncatedButThisTimeItHasN...');

    // verify truncates at 50 characters + 3 dots
    expect(links[0].text()).toHaveLength(50 + 3);
    expect(links[1].text()).toHaveLength('/nonTruncatedLink'.length);
    expect(links[2].text()).toHaveLength(50 + 3);

    // verify that the actual href url not truncated
    const actualLinks = wrapper.findAll('a');
    expect(actualLinks[0].attributes('href'))
      .toBe('/my-really-long-url-that-could-really-use-some-truncation-for-readability');
    expect(actualLinks[1].attributes('href'))
      .toBe('/nonTruncatedLink');
    expect(actualLinks[2].attributes('href'))
      .toBe('/anotherLinkThatShouldBeTruncatedButThisTimeItHasNoTeaserText');
  });

});
