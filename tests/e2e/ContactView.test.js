import { expect } from '@playwright/test';
import { test } from './fixtures/testFixture.js';

test.describe('ContactView - E2E Tests', () => {

  test('ContactView page should match image snapshot', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('ContactView should show NavBar', async ({ page }) => {
    await page.goto('/contact');

    const navBar = page.locator('.header');

    // navbar should have website logo
    await expect(navBar.getByRole('img'))
      .toHaveAttribute('src', /assets\/ogg-logo-long.*\.png/);

    // navbar should have 4 key page link items
    await expect(page.locator('.nav-links > a')).toHaveCount(4);

    // navbar should have links to key pages
    await expect(navBar.getByRole('link', { name: 'home' })).toBeVisible();
    await expect(navBar.getByRole('link', { name: 'projects' })).toBeVisible();
    await expect(navBar.getByRole('link', { name: 'about' })).toBeVisible();
    await expect(navBar.getByRole('link', { name: 'contact' })).toBeVisible();
  });

  test('ContactView should show correct page title', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByRole('heading', { name: /Contact/i })).toBeVisible();
  });

  test('ContactView should show two content-cards with text content', async ({ page }) => {
    await page.goto('/contact');
    const contentCard = page.locator('.content-card');

    await expect(contentCard).toHaveCount(2);

    const workContent = contentCard.nth(0);
    const youtubeContent = contentCard.nth(1);

    await expect(workContent).toBeVisible();
    await expect(workContent).toHaveCSS('background-color', 'rgb(35, 35, 35)'); // equals #232323
    await expect(workContent).toHaveCSS('border-radius', '50px');
    await expect(workContent.getByRole('heading', { name: 'Work Related' })).toBeVisible();
    await expect(workContent).toHaveText(/For work related inquiries or general questions/);
    await expect(workContent).toHaveText(/stay up to date with the projects I'm working on!/);

    await expect(youtubeContent).toBeVisible();
    await expect(youtubeContent).toHaveCSS('background-color', 'rgb(35, 35, 35)'); // equals #232323
    await expect(youtubeContent).toHaveCSS('border-radius', '50px');
    await expect(youtubeContent.getByRole('heading', { name: 'YouTube Related' })).toBeVisible();
    await expect(youtubeContent).toHaveText(/For any inquiries, business proposals/);
    await expect(youtubeContent).toHaveText(/accounts dedicated to YouTube\./);
  });

  test('ContactView should show project CTA button', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.getByRole('link', { name: 'View All Projects' }))
      .toHaveAttribute('href', '/projects');
  });

  test('ContactView should show section buttons', async ({ page }) => {
    await page.goto('/contact');

    const sectionButtons = page.locator('.section-button-container');

    await expect(sectionButtons.locator('.section-button')).toHaveCount(2);

    const sectionButton1 = page.locator('.section-button').nth(0);

    await expect(sectionButton1).toBeVisible();
    await expect(sectionButton1).toHaveText(/About Me/);
    await expect(sectionButton1).toHaveText(/Get to know more about me/);
    await expect(sectionButton1).toHaveAttribute('href', '/about-me');

    const sectionButton2 = page.locator('.section-button').nth(1);

    await expect(sectionButton2).toBeVisible();
    await expect(sectionButton2).toHaveText(/Contact Me/);
    await expect(sectionButton2).toHaveText(/Think I'd be a good fit for your team or project\?/);
    await expect(sectionButton2).toHaveAttribute('href', '/contact');
  });

  [
    { name: 'work section', nth: 0 },
    { name: 'youtube section', nth: 1 },
  ].forEach(({ name, nth }) => {
    test(`ContactView should show contact reveal button - ${name}`, async ({ page }) => {
      await page.goto('/contact');

      const contactButtonContainer = page.locator('.tarpit').nth(nth);
      const contactButton = contactButtonContainer.locator('a.cta-button');

      await expect(contactButtonContainer).toHaveText(/Email:/);
      await expect(contactButton).toBeVisible();
      await expect(contactButton).toHaveText(/click to reveal/i);
      await expect(contactButton).not.toHaveAttribute('href');
    });
  });

  [
    { name: 'work section', nth: 0, filename: 'work-tarpit.png' },
    { name: 'youtube section', nth: 1, filename: 'youtube-tarpit.png' },
  ].forEach(({ name, nth, filename }) => {
    // eslint-disable-next-line @stylistic/max-len
    test(`ContactView contact reveal button shows contact when clicked - ${name}`, async ({ page }) => {
      await page.goto('/contact');

      const contentSection = page.locator('.content-card').nth(nth);

      // check that the contact is hidden before button click
      await expect(contentSection.locator('.tarpit .cta-button')).toBeVisible();
      await expect(contentSection.locator('img.tarpit-img')).not.toBeVisible();

      // click the button to reveal the contact
      await contentSection.locator('.tarpit .cta-button').click();

      // check that the contact is revealed and button removed
      await expect(contentSection.locator('.tarpit .cta-button')).not.toBeVisible();
      await expect(contentSection.locator('img.tarpit-img')).toBeVisible();

      const srcRegex = new RegExp(`images/${filename}`);
      await expect(contentSection.locator('img.tarpit-img'))
        .toHaveAttribute('src', srcRegex);

      await expect(contentSection.locator('img.tarpit-img'))
        .toHaveAttribute('alt', 'Please DM me on social media if the contact is not showing.');

      await expect((await contentSection.locator('img.tarpit-img').boundingBox()).height).toBe(16);
    });
  });

  test('ContactView should show SocialLinks - work section', async ({ page }) => {
    await page.goto('/contact');

    const socialLinks = page.locator('.content-card').nth(0).locator('.social-links');

    await expect(socialLinks).toBeVisible();
    await expect(socialLinks.locator('p')).toHaveText('Social Links:');
    await expect(socialLinks.locator('a')).toHaveCount(3);

    const socialLink1 = socialLinks.locator('a').nth(0);
    const socialLink2 = socialLinks.locator('a').nth(1);
    const socialLink3 = socialLinks.locator('a').nth(2);

    await expect(socialLink1.locator('.sl-text')).toHaveText('linkedin.com/in/olivier-gg');
    await expect(socialLink1).toHaveAttribute('href', 'https://www.linkedin.com/in/olivier-gg/');
    await expect(socialLink1.locator('span.sl-icon-social')).toHaveAttribute('uk-icon', /linkedin/);

    await expect(socialLink2.locator('.sl-text')).toHaveText('@oliviergg');
    await expect(socialLink2).toHaveAttribute('href', 'https://twitter.com/oliviergg');
    await expect(socialLink2.locator('span.sl-icon-social')).toHaveAttribute('uk-icon', /x/);

    await expect(socialLink3.locator('.sl-text')).toHaveText('@olivier361');
    await expect(socialLink3).toHaveAttribute('href', 'https://github.com/olivier361');
    await expect(socialLink3.locator('span.sl-icon-social')).toHaveAttribute('uk-icon', /github/);
  });

  test('ContactView should show SocialLinks - youtube section', async ({ page }) => {
    await page.goto('/contact');

    const socialLinks = page.locator('.content-card').nth(1).locator('.social-links');

    await expect(socialLinks).toBeVisible();
    await expect(socialLinks.locator('p')).toHaveText('Social Links:');
    await expect(socialLinks.locator('a')).toHaveCount(4);

    const socialLink1 = socialLinks.locator('a').nth(0);
    const socialLink2 = socialLinks.locator('a').nth(1);
    const socialLink3 = socialLinks.locator('a').nth(2);
    const socialLink4 = socialLinks.locator('a').nth(3);

    await expect(socialLink1.locator('.sl-text')).toHaveText('youtube.com/@skullkid_gaming');
    await expect(socialLink1).toHaveAttribute('href', 'https://youtube.com/@skullkid_gaming');
    await expect(socialLink1.locator('span.sl-icon-social')).toHaveAttribute('uk-icon', /youtube/);

    await expect(socialLink2.locator('.sl-text')).toHaveText('@skullkidyt.bsky.social');
    await expect(socialLink2).toHaveAttribute('href', 'https://bsky.app/profile/skullkidyt.bsky.social');
    await expect(socialLink2.locator('span.sl-icon-social')).toHaveAttribute('uk-icon', /bluesky/);

    await expect(socialLink3.locator('.sl-text')).toHaveText('@SkullkidYT');
    await expect(socialLink3).toHaveAttribute('href', 'https://twitter.com/SkullkidYT');
    await expect(socialLink3.locator('span.sl-icon-social')).toHaveAttribute('uk-icon', /x/);

    await expect(socialLink4.locator('.sl-text')).toHaveText('@skullkid_gaming');
    await expect(socialLink4).toHaveAttribute('href', 'https://www.instagram.com/skullkid_gaming/');
    await expect(socialLink4.locator('span.sl-icon-social'))
      .toHaveAttribute('uk-icon', /instagram/);
  });

});
