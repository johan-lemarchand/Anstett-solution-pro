const typerMarkup = `import Typewriter from 'typewriter-effect';

<Typewriter
  options={{
    loop: true,
    autoStart: true,
    strings: ['simplicité d'utilisation', 'transactions rapides', 'paiements sécurisés']
  }}
/>
`;

const replaceMeMarkup = `<span class="rotator-fade text-primary">simplicité d'utilisation,transactions rapides,paiements sécurisés</span>

<span class="rotator-zoom text-primary">simplicité d'utilisation,transactions rapides,paiements sécurisés</span>
`;

export { typerMarkup, replaceMeMarkup };
