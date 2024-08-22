import { blackA } from '@radix-ui/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat'],
      },
      colors: {
        ...blackA,
        background: 'var(--background)',
        overlay: 'var(--overlay)',
        foreground: 'var(--foreground)',
        'menu-bg': 'var(--menu-bg)',
        'menu-foreground': 'var(--menu-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        'primary-hover': 'var(--primary-hover)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-disabled': 'var(--text-disabled)',
        error: 'var(--error)',
        success: 'var(--success)',
        alert: 'var(--alert)',
        info: 'var(--info)',
        disabled: 'var(--disabled)',
        border: 'var(--border)',
        'table-even': 'var(--table-even)',

        'appointment-created-text': 'var(--appointment-created-text)',
        'appointment-created-bg': 'var(--appointment-created-bg)',

        'appointment-confirmed-text': 'var(--appointment-confirmed-text)',
        'appointment-confirmed-bg': 'var(--appointment-confirmed-bg)',

        'appointment-suspended-text': 'var(--appointment-suspended-text)',
        'appointment-suspended-bg': 'var(--appointment-suspended-bg)',

        'appointment-appeared-text': 'var(--appointment-appeared-text)',
        'appointment-appeared-bg': 'var(--appointment-appeared-bg)',

        'appointment-not-appeared-text': 'var(--appointment-not-appeared-text)',
        'appointment-not-appeared-bg': 'var(--appointment-not-appeared-bg)',

        'client-type-fixed-text': 'var(--client-type-fixed-text)',
        'client-type-fixed-bg': 'var(--client-type-fixed-bg)',

        'appointment-frequency-weekly-text':
          'var(--appointment-frequency-weekly-text)',
        'appointment-frequency-weekly-bg':
          'var(--appointment-frequency-weekly-bg)',

        'appointment-frequency-biweekly-text':
          'var(--appointment-frequency-biweekly-text)',
        'appointment-frequency-biweekly-bg':
          'var(--appointment-frequency-biweekly-bg)',

        'appointment-frequency-detached-text':
          'var(--appointment-frequency-detached-text)',
        'appointment-frequency-detached-bg':
          'var(--appointment-frequency-detached-bg)',

        'appointment-frequency-first_contact_provider-text':
          'var(--appointment-frequency-first_contact_provider-text)',
        'appointment-frequency-first_contact_provider-bg':
          'var(--appointment-frequency-first_contact_provider-bg)',

        'appointment-frequency-first_contact_client-text':
          'var(--appointment-frequency-first_contact_client-text)',
        'appointment-frequency-first_contact_client-bg':
          'var(--appointment-frequency-first_contact_client-bg)',

        'appointment-period-text': 'var(--appointment-period-text)',
        'appointment-period-bg': 'var(--appointment-period-bg)',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
