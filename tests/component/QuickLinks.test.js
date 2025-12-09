import { suite, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import { createRouter, createWebHistory } from 'vue-router';
import QuickLinks from '@/components/QuickLinks.vue';

suite('QuickLinks - Component Tests', () => {

  // Stub the RouterLink component used inside QuickLinks
  // to avoid Vue Router dependency for testing while preserving
  // the route it was supposed to link to.
  const routerLinkStub = {
    props: ['to'],
    template: '<a :href="typeof to === \'string\' ? to : to.path"><slot /></a>',
  };

  test('QuickLinks renders correctly', () => {
    const wrapper = mount(QuickLinks, {
      global: {
        stubs: {
          RouterLink: routerLinkStub,
        },
      },
      props: {
        linkObjectsList: [
          {
            buttonText: 'link only',
            routeUrl: '#anchor-link',
          },
          {
            buttonText: 'both',
            routeUrl: '/my-url',
            onClickFunction: () => { return; },
          },
          {
            buttonText: 'function only',
            onClickFunction: () => { return; },
          },
        ],
      },
    });

    // Test that the component renders
    expect(wrapper.find('.quick-links').exists()).toBeTruthy();
    expect(wrapper.find('h3').text()).toBe('Quick Links');
    expect(wrapper.findAll('.ql-button').length).toBe(3);

    // Test that all the links are rendered
    const links = wrapper.findAll('a');
    expect(links.length).toBe(3);

    expect(links[0].text()).toBe('link only');
    expect(links[0].attributes('href')).toBe('#anchor-link');

    expect(links[1].text()).toBe('both');
    expect(links[1].attributes('href')).toBe('/my-url');

    expect(links[2].text()).toBe('function only');
    expect(links[2].attributes('href')).toBeUndefined();
  });

  test('QuickLinks routeUrl prop test - correct button click behavior', async () => {
    // Creating a dummy router to spy on.
    const routes = [{ path: '/', component: { template: '<div />' } }];
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });

    // Spy on calls to router.push to track route navigation
    const pushSpy = vi.spyOn(router, 'push');

    // Mock the onClickFunction functions
    const mockClickFuntion1 = vi.fn();
    const mockClickFuntion2 = vi.fn();

    const wrapper = mount(QuickLinks, {
      global: {
        plugins: [router],
        stubs: {
          // Disable the global RouterLink stub to use the actual real
          // RouterLink from our real router created above for this test.
          RouterLink: false,
        },
      },
      props: {
        linkObjectsList: [
          {
            // having only a link means it should navigate
            // to that link when clicked
            buttonText: 'link only',
            routeUrl: '#anchor-link',
          },
          {
            // having both a link and a function means
            // navigation should be prevented and the function should be called
            // on click. The link's purpose is only to show a hover preview in browser
            buttonText: 'both',
            routeUrl: '/my-url',
            onClickFunction: mockClickFuntion1,
          },
          {
            // having only a function means the function should be called
            // on click and no navigation should happen
            buttonText: 'function only',
            onClickFunction: mockClickFuntion2,
          },
        ],
      },
    });

    await router.isReady();

    // First, check that each button is set with the correct link
    const links = wrapper.findAll('.ql-button');
    expect(links.length).toBe(3);

    expect(links[0].attributes('href')).toMatch(/#anchor-link$/);
    expect(links[1].attributes('href')).toMatch(/\/my-url$/);
    expect(links[2].attributes('href')).toBeUndefined();

    expect(links[0].text()).toBe('link only');
    expect(links[1].text()).toBe('both');
    expect(links[2].text()).toBe('function only');

    // Clicking the 'link only' button should navigate router to the anchor link
    await links[0].trigger('click');

    // Assert router.push was called with expected path
    expect(pushSpy).toHaveBeenCalledWith('#anchor-link');
    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(mockClickFuntion1).not.toHaveBeenCalled();
    expect(mockClickFuntion2).not.toHaveBeenCalled();
    pushSpy.mockClear();

    // Clicking the 'both' button should not navigate to link but call its onClickFunction
    await links[1].trigger('click');

    expect(pushSpy).not.toHaveBeenCalled();
    expect(mockClickFuntion1).toHaveBeenCalledOnce();
    expect(mockClickFuntion2).not.toHaveBeenCalled();
    mockClickFuntion1.mockClear();
    mockClickFuntion2.mockClear();
    pushSpy.mockClear();

    // Clicking the 'function only' button should just call its onClickFunction
    await links[2].trigger('click');
    expect(pushSpy).not.toHaveBeenCalled();
    expect(mockClickFuntion1).not.toHaveBeenCalled();
    expect(mockClickFuntion2).toHaveBeenCalledOnce();
    mockClickFuntion1.mockClear();
    mockClickFuntion2.mockClear();
    pushSpy.mockClear();
  });

  test('QuickLinks onClickFunction prop test', async () => {
    const mockClickFuntion1 = vi.fn();
    const mockClickFuntion2 = vi.fn();

    const wrapper = mount(QuickLinks, {
      global: {
        stubs: {
          RouterLink: routerLinkStub,
        },
      },
      props: {
        linkObjectsList: [
          {
            buttonText: 'link only',
            routeUrl: '#anchor-link',
          },
          {
            buttonText: 'both',
            routeUrl: '/my-url',
            onClickFunction: mockClickFuntion1,
          },
          {
            buttonText: 'function only',
            onClickFunction: mockClickFuntion2,
          },
        ],
      },
    });

    const links = wrapper.findAll('.ql-button');
    expect(links.length).toBe(3);

    await links[0].trigger('click');
    expect(mockClickFuntion1).not.toHaveBeenCalled();
    expect(mockClickFuntion2).not.toHaveBeenCalled();

    await links[1].trigger('click');
    expect(mockClickFuntion1).toHaveBeenCalledOnce();
    expect(mockClickFuntion2).not.toHaveBeenCalled();

    await links[2].trigger('click');
    expect(mockClickFuntion1).toHaveBeenCalledOnce();
    expect(mockClickFuntion2).toHaveBeenCalledOnce();
  });

  test('QuickLinks heading prop test', () => {
    const wrapper = mount(QuickLinks, {
      global: {
        stubs: {
          RouterLink: routerLinkStub,
        },
      },
      props: {
        linkObjectsList: [
          {
            buttonText: 'link only',
            routeUrl: '#anchor-link',
          },
        ],
        heading: 'Custom Title',
      },
    });

    expect(wrapper.find('h3').text()).toBe('Custom Title');
  });

  test('QuickLinks maxWidth prop test', () => {
    const width = '400px';

    const wrapper = mount(QuickLinks, {
      global: {
        stubs: {
          RouterLink: routerLinkStub,
        },
      },
      props: {
        linkObjectsList: [
          {
            buttonText: 'link only',
            routeUrl: '#anchor-link',
          },
          {
            buttonText: 'both',
            routeUrl: '/my-url',
            onClickFunction: () => { return; },
          },
          {
            buttonText: 'function only',
            onClickFunction: () => { return; },
          },
        ],
        maxWidth: width,
      },
    });

    expect(wrapper.find('.quick-links').attributes('style'))
      .toContain('max-width: ' + width + ';');
  });

  test('QuickLinks isSideScrollMobile prop test - default (true)', () => {
    const wrapper = mount(QuickLinks, {
      global: {
        stubs: {
          RouterLink: routerLinkStub,
        },
      },
      props: {
        linkObjectsList: [
          {
            buttonText: 'link only',
            routeUrl: '#anchor-link',
          },
        ],
      },
    });

    expect(wrapper.find('.quick-links').classes()).toContain('ql-side-scroll');
  });

  test('QuickLinks isSideScrollMobile prop test - false', () => {
    const wrapper = mount(QuickLinks, {
      global: {
        stubs: {
          RouterLink: routerLinkStub,
        },
      },
      props: {
        linkObjectsList: [
          {
            buttonText: 'link only',
            routeUrl: '#anchor-link',
          },
        ],
        isSideScrollMobile: false,
      },
    });

    expect(wrapper.find('.quick-links').classes()).not.toContain('ql-side-scroll');
  });

  test('QuickLinks showSideScrollGradient prop test - default (true)', () => {
    const wrapper = mount(QuickLinks, {
      global: {
        stubs: {
          RouterLink: routerLinkStub,
        },
      },
      props: {
        linkObjectsList: [
          {
            buttonText: 'link only',
            routeUrl: '#anchor-link',
          },
        ],
      },
    });

    // there should be two .ql-gradient elements
    expect(wrapper.findAll('.quick-links .ql-gradient').length).toBe(2);
    expect(wrapper.find('.ql-gradient.left').exists()).toBeTruthy();
    expect(wrapper.find('.ql-gradient.right').exists()).toBeTruthy();
  });

  test('QuickLinks showSideScrollGradient prop test - false', () => {
    const wrapper = mount(QuickLinks, {
      global: {
        stubs: {
          RouterLink: routerLinkStub,
        },
      },
      props: {
        linkObjectsList: [
          {
            buttonText: 'link only',
            routeUrl: '#anchor-link',
          },
        ],
        showSideScrollGradient: false,
      },
    });

    // there should be no .ql-gradient elements
    expect(wrapper.findAll('.quick-links .ql-gradient').length).toBe(0);
    expect(wrapper.find('.ql-gradient.left').exists()).toBeFalsy();
    expect(wrapper.find('.ql-gradient.right').exists()).toBeFalsy();
  });

});
