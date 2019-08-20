// for mobile nav accrodeon
const afterSubNavTier2Transition = event => {
        if (event.target === event.currentTarget) {
          newActiveSubNavTier2.scrollIntoView({ behavior: 'smooth' });
          event.currentTarget.removeEventListener('transitionend', afterSubNavTier2Transition);
        }
      };

      newActiveSubNavTier2ItemElement.addEventListener('transitionend', afterSubNavTier2Transition);