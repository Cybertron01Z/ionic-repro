import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ch.css.mycss.repro',
  appName: 'identity-vault-repro',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
