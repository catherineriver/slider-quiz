import Likely from 'cmtt-likely';

import { makeElement } from './dom';
import * as Analytics from './analytics';

const CSS = {
  likely: 'likely',
  likelyCustom: 'likely--custom',
};

export const init = () => {
  Likely.initate();
  console.log('init');
};

/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer - likely container will be placed here
 * @param {Object} set - object with optional params (title, url, twitter)
 */
export const make = (parentContainer, set = {}, typeShowing) => {
  const likelyContainer = makeElement('div', [CSS.likely, CSS.likelyCustom]);
  const socials = ['facebook', 'twitter', 'vkontakte'];

  socials.forEach((social) => {
    const button = makeElement('div', social);

    if (social === 'facebook') button.innerHTML = 'Поделиться';

    button.addEventListener('click', () => {
      Analytics.sendEvent(typeShowing ? `${typeShowing} — Share ${social}` : `Share ${social}`);
    });

    likelyContainer.appendChild(button);
  });

  parentContainer.appendChild(likelyContainer);

  if (set.url) likelyContainer.dataset.url = set.url;
  if (set.twitter) likelyContainer.dataset.twitter = set.twitter;
  if (set.title) likelyContainer.dataset.title = set.title;

  init();
};
