import React, { useEffect, useState } from 'react';
import { TelegramUser } from '../@types/telegram-profile';
import { useContractStore } from '../stores/useContractStore';

interface TelegramLoginButtonProps {
  onAuth: (user: TelegramUser) => void;
  testUser?: TelegramUser;
}

const TelegramLoginButton: React.FC<TelegramLoginButtonProps> = ({ onAuth, testUser }) => {
  const [user, setUser] = useState<TelegramUser | null>(testUser || null);
  const { runner } = useContractStore();

  useEffect(() => {
    if (testUser) {
      setUser(testUser);
      onAuth(testUser);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'just_ride_dev_bot');
    script.setAttribute('data-size', 'medium');
    script.setAttribute('data-radius', '14');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');

    const container = document.getElementById('telegram-login-container');
    if (container) {
      container.appendChild(script);
    }

    window.onTelegramAuth = (user: TelegramUser) => {
      setUser(user);
      onAuth(user);
      if (container) {
        container.innerHTML = '';
      }
    };

    return () => {
      script.remove();
      delete window.onTelegramAuth;
    };
  }, [onAuth, testUser]);

  useEffect(() => {
    if (runner) {
      const container = document.getElementById('telegram-login-container');
      if (container) {
        container.innerHTML = '';
        delete window.onTelegramAuth;
      }
    }
  }, [runner]);

  return (
    <div>
      {!runner && (
        <div id="telegram-login-container"></div>
      )}
    </div>
  );
};

export default TelegramLoginButton;