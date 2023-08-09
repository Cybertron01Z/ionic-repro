# What to do

```bash
npm install
npm run build
npx cap sync ios
npx cap open ios
```

In the Xcode change the team and create the provisioning profile that works for you.

# The error
Request the Biometric Prompt with clicking on the Show Prompt. Deny the permission with clicking on Don't allow.
In my opinion the isBiometricAllowed should now switch to denied. But it does not it stays at prompt.
